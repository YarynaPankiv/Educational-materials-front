import styled from "styled-components"

const StyledCategories = styled.div`
     box-sizing: border-box;

   position: absolute;
  width: 385px;
  height: 496px;
  left: 101px;
  top: 78px;

  background: #FFFFFF;
  border-top: 1px solid #A2A7AF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  overflow-x: hidden;
  z-index: 10;
`

export default function Categories({showCategories}){
    return (
       <StyledCategories>
        
       </StyledCategories>
    )
}