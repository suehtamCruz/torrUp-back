const express = require('express');
const md5 = require('md5');

const mongoose = require('mongoose');
const { schema, replaceOne } = require('../models/user');
const User = mongoose.model('User', schema);
const repository = require('../repositories/user-repository');

const { verifyKey } = require('../config');

exports.createNewUser = async (require, response, next) => {
    await repository.create({
        email: require.body.email,
        password: md5(require.body.password + verifyKey),
        admin: require.body.admin,
    })
    response.status(201).send({
        message: "User created sucessful!"
    })

}
exports.getAll = async (require, response, next) => {
    try {
        let data = await repository.getAll();

        return response.status(200).send(data);

    } catch (e) {
        response.status(400).send({
            message: "BAD REQUEST!",
        })
    }
}
exports.updateUser = async (require, response, next) => {
    try {
        repository.updateById(require.params.id, require.body);
        response.status(200).send({
            message: "USER UPDATED!"
        })
    } catch (e) {
        response.status(400).send({
            message: "THIS UPDATE IS BAD",
            data: e
        })
    }
}
exports.deleteUser = async (require, response, next) => {
    try {
        await repository.deleteUser(require.params.id);
        response.status(200).send({
            message: "USER DELETED!"
        })
    } catch (e) {
        response.status(400).send({
            message: "DELETE USER FAIL!",
            data: e,
        })
    }
}
exports.isAdmim = async (require, response, next) => {
    try {
        let user = await repository.isAdmin(require.params.id)
     
        if(user.admin == true){
            next();
        }
        else{
            return response.status(400).send({
                message:"UNAUTHORIZED!",
            })
        }
    } catch (e) {
       return response.status(400).send({
            mesage: "THE REQUEST TO CREATE A NEW LINK IS BAD!",
            data : e,            
        })
    }
}