

# Intro
   SimplyCode! is cross-platform open source code editor without highlighting! <br>
   For computer code funs with infinite customisation and simple auto-tabulation tools included. <br>
   Written in clear JavaScript, a home for some JS libraries and works offline even better than online tool. <br>
   No data writing, no data collection, no syntax correction!

# Motivation 
   Code editors now weight more and more, but even less comfortable in some cases. <br>
   The Apple's Xcode now weights nearly 7 GB and requires Apple ID registration :(? <br>
   Tired from auto-correction? Wanna control process fully yourself? <br>
   Start coding right now from any device using any text format! <br>

# Installation
   ```shell
 $ git clone https://github.com/vsnits/SimplyCode/ [destination]
 ```
  Or: <br>
   Manually download source and unzip folder <br>
  Or: <br>
   use a website (not recommended)

 # Setting & Running
  Run any browser, turn on JavaScript, set up privacy and downloading settings. <br>
  Open `SimplyCode/configure.js` with any text editor installed, <br>
  choose needed settings (pay attention on cache parameter) <br>
  Open index.html in your browser! Done! <br>
  Some hot keys: <br>
   alt + O = open file <br>
   ctrl + S = save file <br>
   alt + Q = set c / js / c++ tabs <br>
   alt + P = correct python tabs <br>
   ctrl + Enter = run html <br>
   alt + Enter = run JavaScript <br>
   alt + R = change theme (it stored in cache)
   If used `cofigure.cache = false`, then run
   ```js
   computeStyle()
   ```
   Then, change configuration manually

 # Contribution Guideline
   Before changing files, make sure you have another copy to work in case you break the editor. <br>
   Now you can make yourself any file better! Project contribution note: <br>
   Before changing multiple files make sure it is worth so <br>
   Before adding new tools please discuss with community <br>
   When changing library, create new folder with the new library version <br>
   follow this rule: <br>
     small change = + 0.01 <br>
     major change = + 0.1 <br>
     reissue = + 1 <br>

 # Included libraries
   There are seven libraries in package (go directory to read more about each) <br>
   * Colourr - for dealing with colors
   * CookiePack - for private mode support when using cookies 
   * JCtab - for turning bad tabulated C-code into cool project 
   * syncFetch - for broaden fetch support
   * 2Dcade - for canvases and 2d grids (in development)
   * BlobW - for operating Blob object (in development)
   * Comparelib - for code speed comparison (in development)

 # License
   GNU agpl v3
   
