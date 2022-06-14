import React, { useEffect, useState } from "react";
import { getAllReviews } from "../../utils/api";
import ReviewCard from "../ReviewCard/ReviewCard";
import DropDownBtn from "./DropDownButtons";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState({});
  const [orderBy, setOrderBy] = useState({});
  const [isCategoryValid, setIsCategoryValid] = useState(false);
  const [isOrderByValid, setIsOrderByValid] = useState(false);

  console.log(orderBy);

  useEffect(() => {
    getAllReviews().then((categoriesFromApi) => {
      setReviews(categoriesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <DropDownBtn
        setCategory={setCategory}
        setOrderBy={setOrderBy}
        setIsCategoryValid={setIsCategoryValid}
        setIsOrderByValid={setIsOrderByValid}
      />
      <div className="reviews-card">
        <ul>
          {isCategoryValid
            ? category.map((review, index) => {
                return <ReviewCard review={review} key={index} />;
              })
            : isOrderByValid
            ? orderBy.map((review, index) => {
                return <ReviewCard review={review} key={index} />;
              })
            : reviews.map((review, index) => {
                return <ReviewCard review={review} key={index} />;
              })}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
