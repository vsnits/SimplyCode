"use strict";

  function createBackgroundGrid(width, color=[], background=[]) {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext("2d")
      canvas.width = width
      canvas.height = width
      let imageData = ctx.getImageData(0, 0, width, width)
      function st(x) {
          if( x % width == 0) { return true }
          else if( x > width*(width-1) ) { return true }
          };
      ctx.putImageData(setImage(imageData, color, background, st), 0, 0)
      var img = new Image()
      img.src = ctx.canvas.toDataURL()
      return img
      };

  function setImage(imageData, color=[], background=[], statement=function(p) { return true }) {
      imageData.setbit = function(p, bitmap) {
          p = p*4
          this.data[p] = bitmap[0]
          this.data[p+1] = bitmap[1]
          this.data[p+2] = bitmap[2]
          this.data[p+3] = bitmap[3]
          }
      for(var i = 0; i < imageData.data.length/4; i++) {
          var s = statement(i)
          if(s) { imageData.setbit(i, color) }
          else { imageData.setbit(i, background) }
          }
      return imageData
      };

  function makeCanvasGrid(canv, color=[153, 217, 234, 255]) {
      Uint8ClampedArray.prototype.setcolor = function(p, set=color) {
          for(var i = 0; i <= 3; i++) { this[p+i] = set[i]  }
          }
      var ctx = canv.getContext('2d')
      var len = Math.floor(canv.width/width)
      canv.width = len * width
      canv.height = canv.width
      
      var fmap = ctx.getImageData(0, 0, canv.width, canv.height)
      
      for(var i = 0; i*4 < fmap.data.length; i++) {
          if(i % len == len-1) { fmap.data.setcolor(i*4) }
          else if(Math.floor(i / canv.width) % len == len-1) { fmap.data.setcolor(i*4) }
          else { fmap.data.setcolor(i*4, [255, 255, 255, 255]) }
          };
      ctx.putImageData(fmap, 0, 0)
      };

 
