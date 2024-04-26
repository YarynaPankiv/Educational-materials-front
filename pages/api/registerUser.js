import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";

export default async function handle(req, res) {
  const method = req.method;

  await mongooseConnect();

  if (method === "POST") {
    const { name, surname, email, password, cart } = req.body;

    const newUser = await User.create({
      name,
      surname,
      email,
      password,
      cart,
    });
    res.status(201).json({ success: true, data: newUser });
  } else if (method === "GET") {
    const { email } = req.body;

    // Знайти користувача за його email у базі даних
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      res.status(200).json({ success: true, data: user });
    }
  } else if (method === "PUT") {
    try {
      const { email } = req.query;
      const { name, surname, password,cart } = req.body;

      // Оновити дані користувача, включаючи пароль
      const user = await User.findOneAndUpdate(
        { email },
        { name, surname, password,cart },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "Користувача не знайдено" });
      }

      res.status(200).json({ success: true, data: user });
    } catch (error) {
      console.error("Error during updating user:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "Помилка під час оновлення користувача",
        });
    }
  } else {
    res.status(405).json({ success: false, message: "Метод не підтримується" });
  }
}
