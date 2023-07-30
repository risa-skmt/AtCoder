//A-Chord  .trim()で空白を無くす！！！！
function Main(input){
    let s = input.trim();
    if(s === "ACE" || s === "BDF" || s === "CEG" || s === "DFA" || s === "EGB" || s === "FAC" || s === "GBD" ){
       console.log("Yes");
    }else {
       console.log("No");
    }
  }
  
  
  
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));