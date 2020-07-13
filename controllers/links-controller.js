const express = require('express');
const repository = require('../repositories/links-repository');
const { replaceOne } = require('../models/link');

exports.getAll = async (require, response, next) => {
    try {
        let data = await repository.getALl();
        return response.status(200).send(data);
    } catch (e) {
        return response.status(400).send({
            message: "THE REQUEST ALL LINKS IS BAD!",
            data: e
        });
    }
}
exports.createNewLink = async (require, response, next) => {
    try {
        await repository.createNewLink({
            name: require.body.name,
            description: require.body.description,
            tags: require.body.tags,
            link: require.body.link
        });
        return response.status(201).send({
            message: "LINK SUCCESSFUL CREATED!"
        })
    } catch (e) {
        return response.status(400).send({
            message: "THE REQUEST TO CREATE A LINK IS BAD",
            data: e,
        });
    }
}
exports.updateLink = async (require, response, next) => {
    try {
        await repository.updateLink(require.params.id, require.body)
        return response.status(200).send({
            message: "LINK UPDATED!",
        });
    } catch (e) {
        return response.status(400).send({
            message: "LINK UPDATE IS BAD!",
            data: e,
        })
    }

}
exports.deleteLink = async (require, response, next) => {
    try {
        await repository.deletLink(require.params.id);
        return response.status(200).send({
            message: "LINK DELETED!"
        });
    } catch (e) {
        return response.status(400).send({
            message: "THE REQUEST TO DELETE LINK IS BAD!",
            data: e,
        })
    }
}