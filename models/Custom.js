import mongoose from "mongoose";

const CustomSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    logo: {
        type: String,
        default: 'default-logo.jpg'
    },
    playerColor: {
        type: String,
        default: '#FFFFFF'
    },
    theme: {
        type: String,
        default: 'default-theme'
    },
},
{timestamps: true}
);

export default mongoose.model("Custom", CustomSchema);