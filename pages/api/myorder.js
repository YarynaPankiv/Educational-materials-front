import { mongooseConnect } from "@/lib/mongoose";
import MyOrder from "@/models/MyOrder";

export default async function handle(req, res) {
  // Handling POST requests
  await mongooseConnect();
  if (req.method === "POST") {
    try {
      const { userId, products, totalPrice, status } = req.body;

      const newOrder = new MyOrder({
        userId,
        products,
        totalPrice,
        status,
      });

      await newOrder.save();

      res
        .status(201)
        .json({ success: true, message: "Order created successfully", data:newOrder });
    } catch (error) {0
      console.error("Error creating order:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  // Handling PUT requests
  if (req.method === "PUT") {
    try {
      const { orderId, updateData } = req.body;

      const updatedOrder = await MyOrder.findByIdAndUpdate(
        orderId,
        updateData,
        { new: true }
      );

      if (!updatedOrder) {
        res.status(404).json({ success: false, message: "Order not found" });
        return;
      }

      res.status(200).json({
        success: true,
        message: "Order updated successfully",
        order: updatedOrder,
      });
    } catch (error) {
      console.error("Error updating order:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  // Handling GET requests
  if (req.method === "GET") {
    const {orderId} = req.body;
    try {
      if (orderId) {
        const order = await MyOrder.findById(orderId);

        if (!order) {
          res.status(404).json({ message: "Order not found" });
          return;
        }

        res.status(200).json(order);
      } else {
        const orders = await MyOrder.find();
        res.status(200).json(orders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
