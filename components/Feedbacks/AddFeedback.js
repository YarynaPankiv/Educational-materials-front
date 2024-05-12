import { useState, useEffect } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { useAuth } from "@/Contexts/AccountContext";

export default function AddFeedback({ id, darkTheme, products, orders}) {
  const [feedback, setFeedback] = useState("");
  const [rate, setRate] = useState(0);
  const [userBought, setUserBought] = useState(false);
  const productId = id;
  const { user } = useAuth();

  const handleSubmit = async () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;


    if (user) {
      const data = {
        productId,
        feedback,
        date: formattedDate,
        rate,
        user: user.data._id,
      };

      if (productId) {
        await axios.post("/api/feedback", data);
        setFeedback("");
        setRate(0);
      }
    }
  };

  useEffect(() =>{
    if(user && orders) {
      orders.map((order) => {
        if (order.userId === user.data._id) {
          order.products.map((productId) => {
            const product = productId == id;
            console.log(product);
            if (product) {
              setUserBought(true);
            }
          })

         
          
        }
      });
    }
  }, [orders, user, id]);



  return (
    <FeedbackBox darkTheme={darkTheme}>
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
        darkTheme={darkTheme}
      ></Input>
      {userBought &&
      <CenterButton>
        <Button onClick={handleSubmit} darkTheme={darkTheme}>Надіслати</Button>
      </CenterButton>
      }
    </FeedbackBox>
  );
}

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FeedbackBox = styled.div`
  margin-top: 50px;
  width: 370px;
  height: 290px;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 25px;
  background-color: ${(props) => (props.darkTheme ? "#26303B" : "FFFFFF")};

  @media only screen and (max-width: 600px) {
    width: 90%;
    height: auto;
    padding: 10px 10px;
    margin-left: 20px;
  }
`;

const Title = styled.p`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 15px;
`;

const Input = styled.textarea`
  margin-top: 20px;
  width: 330px;
  height: 90px;
  background-color: ${(props) => (props.darkTheme ? "#26303B" : "FFFFFF")};
  @media only screen and (max-width: 600px) {
    width: 96%;
    margin-left: 5px;
  }
`;

const Button = styled.button`
  width: 155.51px;
  height: 37.13px;
  background-color: ${(props) => (props.darkTheme ? "#732270" : "#ad88c6")};
  border-radius: 10px;
  border: none;
  font-family: "Rubik Mono One", sans-serif;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 10px;
`;
