# DIGISYND
## Description
DigiSynd is a comprehensive solution crafted for web agencies, offering a simplified approach to managing monthly union dues payments within apartment complexes. This intuitive platform aims to enhance the efficiency of payment processing while maintaining a secure and user-friendly experience for both administrators and users.
## Features
 - Payment Management: Simplify the handling of monthly payments for union dues.

 - Apartments Management: Simplify the management of apartments within a complex.

 - Web Agency Integration: Designed specifically for web agencies involved in managing apartment complexes.

 - User-Friendly Interface: An intuitive and easy-to-use interface for both administrators and users.

## Instalation :
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)
## Instruction : 
#### 1. Clone The Repository:
```sh
git clone https://github.com/OuafidiOussama/DIGISYND.git
```

#### 2. Install Nessecary NPM Packages (For Both Frontend and Backend folders) : 
```sh
npm i
```

#### 3. Create a `.env` File in the root of backend folder and put : 
```sh
PORT=5000
MONGODB_URI=mongodb://localhost:27017/digisynd
SESSION_SECRET= "DIGISYND"
```

#### 4. Run Both Servers with this commande (repeat for frontend and backend) : 
```sh
npm start
```

#### 5. Your react app chouls open automatically But if didnt access this in your browser : 
```sh
http://localhost:3000
```
## Packages Used :
### front-end:
    "yup": "^1.3.2"
    "formik": "^2.4.5"
    "react-toastify": "^9.1.3"
    "@mui/material": "^5.15.1"
    "axios": "^1.6.2"
    "moment": "^2.29.4"
    "react-file-base64": "^1.0.3"
    "react-router": "^6.20.1"
    "react-router-dom": "^6.18.0"
    "redux": "^4.2.1"
    "react-redux": "^8.1.3"
    "redux-thunk": "^2.4.2"
### back-end:
    "bcrypt": "^5.1.1"
    "cors": "^2.8.5"
    "dotenv": "^16.3.1"
    "express": "^4.18.2"
    "jsonwebtoken": "^9.0.2"
    "mongoose": "^8.0.2"

