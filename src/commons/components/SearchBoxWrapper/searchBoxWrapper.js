import "./searchBoxWrapper.styles.scss";
import logoML from "../../../assets/Logo_ML.png";
import searchIcon from "../../../assets/ic_Search.png";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { useNavigate  } from 'react-router-dom';

const SearchBoxWrapper = (props) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate ();

  const { handleSearch } = useSearch(query);

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleOnClickSearch = async () => {
    navigate(`/items?search=${query}`);
    await handleSearch();
  }

  return (
    <div className="search-box-wrapper__container">
      <div className="search-box__container">
        <img src={logoML} alt="logo-ml" />
        <div className="search-box__search-container">
          <input
            value={query}
            onChange={handleChangeQuery}
            className="search-box__input"
            type="text"
            placeholder="Nunca dejes de buscar"
          ></input>
          <button type="submit" onClick={handleOnClickSearch}>
            <img src={searchIcon} alt="logo-ml" />
          </button>
        </div>
      </div>
      <div>
      {props.children}
      </div>
    </div>
  );
};

export default SearchBoxWrapper;
