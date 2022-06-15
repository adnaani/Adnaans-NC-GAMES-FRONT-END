import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllCategories, getAllReviews } from "../../utils/api";

import "./Reviews.css";

const DropDownBtn = ({}) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getAllCategories().then((categoriesFromApi) => {
      setMenuItems(categoriesFromApi);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="dropdown-btn">
      <Dropdown>
        <Dropdown.Toggle
          style={{ border: "2px solid purple" }}
          variant="light"
          id="dropdown-basic"
        >
          Category
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => navigate(`/reviews`)}>
            Select All
          </Dropdown.Item>
          {menuItems.map((categories) => {
            return (
              <Dropdown.Item
                key={`${categories.slug}`}
                onClick={() => navigate(`/categories/${categories.slug}`)}
              >
                {categories.slug}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle
          style={{ border: "2px solid purple" }}
          variant="light"
          id="dropdown-basic"
        >
          Order by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Select All</Dropdown.Item>
          {["ASC", "DESC"].map((order) => {
            return <Dropdown.Item key={order}>{order}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDownBtn;
