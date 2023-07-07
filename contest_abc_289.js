//A-flip
process.stdin.setEncoding("utf8");
 
var lines = []; 
var reader = require("readline").createInterface({
  input: process.stdin,
});
 
reader.on("line", (line) => {
  lines.push(line); 
});
reader.on("close", () => {
//console.log(lines[0].split(""));
let result = [];
for(let i=0; i<lines[0].length; i++){
  if(lines[0][i] === "1"){
    result.push(0);
  }else {
    result.push(1);
  }
}
console.log(result.join(""));

});