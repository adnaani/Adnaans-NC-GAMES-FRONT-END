import React from "react";
import "./ReviewCard.css";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { updateVotes } from "../../utils/api";
import { organiseDate } from "../../utils/organiseDate";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const [date, time] = organiseDate(review.created_at);

  return (
    <Link className="review-link" to={`/reviews/${review.review_id}`}>
      <li className="review-card">
        <h3>{review.title}</h3>
        <img
          className="game-image"
          src={review.review_img_url}
          alt={review.title}
        />
        <h5>by {review.designer}</h5>
        <span>Category: {review.category}</span>
        <span>Votes: {review.votes}</span>
        <BiIcons.BiUpvote className="vote-btn" />
        <BiIcons.BiDownvote className="vote-btn" />
        <FaIcons.FaInfoCircle className="info-btn" />
      </li>
    </Link>
  );
};

export default ReviewCard;
