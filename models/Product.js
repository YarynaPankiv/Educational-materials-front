import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  productName: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [{ type: String }],
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  pages: { type: Number },
  file: [{ name: String, url: String }], 
});

let Product;

try {
  // Перевіряємо, чи модель вже існує
  Product = mongoose.model('Product');
} catch (error) {
  // Якщо модель не існує, створюємо нову модель
  Product = model('Product', ProductSchema);
}

export { Product };
