import Product from "../models/product.model.js";
import express from 'express'

function addProduct(req, res) {
    res.render("panel.html");
}

function getProduct(req, res) {
    res.render("storage.html", {
        product: Product.getAll()
    });
}

export {getProduct}

function postProduct(req, res) {
    const idProduct = req.body.id_product;
    const nameProduct = req.body.name_product;
    const aboutProduct = req.body.about_product;
    const providerName = req.body.provider_name;
    const amount = req.body.quantity;
    const value = req.body.price;
    const idSuppliers = req.body.id_suppliers;
    const Product = new Product(idProduct, nameProduct, aboutProduct, providerName, amount, value, idSuppliers)

    Product.save();
    res.redirect("/storage")
}

export default postProduct