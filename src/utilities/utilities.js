export const dateFormat = (date, withTime) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    time = d.getUTCHours() + ":" + d.getUTCMinutes() + "0";

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return withTime
    ? `${day}/${month}/${year} ore ${time}`
    : `${day}/${month}/${year}`;
};

export const getKeyFromValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};
