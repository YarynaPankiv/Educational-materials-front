import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";

export default async function handle(req, res) {
  const method = req.method;

  await mongooseConnect();

  if (method === "POST") {
    const { email, password } = req.body;

    // Знайти користувача за його email та паролем у базі даних
    const user = await User.findOne({ email, password });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({ success: true, data: user });
  } else if (method === "GET") {
    const { email } = req.query;

    // Знайти користувача за його email у базі даних
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } else if (method === "PUT") {
    const { _id, email, name, surname, password } = req.body;

    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id, },
        { email, name, surname, password },
        { new: true }
      );

      if (!updatedUser) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
      console.error("Error updating user data:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
  // Обробка інших методів запиту
  else {
    res.status(405).json({ success: false, message: "Method not supported" });
  }
}
