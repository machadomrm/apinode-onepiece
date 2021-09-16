const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    ocupação:{
        type: String,
        require: true
    },
    frutadodiabo:{
        type: String,
        require: true
    },
    poder:{
        type: String,
        require: true
    },
    imagem:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Personagem", personagemSchema)