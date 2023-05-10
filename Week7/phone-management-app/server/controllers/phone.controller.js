const PhoneModel = require("../models/phone.model");
const validatePhone = require("../validate/validatePhone");
const {SUCCESS, NOT_FOUND} = require("../constants/errors");
exports.getAllPhones = async (req, res, next) => {
    try {
        const phones = await PhoneModel.find({});
        res.status(SUCCESS.status).json(phones);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getPhoneById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const phone = await PhoneModel.findById(id);
        if (!phone) return res.status(NOT_FOUND.status).json({message: NOT_FOUND.message});
        res.status(SUCCESS.status).json(phone);
    } catch (error) {
        rconsole.error(error);
        next(error);
    }
};

exports.createPhone = async (req, res, next) => {
    try {
        const validate = validatePhone(req);
        if (!validate.valid) return res.status(validate.statusCode).json({message: validate.message});
        const phone = await PhoneModel.create(req.body);
        return res.status(SUCCESS.status).json(phone);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.updatePhoneById = async (req, res, next) => {
    try {
        const validate = validatePhone(req);
        if (!validate.valid) return res.status(validate.statusCode).json({message: validate.message});
        const phone = await PhoneModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!phone) return res.status(NOT_FOUND.status).json({message: NOT_FOUND.message});
        res.status(SUCCESS.status).json(phone);
    } catch (err) {
        console.error(err);
        next(err);
    }
};


exports.deletePhoneById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const phone = await PhoneModel.findByIdAndDelete(id);
        if (!phone) return res.status(NOT_FOUND.status).json({message: NOT_FOUND.message});
        res.status(SUCCESS.status).json({message: SUCCESS.message});
    } catch (err) {
        console.error(err);
        next(err);
    }
};
