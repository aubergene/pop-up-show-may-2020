export const slugify2 = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z]+/g, " ")
    .trim()
    .replace(/ /g, "-");
};

export const formatDate = new Intl.DateTimeFormat([], {
  weekday: "short",
  month: "short",
  day: "numeric",
}).format;

export const formatTime = new Intl.DateTimeFormat([], {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
}).format;

export const formatDateTime = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  weekday: "short",
  month: "short",
  day: "numeric",
  timeZoneName: "short",
}).format;
