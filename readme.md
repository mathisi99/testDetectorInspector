cd testDetectorInspector
npm i 
node index.js
//image will generate in imgFile folder


First i use puppeteer to use the headless brower to access to the URL and take the DOM

then using jquery on the DOM we collected from URL, make jquery on each table to get the table element, then find its descendants. 

checking td:nth-child(2), we can know which column is numeric or not. 
After having the index, map columns data to array, 

Chart y axis need to be number so we need to transform from String fo Number,

use chartjs-to-image to plot the chart and save it to imgFile folder, with the name related to url.


//i met a problems when tried to display time HH:MM:SS.SSS to the chart, I have research a lot, but in short periods, I still stuck at it.