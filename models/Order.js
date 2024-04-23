import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  line_items: Object,
  name: String,
  email: String,
  paid: Boolean,
});

let Order;

try {
  // Перевіряємо, чи існує модель Order
  Order = model("Order");
} catch (error) {
  // Якщо модель не існує, створюємо нову модель Order
  Order = model("Order", OrderSchema);
}

export { Order };
