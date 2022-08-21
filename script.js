
const request = require('request')
const cheerio  = require('cheerio');
// const { html } = require('cheerio/lib/static');

// console.log("Before");
 
request( "https://www.worldometers.info/coronavirus/" , CallBack)
     
function CallBack (error , response , html ){
    if(error){
    console.error(error);
}
else{
    handleHtml(html)
}
}

function handleHtml(html){
    let selectorTool = cheerio.load(html)

       let contentArr = selectorTool('.maincounter-number span ')

       let TotalCases = selectorTool(contentArr[0]).text()
       let Deaths = selectorTool(contentArr[1]).text()
       let Recovery = selectorTool(contentArr[2]).text()

// for (let i =0 ; i<contentArr.length; i++){
//     let data =  selectorTool(contentArr[i]).text()
//     console.log("cocona cases : " + data )



       console.log('TotalCases : ' + TotalCases)
       console.log('Deaths: ' + Deaths)
       console.log('Recovery : ' + Recovery)

}

// console.log("After")

