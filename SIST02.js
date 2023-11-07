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
  "[著者名]. " +
  "“" +
  document.title +
  "”. " +
  "[Webサイトの名称]. " +
  formattedDate +
  ". " +
  location.href +
  ", (参照 " +
  today +
  ").";
navigator.clipboard.writeText(result).then(() => {
  alert("生成した参考文献をコピーしました");
});
