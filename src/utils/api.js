import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://adnaans-games.herokuapp.com/api",
});

export const getAllReviews = (category, sort_by, order) => {
  return gamesApi
    .get("/reviews", { params: { category, sort_by, order } })
    .then(({ data }) => {
      return data.reviews;
    });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`reviews/${review_id}`).then(({ data }) => {
    return data.reviews;
  });
};

export const getAllCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const updateVotes = (review_id, inc_votes) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then(({ data }) => {
      return data.reviews;
    });
};

export const getCommentsById = (review_id) => {
  return gamesApi.get(`reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
