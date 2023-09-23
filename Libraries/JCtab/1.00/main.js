"use strict";

  const JCtab = function(text, gap=4, left=2, separator=";\n\n") {
      text = (text[0] == "\n")  ? text : ("\n" + text)
      text = text + separator
      console.log(`JStab work started with ${text.length} symbols`)
      var res="", stage=0, quote=0, incomment=false, intext=false, separated=false
      for(var i = 0; i < text.length-separator.length; i++) {
          incomment = cdef(text, i, incomment)
          intext = tdef(incomment, intext, text[i])
          var dec = calclev(text[i], intext, incomment, stage, quote, left, gap)
          stage = dec.stage; quote = dec.quote;
          if(stage) { separated = false }
          var tab = maketab(text, i, dec.space+dec.left)
          res = res + text[i]; i = tab.i; res += tab.tabs // sequence is important
          if(!separated && !stage) {
              var sp = jseparate(separated, text, i, dec, separator)
              i = sp.i; res = res + sp.addition
              separated = sp.separated
              }
          }
      return reswarn(res, dec.stage, dec.quote, intext, incomment)
      };

  const cdef = function(t, i, cmt) { // define whether code is commented
      // comment starts
      if(t[i] == "/" && t[i+1] == "*" && !cmt) { return "long" }
      else if(t[i] == "/" && t[i+1] == "/" && !cmt  && t[i-1] != ":") { return "short" } // carefully with urls
      // comment ends
      if(t[i] == "*" && t[i+1] == "/" && cmt == "long") { return false }
      else if(t[i] == "\n" && cmt == "short") { return false }
      return cmt
      };

  const tdef = function(cmt, intx, smb) { // define whether part is in quoted
      if( !cmt && (smb == "'" || smb == '"' || smb == "`") && !intx) {
          return smb
          }
      else if(!cmt && intx == smb) { return false }
      return intx
      };

  const calclev = function(smb, intx, cmt, sg, qt, left, gap) { // make decision
      var action = (!intx) && (!cmt)
      if ( (!intx) && (!cmt) ) {
          switch(smb) {
              case "{": sg += 1; break
              case "}": sg -= 1; break
              case "(": qt += 1; break
              case ")": qt -= 1;
              }
          }
      var space = ((cmt == "long") ? sg*gap + left : sg*gap)
      return { stage: sg, quote: qt, action: action, space: Math.abs(space), left: left }
      };

  const maketab = function(t, i, space) { // set tabs
      if(t[i] == "\n") { 
          for(var e = i+1; e < t.length; e++) {
              if( (t[e] != " " && t[e] != "\t") || (e) == t.length-1) {
                  return { tabs: (" ").repeat(space), i: e-1 }
                  }
              }
          };
      return { i: i, tabs: "" }
      };

  const jseparate = function(sprt, text, i, dec, separator) { // separate zero-level functions
      var needpos = false
      var cnd = (dec.action && dec.stage == 0 && dec.quote == 0 && text[i] == "}")
      if(cnd && !sprt) {
          var e = i+1
          for(; e < text.length; e++) {
              if(text[e] && text[e] != ";" && text[e] != " " && text[e] != "\n" && text[e] != "\t") {
                  needpos = e; break // important to break
                  }
              }
          if(!needpos && e == text.length) { needpos = e }
          }
      return { i: (needpos ? needpos-(separator.length) : i), addition: (needpos ? separator : ""), separated: true }
      };

  const reswarn = function(r, stage, quote, intx, cmt) { // handle warnings
      if(r[0] != "\n") { r = "\n" + r }
      if(r[r.length-1] != "\n") { r = r + "\n" }
      var scsf = true
      if(intx) { console.error(`Probably ${intx} quote was missed`); scsf = false }
      if(cmt == "long") { console.error(`Long comment was never closed`); scsf = false }
      if(stage < 0) { console.error(`${-stage} quote(s) { probably should be added`); scsf = false }
      if(quote > 0) { console.error(`${quote} quote(s) ( probably missed`); scsf = false }
      if(quote < 0) { console.error(`${-quote} quote(s) ) probably should be added`); scsf = false }
      if(r.includes("</scr" + "ipt>") || r.includes("</style>")) {
          console.warn(`Don't mix tags! This may result tag soup..`)
          console.info(`Division accesses to build larger projects.`); scsf = false
          }
      console.log(`JStab work done with ${r.length} symbols (${scsf ? "successful" : "with exceptions"})`)
      return r
      };

 
