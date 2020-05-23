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
