import {createModel} from "../models/create.model.js";

module.exports = {
    crudForm:function(req, res) {
        res.render('panel');
    },

    createData:function(req, res) {
        const inputData = {
            idProduct: req.body.id_product,
            nameProduct: req.body.name_product,
            aboutProduct: req.body.about_product,
            providerName: req.body.provider_name,
            amount: req.body.quantity,
            idSuppliers: req.body.id_suppliers
        };

        createModel.createData(inputData, (data) => {
            res.redirect('/storage/panel');
            console.log(data.affectedRows + "products add");
        })
    }
}