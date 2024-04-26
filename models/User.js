import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  cart: { type: Schema.Types.ObjectId, ref: "Cart" },
});

let User;

try {
  User = model("User");
} catch (error) {
  User = model("User", userSchema);
}

export { User as User };
