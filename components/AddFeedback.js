import styled from "styled-components";
import Center from "./Center";
import Rating from '@mui/material/Rating';
const CenterButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
const FeedbackBox = styled.div`
    margin-top: 100px;
    width: 370px;
    height: 290px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.21);
    border-radius: 10px;
    padding: 10px 20px;
    margin-bottom: 25px;

`
const Title = styled.p`
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 15px;  
`
const Input = styled.textarea`
   margin-top: 20px;
   width: 330px;
   height: 90px;

`
const Button = styled.button`
  width: 155.51px;
  height: 37.13px;
  background: #AD88C6;
  border-radius: 10px;
  border: none;
  font-family: 'Rubik Mono One', sans-serif;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;

`

export default function AddFeedback(){
    return(
        <FeedbackBox>
            <Title>Написати відгук</Title>
            <Rating name="half-rating" defaultValue={0} precision={0.5} />
            <Input></Input>
            <CenterButton>
            <Button>Надіслати</Button>

            </CenterButton>
            
        </FeedbackBox>
       
    )
}