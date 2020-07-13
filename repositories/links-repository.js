const mongoose = require('mongoose');
const Links = mongoose.model('Links');

exports.getALl = async () => {
    let list = await Links.find();
    return list;
}
exports.createNewLink = async (data) => {
    let newLink = new Links();
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