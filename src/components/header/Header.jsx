import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';

import './header.scss';

import ContentWrapper from '../contentWrapper/ContentWrapper';
import logo from '../../assets/movix-logo.svg';

const Header = () => {
  const [show, setShow] = useState('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavbar = () =>{
    // console.log(window.scrollY);
    // console.log('lastScrollY: ' + lastScrollY);
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY && !mobileMenu){
        setShow("hide");
      }else{
        setShow("show")
      }
    }else{
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  useEffect(()=>{
    window.addEventListener('scroll',handleNavbar)

    return () => {
      window.removeEventListener('scroll',handleNavbar)
    }
  },[lastScrollY])

  const handleNavigation = (type) => {
    navigate(`/explore/${type}`);
    setMobileMenu(false);
  };

  const handleOpenSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const handleMobileMenu = () => {
    setShowSearch(false);
    setMobileMenu(true);
  };

  const handleSearch = (event) => {
    if (event.key == 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  return (
    <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
      <ContentWrapper>
        <div className='logo' onClick={()=>navigate("/")}>
          <img src={logo} alt='movie-app' />
        </div>
        <ul className='menuItems'>
          <li className='menuItem' onClick={() => handleNavigation('movie')}>
            Movies
          </li>
          <li className='menuItem' onClick={() => handleNavigation('tv')}>TV Shows</li>
          <li className='menuItem'>
            <HiOutlineSearch onClick={handleOpenSearch}/>
          </li>
        </ul>

        <div className='mobileMenuItems'>
          <HiOutlineSearch onClick={handleOpenSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={handleMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className='searchBar'>
          <ContentWrapper>
            <div className='searchInput'>
              <input
                type='text'
                value={query}
                placeholder='Search for a movie or tv show...'
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={handleSearch}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
