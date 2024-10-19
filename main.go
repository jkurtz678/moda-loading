package main

import (
	"log"
	"net/http"
)

func main() {
	// Serve static files from the "static" directory
	http.Handle("/", http.FileServer(http.Dir("./static")))

	// Start the server on port 8080
	log.Println("Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
