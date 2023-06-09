import Product from "../models/product";
import { productSchema } from "../Schema/product";
import Category from "../models/category";
export const getAll = async (req, res) => {
  const { _sort = "priceSale", _limit = 8, _order = "asc", _page = 1 } = req.query;
  const option = {
    limit: _limit,
    sort: {
      [_sort]: _sort === 'rating' ? _order === "asc" ? 1 : -1 : _order === "asc" ? 1 : -1,
    },
    page: _page,
  };
  try {
    const product = await Product.paginate({}, option);
    if (product.docs.length === 0) {
      return res.json({
        message: "Không có sản phẩm nào!",
      });
    }
   
    return res.json({
      message: "Lấy danh sách sản phẩm thành công!",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const get = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id , name: req.body.name});
    if (!product) {
      return res.json({
        message: "Lấy sản phẩm không thành công !",
      });
    }
    return res.json({
      message: "Lấy 1 sản phẩm thành công !",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};




export const getSearch = async (req, res) => {
  const { _sort = "priceSale", _limit = 8, _order = "asc", _page = 1 } = req.query;
  const option = {
    limit: _limit,
    sort: {
      [_sort]: _sort === 'rating' ? _order === "asc" ? 1 : -1 : _order === "asc" ? 1 : -1,
    },
    page: _page,
  };
  try {
    const keyword = req.query.keyword;
    const regex = new RegExp(keyword, 'i')
    const product = await Product.paginate({ name: regex }, option);
    if (product.length === 0) {
      return res.json({
        message: "Không tìm thấy sản phẩm phù hợp !",
      });
    }
    return res.json({
      message: "Lấy sản phẩm thành công !",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Không có sản phẩm nào có tên đó" });
    }
    return res.status(500).json({ message: "Lỗi server" });
  }
};

export const create = async (req, res) => {
  try {
    //validate
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((error) => error.message),
      });
    }
    const categoryId = req.body.categoryId;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({
        message: "categoryId không hợp lệ",
      });
    }
    const product = await Product.create(req.body);
    if (!product) {
      return res.json({
        message: "Thêm sản phẩm không thành công! ",
      });
    }
    return res.json({
      message: "thêm sản phẩm thành công ",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const update = async (req, res) => {
  try {
    // validate
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((error) => error.message),
      });
    }
    // Update product
    const updatedProduct = req.body;
    if (updatedProduct.hot_sale >= 0 && updatedProduct.price) {
      updatedProduct.priceSale =
        updatedProduct.price * (1 - updatedProduct.hot_sale / 100);
    }
   
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updatedProduct }, // Sử dụng $set để chỉ cập nhật các trường được gửi trong yêu cầu
      {
        new: true,
      }
    );
    if (!product) {
      return res.status(500).json({
        message: "Cập nhật sản phẩm không thành công !",
      });
    }
    return res.json({
      message: "Cập nhật sản phẩm thành công !",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
export const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.json({
        message: "Xóa sản phẩm không thành công",
      });
    }
    return res.json({
      message: "Xóa sản phẩm thành công",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
