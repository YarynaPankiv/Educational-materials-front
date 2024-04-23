import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Stripe from 'stripe';

// Ініціалізуємо Stripe з використанням вашого секретного ключа
const stripe = new Stripe('YOUR_STRIPE_SECRET_KEY', {
  apiVersion: '2020-08-27',
});

export default async function handle(req, res) {
  if (req.method !== "POST") {
    res.json("should be a Post");
    return;
  }

  // Підключаємося до бази даних MongoDB
  await mongooseConnect();

  // Отримуємо дані з запиту
  const { name, email, products } = req.body;
  const productsIds = products.split(",");

  // Отримуємо інформацію про товари з бази даних
  const productsInfo = await Product.find({ _id: productsIds });

  // Підготовка товарів для платежу Stripe
  let lineItems = [];
  for(const productId of productsIds){
    const product = productsInfo.find(p => p._id.toString() === productId);
    if(product){
      lineItems.push({
        price_data: {
          currency: 'UAH',
          product_data: { name: product.productName },
          unit_amount: product.price * 100, // Ціна в копійках
        },
        quantity: 1,
      });
    }
  }

  try {
    // Створення платіжного замовлення через Stripe API
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://yourwebsite.com/success', // URL для переадресації після успішної оплати
      cancel_url: 'https://yourwebsite.com/cancel', // URL для переадресації у разі скасування оплати
    });

    // Повертаємо ідентифікатор сеансу оплати як відповідь
    res.json({ sessionId: session.id });
  } catch (error) {
    // Обробка помилок
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Payment processing error' });
  }
}
