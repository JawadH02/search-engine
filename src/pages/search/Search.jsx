import React, { useContext } from "react";
import Response from "../../api/response";
import { inputContext } from "../../context/inputContext";
import { useGoogleSearch } from "../../hooks/useGoogleSearch";
import "./search.css";
import googleLogo from "../../assets/images/google_logo.jpg";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/index";
import { items } from "./data";

export const Search = () => {
  const { input } = useContext(inputContext);
  // live api call
  const { data } = useGoogleSearch(input);

  console.log(localStorage.getItem("inputValue"));

//   mock api call
//   const data = Response;

//   console.log(data);
  return (
    <section id="search__section">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src={googleLogo}
            alt="google logo"
          />
        </Link>

        <div className="searchPage__header--body">
          <SearchBar hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__options--left">
              {items.map((item) => (
                <div className="searchPage__option" key={item.id}>
                  {item.icon}
                  <Link to={item.link}>{item.content}</Link>
                </div>
              ))}
            </div>
            <div className="searchPage__options--right">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {input && (
        <div className="searchPage__results">
          <p className="searchPage__result--count">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds) for {input}
          </p>
          {data?.items?.map((item, index) => (
            <div className="searchPage__result" key={index}>
              <a className="searchPage__result--link" href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                      <img src={item.pagemap?.cse_image[0]?.src} alt="" className="searchPage__result--img" />
                  )}
                  {item.displayLink}</a>
              <a href={item.link} className="searchPage__result--title">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__result--snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
