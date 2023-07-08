//A
function Main(input){
    input = input.split(" ");
    //console.log(input);
    if(input[0]%3 === 1 && input[1]-input[0]===1){
       console.log("Yes");
    }else if(input[0]%3 === 2 && input[1]-input[0] === 1){
       console.log("Yes");
    }else {
       console.log("No");
    }
  }
  
  
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  

  //B
  function Main(input){
    input = input.split("\n");
    //console.log(input);
    let firstLine = [];
    firstLine.push(input[2][0]);
    for(let k=0; k<=input[0]-2; k++){
      firstLine.push(input[1][k]);
    }
    console.log(firstLine.join(""));
    
    for(let m=2; m<=input[0]-1; m++){
      let input_copy = input[m].split("");
      input_copy[0] = input[m+1][0];
      input_copy[input[0]-1] = input[m-1][input[0]-1];
      console.log(input_copy.join(""));
    }
    
    
    let lastLine = [];
    for(let i=1; i<=input[0]-1; i++){
      lastLine.push(input[input[0]][i]);
    }
    lastLine.push(input[input[0]-1][input[0]-1]);
    console.log(lastLine.join(""));
    
  }
  
  
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  