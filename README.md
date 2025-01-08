# ShortenIt

link shortener peer programming project using MERN stack

## Development Plan

### Tech Stack

MongoDB

ExpressJS

ReactJS

NodeJS

### User Requirements

Users must be able to: 

- Create an Account, with their details securly stored in a db
- Log-in to their Account
- Create/View/Edit/Delete shortened links associated with their user account
- Be able to share links and have anyone who uses the link redirected to the required website

### Backend Requirements

MongoDB instance with at least two collections:

- Users collection to store documents holding user details
- Links collection to store shortened links and originals to be redirected to

API:
 TODO

### Frontend Requirements

Figma: https://www.figma.com/design/RMcjkrHknph31bPSZcO2ex/Design-Concepts?node-id=1669-162202&m=dev&t=QKqiUm83Si9jX97N-1

Pages:

- Home Page
  - Login
- Login Page
  - Enter Details
  - CTA to login
- Password Reset
  - Enter Email
  - Password reset link 
  - Password reset page
- Dashboard
  - View Links
  - Edit Link
  - Create Link
  - Delete Link
- Account Page
  - View Account Details
  - Edit Account Details
  - Delete Account

## Run Locally

Clone the project

```
  git clone https://github.com/jake-t-dev/shortenit
```

Go to the project directory

```
  cd shortenit
```


### ShortenIt API

Install dependencies

```
  npm install
```

Start the server

```
  npm run dev
```

OR 

Start the server using Make

```
  make run
```

#### To run in Docker

Build and run the Container 

```
  make docker-run
```

Only build the Container

```
  make docker-build
```

### ShortenIt Client

#### **TODO**
See the [create-react-app README](/frontend/README.md) for now