import styled from "styled-components";
import Center from "./Center";
import Link from "next/link";

export default function Urls({ page, darkTheme}) {
  return (
      <UrlsDiv>
        <StyledLink href="/" darkTheme={darkTheme}>Головна</StyledLink>
        <StyledSvg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.46875 0L0 1.46875L4.77083 6.25L0 11.0312L1.46875 12.5L7.71875 6.25L1.46875 0Z"
            fill={darkTheme ? "#8B98A5" : "black"}
            fill-opacity="0.61"
          />
        </StyledSvg>
        <StyledP darkTheme={darkTheme}>{page}</StyledP>
      </UrlsDiv>
  );
}
export const StyledLink = styled(Link)`
  text-decoration: none;
  color:${(props) => (props.darkTheme ? "#8B98A5" : "black")};
  opacity: 60%;
  margin-right: 10px;
`;
export const StyledSvg = styled.svg`
  margin-left: 10px;
  fill: ${(props) => (props.showSort ? "#AD88C6" : "black")};
`;

export const UrlsDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  @media only screen and (max-width: 600px) {
    margin-top: 5px;
  }
`;
export const StyledP = styled.span`
  opacity: 60%;
  margin-left: 15px;
  color:${(props) => (props.darkTheme ? "#8B98A5" : "black")};
`;
