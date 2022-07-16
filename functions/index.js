const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Jx9fZSCSaNIdWQPKDY1IlNndLKDLLJkgUaMddDlyf0rLMPNSv01bhpnsqG8xi91xVmE5TdxYW2upovjfKFh4Xy500YFDck2jc')

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//-API routes
app.get('/',(request,response) => response.status(200).send('Hello World'))

app.post('/payments/create',async (request,response) => {
    const total = request.query.total;

    console.log('Payement request recieved for ',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    //ok -created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//-Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/e-comm-49695/us-central1/api