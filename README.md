# GraphQL backend

## Getting started

To get the Node server running locally:

 - Clone this repo
 - `docker-compose build` to build the docker image
 - `docker-compose up` to start the docker image

## Application structure

`app.js` - This is the entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the graphQL routes and mongoose models we'll be using in the application.

`models/` - This folder contains the schema definitions for our Mongoose models.

`schema/` - his folder contains the graphQL schema definitions.
