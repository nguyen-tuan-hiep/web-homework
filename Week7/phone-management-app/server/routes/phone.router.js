const express = require("express");

const phoneController = require("../controllers/phone.controller");
const phoneRouter = express.Router();

phoneRouter.get("/", phoneController.getAllPhones);
phoneRouter.get("/:id", phoneController.getPhoneById);
phoneRouter.post("/", phoneController.createPhone);
phoneRouter.patch("/:id", phoneController.updatePhoneById);
phoneRouter.delete("/:id", phoneController.deletePhoneById);

module.exports = phoneRouter;
