import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../utils/api";

const Homepage = () => {
  const [category, setCategory] = useState([
    {
      description: "Players attempt to uncover each other's hidden role",
      slug: "Social deduction",
    },
    {
      description: "Uncover each other's hidden personas",
      slug: "Social something",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCategories().then((categoriesFromApi) => {
      setCategory(categoriesFromApi);
      setIsLoading(false);
    });
  }, []);

  const showReviewsByCategory = () => {};

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <div className="homepage">
        <h1>Adnaan's Games</h1>
        <h2>Search by category</h2>

        <div className="categories-card">
          <img
            src="https://www.lanspeed.com/wp-content/uploads/2019/08/it-strategy.jpg"
            alt="category-image"
            width="350px"
          />
          <ul>
            {category.map(({ slug }) => {
              return (
                <li key={slug}>
                  <Link to="/reviews">
                    {/* use the link to filter the slug */}
                    <buttons>{slug}</buttons>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Homepage;
