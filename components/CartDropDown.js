import { useState } from "react";
import styled from "styled-components";

const CartDropDownWrap = ({ icon, children }) => {
  const [isShowComponent, setIsShowComponent] = useState(false);
  const isShowRec = () => {
    setIsShowComponent(!isShowComponent);
    //console.log(isShowComponent);
  };

  return (
    <Wrap>
      <Icon onClick={isShowRec}>{icon}</Icon>
      {isShowComponent && <ContentWrap>{children}</ContentWrap>}
    </Wrap>
  );
};

const ContentWrap = styled.div`
  position: absolute;
  //top: calc(100% + 12px);
  top: 60px;
  right: 350px;
  background-color: white;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  //position: relative;
`;

const Icon = styled.div``;

export default CartDropDownWrap;
