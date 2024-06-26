import styled from "styled-components";
import { auth, provider } from "../firebase";

// import images
import DisneyPlusLogo from '../assets/images/logo.svg';
import HomeIcone from '../assets/images/home-icon.svg';
import SearchIcone from '../assets/images/search-icon.svg';
import WatchlistIcone from '../assets/images/watchlist-icon.svg';
import OriginalsIcone from '../assets/images/original-icon.svg';
import MoviesIcone from '../assets/images/movie-icon.svg';
import SeriesIcone from '../assets/images/search-icon.svg';

const Header = () => {

  const handleAuth = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
    }).catch((error) => {
      alert(error.message);
    })
  };

  return (
    <Nav>
      <Logo>
        <img src={DisneyPlusLogo} alt="Disney+" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src={HomeIcone} alt="HOME" />
          <span>HOME</span>
        </a>
        <a href="/home">
          <img src={SearchIcone} alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a href="/home">
          <img src={WatchlistIcone} alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a href="/home">
          <img src={OriginalsIcone} alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a href="/home">
          <img src={MoviesIcone} alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a href="/home">
          <img src={SeriesIcone} alt="HOME" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100% ;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &::before{
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: '';
        height: 2px;
        opacity: 0; 
        position: absolute;
        left: 0px;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover{
      span::before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px){
    display: none;
  } */
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover{
    background-color: #9f9f9f;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;