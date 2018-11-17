const Supporter = require('../models/supporter.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// Create Supporter
exports.supporter_create = function (req, res) {
    let supporter = new Supporter({
        username: req.body.username,
        password: req.body.password,
        verified: false,
        name: req.body.name,
        description: req.body.description
    });

    supporter.save(function(err){
        if(err){
            return next(err);
        }
        res.send('Supporter created successfully!');
    });
};
