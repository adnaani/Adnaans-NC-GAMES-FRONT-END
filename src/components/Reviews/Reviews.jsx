import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllReviews } from "../../utils/api";
import ReviewCard from "../ReviewCard/ReviewCard";
import DropDownBtn from "./DropDownButtons";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category_name } = useParams();

  useEffect(() => {
    getAllReviews(category_name).then((categoriesFromApi) => {
      setReviews(categoriesFromApi);
      setIsLoading(false);
    });
  }, [category_name]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <DropDownBtn />
      <div className="reviews-card">
        <ul>
          {reviews.map((review, index) => {
            return <ReviewCard review={review} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
