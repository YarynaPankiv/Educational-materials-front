import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";

const Stripe = require('stripe')(process.env.STRIPE_SK)


export default async function handle(req, res) {
  if (req.method !== "POST") {
    res.json("should be a Post");
    return;
  }

  // Підключаємося до бази даних MongoDB
  await mongooseConnect();

  // Отримуємо дані з запиту
  const { name, email, products } = req.body;
  const productsIds = products.map(product => product.id);

  
  // Отримуємо інформацію про товари з бази даних
  const productsInfo = await Product.find({ _id: productsIds });
  console.log("Products Info:", productsInfo);
  //console.log(productsInfo);
  // Підготовка товарів для платежу Stripe
  let lineItems = [];
  for(const productId of productsIds){
    const product = productsInfo.find(p => p._id.toString() === productId);
    console.log("Product:", product);
    if(product){
      lineItems.push({
        price_data: {
          currency: 'UAH',
          product_data: { name: product.productName },
          unit_amount: product.price * 100, 
        },
        quantity: 1,
      });
    }
  }
  console.log("Line Items:", lineItems);
  const OrderDoc = await Order.create({
    lineItems,name,email,paid:false,
  });
  
  const session = await Stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.PUBLIC_URL +'/Checkout?success=true',
    cancel_url: process.env.PUBLIC_URL +'/Checkout?canceled=true',
    metadata:{orderId:OrderDoc._id.toString()},
  });
  res.json({
    url:session.url,    
  })
}
