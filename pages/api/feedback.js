import { Product } from "@/models/Product";
import { Feedback } from "@/models/Feedback";

export default async function handle(req, res) {
  const { method } = req;

  if (method === "GET") {
    try {
      if (req.query?.id) {
        const feedback = await Feedback.findOne({ _id: req.query.id });
        if (feedback) {
          res.json(feedback);
        } else {
          res.status(404).json({ message: "Feedback not found" });
        }
      } else {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  if (method === "POST") {
    const { productId, feedback, date, rate,user } = req.body;

    try {
      // Створюємо новий відгук
      const feedbackDoc = await Feedback.create({
        productId,
        feedback,
        date,
        rate,
        user,
      });

      // Отримуємо продукт, до якого ми хочемо додати відгук
      const product = await Product.findById(productId);
      console.log(product);
      // Додаємо посилання на новий відгук до масиву feedback у продукті
      product.feedback.push(feedbackDoc._id);

      // Зберігаємо оновлений продукт у базі даних
      await product.save();

      res
        .status(201)
        .json({ success: true, message: "Feedback added successfully" });
    } catch (error) {
      console.error("Error adding feedback:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }

  if (method === "PUT") {
    const { productId, _id, feedback, date, rate ,user} = req.body;

    try {
      // Update the feedback entry based on its _id
      await Feedback.findByIdAndUpdate(_id, {
        productId,
        feedback,
        date,
        rate,
        user,
      });
      console.log(_id);
      // Send a success response
      res
        .status(200)
        .json({ success: true, message: "Feedback updated successfully" });
    } catch (error) {
      // Handle any errors that occur during the update
      console.error("Error updating feedback:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }

  if (method === "DELETE") {
    const { productId, feedbackId } = req.body;

    try {
      // Видаляємо відгук
      await Feedback.findByIdAndDelete(feedbackId);

      // Отримуємо продукт, до якого відноситься цей відгук
      const product = await Product.findById(productId);

      // Видаляємо посилання на видалений відгук з масиву feedback у продукта
      product.feedback = product.feedback.filter(
        (id) => id.toString() !== feedbackId
      );

      // Зберігаємо оновлений продукт у базі даних
      await product.save();

      res
        .status(200)
        .json({ success: true, message: "Feedback deleted successfully" });
    } catch (error) {
      console.error("Error deleting feedback:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
}
