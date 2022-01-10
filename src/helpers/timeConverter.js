export function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = (a.getDate() < 10 ? "0" : "") + a.getDate();
  let hour = a.getHours();
  let min = (a.getMinutes() < 10 ? "0" : "") + a.getMinutes();
  let time = date + "." + month + "." + year + "г." + " " + hour + ":" + min;
  return time;
}
