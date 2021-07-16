import "./styles.css";

var capacity = 12;
var studentsList = [
  "reg 1 B V",
  "reg 2 A V",
  "reg 3 A V",
  "reg 4 B NV",
  "reg 5 B V",
  "reg 6 A NV",
  "reg 7 A V",
  "reg 8 A NV",
  "reg 9 B NV",
  "reg 10 B V",
  "reg 11 A NV",
  "reg 12 B NV"
];

document.getElementById("app").innerHTML = JSON.stringify(
  sortHat(capacity, studentsList)
);

function sortHat(capacity, studentsList) {
  const invalidStudentsList = studentsList.splice(capacity);
  const validStudentsList = studentsList.splice(0, capacity);
  let finalObj = {};
  validStudentsList.forEach((ele) => {
    const splitArray = ele.split(" ");
    finalObj[splitArray[2] + splitArray[3]] = [];
  });
  Object.keys(finalObj).forEach((key) => {
    const tempArray = [];
    validStudentsList.forEach((ele) => {
      const splitArray = ele.split(" ");
      if (key === splitArray[2] + splitArray[3]) {
        tempArray.push(Number(splitArray[1]));
        finalObj[key] = tempArray;
      }
    });
  });

  if (invalidStudentsList.length > 0) {
    invalidStudentsList.forEach((ele) => {
      const tempArray = [];
      const splitArray = ele.split(" ");
      tempArray.push(Number(splitArray[1]));
      finalObj["NV"] = tempArray;
    });
  } else {
    finalObj["NV"] = [];
  }
  return finalObj;
}
