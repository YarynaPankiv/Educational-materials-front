import { useState } from "react";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const DropDownWrap = ({ icon, children, onClose }) => {
  const [isShowComponent, setIsShowComponent] = useState(false);
  const dropDownRef = useRef(null);
  const isShowRec = () => {
    setIsShowComponent(!isShowComponent);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsShowComponent(false);
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef, onClose]);

  return (
    <Wrap ref={dropDownRef}>
      <Icon onClick={isShowRec}>{icon}</Icon>
      {isShowComponent && <ContentWrap>{children}</ContentWrap>}
    </Wrap>
  );
};

const ContentWrap = styled.div`
  position: absolute;
  top: calc(100%);
  left: -65px;
  background-color: white;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 13;
`;

const Icon = styled.div``;

export default DropDownWrap;
