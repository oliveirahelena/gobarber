# gobarber

## Getting Started

### Prerequisites:
- You need to have docker installed and then run: 

docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres 

### Init the app
After clone the repo, execute this steps:
1. yarn install
2. yarn server:typeorm migration:run
3. yarn dev:web