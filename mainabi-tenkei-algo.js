//A：二分探索
function Main(input){
    //console.log(input.split("\n")[0]);
    let line1 = input.split("\n")[0].split(" ");
    let numbers = input.split("\n")[1].split(" ");
    //console.log(numbers);
    
    let left = 0;
    let right = Number(line1[0]-1);
    let half;
    let answer = null;
    while(left < right){
        half = Math.ceil((left + right) /2);
        //console.log(half);
      if(numbers[half] >= Number(line1[1])){
        right = half -1;
        answer = half;
      }else if(numbers[half] < Number(line1[1])){
        left = half +1;
      }
    }
    
    if(answer === null){
       console.log(-1);
    }else {
       console.log(answer);
    }
    
  }
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));