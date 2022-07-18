import Contact from "../../models/contact.js";

import { createError } from "../../helpers/index.js";

const add = async (req, res) => {
  if (!("name" in req.body && "email" in req.body && "phone" in req.body)) {
    throw createError(400, "missing required name field");
  } else {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  }
};

export default add;
