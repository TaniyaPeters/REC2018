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

// Read Supporter
exports.supporter_details = function (req, res) {
    Supporter.findById(req.params.id, function (err, supporter){
        if(err){
            return next(err);
        }
        res.send(supporter);
    });
};

// Update Supporter
exports.supporter_update = function (req, res) {
    Supporter.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, supporter){
        if(err){
            return next(err);
        }
        res.send('Supporter updated.');
    });
};

// Delete Supporter
exports.supporter_delete = function (req, res) {
    Supporter.findByIdAndRemove(req.params.id, function(err){
        if(err){
            return next(err);
        }
        res.send('Deleted successfully.');
    });
};
