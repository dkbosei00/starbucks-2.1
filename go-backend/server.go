package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	ID        primitive.ObjectID `bson:"_id"`
	FirstName string             `bson:"firstName,omitempty"`
	LastName  string             `bson:"lastName,omitempty"`
	Email     string             `bson:"email,omitempty"`
	Password  string             `bson:"password"`
}

func main() {

	// Initialise router
	router := mux.NewRouter()

	// Define register API
	router.HandleFunc("/users", GetUsersHandler).Methods(http.MethodGet)
	router.HandleFunc("/register", RegisterHandler).Methods(http.MethodPost)
	router.HandleFunc("/login", loginHandler).Methods(http.MethodPost)

	fmt.Println("Server is running on port 8080")

	if err := http.ListenAndServe(":8080", router); err != nil {
		log.Fatal(err)
	}
}

func GetUsersHandler(w http.ResponseWriter, r *http.Request) {

	client := Connect()

	// Set the content type of the response to JSON
	w.Header().Set("Content-Type", "application/json")

	// Call client from MongoDB
	coll := client.Database("ecomernyt").Collection("users")

	// Empty filter. Return all
	filter := bson.D{{}}

	cursor, err := coll.Find(context.TODO(), filter)
	if err != nil {
		panic(err)
	}

	defer cursor.Close(context.TODO())

	// Loop through results from cursor and write in response
	for cursor.Next(context.TODO()) {
		var user User
		if err := cursor.Decode(&user); err != nil {
			panic(err)
		}

		output, err := json.MarshalIndent(user, "", "    ")
		if err != nil {
			panic(err)
		}
		fmt.Fprint(w, string(output))
	}

	if err := cursor.Err(); err != nil {
		panic(err)
	}
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	// Set the content type of the response to JSON
	w.Header().Set("Content-Type", "application/json")

	client := Connect()

	var user User
	json.NewDecoder(r.Body).Decode(&user)
	user.Password = getHash([]byte(user.Password))
	coll := client.Database("ecomernyt").Collection("users")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	result, err := coll.InsertOne(ctx, user)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{"message":"` + err.Error() + `"}`))
		return
	}
	json.NewEncoder(w).Encode(result)
}

func getHash(pwd []byte) string {
	hash, err := bcrypt.GenerateFromPassword(pwd, 10)
	if err != nil {
		log.Fatal(err)
	}
	return string(hash)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	// Set the content type of the response to JSON
	w.Header().Set("Content-Type", "application/json")

	// Find .env
	if err := godotenv.Load(".env"); err != nil {
		log.Fatalf("Error loading env file: %s", err)
	}

	// Get value
	secret := os.Getenv("JWTPRIVATEKEY")

	client := Connect()

	var user User
	var dbuser User

	json.NewDecoder(r.Body).Decode(&user)
	coll := client.Database("ecomernyt").Collection("users")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	if err := coll.FindOne(ctx, bson.M{"email": user.Email}).Decode(&dbuser); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{"message":"` + err.Error() + `"}`))
		return
	}

	userPass := []byte(user.Password)
	dbPass := []byte(dbuser.Password)

	passErr := bcrypt.CompareHashAndPassword(dbPass, userPass)
	if passErr != nil {
		log.Println(passErr)
		w.Write([]byte(`{"response":"Wrong Password!"}`))
		return
	}

	jwtToken, err := generateJWT([]byte(secret))
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{"message":"` + err.Error() + `"}`))
		return
	}
	w.Write([]byte(`{"token":"` + jwtToken + `"}`))
}

func generateJWT(secretKey []byte) (string, error) {

	token := jwt.New(jwt.SigningMethodHS256)
	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		log.Println("Error in JWT token generation")
		return "", err
	}
	return tokenString, nil
}
