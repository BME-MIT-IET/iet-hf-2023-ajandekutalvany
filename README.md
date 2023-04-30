[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/coREwzrI)

## Development

## Setup

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Yarn](https://yarnpkg.com/en/docs/install)
3. Install [PostgreSQL](https://www.postgresql.org/download/)

## Running the app

### Backend

In the backend directory copy the `.env.example` file to `.env` and fill in the values, if needed
```bash
cd backend
cp .env.example .env
#Install dependencies
yarn install
# Generate the prisma client
yarn db:generate
```

Migrate the database, only needs to be done when the database schema changes
```bash
yarn db:migrate:dev
```

Start the backend
```bash
yarn start:dev
```

---

### Frontend

```bash
cd frontend
```

Start the React developer server
```bash
yarn start
```
