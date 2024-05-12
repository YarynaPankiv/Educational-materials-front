import styled from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "@/Contexts/CartContext";
import { useCart } from "@/Contexts/ShowCart";

import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useAuth } from "@/Contexts/AccountContext";

export default function PaymentButton({ product }) {
  const router = useRouter();
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user } = useAuth();
  // console.log(user);
  // console.log(user.data.name);
  async function goToPayment() {
    try {
      console.log("cartProducts", cartProducts);
      const response = await axios.post("/api/checkout", {
        name: user.data.name,
        email: user.data.email,
        products: cartProducts.map((product) => ({
          id: product._id, // Adjust this according to your product ID property
          productName: product.productName,
          price: product.price,
          // Add other necessary properties here
        })),
      });
      if (response.data.url) {
        window.location = response.data.url;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  }

  return (
        <PurpleButton onClick={goToPayment}>
      <SvgCart
        width="23"
        height="17"
        viewBox="0 0 23 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.10192 12.4184H19.7316C20.1198 12.4184 20.4587 12.1661 20.4587 11.827C20.4587 11.488 20.1198 11.2357 19.7316 11.2357H8.27114C7.70309 11.2357 7.35444 10.9202 7.26473 10.4395L7.10528 9.61168H19.7512C21.2061 9.61168 21.9536 8.90194 22.1628 7.77476L22.96 3.6041C22.9812 3.50507 22.9945 3.40508 23 3.30473C23 2.92632 22.6411 2.66597 22.0931 2.66597H5.81994L5.63031 1.66493C5.53082 1.05778 5.2519 0.75 4.2357 0.75H0.737272C0.338873 0.75 0 1.0265 0 1.34201C0 1.66493 0.338873 1.94109 0.737697 1.94109H4.10559L5.70004 10.5972C5.90966 11.7167 6.65671 12.4184 8.10192 12.4184ZM21.3056 3.85638L20.599 7.63282C20.519 8.12156 20.1904 8.42127 19.6023 8.42127L6.88673 8.429L6.03934 3.85638H21.3056ZM8.88936 16.25C9.10186 16.2513 9.31258 16.2193 9.50925 16.1556C9.70591 16.0919 9.88459 15.9978 10.0349 15.879C10.1851 15.7601 10.304 15.6187 10.3845 15.4632C10.465 15.3076 10.5055 15.1409 10.5038 14.9728C10.5047 14.8048 10.4635 14.6384 10.3827 14.4832C10.3019 14.3279 10.183 14.1868 10.0329 14.0681C9.88285 13.9493 9.70452 13.8553 9.50824 13.7913C9.31196 13.7274 9.10162 13.6948 8.88936 13.6956C7.98286 13.6956 7.26515 14.2634 7.26515 14.9728C7.26515 15.6902 7.98286 16.25 8.88936 16.25ZM18.2069 16.25C19.1138 16.25 19.8311 15.6902 19.8311 14.9728C19.8311 14.263 19.1138 13.6956 18.2069 13.6956C17.3102 13.6956 16.5827 14.2634 16.5827 14.9728C16.5827 15.6902 17.3102 16.25 18.2069 16.25Z"
          fill="#FFFCFC"
        />
      </SvgCart>
      КУПИТИ
    </PurpleButton>

  );
}

const PurpleButton = styled.button`
  background-color: #7469b6;
  font-family: "Rubik Mono One";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  border: none;
  color: #fffcfc;
  height: 40px;
  width: 170px;
  background: #ad88c6;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  border: none;
  cursor: pointer;
`;
const SvgCart = styled.svg`
  margin-right: 10px;
`;
