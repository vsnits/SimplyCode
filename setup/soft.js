
  // soft.js
  
  function putInside() {
      var res = ""
      for(var i = 0; i < input.value.length; i++) {
          res += input.value[i]
          if((input.value[i] == "p" || input.value == "b" || input.value[i] == "P" || input.value == "B")
          && input.value[i-1] == "<" &&  input.value[i+1] == ">") {
              res += " "
              }
          }; input.value = res
      };

  function pustText(el, text, offset) {
      var val = el.value, endIndex, range, doc = el.ownerDocument;
      if(typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
          endIndex = el.selectionEnd;
          el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
          el.selectionStart = el.selectionEnd = endIndex + text.length+(offset?offset:0);
          } else if (doc.selection != "undefined" && doc.selection.createRange) {
          el.focus();
          range = doc.selection.createRange();
          range.collapse(false);
          range.text = text;
          range.select();
          }
      };

  function computeStyle() {
      var color = getComputedStyle(input).getPropertyValue("color")
      var background = getComputedStyle(input).getPropertyValue("background-color")
      console.log(`
      configure.cache = ${configure.cache}
      configure.cacheonfocus = ${configure.cacheonfocus}
      configure.gridsize = ${configure.gridsize}
      configure.gridcolor = ${JSON.stringify(configure.gridcolor)} 
      configure.background = "${background}"
      configure.fontcolor = "${color}"
      `)
      };

  function executeCode() {
      console.log(eval(input.value))
      };

 
