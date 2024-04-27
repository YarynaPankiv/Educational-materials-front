import styled from "styled-components";
import Center from "../Center";

const StyledLogo = styled.div`
  margin-top: 25px;
  width: 1000px;
  height: 169px;
  background-color: #ad88c6;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 15px;
    margin-top: 10px;
  }
`;

const StyledText = styled.p`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 40px;
  color: #ffffff;
  @media only screen and (max-width: 605px) {
    font-size: 18px;
  }
`;

const StyledSvg = styled.svg`
  margin-right: 15px;
  margin-left: 15px;
`;
export default function Logo() {
  return (
    <Center>
      <StyledLogo>
        <StyledText>Навчальні</StyledText>
        <StyledSvg
          width="39"
          height="40"
          viewBox="0 0 39 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 3.90653C0 2.87046 0.429817 1.87682 1.1949 1.1442C1.95997 0.411583 2.99764 3.29934e-06 4.07963 3.29934e-06H8.15926C8.90175 3.29934e-06 9.59936 0.18947 10.1991 0.523478C10.8189 0.179713 11.5226 -0.000890211 12.2389 3.29934e-06H16.3185C17.8015 3.29934e-06 19.1008 0.75787 19.8148 1.89272C20.2431 1.56457 20.7449 1.31455 21.3079 1.17001L25.2488 0.160171C25.7663 0.0272376 26.3062 -0.00676922 26.8374 0.0600933C27.3687 0.126956 27.881 0.293378 28.345 0.549854C28.8091 0.80633 29.2159 1.14784 29.5421 1.55487C29.8684 1.9619 30.1077 2.42649 30.2464 2.92209L38.6912 33.1098C38.83 33.6054 38.8655 34.1223 38.7957 34.631C38.7259 35.1397 38.5521 35.6303 38.2842 36.0747C38.0164 36.519 37.6598 36.9086 37.2347 37.221C36.8096 37.5333 36.3245 37.7625 35.8069 37.8953L31.866 38.9051C31.3484 39.0381 30.8086 39.0721 30.2774 39.0052C29.7461 38.9384 29.2338 38.7719 28.7697 38.5155C28.3057 38.259 27.8989 37.9175 27.5727 37.5104C27.2464 37.1034 27.0071 36.6388 26.8684 36.1432L20.3981 13.0146V35.1588C20.3981 36.1949 19.9683 37.1885 19.2032 37.9211C18.4382 38.6537 17.4005 39.0653 16.3185 39.0653H12.2389C11.5226 39.0662 10.8189 38.8856 10.1991 38.5418C9.57927 38.8856 8.87552 39.0662 8.15926 39.0653H4.07963C2.99764 39.0653 1.95997 38.6537 1.1949 37.9211C0.429817 37.1885 0 36.1949 0 35.1588V3.90653ZM4.07963 3.90653H8.15926V35.1588H4.07963V3.90653ZM16.3185 35.1588H12.2389V3.90653H16.3185V35.1588ZM22.3645 4.94372L26.3034 3.93388L34.7523 34.1216L30.8114 35.1314L22.3645 4.94372Z"
            fill="black"
          />
        </StyledSvg>
        <StyledText>Матеріали</StyledText>
      </StyledLogo>
    </Center>
  );
}
