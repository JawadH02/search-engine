import React, { useContext } from "react";
import "./searchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { inputContext } from "../../context/inputContext";

export const SearchBar = ({ hideButtons = false }) => {

    const { input, setInput, search } = useContext(inputContext);

  return (
    <form className="search">
      <div className="search__input--wrapper">
        <SearchIcon className="search__input--icon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && search}
          type="text"
          className="search__input"
          required
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttons--hidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttons--hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};
