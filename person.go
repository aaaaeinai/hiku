package main

import (
	"encoding/json"
	"net/http"
)

// Person ...
type Person struct {
	ID        string   `json:"id,omitempty"`
	Firstname string   `json:"firstname,omitempty"`
	Lastname  string   `json:"lastname,omitempty"`
	Address   *Address `json:"address,omitempty"`
}

// Address ...
type Address struct {
	City  string `json:"city,omitempty"`
	State string `json:"state,omitempty"`
}

var people []Person

// GetPeople ...
func GetPeople(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(people)
}

// GetPerson ...
func GetPerson(w http.ResponseWriter, r *http.Request) {}

// CreatePerson ...
func CreatePerson(w http.ResponseWriter, r *http.Request) {}

// DeletePerson ...
func DeletePerson(w http.ResponseWriter, r *http.Request) {}
