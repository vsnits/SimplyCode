
"use strict";  
class CookiePack {
      constructor(type="local") {
          let that = this, data
          CookiePack.localdata = (CookiePack.localdata)? CookiePack.localdata : new Map()
          CookiePack.sessiondata = (CookiePack.sessiondata)? CookiePack.sessiondata : new Map()
          CookiePack.commondata = (CookiePack.commondata)? CookiePack.commondata : new Map()   
          this.type = function() {
              try {
                  switch(type) {
                      // data legacy still works because of object architecture
                      case "local": if(!data) { data = CookiePack.localdata }; return localStorage;
                      case "session": if(!data) { data = CookiePack.sessiondata }; return sessionStorage;
                      }  
                  } catch {}; if(!data) { data = CookiePack.commondata }
              return null
              }
          this.locally = !(!!that.type())
          this.clear = function() {
              data.clear(); if(!that.locally) { localStorage.clear() } 
              }
          this.set = function(name, item, stringify=true) {
              data.set(name, item)
              if(!that.locally) { 
                  stringify ? that.type().setItem(name, JSON.stringify(item)) : that.type().setItem(name, item)
                  }
              return item
              }
          this.get = function(name, parse=true, nullvalue=null) {
              if(!that.locally) {
                  var lcdata = parse ? JSON.parse(that.type().getItem(name)) : that.type().getItem(name)
                  if(lcdata != null) { data.set(name, lcdata) } else { data.delete(name) }
                  }
              var res = data.get(name)
              return res? res : nullvalue
              }
          this.remove = function(name) {
              if(!that.locally) { that.type().removeItem(name) }
              data.delete(name)
              }
          }
      };

