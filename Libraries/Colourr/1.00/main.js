
  "use strict"
  
  /* 
    A library built with StackOverflow :)
    (Too much colour theory to write it myself)
    
     Caution! very complex!
    */
  
  let hashtohex = (str) => {
      // https://stackoverflow.com/questions/11120840/hash-string-into-rgb-color
      
      // djb2 hash from erlycoder
      var hash = 5381
      for (var i = 0; i < str.length; i++) {
          hash = ((hash << 5) + hash) + str.charCodeAt(i) /* hash * 33 + c */
          }
      
      let r = (hash & 0xFF0000) >> 16
      let g = (hash & 0x00FF00) >> 8
      let b = hash & 0x0000FF
      
      return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2)
      
      };

  let splitRGB = (str) => {
      if ( !str.includes( "rgb(" ) || !str.includes(",") || !str.includes( ")" ) ) {
          console.error("Passed str is not an RGB color. Passed: ", str)
          return [0, 0, 0]
          }
      let arr = str.split(",")
      let r = Number (arr[0].split("(")[1] )
      let g = Number( arr[1] )
      let b = Number( arr[2].split(")")[0] )
      return [r, g, b]
      };

  let hextorgb = (hex, makestr=true) => {
      // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
      // The same discussion for both hex->rgb and rgb-> hex 
      
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      
      if (!result) { return null }
      
      let r = parseInt(result[1], 16)
      let g = parseInt(result[2], 16)
      let b = parseInt(result[3], 16)
      
      if (makestr) { return `rgb(${r}, ${g}, ${b})` }
      else { return [r, g, b] }
      
      };

  let rgbtohex = (rgb, parse) => {
      
      if (parse) { rgb = splitRGB(rgb) }
      
      let cmp = (c) => {
          let hex = c.toString(16);
          return hex.length == 1 ? "0" + hex : hex;
          }
      
      return "#" + cmp(rgb[0]) + cmp(rgb[1]) + cmp(rgb[2])
      };

  let hexpair = (bw) => {
      // Second value is Black / White if bw enabled
      
      // https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript
      
      let rhex = "#000000".replace(/0/g, () => { return (~~(Math.random()*16)).toString(16) })
      // wt ~~ ?
      return [rhex, invertColor(rhex, bw)]
      };

  let invertColor = (hex, bw) => {
      
      // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
      
      let padZero = (str, len) => {
          len = len || 2
          let zeros = new Array(len).join('0')
          return (zeros + str).slice(-len)
          }
      
      if (hex.indexOf('#') === 0) {
          hex = hex.slice(1)
          }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
          }
      if (hex.length !== 6) {
          throw new Error('Invalid HEX color.')
          }
      let r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16)
      if (bw) {
          // https://stackoverflow.com/a/3943023/112731
          return (r * 0.299 + g * 0.587 + b * 0.114) > 186
          ? '#000000'
          : '#FFFFFF';
          }
      // invert color components
      r = (255 - r).toString(16)
      g = (255 - g).toString(16)
      b = (255 - b).toString(16)
      // pad each with zeros and return
      return "#" + padZero(r) + padZero(g) + padZero(b)
      };

