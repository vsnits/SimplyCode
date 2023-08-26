"use strict";

  Function.prototype.calltime = function(...args) {
      console.time(this.name ? this.name+": " : "anon function: ")
      this.apply(args)
      console.timeEnd(this.name ? this.name+": " : "anon function: ")
      };

  Function.prototype.appytime = function(...args) {
      console.time(this.name ? this.name+": " : "anon function: ")
      this.apply(args)
      console.timeEnd(this.name ? this.name+": " : "anon function: ")
      };

  Function.prototype.compareto = function(F, a1, a2) {
      console.time(this.name ? this.name+": " : "Taken function: ")
      this.apply(a1)
      console.timeEnd(this.name ? this.name+": " : "Taken function: ")
      console.time(F.name ? this.name+": " : "Given function: ")
      F.apply(a2)
      console.timeEnd(F.name ? this.name+": " : "Given function: ")
      };

 
