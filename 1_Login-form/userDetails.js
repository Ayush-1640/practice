import mongoose from "mongoose";

const UserDetailSchema = new mongoose.Schema(
    {
        name: String, 
        email: {type: String, unique: true},
        phone: String,
        password: String,
    },
    {
        collection: "UserInfo",
    }
)

// -- Here we are creating a model inside this we will pass "collection-name" & "schema"
mongoose.model("UserInfo", UserDetailSchema);