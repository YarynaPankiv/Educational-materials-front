import styled from "styled-components";
import Feedback from "@/models/Feedback";
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Product";
import Rating from "@mui/material/Rating";

const FeedbacksBox = styled.div`
  margin-top: 50px;
  width: 490px;
  height: 400px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 25px;
  overflow: scroll;
  overflow-x: hidden;
`;

const OneFeedbackBox = styled.div`
  width: 440.88px;
  height: 95px;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 18px;
`;
const ShowDate = styled.div`
  width: 88px;
  height: 17.39px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-left: auto;
  margin-top: 5px;
  margin-right: 5px;
  color: rgba(0, 0, 0, 0.41);
`;

const NameData = styled.div`
  display: flex;
  align-items: center;
`;
const Feedbacks = styled.p`
  width: 126px;
  height: 17.39px;
  font-family: "Rubik Mono One";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  margin-left: 5px;
  color: #000000;
`;
const FeedbackText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  margin-left: 7px;
  color: #000000;
`;
const RatingWrapper = styled.div`
  pointer-events: none; 
  font-size: 3px;
  margin-top: 10px;
  margin-left: 200px;
`;
export default function ShowFeedbacks({ product, feedbacks }) {
  return (
    <FeedbacksBox>
      <Feedbacks>ВІДГУКИ</Feedbacks>
      {product.feedback.map((feedbackId) => {
        const feedback = feedbacks.find(
          (feedback) => feedback._id === feedbackId
        );
        if (feedback) {
          return (
            <OneFeedbackBox key={feedback._id}>
              <NameData>
                <RatingWrapper>
                  <Rating value={feedback.rate} size="small">
                    {feedback.rate}
                  </Rating>
                </RatingWrapper>
                <ShowDate>{feedback.date}</ShowDate>
              </NameData>
              <FeedbackText>{feedback.feedback}</FeedbackText>
            </OneFeedbackBox>
          );
        }
        return null;
      })}
    </FeedbacksBox>
  );
}
