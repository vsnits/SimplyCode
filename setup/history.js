
  // history.js
  
  function newDoc(histr) {
      store.remove(txtcloud)
      input.blur()
      if(histr) { history.write(input.value) }
      input.value=table
      store.remove(tpcloud)
      };

  let history = { hidden: true };

  history.view = function() {
      let cont = document.getElementById("Download_History")
      if(cont.style.display != "none") {
          cont.style.display = "none"
          input.style.display = "block"
          }
      else {
          input.style.display = "none"
          cont.style.display = "block"
          }
      };

  history.write = function write(value) {
      var Name = store.get(nmcloud)
      if(!Name) { Name = "Page.html" }
      var header = document.createElement("div")
      var room = document.createElement("textarea")
      room.value = value
      var label = document.createElement("p")
      label.className = "label"
      //label.innerHTML = Name
      let gencont = document.getElementById("Download_History")
      header.append(room)
      header.append(label)
      gencont.append(header)
      gencont.append(document.createElement("br"))    
      return Name
      };

