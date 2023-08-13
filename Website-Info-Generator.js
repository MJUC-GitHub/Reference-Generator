javascript: const formattedDate = new Date(document.lastModified).toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).split("/").join("-");
var today = new Date().toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).split("/").join("-");
var result = ("URL: " + location.href + "\n" + "Title: " + document.title + "\n" + "Last Modified: " + formattedDate + "\n"+ "Today: " + today);
navigator.clipboard.writeText(result).then(
  () => {
    alert(result+"\n"+"Copied website info");
  },
);
