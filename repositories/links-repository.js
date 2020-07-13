const mongoose = require('mongoose');
const { schema, replaceOne } = require('../models/link');
const Links = mongoose.model('Links',schema);

exports.getALl = async () => {
    let list = await Links.find();
    return list;
}
exports.createNewLink = async (data) => {
    let newLink = new Links(data);
    await newLink.save();
}
exports.updateLink = async (id,data) => {
    let link = Links.findByIdAndUpdate(id,data);
    return link;
}
exports.deletLink = async(id)=>{
    let link = await Links.findByIdAndRemove(id);
    return link
}