import styled from "styled-components";
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

  @media only screen and (max-width: 600px) {
    width:105%;
    height:auto;
    padding: 7px 5px 0px;
  }
`;

const OneFeedbackBox = styled.div`
  width: 440.88px;
  height: 95px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 18px;
  padding: 0px 10px;
  @media only screen and (max-width: 600px) {
    width:100%;
    height:auto;
}
@media only screen and (min-width: 600px) {
    width:100%;
    height:auto;
}
`;

const ShowDate = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.41);
  margin-left: auto; /* Зміна тут */
`;

const NameData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Зміна тут */
  font-weight:700;
  font-size: 16 px
`;

const Name = styled.p`
`;

const Feedbacks = styled.p`
  font-family: "Rubik Mono One";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
`;

const FeedbackText = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-top: 0;
 
`;

const RatingWrapper = styled.div`
  pointer-events: none;
  font-size: 3px;
  margin-left: 10px;
`;

export default function ShowFeedbacks({ product, feedbacks, users }) {
  return (
    <FeedbacksBox>
      <Feedbacks>ВІДГУКИ</Feedbacks>
      {product.feedback.map((feedbackId) => {
        const feedback = feedbacks.find(
          (feedback) => feedback._id === feedbackId
        );
        if (feedback) {
          const user = users.find((user) => user._id === feedback.user);

          return (
            <OneFeedbackBox key={feedback._id}>
              <NameData>
              <Name>{user ? user.name : "Анонімний користувач"}</Name>
              <RatingWrapper>
                  <Rating value={feedback.rate} size="small">
                    {feedback.rate}
                  </Rating>

                  </RatingWrapper>
                
                <ShowDate>{feedback.date}</ShowDate> {/* Поміняли місцями */}


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
