import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { SearchBar } from '../../components/searchBar/SearchBar';
import googleLogo from '../../assets/images/google_logo.jpg';
import './home.css';

export const Home = () => {
  return (
    <section id="home__section">
      <div className="home__header">
        <div className="home__header--left">
          <Link className="home__header--link" to="/about">
            About
          </Link>
          <Link className="home__header--link" to="/store">
            Store
          </Link>
        </div>
        <div className="home__header--right">
          <Link className="home__header--link" to="/gmail">
            Gmail
          </Link>
          <Link className="home__header--link" to="/images">
            Images
          </Link>
          <AppsIcon />
          <Avatar className="home__header--avatar" />
        </div>
      </div>

      <div className="home__body">
        <img className="home__body--img" src={googleLogo} alt="google logo" />
        <div className="home__input--container">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};
