
  /* #spacepy small suite for python tabulation,
    easily could be writen with python or shell either */
  
  function makestr(str, n) {
      var spaces = 0, tabs = 0, i = 0
      for(; i < str.length; i++) {
          if(str[i] != "\t" && str[i] != " ") { break }
          else if(str[i] == "\t") { tabs++ }
          else if(str[i] == " ") { spaces++ }
          }
      if(spaces % 2 == 1) { // round value mod 4
          (spaces % 4 == 1)? (spaces -= 1) : (spaces += 1)
          }
      else if(spaces % 4 == 2) { // other cases already covered
          console.info(`String ::${n} couldn't be understood.`)
          spaces -= 2 // floor value
          }
      var res = "/t".repeat(tabs) + " ".repeat(spaces)
      for(; i < str.length; i++) {
          res += str[i]
          }
      return res
      };

  function spacepy(text) {
      var num = 1, st = "", result = ""
      for(var i = 0; i < text.length; i++) {
          if(text[i] == "\n") { 
              result += (makestr(st, num++)+"\n"); st = ""  // x++ returns x
              }
          else { st += text[i] }
          }
      return result+makestr(st, num++)
      };
   
