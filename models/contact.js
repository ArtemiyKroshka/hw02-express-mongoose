import mongoose from "mongoose";

const { Schema, model } = mongoose;

const contactShema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { versionKey: false, timestamps: false }
);

const handleErrors = (error, data, next) => {
  const { name, code } = error;
  if (name === "MongoServerError" && code === 11000) {
    error.status = 409;
  } else {
    error.status = 400;
  }
  next();
};

contactShema.post("save", handleErrors);

const Contact = model("contact", contactShema);

export default Contact;
