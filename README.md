<h1 align="center">
Atomic
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

 [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) 

Atomic is an online Movie Ticket Booking web app with MERN Stack.

  - Online Booking System
  - Admin Dashboard


> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.


# Features!

  - Add / Update / Delete Movies
  - Add / Update / Delete Cinemas
  - Add / Update / Delete Showtimes
  - Add / Update / Delete Reservations
  - Add / Update / Delete Users
  - Generate QR Code for reservation check in
  - Send HTML emails invitations 


You can also:
  - Export QR Code pass as PDF

### Tech
Atomic uses a number of open source projects to work properly:
* [MongoDB](https://www.mongodb.com/) - A document-oriented, No-SQL database used to store the application data.
* [ExpressJS](https://expressjs.com/) - fast node.js network app framework.
* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
* [nodeJS](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine

### Installation

Atomic requires [Node.js](https://nodejs.org/)  to run.

Set environment variables 

```sh
$ Create a .env file in your server and client folder
$ See the .env sample
create a mongodb database and add your connection string into .env file
```

Install the dependencies and devDependencies

```sh
$ npm install
$ cd server npm install && npm start
$ cd client npm install && npm start
```
Start the server.

```sh
$ cd server 
$ npm install 
```

Start the client.

```sh
$ cd client 
$ npm install 
$ npm start
```

Start from root path
```sh
$ npm run server
$ npm run client
```

### Plugins

Atomic is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

### Server


| Plugin | README |
| ------ | ------ |
| concurrently | [plugins/concurrently/README.md](https://github.com/kimmobrunfeldt/concurrently/blob/master/README.md) |
| bcryptjs | [plugins/bcryptjs/README.md](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md) |
| express | [plugins/express/README.md](https://github.com/expressjs/express/blob/master/Readme.md) |
| googleapis | [plugins/googleapis/README.md](https://github.com/googleapis/googleapis/blob/master/README.md) |
| jsonwebtoken | [plugins/jsonwebtoken/README.md](https://github.com/auth0/node-jsonwebtoken/blob/master/README.md) |
| mongoose | [plugins/mongoose/README.md](https://github.com/Automattic/mongoose/blob/master/README.md) |
| multer | [plugins/multer/README.md](https://github.com/expressjs/multer/blob/master/README.md)|
| nodemailer | [plugins/nodemailer/README.md](https://github.com/nodemailer/nodemailer/blob/master/README.md) |
| nodemon | [plugins/nodemon/README.md](https://github.com/remy/nodemon/blob/master/README.md) |
| qrcode | [plugins/qrcode/README.md](https://github.com/soldair/node-qrcode/blob/master/README.md) |

### Client

| Plugin | README |
| ------ | ------ |
| fullcalendar | [plugins/fullcalendar/README.md](https://github.com/fullcalendar/fullcalendar/blob/master/README.md) |
| material-ui | [plugins/material-ui/README.md](https://github.com/mui-org/material-ui/blob/master/README.md) |
| moment | [plugins/moment/README.md](https://www.npmjs.com/package/@date-io/moment?activeTab=readme) |
| jspdf | [plugins/jspdf/README.md](https://github.com/MrRio/jsPDF) |
| react | [plugins/react/README.md](https://github.com/facebook/react/blob/master/README.md) |
| react-facebook-login | [plugins/react-facebook-login /README.md](https://github.com/keppelen/react-facebook-login/blob/master/README.md) |
| react-google-login | [plugins/react-google-login/README.md](https://www.npmjs.com/package/react-google-login) |
| react-redux | [plugins/react-redux/README.md](https://github.com/reduxjs/react-redux) |
| react-router-dom | [plugins/react-router/README.md](https://github.com/ReactTraining/react-router/blob/master/README.md) |
| react-slick | [plugins/react-slick/README.md](https://github.com/akiran/react-slick) |
| redux | [plugins/redux/README.md](https://github.com/reduxjs/redux)|

### Todos

 - Add Light Mode / More themes



# Screenshots! 

Movie Page
<img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/movie.png" />

<details>
  <summary>More Screenshots</summary>
  Booking Page
  <img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/booking.png" />

  Booking Invitations
  <img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/invitation.png" />

  Guest Dashboard Page
  <img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/guest-dashboard.png" />

  My Account Page
  <img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/my-account.png" />

  Admin Home Page
  <img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/admin-dashboard.png" />

  Admin Cinema Page
  <img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/admin-cinemas.png" />

  Admin Movie Page
  <img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/admin-movies.png" />

  Admin Reservation Page
  <img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/reservations.png" />

  Admin Reservation Calendar
  <img src="https://github.com/AmanJain011/readme-assets/blob/master/Atomic/calendar.png" />
</details>



License
----

MIT
