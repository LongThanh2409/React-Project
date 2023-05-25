import Joi from "joi";
export const productSchema = Joi.object({
  name: Joi.string().required().min(4).messages({
    "string.empty": "Name không được để trống",
    "any.required": "Trường Name này là bắt buộc",
    "string.base": "Name phải là 1 string",
    "string.min": "Mật khẩu phải có ít nhất {#limit} ký tự",
  }),
  price: Joi.number().required().messages({
    "string.empty": "Price không được để trống",
    "any.required": "Trường Price này là bắt buộc",
    "number.base": "Price phải là 1 số",
  }),
  priceSale: Joi.number().messages({
    "number.base": "priceSale phải là 1 số",
  }),
  description: Joi.string().required().messages({
    "string.empty": "description không được để trống",
    "any.required": "Trường description này là bắt buộc",
    "string.base": "description phải là 1 string",
  }),
  image: Joi.array().required().messages({
    "string.empty": "image không được để trống",
    "any.required": "Trường image này là bắt buộc ",
    "string.base": "image phải là 1 string",
  }),
  size: Joi.array().required().messages({
    "string.empty": "size không được để trống",
    "any.required": "Trường size này là bắt buộc ",
    "array.base": "size phải là 1 array",
  }),
  color: Joi.array().required().messages({
    "string.empty": "color không được để trống",
    "any.required": "Trường color này là bắt buộc ",
    "array.base": "color phải là 1 array",
  }),
  hot_sale: Joi.number(),
  description_short: Joi.string(),
  featured: Joi.boolean(),
  rating: Joi.number().required().messages({
    "string.empty": "rating không được để trống",
    "any.required": "Trường Price này là bắt buộc",
    "number.base": "Price phải là 1 số",
  }),
  quantity: Joi.number().required().messages({
    "string.empty": "rating không được để trống",
    "any.required": "Trường Price này là bắt buộc",
    "number.base": "Price phải là 1 số",
  }),
  inventoryStatus: Joi.string(),
  categoryId: Joi.string().required().messages({
    "string.empty": "categoryId không được để trống",
    "any.required": "Trường categoryId này là bắt buộc",
    "string.base": "categoryId phải là 1 string",
  }),
});
export const sizeSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name không được để trống",
    "any.required": "Trường Name này là bắt buộc",
    "string.base": "Name phải là 1 string",
  }),
});
export const colorSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name không được để trống",
    "any.required": "Trường Name này là bắt buộc",
    "string.base": "Name phải là 1 string",
  }),
});
export const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Category không được để trống",
    "any.required": "Trường Category này là bắt buộc",
    "string.base": "Name phải là 1 String",
  }),
});
