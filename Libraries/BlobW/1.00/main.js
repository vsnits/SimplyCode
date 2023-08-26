"use strict";

  function Download(data, filename, type, log) {
      if(log) { console.log(data) }
      var file = new Blob([data], {type: type})
      var a = document.createElement("a")
      var url = URL.createObjectURL(file)
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
      };

  /* Thanks! Author from StackOverflow */
  function DataToBlob(dataURI, dataTYPE) {
      var binary = atob(dataURI.split(',')[1]), array = []
      for(var i = 0; i < binary.length; i++) array.push(binary.charCodeAt(i))
      return new Blob([new Uint8Array(array)], {type: dataTYPE})
      };

