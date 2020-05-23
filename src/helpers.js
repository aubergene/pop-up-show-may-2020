export const slugify2 = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z]+/g, " ")
    .trim()
    .replace(/ /g, "-");
};

export function formatDate(date) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

const timeOptions = {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
};
export const formatTime = new Intl.DateTimeFormat([], timeOptions).format;
