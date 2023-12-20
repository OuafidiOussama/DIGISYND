const supertest =require("supertest")
const app = require('../app')
const mongoose = require('mongoose')

describe('Test apartmentController', () => { 
    let jwtToken;

    beforeAll(async()=>{
        const authenticationRes = await supertest(app)
        .post('/api/user/login')
        .send({
            email: "haddi@syndic.com",
            password: "oussamaHaddi"
        })

        jwtToken = authenticationRes.body.jwtToken
    })

    afterAll(async()=>{
        await mongoose.disconnect();
    })

    it("Should Get All Apartments", async () => {
        const response = await supertest(app)
        .get("/api/apartment/all")
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("apartmentsWithBills");
    });

    it("Should Create a new Apartment", async () => {
        const response = await supertest(app)
        .post("/api/apartment/create")
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        .send({
            "apartmentNumber": 4,
            "apartmentFloor": 1,
            "apartmentOwner" : {
                "ownerName": "test",
                "cin": "test",
                "picture": "test.png"
            }
        })
        

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("apartment");
    });

    it("Should Throw Unexpected token Error", async () => {
        const response = await supertest(app)
        .post("/api/apartment/create")
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        .send({
            "apartmentNumber": '4',
            "apartmentOwner" : {
                "ownerName": "test",
                "cin": "test",
                "picture": "test.png"
            }
        })

        expect(response.status).toBe(500);
        expect(response).toHaveProperty("text");
    });

    it("Should Update an Apartment", async () => {
        const response = await supertest(app)
        .put(`/api/apartment/update/658211d428fa985692bbe20e`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        .send({
            "apartmentNumber": 4,
            "apartmentFloor": 1,
            "apartmentOwner" : {
                "ownerName": "Darius Stark",
                "cin": "Eveniet ea est dol",
                "picture": "test.png"
            }
        })

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("updatedApartment");
    });

    it("Should Throw No Apartment Found Error", async () => {
        const response = await supertest(app)
        .put(`/api/apartment/update/6582e939d142c856d25ed52c`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        .send({
            "apartmentNumber": 4,
            "apartmentFloor": 1,
            "apartmentOwner" : {
                "ownerName": "Darius Stark",
                "cin": "Eveniet ea est dol",
                "picture": "test.png"
            }
        })

        expect(response.status).toBe(404);
        expect(response).toHaveProperty("text");
    });

    it("Should Delete an apartment", async () => {
        const response = await supertest(app)
        .delete(`/api/apartment/delete/6582fa6b00d6c771b8845964`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("message");
    });

})