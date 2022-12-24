const ChartJsImage = require("chartjs-to-image");


function checkRecordTime(value){
  //the typeof value is textContent from DOM -> it return str // format HH:MM:SS or HH:MM:SS.S
  let reg = new RegExp(/^(?:([01]?\d|2[0-3]):([0-5]?\d):)?([0-5]?\d?\.?\d)$/g);
  return reg.test(value);
}

function checkNumberWithItsUnit(str){
  //[n] is numeric after it can be unit : m , ft , in ...
  let tmp = str.replace(/\(?\)?/g, '').replace('⁄','/'); //some case it is wrong 
  let reg = new RegExp(/^((?<value>\d+[.,]?\d*)(\+\d\/\d)?\s?(?<unit>m²|m\^2|cm²|cm\^2|ft|in|m|mm|°C|°F|l|kg)?\s?)+$/g);
  return reg.test(tmp);
}

function checkDate(dateStr){
  if(dateStr.length === 4 && Number(dateStr) > 0 || isNaN(dateStr)){ //true mean it purely string or '22 May 1954'
    let dt=new Date(dateStr);
    if(isNaN(dt.getTime())){ //Checked for date
      return false; //not in the date format
    }else{
      return true; //it is date format, return true 
    }
  } else{ 
    //false mean numeric '2022' or longer
    return false; 
  }
}

//from library
function generateBarChart(xValArray, yValArray, yUnit, saveDir, options){
  // Generate the chart
  
  const chart = new ChartJsImage();
  chart.setConfig({
    type: 'bar',
    data: { labels: xValArray, datasets: [{ label: yUnit, data: yValArray }] },
    options: options,
  });
  
  // Save it
  chart.toFile(saveDir);
  
}

function IncreasingQuater(num){

}



module.exports = {
  checkRecordTime,
  checkNumberWithItsUnit,
  checkDate,
  generateBarChart,
  IncreasingQuater,
};