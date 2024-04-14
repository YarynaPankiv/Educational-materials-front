import { useState } from "react";
import Center from "./Center";
import styled from "styled-components";


const BigImage = styled.img`
    max-width: 500px;
    max-height: 300px;
    position: relative;
`;

const ImageButtons = styled.div`
    margin-top: 10px;
    position: absolute;
    display: flex;
    max-width: 500px;
    width: 100%;
    justify-content: space-between;
    
`;

const ImageButton = styled.div`
  border: 2px solid black;
  border-color: ${props => props.active ? 'black' : 'transparent'};
  height: 100px;
  cursor: pointer;
`;


const Image = styled.img`
    max-width: 100%;
    max-height: 100%;



`
export default function ProductImages({images}){
    const [activeImage, setActiveImage] = useState(images[0])
    return (
        <Center>
            <BigImage src={activeImage}></BigImage>
            <ImageButtons>
            {images.map((image, index) => (
                    <ImageButton key={index} active={image === activeImage} onClick={() => setActiveImage(image)}>
                        <Image src={image} alt={`Image ${index + 1}`} />
                    </ImageButton>
                ))}
            </ImageButtons>





        </Center>
    )
}