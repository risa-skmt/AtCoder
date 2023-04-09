//A - Double Click
process.stdin.setEncoding("utf8");

var lines = []; 
var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  lines.push(line); 
});
reader.on("close", () => {
  let A = lines[0].split(" ");
  let B = lines[1].split(" ");
  //console.log(lines[0].split(" ")); 
  //console.log(lines[1].split(" "));
  
  let count = 0;
  for(let i=1; i<=A[0]-1; i++){
    //console.log(B[i]);
    let before = B[i-1]
    //console.log(before);
    let inter = A[1];
    //console.log(inter);
    
    if(B[i] - before <= inter){
       console.log(B[i]);
       count = 1;
       break;
    }
  } 
  if(count === 0){
    console.log(-1); 
     }
});



//B - chess960
process.stdin.setEncoding("utf8");

var lines = []; 
var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  let array = lines[0].split(""); 
  
  let answer = 0;
  let B_which = [];
  let R_where = [];
  let K = 0;
  
  for(let i=0; i<=array.length-1; i++){
   //Bの位置
     if(array[i] === "B"){
        B_which.push(i+1);
     }
    
    //Rの位置とK
    if(array[i] === "R"){
      R_where.push(i+1); 
    }
     if(array[i] === "K"){
      K = i+1;
     }
  }
  
  //Bの偶奇
    if(B_which[0]%2 === 0 && B_which[1]%2 === 1){
        answer = answer + 1;
     }else if((B_which[0]%2 === 1) && (B_which[1]%2 === 0)){
        answer = answer +1;
     }
  
  
  //KとR
    if(R_where[0] <= K && K<= R_where[1]){
       answer = answer +1;
    }
  
  //console.log(answer);
  //console.log(B_which);
  //console.log(R_where);
  //console.log(K);
  
  if(answer === 2){
   console.log("Yes");
  }else{
   console.log("No");
  }
  
});


//C - PC on the Table
process.stdin.setEncoding("utf8");

var lines = []; 
var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  //console.log(lines);
  let line_one = lines[0].split(" ");
  //console.log(line_one[0]);
  for(let i=1; i<=line_one[0]; i++){
    //console.log(lines[i].split(""));
    let each = lines[i].split("")
    
    for(let k=1; k<=line_one[1]-1; k++){
       //console.log(each[k]);
      if(each[k] === "T" && each[k-1] === "T"){
        each.splice(k,1,"C");
        each.splice(k-1,1,"P");
      }
    } console.log(each.join(""));
    
  }
});
