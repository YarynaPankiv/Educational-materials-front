import useClickOutside from "@/hooks/useClickOutside";
import { useState } from "react";
import styled from "styled-components";

const DropDownWrap = ({ icon, children }) => {
  const [isShowComponent, setIsShowComponent] = useState(false);

  const isShowRec = () => {
    setIsShowComponent(!isShowComponent);
  };

  const handleClose = () => {
    setIsShowComponent(false);
  };

  const ref = useClickOutside(handleClose);

  return (
    <Wrap ref={ref}>
      <Icon onClick={isShowRec}>{icon}</Icon>
      {isShowComponent && <ContentWrap>{children}</ContentWrap>}
    </Wrap>
  );
};

const ContentWrap = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  background-color: white;
  @media only screen and (max-width: 605px) {
    right: 0;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 30;
`;

const Icon = styled.div``;

export default DropDownWrap;
