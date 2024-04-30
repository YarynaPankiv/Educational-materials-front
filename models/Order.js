import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  line_items: Object,
  name: String,
  email: String,
  paid: Boolean,
},{
  timestamps: true,
});

let Order;

try {
  Order = model("Order");
} catch (error) {
  Order = model("Order", OrderSchema);
}

export { Order };
