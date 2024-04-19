import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  productName: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [{ type: String }],
  subcategory: { type: Schema.Types.ObjectId, ref: 'SubCategory' },
  pages: { type: Number },
  feedback: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }],
  schoolClass: String,
  rate:  {type: Number},
  file: [{ name: String, url: String }], 
});

let Product;

try {
  Product = mongoose.model('Product');
} catch (error) {
  Product = model('Product', ProductSchema);
}

export { Product };
