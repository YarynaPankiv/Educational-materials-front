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
import MyOrder from "@/models/MyOrder";
import { Product } from "@/models/Product";
import Center from "@/components/Center";

const UserProfilePage = ({
  toggleTheme,
  path,
  categories,
  subcategories,
  orders,
  products,
  darkTheme,
}) => {
  const router = useRouter();
  const { logout, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userOrders, setUserOrders] = useState([]);
  const [product, setProduct] = useState([]);
  const userId = user ? user.data._id : null;

  console.log(orders)
//  setUserOrders(orders.filter((order) => order.userId === userId));

  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 600;
    setIsMobile(isMobileDevice);
  }, []);

  useEffect(() => {
    if (!renderInfo()) {
      router.push("/user-profile/user-info");
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const renderInfo = () => {
    switch (path) {
      case "user-info":
        return <UserEditor darkTheme={darkTheme} />;
      case "my-shop":
        return <MyShopping orders={orders} products={products} darkTheme={darkTheme}/>;
      default:
        return null;
    }
  };

  return (
    <>  
      <Header
        toggleTheme={toggleTheme}
        categories={categories}
        subcategories={subcategories}
        darkTheme={darkTheme}
      />

      <Center>
         <Urls page={"Мій акаунт"} darkTheme={darkTheme}/>

      </Center>
    
   
      {isMobile && (
        <>
          <MobileMenuButton onClick={toggleMenu}>
            <MenuIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </MenuIcon>
          </MobileMenuButton>
          <MobileMenu isOpen={isMenuOpen} darkTheme={darkTheme}>
            <MenuItem darkTheme={darkTheme}>
              <Link href="/user-profile/my-shop" onClick={closeMenu} darkTheme={darkTheme}>
                Мої покупки
              </Link>
            </MenuItem>
            <MenuItem darkTheme={darkTheme}>
              <Link href="/user-profile/user-info" onClick={closeMenu}>
                Дані облікового запису
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/login"
                onClick={() => {
                  closeMenu();
                  logout();
                }}
              >
                Вийти
              </Link>
            </MenuItem>
          </MobileMenu>
        </>
      )}
      <Center>
      {!isMobile && (
        <Menu>
          <Text>МІЙ АКАУНТ</Text>
          <Point href="/user-profile/my-shop" isActive={path === "my-shop"} darkTheme={darkTheme}>
            Мої покупки
          </Point>
          <Point href="/user-profile/user-info" isActive={path === "user-info"} darkTheme={darkTheme}>
            Дані облікового запису
          </Point>
          <Point isActive={false} href="/login" onClick={logout} darkTheme={darkTheme}>
            Вийти
          </Point>
        </Menu>
      )}

      </Center>
      
      <Page>{renderInfo()}</Page>
    </>
  );
};

const Point = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.darkTheme ? "white" : "black")};

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
  padding: 50px 0px;
  width: 300px;
`;

const MenuIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const MobileMenuButton = styled.button`
  top: 160px;
  left: 1px;
  z-index: 999;
  background-color: #ad88c6;
  color: white;
  border: none;
  padding: 0px 35px 0px 0px;
  font-size: 16px;
  border-radius: 5px;
  width: 10px;
  cursor: pointer;
  margin-left: 1%;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 80%;
  height: 100%;
  background-color: white;
  z-index: 999;
  transition: right 0.3s ease-in-out;
`;

const MenuItem = styled.div`
  padding: 0;
  border-bottom: 1px solid #ccc;
  color: ${(props) => (props.darkTheme ? "white" : "black")};


  &:last-child {
    border-bottom: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.darkTheme ? "white" : "black")};
    font-size: 18px;
  }
`;

const Page = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    margin-top: 80%;
  }
`;

export async function getServerSideProps(context) {
  const orders = await MyOrder.find({}, null);
  const products = await Product.find({}, null);
  const categories = await Category.find({}, null);
  const subcategories = await SubCategory.find({}, null);
  return {
    props: {
      path: context.params.path[0],
      orders: JSON.parse(JSON.stringify(orders)),
      products: JSON.parse(JSON.stringify(products)),
      categories: JSON.parse(JSON.stringify(categories)),
      subcategories: JSON.parse(JSON.stringify(subcategories)),
    },
  };
}

export default UserProfilePage;
