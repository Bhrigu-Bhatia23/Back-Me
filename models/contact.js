import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ContactSchema = new Schema({
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String }
})

export default mongoose.models.Contact ||
    mongoose.model("Contact", ContactSchema);
