import styled from "styled-components";
import Center from "../Center";
import Link from "next/link";

export default function Logo({darkTheme}) {
  console.log(darkTheme);
  return (
    <Center>
      <StyledLink href="/">
        <StyledLogo>
          <StyledText darkTheme={darkTheme}>Навчальні</StyledText>
          <StyledSvg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.287659 2.51512C0.287659 1.84807 0.559836 1.20834 1.04431 0.736663C1.52879 0.264987 2.18589 2.12419e-06 2.87104 2.12419e-06H5.45443C5.92461 2.12419e-06 6.36637 0.121985 6.74612 0.337028C7.13861 0.115704 7.58425 -0.000573139 8.03782 2.12419e-06H10.6212C11.5603 2.12419e-06 12.3831 0.487935 12.8352 1.21858C13.1064 1.00731 13.4242 0.846339 13.7807 0.75328L16.2762 0.103122C16.604 0.0175362 16.9458 -0.00435819 17.2822 0.0386895C17.6186 0.0817372 17.943 0.188884 18.2369 0.354009C18.5308 0.519135 18.7884 0.739005 18.9949 1.00106C19.2015 1.26312 19.353 1.56223 19.4409 1.88131L24.7885 21.3169C24.8764 21.6359 24.8989 21.9687 24.8547 22.2963C24.8105 22.6238 24.7004 22.9396 24.5308 23.2257C24.3612 23.5118 24.1353 23.7626 23.8662 23.9637C23.597 24.1649 23.2898 24.3124 22.962 24.3979L20.4665 25.0481C20.1388 25.1336 19.7969 25.1555 19.4605 25.1125C19.1241 25.0694 18.7997 24.9623 18.5058 24.7972C18.212 24.632 17.9544 24.4122 17.7478 24.1501C17.5412 23.8881 17.3897 23.589 17.3018 23.2699L13.2046 8.37912V22.6361C13.2046 23.3031 12.9324 23.9428 12.4479 24.4145C11.9635 24.8862 11.3064 25.1512 10.6212 25.1512H8.03782C7.58425 25.1518 7.13861 25.0355 6.74612 24.8142C6.35364 25.0355 5.908 25.1518 5.45443 25.1512H2.87104C2.18589 25.1512 1.52879 24.8862 1.04431 24.4145C0.559836 23.9428 0.287659 23.3031 0.287659 22.6361V2.51512ZM2.87104 2.51512H5.45443V22.6361H2.87104V2.51512ZM10.6212 22.6361H8.03782V2.51512H10.6212V22.6361ZM14.4498 3.18288L16.944 2.53273L22.2942 21.9683L19.7987 22.6185L14.4498 3.18288Z"
              fill="#7469B6"
            />
          </StyledSvg>
          <StyledText darkTheme={darkTheme}>Матеріали</StyledText>
        </StyledLogo>
      </StyledLink>
    </Center>
  );
}

const StyledLogo = styled.div`
  margin-top: 0px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: fit-content;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledText = styled.p`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 20px;
 // color: black;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 0;
  }
`;

const StyledSvg = styled.svg`
  margin-right: 15px;
  margin-left: 15px;
  fill: #7469b6;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
