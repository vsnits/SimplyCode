"use strict";

  class ExtendFetch {
      constructor(src, chain=function() {}, onerror=function() {}) {
          const that = this
          this.source = src
          this.chain = chain
          this.load = function(chainHandler=function(ch, t) { return ch(t) }) {
              fetch(that.source)
              .then(response => response.text())
              .then(text => chainHandler(chain, text))
              .catch(error => onerror(error))
              }
          }
      };

  function syncFetch(extendFetchList=[]) {
      var list = extendFetchList
      var chains = new Array()
      var status = list.length
      function loadstatus(i) {
          status--
          if(!status) { return true }
          }
      for(var i = 0; i < list.length; i++) {  
          (function (index) {
              list[i].load(function(ch, t) {
                  chains.push({ item: ch, index: index, text: t });
                  if( loadstatus(index) ) {  exeChains() }
                  })
              })(i)
          }
      function exeChains() {
          var order = chains.sort(function(a, b) {
              if(a.index > b.index) { return 1 } else { return -1 }
              })
          for(var i = 0; i < order.length; i++) { 
              var pointer = (order[i+1]) ? (order[i+1].item) : ( function() {} )
              order[i].item(order[i].text, pointer)
              }
          }
      };

 
