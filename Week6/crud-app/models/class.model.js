const mongoose = require("mongoose");

const { Schema } = mongoose;

const classSchema = new Schema(
	{
		name: {
			type: String,
			required: "class cannot be blank",
		},
	},
	{
		collection: "class",
		versionKey: false,
	}
);

module.exports = mongoose.model("class", classSchema);
