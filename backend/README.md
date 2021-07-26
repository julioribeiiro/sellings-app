# Sellings App
## Spring Boot, Postgres, JPA, Rest API Tutorial

Build Restful CRUD API for a simple dashboard application using Spring Boot, Postgres and JPA.
Requirements

    Java - 1.8.x
    Maven - 3.x.x

Setup

Clone the application

    git clone git@github.com:julioribeiiro/sellings-app.git

Build Postgres Server in Docker

    docker run --name postgres-server -dp 5432:5432 -e POSTGRES_PASSWORD=docker postgres

Build and run the app using maven

    mvn spring-boot:run

The app will start running at http://localhost:8080.

Explore Rest APIs Swagger
http://localhost:8080/swagger

You can test them using postman or any other rest client.
