import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    products:[{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

let Cart;

try {
  Cart = model("Cart");
} catch (error) {
  Cart = model("Cart", CartSchema);
}

export { Cart as Cart };
