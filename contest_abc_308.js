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


//メモリオーバー....
//ソート終わる度に、最後の要素が確定するので、そこまでソートに含めないようにすれば良い？？
function Main(input){
  input = input.split("\n");
 
 let n=0;
   while(n<=input[0]-1){
     for(let i=1; i<=input[0]-1; i++){
      console.log(i);
      console.log(input);
      let A = input[i];
      let B = input[i+1];
      console.log(A);
      console.log(B);
      let a = A.split(" ");
      let b = B.split(" ");
      //console.log(b);
      let aProb = Number(a[0]) * (Number(b[0])+ Number(b[1]));
      let bProb = Number(b[0]) * (Number(a[0])+ Number(a[1]));
      console.log(aProb);
      console.log(bProb);
 
        if(aProb < bProb){
          console.log("-----------")
          input[i] = B;
          input[i+1] = A;
          console.log(input);
          console.log("-----------")
        }
      }
    n++;
   }
   
   
 }
 Main(require("fs").readFileSync("/dev/stdin", "utf8"));



//sortを1巡しかできていない。
//長さ-1回同じ処理を繰り返す
// function Main(input){
//   input = input.split("\n");
 
   
//   for(let i=1; i<=input[0]-1; i++){
//     console.log(i);
//     console.log(input);
//     let A = input[i];
//     let B = input[i+1];
//     console.log(A);
//     console.log(B);
//     let a = A.split(" ");
//     let b = B.split(" ");
//     //console.log(b);
//     let aProb = Number(a[0]) * (Number(b[0])+ Number(b[1]));
//     let bProb = Number(b[0]) * (Number(a[0])+ Number(a[1]));
//     console.log(aProb);
//      console.log(bProb);
    
//     if(aProb < bProb){
//       console.log("-----------")
//       input[i] = B;
//       input[i+1] = A;
//       console.log(input);
//       console.log("-----------")
//     }
//   }
 
//  }
//  Main(require("fs").readFileSync("/dev/stdin", "utf8"));