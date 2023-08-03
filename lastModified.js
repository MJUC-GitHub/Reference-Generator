javascript: const lastModified = document.lastModified;
var formattedDate = new Date(lastModified).toLocaleString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
var today = new Date();
var result = ("URL: " + location.href + "\n" + "Title: " + document.title+"\n"+ "Last Modified: " + formattedDate);
navigator.clipboard.writeText(result).then(
  () => {
    alert(result+"\n"+"Copied website info"+today);
  },
);
