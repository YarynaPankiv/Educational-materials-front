import styled from "styled-components";
import Rating from "@mui/material/Rating";

export default function ShowFeedbacks({ product, feedbacks, users, darkTheme }) {
  return (
    <FeedbacksBox darkTheme={darkTheme}>
      <Feedbacks darkTheme={darkTheme}>ВІДГУКИ</Feedbacks>
      {product.feedback.map((feedbackId) => {
        const feedback = feedbacks.find(
          (feedback) => feedback._id === feedbackId
        );
        if (feedback) {
          const user = users.find((user) => user._id === feedback.user);

          return (
            <OneFeedbackBox key={feedback._id} darkTheme={darkTheme}>
              <NameData>
                <Name>{user ? user.name : "Анонімний користувач"}</Name>
                <RatingWrapper>
                  <Rating value={feedback.rate} size="small">
                    {feedback.rate}
                  </Rating>
                </RatingWrapper>
                <ShowDate darkTheme={darkTheme}>{feedback.date}</ShowDate> {/* Поміняли місцями */}
              </NameData>
              <FeedbackText darkTheme={darkTheme}>{feedback.feedback}</FeedbackText>
            </OneFeedbackBox>
          );
        }
        return null;
      })}
    </FeedbacksBox>
  );
}

const FeedbacksBox = styled.div`
  margin-top: 50px;
  width: 490px;
  height: 400px;
  background-color: ${(props) => (props.darkTheme ? "#26303B" : "#FFFFFF")};
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 25px;
  overflow: scroll;
  overflow-x: hidden;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 400px;
    padding: 15px 5px;
  }
`;

const OneFeedbackBox = styled.div`
  width: 440.88px;
  height: 95px;
  background-color: ${(props) => (props.darkTheme ? "#37404A" : "#FFFFFF")};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 18px;
  padding: 0px 10px;
  @media only screen and (max-width: 600px) {
    width: 95%;
    height: auto;
    font-size: 14px;
  }
`;

const ShowDate = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.41);
  margin-left: auto; /* Зміна тут */
  color: ${(props) => (props.darkTheme ? "white" : "black")};
`;

const NameData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Зміна тут */
`;

const Name = styled.p``;

const Feedbacks = styled.p`
  font-family: "Rubik Mono One";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
`;

const FeedbackText = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-top: 0;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
`;

const RatingWrapper = styled.div`
  pointer-events: none;
  font-size: 3px;
  margin-left: 10px;
`;
