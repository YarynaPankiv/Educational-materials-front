import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserEditor from "@/components/UserEditor";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "@/Contexts/AccountContext";
import Urls from "@/components/Urls";
import SubCategory from "@/models/SubCategory";
import { Category } from "@/models/Category";
import MyShopping from "@/components/MyShopping";

const UserProfilePage = ({
  toggleDarkMode,
  path,
  categories,
  subcategories,
}) => {
  const router = useRouter();
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!renderInfo()) {
      router.push("/user-profile/user-info");
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderInfo = () => {
    switch (path) {
      case "user-info":
        return <UserEditor />;
      case "my-shop":
        return <MyShopping />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header
        toggleDarkMode={toggleDarkMode}
        categories={categories}
        subcategories={subcategories}
      />
      <Urls page={"Мій акаунт"} />
      <MobileMenuButton onClick={toggleMenu}>Меню</MobileMenuButton>
      {isMenuOpen && (
        <MobileMenu>
          <MenuItem>
            <Link href="/user-profile/my-shop">Мої покупки</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/user-profile/user-info">Дані облікового запису</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/login" onClick={logout}>
              Вийти
            </Link>
          </MenuItem>
        </MobileMenu>
      )}
      {!isMenuOpen && (
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
      )}
      <Page>{renderInfo()}</Page>
    </>
  );
};
const Point = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Text = styled.div`
  font-family: Rubik Mono One;
  font-size: 20px;
  text-align: left;
  padding-bottom: 10px;
`;
const Menu = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-left: 16%;
  padding: 80px 20px;
`;
const MobileMenuButton = styled.button`
  position: absolute;
  top: 11 0px;
  left: 1px;
  z-index: 999;
  background-color: #ad88c6;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1%;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  height: 70%;
  background-color: white;
  z-index: 998;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }
`;

const Page = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
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
