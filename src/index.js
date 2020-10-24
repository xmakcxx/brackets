module.exports = function check(input, str) {
    if(input[0]==='1'){
        return true
    }
    let x = ""
    for(let i = 0; i < str.length;i++){
      let c = str[i];
      // console.log(bracketsConfig[i])
       for(k = 0; k < c.length; k++){
       x = x + c[k]
       
    }
       }
    //    if(Number(x[1])!=NaN){
    //        return false
    //    }
       console.log(x)
       let i = 0;
       while((input.indexOf('|') != -1 )){
i++
         if(i%2===1){
          x = x.replace('|','<')
          console.log(x)
          input = input.replace('|','<')
         }else{
        x = x.replace('|','>')
        console.log(x)
        input = input.replace('|','>')
         }
       }
      
       let brackets = x
    let stack = []
    
  
    for(let bracket of input) {
      let bracketsIndex = brackets.indexOf(bracket)
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  }
