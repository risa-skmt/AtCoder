//A-filter
process.stdin.setEncoding("utf8");

var lines = []; 
var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  lines.push(line); 
});
reader.on("close", () => {
  //console.log(lines[1].split(" "));
  let inputArray = lines[1].split(" ");
  let array = [];
  for(let i=0; i<=inputArray.length-1; i++){
    array.push(Number(inputArray[i]));
  }
  //console.log(array);
  let result = array.filter(ele=>  ele%2 === 0);
  console.log(result.join(" "));
});