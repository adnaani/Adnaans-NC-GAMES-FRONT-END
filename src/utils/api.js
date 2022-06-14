import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://adnaans-games.herokuapp.com/api",
});

export const getAllCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getAllReviews = (category, sort_by, order) => {
  return gamesApi
    .get("/reviews", { params: { category, sort_by, order } })
    .then(({ data }) => {
      return data.reviews;
    });
};

export const updateVotes = () => {
  return gamesApi.patch("/reviews/:review_id").then(({ data }) => {
    return data.reviews;
  });
};
