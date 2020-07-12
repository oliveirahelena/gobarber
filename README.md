# gobarber

## About
This repository contains a REST API in Node.js as a back-end, an application in ReactJS as a front-end and a mobile app in React Native, all using TypeScript.

This is the GoBarber application, which is a service scheduling platform for owners of barber shops or beauty salons. In this application, the user is able to access all registered service providers through a mobile application, with which the user can choose a provider to book their appointment.

The service provider, through a web interface, is able to access all their schedules, being able to see all those who are busy as well as those that are available.

Node.js: it is a REST API that does all the CRUD of the application, data persistence, exception handling and that serves data for both the front-end and the mobile.

ReactJS: is a web page on which the service provider has access to the entire schedule of appointments.

React Native: is an application in which the user has access to all service providers registered in the App, with this he can make an appointment that the provider of preference.

## Getting Started

### Prerequisites:
- Have Git to clone the project.
- Have Node.js installed.
- Have Docker running a PostgreSQL container.
  - You need to have docker installed and then run: 
  
  `docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
  - Create the database gostack_gobarber
- An iOS or Android device or emulator

### Init the app
After clone the repo, execute this steps:
  1. `yarn install`
  2. `yarn server:typeorm migration:run`
  3. `yarn dev:web`