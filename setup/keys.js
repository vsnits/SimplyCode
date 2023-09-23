
  // keys.js/Users/Data/Documents/Hobby/Code/JS/Apps/@SimplyCode!/git/setup/keys.js
  
  document.onkeydown=function(e) {
      if(e.code == "Space" && e.altKey) { putInside() }
      else if(e.code == 'KeyS' && e.ctrlKey) { e.preventDefault(); savePage() }
      else if(e.code == 'KeyN' && e.altKey) { e.preventDefault(); newDoc(true) }
      else if(e.code == 'KeyO' && (e.ctrlKey || e.altKey)) { e.preventDefault(); pustFile() }
      else if(e.key == 'Enter' && e.ctrlKey && e.altKey) { e.preventDefault(); testPage() }
      else if(e.key == 'Enter' && e.ctrlKey) { e.preventDefault(); executeCode() }
      else if(e.code == "KeyI" && (e.ctrlKey || e.altKey)) { e.preventDefault(); uploadText() }
      else if(e.code == 'KeyQ' && e.altKey) { e.preventDefault(); input.value = JCtab(input.value, 4, 2) }
      else if(e.code == 'KeyA' && e.altKey) { e.preventDefault(); input.value = JCtab(input.value, 3, 1, "\n\n") }
      else if(e.key == 'Enter') { e.preventDefault(); pustText(input,"\n" + "   ",0)  }
      else if(e.key == 'Tab') { e.preventDefault(); pustText(input, "    ",0) }
      else if(e.code == "KeyR" && e.altKey) { e.preventDefault(); randomStyle() }
      else if(e.code == "KeyH" && e.altKey) { e.preventDefault(); history.view() }
      else if(e.code == "KeyP" && e.altKey) { e.preventDefault(); input.value = spacepy(input.value) } 
      };

  input.onscroll = function() {
    if(configure.cache) {
      store.set(tpcloud, input.scrollTop)
         }
      };

  document.onkeyup = function() {
      if(configure.cache) {
          store.set(txtcloud,input.value, false)
          }
      };

