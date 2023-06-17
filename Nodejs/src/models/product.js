import mongoose from "mongoose";
const { Schema } = mongoose;
import paginate from "mongoose-paginate-v2";
const productSchema = new Schema(
  {
    name: String,
    price: Number,
    priceSale: Number,
    image: Array,
    rating: Number,
    quantity: Number,
    description: String,
    description_short: String,
    featured: {
      type: Boolean,
      default: false,
    },
    hot_sale: {
      type: Number,
      default: 0,
    },
    size: {
      type: [String],
      enum: ["XS", "S", "M", "L", "XL"],
    },
    color: {
      type: [String],
      enum: ["green", "blue", "pink", "red", "indigo"],
    },
    
    //tạo 1 tr category
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category", // liên kết bảng categorry
    },
  },
  { timestamps: true, versionKey: false }
);
productSchema.pre("save", function (next) {
  if (this.isModified("hot_sale") || this.isModified("price")) {
    this.priceSale = this.price * (1 - this.hot_sale / 100);
  }
 
  next();
});
productSchema.plugin(paginate);
export default mongoose.model("Product", productSchema);
