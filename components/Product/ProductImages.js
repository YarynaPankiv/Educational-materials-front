import { useState } from "react";
import Center from "../Center";
import styled from "styled-components";

const BigImage = styled.img`
  width: 500px;
  max-height: 300px;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 600px) {
    width: 370px;
    height: auto;
  }
`;

const BigImageWrraper = styled.div`
  height: 300px;
  width: 500px;
  position: relative;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height:auto;
  }
`;

const ImageButtons = styled.div`
  margin-top: 10px;
  display: flex;
  overflow-x: auto; /* Додано прокрутку у разі переповнення */
`;

const ImageButton = styled.div`
  border: 2px solid black;
  border-color: ${(props) => (props.active ? "black" : "transparent")};
  cursor: pointer;
  margin-right: 5px;
  flex-grow: 1; /* Додаємо flex-grow для автоматичного розтягування */
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <Center>
      <BigImageWrraper>
        <BigImage src={activeImage}></BigImage>
      </BigImageWrraper>
      <ImageButtons>
        {images.map((image, index) => (
          <ImageButton
            key={index}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt={`Image ${index + 1}`} />
          </ImageButton>
        ))}
      </ImageButtons>
    </Center>
  );
}
