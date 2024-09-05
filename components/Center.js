import styled from "styled-components";

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const media = {
  mobile: `@media only screen and (max-width: 600px)`,
};

const StyledDiv = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    padding: 5px;
    font-size: 18px;
  }

  ${media.mobile} {
      padding-bottom: 25px;
    }
`;
