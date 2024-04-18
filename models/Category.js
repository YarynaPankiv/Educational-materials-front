import mongoose, { model, Schema } from "mongoose";


const CategorySchema = new Schema({
  categoryName: { type: String, required: true }
});

export const Category = mongoose.models?.Category || model('Category', CategorySchema);