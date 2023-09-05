# Fine Wine Collections

This API has a collection of some of the classic Cinema and TV Shows. This backend API was created in light of using it as a service for a client-side application which is hosted on `https://main.dp314ml7x5rm3.amplifyapp.com/` using AWS. <br>
I'll keep adding more with time. <br>
Client-Side Source Code: `https://github.com/g00d-kid-10/fine-wine-client.git`
## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)

## Installation

1. Clone the repository: `https://github.com/g00d-kid-10/fine-wine-server.git`

2. Install dependencies: `npm install`

## Configuration

1. Create a configuration file of environment variables: `config.env` <br>
Specify any free PORT in your local machine. Enter the MongoDB Cluster URI mentioned below to establish a connection with the database cluster.
```
PORT=4000
MONGO_URI=mongodb+srv://newuser:gnUjYmE2vVrVXY6Q@cluster0.xvgnxah.mongodb.net/?retryWrites=true&w=majority
```

2. Start the application: `npm run start`
3. Visit for Movies http://localhost:4000/movies
4. Visit for TV Shows http://localhost:4000/tvshows