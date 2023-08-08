const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = Schema({
            Nome:      { type: String, required: true },
            Sobrenome: { type: String, required: true },
            Telefone:  { type: String, required: true },
            Cidade:    { type: String, required: true },
            Rua:       { type: String, required: true },
            Bairro:    { type: String, required: true }
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order