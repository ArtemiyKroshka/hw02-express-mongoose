import Contact from "../../models/contact.js";

import { createError } from "../../helpers/index.js";

const patchById = async (req, res) => {
  const { id } = req.params;
  if ("favorite" in req.body) {
    const result = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!result) {
      throw createError(404, "Not found");
    }
    res.json(result);
  } else {
    throw createError(400, "missing required name field");
  }
};

export default patchById;
