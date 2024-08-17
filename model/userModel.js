import mongoose from "mongoose"
const schema = mongoose.Schema

const userSchema = new schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }

})
const User = mongoose.model("User", userSchema)
export default User