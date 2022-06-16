import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviewById } from "../../utils/api";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import "./SingleReview.css";
import Votes from "../Votes/Votes";

const SingleReview = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <body className="page-container">
      <div className="polaroid">
        <img src={review.review_img_url} alt={review.title} width="170px" />
        <div className="container">
          <header>
            <h2>{review.title}</h2>
            <h5>by {review.designer}</h5>
          </header>
        </div>
      </div>
      <section>
        <MdIcons.MdTopic className="vote-btn" />
        <Link
          to={`/categories/${review.category}`}
          className="review-categories"
        >
          {review.category}
        </Link>
        <h5>Posted by {review.owner}</h5>
      </section>
      <span className="review-container">{review.review_body}</span>

      <Votes review_id={review_id} votes={review.votes} />

      <section className="load-comment-container">
        <Link
          to={`/reviews/${review_id}/comments`}
          className="comment-btn-link"
        >
          <BiIcons.BiComment className="comment-btn" />
          Load Comments
        </Link>
      </section>
    </body>
  );
};

export default SingleReview;