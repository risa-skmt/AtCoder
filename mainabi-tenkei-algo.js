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


//まだエラーあり。理由わからん。
//   Main(require("fs").readFileSync("/dev/stdin", "utf8"));


//   function Main(input){
//     input = input.trim().split("\n");
//     let line1= input[0].split(" ");
//     let length = Number(line1[0]);
//     let border = Number(line1[1]);
//     let array = input[1].split(" ");
    
    
//     if(array[length-1] < border){
//      console.log(-1);
//     }
//     if(array[0] >= border){
//      console.log(0);
//     }
    
//     let left = 0;
//     let right = length-1;
//     while((right - left) > 1){
//       let center = Math.ceil((right+left)/2);
//       if(array[center] >= border){
//           right = center;
//       }else {
//           left = center
//       }
//     }
//     console.log(right);
//   }
//   Main(require("fs").readFileSync("/dev/stdin", "utf8"));