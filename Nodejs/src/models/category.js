import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true, versionKey: false }
);


// categorySchema.pre("remove", async function (next) {
//   const categoryId = this._id;
//   try {
//     // Xóa danh mục
//     await categoryId.deleteOne({ _id: categoryId });

//     // Xóa tất cả sản phẩm liên quan
//     await Product.deleteMany({ categoryId });

//     next();
//   } catch (error) {
//     next(error);
//   }
// });
categorySchema.plugin(paginate);
export default mongoose.model("Category", categorySchema);
