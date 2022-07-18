import Contact from "../../models/contact.js";

import { createError } from "../../helpers/index.js";

const updateById = async (req, res) => {
  const { id } = req.params;
  if ("name" in req.body && "email" in req.body && "phone" in req.body) {
    const result = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!result) {
      throw createError(404, "Not found");
    }
  } else {
    throw createError(400, "missing required name field");
  }
  res.json(result);
};

export default updateById;
