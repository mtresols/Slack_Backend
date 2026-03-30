//title
//description
//created_at
//active
//url_image

//desarrollar el modelo workspace 
//crear dos espacios de trabajo de prueba


import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
        },
        url_image: {
            type: String,
            required: false
        },
        active: {
            type: Boolean,
            required: true,
            default: true
        },
        created_at: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
)

const Workspace = mongoose.model('Workspace', workspaceSchema) //asociar a coleccion de workspace
export default Workspace