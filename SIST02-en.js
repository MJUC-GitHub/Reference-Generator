javascript:
const formattedDate = new Date(document.lastModified)
  .toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  .split("/")
  .join("-");
const today = new Date()
  .toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  .split("/")
  .join("-");
const result =
  "[Author Name]. " +
  "“" +
  document.title +
  "”. " +
  "[Website Name]. " +
  formattedDate +
  ". " +
  location.href +
  ", (accessed " +
  today +
  ").";
navigator.clipboard.writeText(result).then(() => {
  alert("Generated a reference and copied it to the clipboard");
});
