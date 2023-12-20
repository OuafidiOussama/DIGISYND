const supertest =require("supertest")
const app = require('../app')
const mongoose = require('mongoose')

describe('Test userController', () => { 
    let jwtToken;
    let user;

    beforeAll(async()=>{
        const authenticationRes = await supertest(app)
        .post('/api/user/login')
        .send({
            email: "oussama@super.com",
            password: "superadmin"
        })

        jwtToken = authenticationRes.body.jwtToken
        user = authenticationRes.body.user
    })

    afterAll(async()=>{
        await mongoose.disconnect();
    })

    it("Should Log me In As Syndic", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "haddi@syndic.com",
            password: "oussamaHaddi"
        })

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("jwtToken");
        expect(response.body).toHaveProperty("user");
    });

    it("Should Throw and error Please Provide Email ", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "",
            password: "oussamaHaddi"
        })

        expect(response.status).toBe(403);
        expect(response).toHaveProperty("text");
    });

    it("Should Throw and error Please Provide Password", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "haddi@syndic.com",
            password: ""
        })

        expect(response.status).toBe(403);
        expect(response).toHaveProperty("text");
    });

    it("Should Throw and error invalid email or password", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "test@syndic.com",
            password: "test"
        })

        expect(response.status).toBe(400);
        expect(response).toHaveProperty("text");
    });

    it("Should Throw and error invalid email or password", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "haddi@syndic.com",
            password: "test"
        })

        expect(response.status).toBe(400);
        expect(response).toHaveProperty("text");
    });


    it("Should Register a new Syndic", async()=>{
        const response = await supertest(app)
        .post('/api/user/register')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        .send({
            "firstName": "test",
            "lastName": "test",  
            "email": "test@syndic.com",
            "password": "testtest"
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("success")
        expect(response.body).toHaveProperty("user")
    })

    it("Should Throw validation Error", async()=>{
        const response = await supertest(app)
        .post('/api/user/register')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        .send({
            "firstName": "",
            "lastName": "",  
            "email": "",
            "password": ""
        })

        expect(response.status).toBe(500)
        expect(response).toHaveProperty("text")
    })

    it("Should Throw email Already exists error", async()=>{
        const response = await supertest(app)
        .post('/api/user/register')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        .send({
            "firstName": "test",
            "lastName": "test",  
            "email": "haddi@syndic.com",
            "password": "testtest"
        })

        expect(response.status).toBe(400)
        expect(response).toHaveProperty("text")
    })

    it("Should Find User Profile", async()=>{
        const response = await supertest(app)
        .get('/api/user/me')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        .send({
            'userId': user._id
        })

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("user")
    })

    it('Should Log me Out ', async()=>{
        const response = await supertest(app)
        .get('/api/user/logout')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("success")
        expect(response.body).toHaveProperty("message")
    })

 })