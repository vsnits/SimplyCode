
  const grdsize = "SimplyCode!/configure.gridsize/"
  const grdcolor = "SimplyCode!/configure.gridcolor/"
  const fntcolor = "SimplyCode!/configure.fontcolor/"
  const bknd = "SimplyCode!/configure.background/"
  const txtcloud = "SimpyCode!/text/"
  const tpcloud = "SimpyCode!/top/"
  const nmcloud = "SimpyCode!/filename/"
  const store = new CookiePack((configure.cache)? "local" : null)
  const input = document.createElement("textarea")
  const sizeAllow = Math.pow(10,6)
  const table = "/" + "* Empty *"  + "/"
  
  function init() {
      
      input.className = "inp"
      document.body.append(input)
      configure.gridsize = store.get(grdsize, true, configure.gridsize)
      configure.gridcolor = store.get(grdcolor, true, configure.gridcolor)
      configure.fontcolor = store.get(fntcolor, true, configure.fontcolor)
      configure.background = store.get(bknd, true, configure.background)
      
      var record = store.get(txtcloud, false)
      if(record) { input.value = record } else { newDoc() }
      var top = store.get(tpcloud)
      console.log(`Top/ ${top}`)
      input.scrollTop = top
      
      initStyle(configure.fontcolor, configure.background)
      var gr = createBackgroundGrid(configure.gridsize, configure.gridcolor, [0,0,0,0])
      input.style.backgroundImage = `url('${gr.src}')`
      
      };

  function stylize(font, background) {
      var style = getComputedStyle(input)
      font = font ? font : style.getPropertyValue("color")
      background = background ? background : style.getPropertyValue("background-color")
      console.log(`font: ${font}`); console.log(`background: ${background}`)
      store.set(fntcolor, font)
      store.set(bknd, background)
      initStyle("rgb(102, 16, 16)", "ghostwhite")
      };

  function initStyle(def_font, def_back) {
      var style = ".inp { "
      font = store.get(fntcolor); font = font ? font : def_font
      style +=  ("color: " + font + ";")
      back = store.get(bknd); back = back ? back : def_back
      style += ("background-color: " + back + ";")
      var tag = document.createElement("style")
      var lasttag = document.getElementById("inpstyle")
      tag.id = "inpstyle"
      tag.innerHTML = style + " }"
      if(lasttag) { document.head.removeChild(lasttag) }
      document.head.append(tag)
      };

  function randomStyle() {
      function rand() { return Math.ceil(Math.random()*255) }
      window.createStyle = setInterval(function() {
          var set = [rand(), rand(), rand()]
          stylize(`rgb(${rand()}, ${rand()}, ${rand()})`, `rgb(${rand()}, ${rand()}, ${rand()})`)
          }, 1450)
      };

  let loaded = false
  window.onload = function() {
      init()
      window.onresize()
      loaded = true
      };

  window.onresize=function() {
      input.style.width = (innerWidth+4) + "px"
      input.style.height = (innerHeight+8) + "px"
      };

  window.onfocus = function() {
      if(loaded && configure.cache && configure.cacheonfocus) { 
          store.set(txtcloud, input.value)
          store.set(tpcloud, input.scrollTop)
          store.set(grdsize, configure.gridsize)
          store.set(grdcolor, JSON.stringify(configure.gridcolor))
          store.set(bknd, getComputedStyle(input).getPropertyValue("background-color"))
          store.set(fntcolor, getComputedStyle(input).getPropertyValue("color"))
          }
      };

 