const supertest =require("supertest")
const app = require('../app')
const mongoose = require('mongoose')

describe('Test userController', () => { 
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

    it("Should Get All Bills", async()=>{
        const response = await supertest(app)
        .get('/api/bill/all')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("success")
        expect(response.body).toHaveProperty("bills")
    })

    it("Should be paied already error", async()=>{
        const response = await supertest(app)
        .post('/api/bill/pay/658066a417c13355f098ca2e')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")

        expect(response.status).toBe(403)
        expect(response).toHaveProperty("text")
    })
    
    it("Should Throw Apartment doesnt exist error", async()=>{
        const response = await supertest(app)
        .post('/api/bill/pay/6582f7ed4b186c5a527021d9')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")

        expect(response.status).toBe(404)
        expect(response).toHaveProperty("text")
    })

    it("Should Pay up a Bill (Create New Bill)", async()=>{
        const response = await supertest(app)
        .post('/api/bill/pay/6582eb8f18e8340037a5996e')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("success")
        expect(response.body).toHaveProperty("createdBill")
    })

    it("Should Pay up a Bill (Update Already Existing Bill)", async()=>{
        const response = await supertest(app)
        .post('/api/bill/pay/6582ed663c50ebce0e40afee')
        .set('Authorization', `Bearer ${jwtToken}`)
        .accept("")
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("success")
        expect(response.body).toHaveProperty("newBill")
    })

    
})