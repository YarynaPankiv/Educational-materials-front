import styled from "styled-components";

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    padding: 5px;
    font-size: 18px;
  }
`;
