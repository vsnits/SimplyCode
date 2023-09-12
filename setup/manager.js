
  // manager.js
  
  function testPage() {
      console.clear()
      var textpage = input.value
      document.write(textpage)
      setTimeout(function() { dispatchEvent(new Event('load')) }, 50)
      };

  function savePage() {
      var value = (input.value)
      var Name = history.write(input.value)
      Download(value, Name, "allfiles")
      };

  function pustFile() {
      var b = document.createElement('input')
      b.type="file"
      b.click();
      b.oninput = function() {
          var file = b.files[0]
          store.set(nmcloud, file.name)
          if(file) { convert(file) }
          }
      };

  function convert(file) {
      if(file.size < sizeAllow) {
          var reader = new FileReader()
          reader.readAsText(file);
          reader.onloadend = function() {
              store.set(tpcloud, 0)
              input.scrollTop = 0;
              input.value = reader.result
              input.value = input.value        
              }
          } else { console.warn(`(${file.size}) Maiximum file size exeeded (${sizeAllow}). Pleace edit setup/init.js`) }
      };

 
