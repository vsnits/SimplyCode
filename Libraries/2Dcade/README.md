
# 2Dcade
   A library for making 2D grids, arcade games and html 2Dcanvas images

# Guide
   ```js
   createBackgroundGrid(width, color=[], background=[])
   ```
   Returns a background image which makes a 1px grid
   
   ```js
   DrawCanvasGrid(canv, color=[153, 217, 234, 255]) 
   ```
   Draws a 1px width grid and resizes canvas to the closest integer of squares
   
   ```js
   setImageData(imageData, color=[], background=[], statement=function(p) { return true })
   ```
   Handles given imageData according to given conditional function (p = Nth px left to right then top to down)
   
# Contribution
   Please follow common SimplyCode! contribution guidelines

# License
    GNU v3