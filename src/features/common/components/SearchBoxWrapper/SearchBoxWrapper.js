import "./SearchBoxWrapper.styles.scss";

import { useEffect, useState } from "react";

import Breadcrumb from "../Breadcrumb/Breadcrumb";
import logoML from "assets/Logo_ML.png";
import searchIcon from "assets/ic_Search.png";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";

const SearchBoxWrapper = (props) => {
  const { query: queryParam } = useSearch();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (queryParam && queryParam !== query) {
      setQuery(queryParam);
    }
  }, [queryParam]);

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/items?search=${query}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-box-wrapper__container">
      <div className="search-box__container">
        <img src={logoML} alt="logo-ml" />
        <div className="search-box__search-container">
          <input
            value={query}
            onKeyDown={handleKeyPress}
            onChange={handleChangeQuery}
            className="search-box__input"
            type="text"
            placeholder="Nunca dejes de buscar"
          ></input>
          <button type="submit" onClick={handleSearch}>
            <img src={searchIcon} alt="logo-ml" />
          </button>
        </div>
      </div>
      <div className="center-content">
        <div className="content">
          <Breadcrumb />
          <div className="content-box">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export { SearchBoxWrapper };
