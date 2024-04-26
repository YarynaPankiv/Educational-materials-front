import Header from "@/components/Header";
import React from "react";
import styled, { css } from "styled-components";
import UserEditor from "@/components/UserEditor";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { red } from "@mui/material/colors";
import MyShopping from "@/components/MyShopping";
import LogoWithoutPurple from "@/components/Logo/LogoWithoutPurple";
import Center from "@/components/Center";

const UserProfilePage = ({ toggleDarkMode, path }) => {
  const router = useRouter();

  useEffect(() => {
    if (!renderInfo()) {
      router.push("/user-profile/user-info");
    }
  }, []);

  const logOut = () => {};

  const renderInfo = () => {
    switch (path) {
      case "user-info":
        return <UserEditor />;
      case "my-shop":
        return <MyShopping/>;
      default:
        return null;
    }
  };

  return (
    <>
    <Header toggleDarkMode={toggleDarkMode} />
    <Center>
    <Urls>
      <StyledLink href="/">Головна</StyledLink>
      <StyledSvg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.46875 0L0 1.46875L4.77083 6.25L0 11.0312L1.46875 12.5L7.71875 6.25L1.46875 0Z" fill="black" fill-opacity="0.61"/>
      </StyledSvg>
      <StyledP>Мій акаунт</StyledP>
    </Urls>
    </Center>
   
    <Page>

      <Container>
        <Menu>
          <Text>МІЙ АКАУНТ</Text>
          <Point href="/user-profile/my-shop" isActive={path === "my-shop"}>
            Мої покупки
          </Point>
          <Point href="/user-profile/user-info" isActive={path === "user-info"}>
            Дані облікового запису
          </Point>
          <Point isActive={false} href="/login" onClick={logOut}>
            Вийти
          </Point>
        </Menu>
        {renderInfo()}
      </Container>
    </Page>
    </>
  );
};

const Point = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      text-decoration: underline;
    `}
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 80px 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Text = styled.div`
  font-family: Rubik Mono One;
  font-size: 20px;
  text-align: left;
  padding-bottom: 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    opacity: 60%;
    margin-right: 10px;

`

export const StyledSvg = styled.svg`
  margin-left: 10px;
  fill: ${props => (props.showSort ? "#AD88C6" : "black")};

`

export const Urls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;


`
export const StyledP = styled.span`
  color: black;
  opacity: 60%;
  margin-left: 15px;

`

export async function getServerSideProps(context) {
  return {
    props: {
      path: context.params.path[0],
    },
  };
}

export default UserProfilePage;
