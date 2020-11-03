const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs")


//write in file
const writeStream = fs.createWriteStream("name.csv");
//headers
writeStream.write("Information \n")
async function scrapping() {
    const html = await axios.get('http://canadanepal.net/');
    const $ = await cheerio.load(html.data);
    let data = [];
    //use jquery styntax to get the other elements
    // .next()
    const head = $(".set_height")
    const output = head.children("div").children("p").text()


    //loops using jquery
    $(".set_height").each((index,value)=>{
        const link =$(value).attr('href');

        const item = $(value).text();
        const nameOfVideo = $(value).children("div").children("p").text();

        //write in file
        writeStream.write(`${nameOfVideo} \n`)
        // console.log(nameOfVideo)
    })

    $(".set_height").each((index,value)=>{
        const title = $(value).find(".mid_p").text()
        // const link = $(value).find(".a").attr("href")
        // console.log(title)

    })
}

console.log(scrapping())
