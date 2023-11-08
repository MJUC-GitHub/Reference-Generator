javascript:
const formattedDate =
  new Date(document.lastModified)
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .join("-") + ". ";

const today =
  ", (accessed " +
  new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .join("-") +
  ").";
let pageTitle = document.title;
let authorName = "[Author Name]. ";
let WebsiteName = "[Website Name]. ";
if (location.href.includes("wikipedia")) {
  pageTitle = "“" + pageTitle.replace(" - Wikipedia", "") + "”. ";
  authorName = "Wikipedia contributors. ";
  WebsiteName = "Wikipedia. ";
}
const result =
  authorName + pageTitle + WebsiteName + formattedDate + location.href + today;
navigator.clipboard.writeText(result).then(() => {
  alert("Generated a reference and copied it to the clipboard");
});
