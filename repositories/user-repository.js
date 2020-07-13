const express = require('express');
const md5 = require('md5');
const mongoose = require('mongoose');
const { schema, replaceOne } = require('../models/user');
const User = mongoose.model('User',schema);
const { verifyKey } = require('../config');


exports.create = async (data) => {
    let user = new User(data);
    await user.save();
}
exports.getAll = async () => {
    let list = await User.find();
    return list;
}
exports.updateById = async (id, data) => {
    let up = await User.findByIdAndUpdate(id, {
        email: data.email,
        password: md5(data.password + verifyKey),
    })
}
exports.deleteUser = async (id) => {
    await User.findByIdAndRemove(id);
}