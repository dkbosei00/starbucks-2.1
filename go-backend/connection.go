package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Connect() *mongo.Client {
	// Find .env
	if err := godotenv.Load(".env"); err != nil {
		log.Fatalf("Error loading env file: %s", err)
	}

	// Get value
	db := os.Getenv("DB")

	// Connect to the database
	clientOptions := options.Client().ApplyURI(db)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// Disconnect db when func stops (clean up)
	// defer func() {
	// 	if err := client.Disconnect(context.TODO()); err != nil {
	// 		panic(err)
	// 	}
	// }()

	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Connected to db!")
	}

	return client
}
