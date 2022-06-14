export const organiseDate = (dateTime) => {
  let [date, time] = dateTime.split("T");
  let [y, m, d] = date.split("-");
  date = [d, m, y].join("-");
  let [t] = time.split(".");
  return [date, t];
};
