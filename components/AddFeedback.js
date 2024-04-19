import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import axios from "axios";

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FeedbackBox = styled.div`
  margin-top: 100px;
  width: 370px;
  height: 290px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 25px;
`;

const Title = styled.p`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 15px;
`;

const Input = styled.textarea`
  margin-top: 20px;
  width: 330px;
  height: 90px;
`;

const Button = styled.button`
  width: 155.51px;
  height: 37.13px;
  background: #ad88c6;
  border-radius: 10px;
  border: none;
  font-family: "Rubik Mono One", sans-serif;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
`;

export default function AddFeedback({ id }) {
  const [feedback, setFeedback] = useState("");
  const [rate, setRate] = useState(0);
  const productId = id; // Replace this with the actual productId

  const handleSubmit = async () => {
    const currentDate = new Date(); // Get the current date and time

    // Extract day, month, and year components
    const day = currentDate.getDate().toString().padStart(2, '0'); // Convert to string and ensure two-digit format
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
    const year = currentDate.getFullYear(); // Get full year (e.g., 2024)
  
    // Format the date as dd.mm.yyyy
    const formattedDate = `${day}.${month}.${year}`;
  
    // Create data object with the feedback details
    const data = {
      productId,
      feedback,
      date: formattedDate, // Assign the formatted date to the 'date' field
      rate,
    };
    console.log(id);

    if (productId) {
      await axios.post("/api/feedback", data);
      setFeedback("");
      setRate(0);

    }
  };

  return (
    <FeedbackBox>
      <Title>Написати відгук</Title>
      <Rating
        name="half-rating"
        value={rate}
        precision={0.5}
        onChange={(event, newValue) => setRate(newValue)}
      />
      <Input
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
      ></Input>
      <CenterButton>
        <Button onClick={handleSubmit}>Надіслати</Button>
      </CenterButton>
    </FeedbackBox>
  );
}
