
var groceryController = function(Grocery) {

    var post = function(req, res) {
        var item = new Grocery(req.body);

        console.log(JSON.stringify(res.body));
        if(!req.body.name){
            res.status(400);
            res.send('Name required');
        }
        else {
            item.save();
            res.status(201);
            res.send(item);
        }
    };

    var get = function(req, res){
        var query = {};

        Grocery.find(query, function(err, groceries){
           if(err){
               res.status(500).send(err);
           }
           else {
               var returnGroceries = [];
               groceries.forEach(function(element, index, array) {
                   var newItem = element.toJSON();
                   newItem.links = {};
                   newItem.links.self = 'http://' + req.headers.host + '/api/groceries' + newItem._id;
                   returnGroceries.push(newItem);
               });
               res.json(returnGroceries);
           }
        });
    };

    return {
        post: post,
        get: get
    }
};

module.exports = groceryController;