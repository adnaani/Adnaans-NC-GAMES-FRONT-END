import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { getAllCategories, getAllReviews } from "../../utils/api";

const DropDownBtn = ({
  setOrderBy,
  setCategory,
  setIsCategoryValid,
  setIsOrderByValid,
}) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getAllCategories().then((categoriesFromApi) => {
      setMenuItems(categoriesFromApi);
    });
  }, []);

  const showCategories = (categories, sort_by, order) => {
    getAllReviews(categories).then((filterFromApi) => {
      setCategory(filterFromApi);
      setIsCategoryValid(true);
    });
  };

  const showOrderBy = (categories, sort_by, order) => {
    getAllReviews(order).then((filterOrderFromApi) => {
      setOrderBy(filterOrderFromApi);
      console.log(filterOrderFromApi);
      setIsOrderByValid(true);
    });
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Category
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={(e) => {
              setIsCategoryValid(false);
            }}
          >
            Select All
          </Dropdown.Item>
          {menuItems.map((categories) => {
            return (
              <Dropdown.Item
                onClick={(e) => {
                  showCategories(categories.slug);
                }}
                key={categories.slug}
              >
                {categories.slug}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Order by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={(e) => {
              setIsOrderByValid(false);
            }}
          >
            Select All
          </Dropdown.Item>
          {["ASC", "DESC"].map((order) => {
            return (
              <Dropdown.Item
                onClick={(e) => {
                  showOrderBy(order);
                }}
                key={order}
              >
                {order}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropDownBtn;
