import React from "react";
import Button from '../Button'
import styled from "styled-components";
import {useTheme} from '../../providers/ThemeProvider'
import { useLocales } from "../../providers/LocalesProvider";
import { Link, useLocation } from "react-router-dom";

const Navigation = styled("nav")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 8px;
  box-sizing: border-box;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.backgroundColor.main}
  box-shadow: 0 0 4px 0 #333;

  > ul {
    display: flex;
    flex-direction: row;
    margin: 0px 0px 0px 8px;
    padding: 0px;
  }
  > div {
    margin-top: 16px;
  }
`;

const NavItem = styled("li")`
  list-style: none;
  padding: 0;
  margin: 0px 8px 0px 0px;

  > a {
    text-decoration: ${(props) => (props.active ? "underline" : "none")};
    color: ${(props) => props.theme.color.main};
  }
`;

const Header = () => {
  const location = useLocation();
  const { toggleTheme } = useTheme();
  const {trans,toggleLang} = useLocales()

  return (
    <Navigation>
      <ul>
        <NavItem active={location.pathname.includes("posts")}>
          <Link to="posts">{trans.posts}</Link>
        </NavItem>
        <NavItem active={location.pathname.includes("todos")}>
          <Link to="todos">{trans.todos}</Link>
        </NavItem>
        <NavItem active={location.pathname.includes("users")}>
          <Link to="users">{trans.users}</Link>
        </NavItem>
        <NavItem active={location.pathname.includes("albums")}>
          <Link to="albums">{trans.albums}</Link>
        </NavItem>
        <NavItem active={location.pathname.includes("photos")}>
          <Link to="photos">{trans.photos}</Link>
        </NavItem>
      </ul>
      <div>
        <Button onClick={toggleLang} type="button">{trans.changeLang}</Button>
        <Button onClick={toggleTheme} type="button">{trans.changeTheme}</Button>
      </div>
    </Navigation>
  );
};

export default Header;
