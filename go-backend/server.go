package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID        primitive.ObjectID `bson:"_id"`
	FirstName string             `bson:"firstName,omitempty"`
	LastName  string             `bson:"lastName,omitempty"`
	Email     string             `bson:"email,omitempty"`
}

func main() {
	// Connect()

	// Initialise router
	router := mux.NewRouter()

	// Define register API
	router.HandleFunc("/users", GetUsersHandler)

	fmt.Println("Server is running on port 8080")

	if err := http.ListenAndServe(":8080", router); err != nil {
		log.Fatal(err)
	}
}

func GetUsersHandler(w http.ResponseWriter, r *http.Request) {

	client := Connect()

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
