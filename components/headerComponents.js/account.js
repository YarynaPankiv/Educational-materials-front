import styled from "styled-components";

export default function Account({ click, isLogin }) {
  return (
    <IconWithText onClick={click}>
      <StyledIcon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </StyledIcon>
      <IconText>Акаунт</IconText>
      {isLogin && (
        <LoggedSvg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.19738 12.8025C1.48105 12.1106 0.909683 11.2831 0.516616 10.368C0.123548 9.453 -0.0833484 8.46885 -0.092002 7.47301C-0.100656 6.47716 0.0891071 5.48957 0.466214 4.56784C0.84332 3.64612 1.40022 2.80873 2.10441 2.10454C2.80861 1.40034 3.646 0.843442 4.56772 0.466336C5.48944 0.0892292 6.47704 -0.100534 7.47289 -0.0918799C8.46873 -0.0832263 9.45288 0.12367 10.3679 0.516738C11.2829 0.909805 12.1105 1.48117 12.8024 2.1975C14.1686 3.61201 14.9245 5.50653 14.9074 7.47301C14.8903 9.43948 14.1016 11.3206 12.711 12.7111C11.3205 14.1017 9.43936 14.8905 7.47289 14.9076C5.50641 14.9246 3.61189 14.1687 2.19738 12.8025ZM11.7449 11.745C12.8707 10.6192 13.5032 9.09218 13.5032 7.5C13.5032 5.90781 12.8707 4.38084 11.7449 3.255C10.619 2.12915 9.09206 1.49666 7.49988 1.49666C5.90769 1.49666 4.38072 2.12915 3.25488 3.255C2.12903 4.38084 1.49654 5.90781 1.49654 7.5C1.49654 9.09218 2.12903 10.6192 3.25488 11.745C4.38072 12.8708 5.90769 13.5033 7.49988 13.5033C9.09206 13.5033 10.619 12.8708 11.7449 11.745ZM5.02488 6.9675L6.74988 8.7L9.97488 5.475L11.0249 6.54L6.74988 10.8L3.97488 8.025L5.02488 6.96V6.9675Z"
            fill="#3a985a"
          />
        </LoggedSvg>
      )}
    </IconWithText>
  );
}

export const StyledIcon = styled.svg`
  width: 21px;
  height: 20px;
  position: relative;
`;

export const IconWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const IconText = styled.p`
  margin-top: 0px;
  margin-left: 8px;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 11px;
  user-select: none;
  ${IconWithText}:hover & {
    color: #7469b6;
  }
`;

export const LoggedSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 8px; 
`;
