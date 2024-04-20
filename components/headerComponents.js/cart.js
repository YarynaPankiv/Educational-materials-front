import {IconText, IconWithText, StyledIcon}  from "../Header";
import styled from "styled-components";
import Link from 'next/link';
const StyledLink = styled.link`
      


`
export default function Cart(){
    return (
   
        <IconWithText >
        <StyledIcon
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.70274 14.3831H17.7706C18.1066 14.3831 18.4 14.0937 18.4 13.7048C18.4 13.3159 18.1066 13.0266 17.7706 13.0266H7.84923C7.35747 13.0266 7.05565 12.6647 6.97798 12.1134L6.83995 11.1639H17.7875C19.0471 11.1639 19.6942 10.3499 19.8753 9.05708L20.5654 4.27352C20.5837 4.15993 20.5953 4.04526 20.6 3.93016C20.6 3.49614 20.2894 3.19752 19.8149 3.19752H5.72723L5.56307 2.04938C5.47693 1.35301 5.23547 1 4.35575 1H1.32716C0.982266 1 0.688904 1.31713 0.688904 1.67901C0.688904 2.04938 0.982266 2.36612 1.32753 2.36612H4.24312L5.62343 12.2943C5.8049 13.5783 6.45162 14.3831 7.70274 14.3831ZM19.1332 4.56288L18.5215 8.89427C18.4523 9.45484 18.1677 9.79859 17.6587 9.79859L6.65075 9.80746L5.91716 4.56288H19.1332ZM8.38443 18.7777C8.56839 18.7793 8.75081 18.7425 8.92106 18.6695C9.09132 18.5964 9.24599 18.4886 9.37608 18.3522C9.50616 18.2159 9.60905 18.0538 9.67875 17.8753C9.74845 17.6969 9.78356 17.5057 9.78204 17.3128C9.78282 17.1202 9.7472 16.9294 9.67724 16.7513C9.60728 16.5732 9.50436 16.4114 9.37443 16.2752C9.24449 16.139 9.09011 16.0311 8.92019 15.9578C8.75027 15.8845 8.56818 15.8471 8.38443 15.848C7.59967 15.848 6.97835 16.4992 6.97835 17.3128C6.97835 18.1358 7.59967 18.7777 8.38443 18.7777ZM16.4506 18.7777C17.2357 18.7777 17.8567 18.1358 17.8567 17.3128C17.8567 16.4988 17.2357 15.848 16.4506 15.848C15.6743 15.848 15.0445 16.4992 15.0445 17.3128C15.0445 18.1358 15.6743 18.7777 16.4506 18.7777Z"
            fill="black"
            stroke="black"
          />
          
        </StyledIcon>
        <IconText>Корзина</IconText>
        </IconWithText>  
        
    )
}