const Products = require("./Models/Products")
const mongoose = require('mongoose');
const { Schema } = mongoose; 

const data = [
    {
        name: "Big Burguer",
        image: "https://static3.depositphotos.com/1000691/109/i/450/depositphotos_1098427-stock-photo-cheeseburger.jpg",
        description:"Um hambúrguer, ou simplesmente hambúrguer, é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída",
        price: 1000,
        stock: 5
    },
    {
        name: "Flavour Burguer",
        image: "https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-mobile.jpg",
        description:"Um hambúrguer, ou simplesmente hambúrguer, é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída",
        price: 2000,
        stock: 7
    },
    {
        name: "hamburgeur Gazeta",
        image: "https://midias.agazeta.com.br/2022/05/25/hamburguer-da-101-brasa-burger-em-vila-velha-769174.jpg",
        description:"Um hambúrguer, ou simplesmente hambúrguer, é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída",
        price: 1600,
        stock: 2
    },
    {
        name: "Hot Burguer",
        image: "https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg",
        description:"Um hambúrguer, ou simplesmente hambúrguer, é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída",
        price: 500,
        stock: 8
    },
    {
        name: "French Burger",
        image: "https://www.minervafoods.com/wp-content/uploads/2018/08/como_fazer_hamburguer_caseiro_1-2.jpg",
        description:"Um hambúrguer, ou simplesmente hambúrguer, é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída",
        price: 1700,
        stock: 4
    },
    {
        name: "Hamburguer com Sheddar",
        image: "https://receitinhas.com.br/wp-content/uploads/2017/02/Hamburguer-com-cheddar-e-r%C3%BAcula.jpg",
        description:"Um hambúrguer, ou simplesmente hambúrguer, é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída",
        price: 950,
        stock: 5
    },
    {
        name: "Mac Hamburguer",
        image: "https://assets.unileversolutions.com/recipes-v2/230446.jpg",
        description:"Um hambúrguer, ou simplesmente hambúrguer, é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída",
        price: 1500,
        stock: 4
    },
    {
        name: "Home Hamburger",
        image: "https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg",
        description:"Um hambúrguer, ou simplesmente hambúrguer, é um alimento que consiste em recheios - geralmente um hambúrguer de carne moída",
        price: 2000,
        stock: 5
    }
]

const seedDB = async () => {
    //delete products
    const removeProducts = await Products.deleteMany()
    if(removeProducts){
        console.log("Removed")
    } else{
        console.log("Error Removing Products")
    }

    //add products
    const createProducts = await Products.create(data)
    if(createProducts){
        console.log("inserted")
    } else {
        console.log("Error when inserting products to Database")
    }
}

module.exports = seedDB