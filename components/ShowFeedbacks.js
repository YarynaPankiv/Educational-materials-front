
import styled from "styled-components";

const FeedbacksBox = styled.div`
    margin-top: 100px;
    width: 490px;
    height: 400px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.21);
    border-radius: 10px;
    padding: 10px 20px;
    margin-bottom: 25px;
    overflow: scroll;
    overflow-x: hidden;

`;

const OneFeedbackBox = styled.div`
  width: 406.88px;
  height: 95px;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

`

export default function ShowFeedbacks(product){

    return(
        
           <FeedbacksBox> 
            <OneFeedbackBox></OneFeedbackBox>
            
            
           </FeedbacksBox>
       
    )
}