const mongoose = require('mongoose');
const SchemaLink = mongoose.Schema;

const schema2 = new SchemaLink({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    link: {
        type: String,
        required: true,
        trim: true
    },
   
});

module.exports = mongoose.model('Links',schema2);