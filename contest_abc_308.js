//C-standings
process.stdin.setEncoding("utf8");
 
var lines = []; 
var reader = require("readline").createInterface({
  input: process.stdin,
});
 
reader.on("line", (line) => {
  lines.push(line); 
});
reader.on("close", () => {
 //console.log(lines[0]);
 let array = [];
 for(let i=1; i<=lines[0]; i++){
   let object = {};
    let eachLine = lines[i].split(" ");
    let probability = Number(eachLine[0]) / (Number(eachLine[0])+Number(eachLine[1]));
    object["key"] = i;
    object["value"] = probability;
    array.push(object);
 }
  //console.log(array);
  
  array.sort((a,b) => b.value - a.value);
  //console.log(array);
  let result = [];
  for(let k=0; k<=array.length-1; k++){
    result.push(array[k]["key"]);
  }
  //console.log(result);
  console.log(result.join(" "));
});