
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
      
      initStyle(configure.fontcolor, configure.background, configure.gridcolor)   
      };

  function stylize(font, background, gridcolor) {
      store.set(grdcolor, gridcolor)
      store.set(fntcolor, font)
      store.set(bknd, background)
      initStyle(font, background, gridcolor)
      };

  function initStyle(font, back, gridcolor) {
      gsize = configure.gridsize

      input.style.padding = 2*gsize-2
      input.style.color = font
      input.style.backgroundColor = back
   
      var gr = createBackgroundGrid(gsize, gridcolor, [0,0,0,0])
      input.style.backgroundImage = `url('${gr.src}')`

      };

  function randomStyle() {

      pair = hexpair()
      bw = invertColor(pair[1], true) // or zero not matters
 
      gr = hextorgb(bw, false); gr.push(20)

      stylize(hextorgb(pair[0]), hextorgb(pair[1]), gr)

      };

  let loaded = false
  window.onload = function() {
      init()
      window.onresize()
      loaded = true
      };

  window.onresize=function() {
      input.style.width = (innerWidth+8) + "px"
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

 