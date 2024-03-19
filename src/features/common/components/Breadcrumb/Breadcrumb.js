import "./Breadcrumb.styles.scss";

import AngleIcon from "assets/angle-icon.svg";
import { useSelector } from "react-redux";

const Breadcrumb = () => {
  const categories = useSelector((state) => state.common.categories);

  return (
    <div className="breadcrumb-container">
      {categories?.map((category, index) => (
        <div key={category}>
          <span>{category}</span>
          {index < categories.length - 1 && (
            <img className="angle-icon" src={AngleIcon} alt="angleIcon" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
