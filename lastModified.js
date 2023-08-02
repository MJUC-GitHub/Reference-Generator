javascript: var lastModified = document.lastModified;
var formattedDate = new Date(lastModified).toLocaleString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
alert(formattedDate);
