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
import { useAuth } from "@/Contexts/AccountContext";
import Center from "@/components/Center";
import Urls from "@/components/Urls";
import SubCategory from "@/models/SubCategory";
import { Category } from "@/models/Category";

const UserProfilePage = ({ toggleDarkMode, path, categories, subcategories }) => {
  const router = useRouter();
  const {logout} = useAuth();

  useEffect(() => {
    if (!renderInfo()) {
      router.push("/user-profile/user-info");
    }
  }, []);

 

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
    <Header toggleDarkMode={toggleDarkMode} categories={categories} subcategories={subcategories}/>
    <Urls page={"Мій акаунт"}/>
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
          <Point isActive={false} href="/login" onClick={logout}>
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

export async function getServerSideProps(context) {
  const categories = await Category.find({});
  const subcategories = await SubCategory.find({});
  return {
    props: {
      path: context.params.path[0],
      categories: JSON.parse(JSON.stringify(categories)),
      subcategories: JSON.parse(JSON.stringify(subcategories)),
    },
  };
}

export default UserProfilePage;
