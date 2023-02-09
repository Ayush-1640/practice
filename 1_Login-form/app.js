import express from 'express';
import mongoose from 'mongoose';
// require('./userDetails');
import './userDetails.js';
import cors from "cors";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';


const JWT_SECRET = "alk;dfwu93485n0934n53450][pd].],POIE3840243-=[34[]34Q]R=Q30DF3R0S"
const app = express();
const PORT = 5000; 
app.use(express.json());
app.use(cors()); 



// ------------   Mongo-DB   ------------
const mongoUrl = "mongodb+srv://Ayush:Ayush1234@cluster0.kwdz9ov.mongodb.net/?retryWrites=true&w=majority"
// -- Below we are connecting to the "mongoose";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true
})
.then(() => console.log("---  Connected to Database  ---"))
.catch((error) => console.log("Error -> ", error));



// ===========   Sign-Up   =================
// ------------  Accessing detils from the "userDetil" file  --------------------
const User = mongoose.model("UserInfo")

// -- Now we are creating a register api to register any "user";
app.post("/register", async(req, res) => {
    // -- below we are taking some user data -
    const {name, email, phone, password} = req.body;
    const encryptPassword = await bcryptjs.hash(password, 10);
    
    try{
        const oldUser = await User.findOne({email})
        // -- below method will create a user.

        if(oldUser){
          return (res.send({error: "User Exists"}));
        }
        await User.create({
           name,
           email,
           phone, 
           password: encryptPassword,
        })
        res.send({status: "ok"})
    }
    catch(error) {
        res.send({status: "error"})
    }
})





// ===========   Login   =================







app.listen(PORT, () => {
    console.log(`Listening to the port: http://localhost:${PORT}`);
})






















// ------------    Express   ------------

// app.post("/post", (req, res) => {
//     console.log(req.body);
//     const { data } = req.body;

//     // Now we are going to use the "try" & "catch" method 
//     try {
//         if (data === "Ayush") { res.send({ status: "ok" }) }
//         else { res.send({ status: "User not Found" }) }
//     }
//     catch (error) {
//         res.send({ status: "Somethig went wrong try agian" })
//     }

// })