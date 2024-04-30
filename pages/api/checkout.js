import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";

const Stripe = require('stripe')(process.env.STRIPE_SK)


export default async function handle(req, res) {
  if (req.method !== "POST") {
    res.json("should be a Post");
    return;
  }

  await mongooseConnect();
  const { name, email, products } = req.body;
  const productsIds = products.map(product => product.id)
  
  const productsInfo = await Product.find({ _id: productsIds });

  let lineItems = [];
  for(const productId of productsIds){
    const product = productsInfo.find(p => p._id.toString() === productId);
 
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

  const OrderDoc = await Order.create({
    line_items:lineItems,name,email,paid:false,
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
