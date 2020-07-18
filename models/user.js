const mongoose = require('mongoose');
const SchemaPad = mongoose.Schema;

const schema = new SchemaPad({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin : {
        type: Boolean,
        required:true,
        default:false,
    },
});
module.exports = mongoose.model('User',schema);
