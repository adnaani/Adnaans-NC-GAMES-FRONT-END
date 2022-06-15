import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviewById } from "../../utils/api";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import "./SingleReview.css";

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

      <section className="votes">
        <BiIcons.BiUpvote className="vote-btn" />
        <p>{review.votes}</p>
        <BiIcons.BiDownvote className="vote-btn" />
      </section>
      <button className="comment-btn">Load Comments</button>
    </body>
  );
};

export default SingleReview;
