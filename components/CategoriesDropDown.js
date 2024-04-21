import { useCategories } from "@/Contexts/CategoriesContext";
import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";

const DropDownWrap = ({ icon, children }) => {
  const [isShowComponent, setIsShowComponent] = useState(false);
  const dropDownRef = useRef(null);
  const {showCategories, setShowCategories} = useCategories()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsShowComponent(false);
        setShowCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef]);

  const toggleDropDown = () => {
    setIsShowComponent(!isShowComponent);
    setShowCategories(!showCategories);
  };

  return (
    <Wrap ref={dropDownRef}>
      <Icon onClick={toggleDropDown}>{icon}</Icon>
      {isShowComponent && <ContentWrap>{children}</ContentWrap>}
    </Wrap>
  );
};

const ContentWrap = styled.div`
  position: absolute;
  left: 100px;
  top: 78px;
  background-color: white;
  z-index: 13;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div``;

export default DropDownWrap;
