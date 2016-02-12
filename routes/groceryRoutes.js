var express = require('express');

var routes = function(Grocery) {

    var groceryRouter = express.Router();
    var groceryController = require('../controllers/groceryController')(Grocery);

    groceryRouter.route('/')
        .post(groceryController.post)
        .get(groceryController.get);

    return groceryRouter;

};

module.exports = routes;