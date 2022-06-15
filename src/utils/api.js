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

export const updateVotes = () => {
  return gamesApi.patch("/reviews/:review_id").then(({ data }) => {
    return data.reviews;
  });
};
