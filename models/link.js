const mongoose = require('mongoose');
const SchemaPad = mongoose.Schema;

const schema = new SchemaPad({

    name: {
        type: String,
        required: true
    },
    description: {
        type: true,
        required: true,
    },
    tags: [{
        type: String,
        required: true,
        trim: true,
    }],
    link: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('Links',schema);