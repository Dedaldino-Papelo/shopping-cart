const express = require("express")
const router = express.Router()
const Order = require('../Models/Order')

router.post("/orders", async (req, res) => {
    const { nome, sobrenome, telefone, cidade, rua, bairro } = req.body

    const order = new Order({
        Nome: nome, 
        Sobrenome: sobrenome, 
        Telefone: telefone, 
        Cidade: cidade, 
        Rua: rua, 
        Bairro: bairro
    })

    const createOrder = await order.save()
    if(createOrder){
        console.log(createOrder)
        res.status(200).json(createOrder)
    } else {
        res.status(400).send("Something went wrong try later")
    }

    
})

module.exports = router
