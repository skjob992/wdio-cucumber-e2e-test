import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"


Given(/^Google page is opened$/, async function () {
    console.log(`Before opening browser....`);
    await browser.url("https://google.com")
    await browser.pause(1000)
    console.log(`After opening browser....`);
    console.log(`BrowserObj: ${JSON.stringify(browser)}`);
})

When(/^Search with (.*)$/, async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let ele=await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
    console.log(`>> Ele obj: ${JSON.stringify(ele)}`);
})

Then(/^Click on the first search result$/,async function(){
 let ele=await $(`<h3>`)
 ele.click()

})

Then(/^URL should match (.*)$/, async function (expectedURL) {
   // await browser.waitUntil(async function () {
   //     return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
//},{timeout: 20000, interval: 500, timeoutMsg: `Failed loading WDIO web page: ${await browser.getTitle()}`})
    let url =  await browser.getUrl()
   chai.expect(url).to.equal(expectedURL)
})
Given (/^A web page is opened$/, async function(){
    //await browser.url("/inputs")
    await browser.url("https://www.amazon.com/")
    await browser.setTimeout({implicit:15000, pageLoad:1000})
    await browser.maximizeWindow()
})
When(/^Perform web interactions$/,async function(){
/**
 * 1.Input box
 * Actions:
 * 1.Type into input box
 * 2. Clear the field and type or just addvalue
 * 3.click and type
 * 4.Slow typing
 */
/*let num=12345
let strNum=num.toString()

let ele=await $(`[type=number]`)
await ele.click()

//await ele.setValue(strNum)
for(let i=0;i<strNum.length; i++){
    let charStr=strNum.charAt(i)
    await browser.pause(1000)
    await browser.keys(charStr)
}
await browser.pause(3000)
//await browser.debug()*/
/**
 * 2.Dropdown
 * Actions:
 * 1.Assert default option is selected
 * 
 * 2.Select by attribute, text, index
 * 3. Get a list of options
 */
//let ele=await $('//Select/option[@selected="selected"]')
//let val=await ele.getText()
//chai.expect(val).to.equal("Please select an option")
//await browser.pause(3000)

///Select a specific option
//let ddEle=await $('#dropdown')
//await ddEle.selectByIndex(2)
//await browser.pause(3000)
//let eleArr = await $$(`select > option`)
//let arr=[]
//for(let i=0;i<eleArr.length;i++){
    //let ele=eleArr[i]
    //let val=await ele.getText()
   // arr.push(val)
    //console.log(val)

//}
//console.log(`>> Options array: ${arr}`);
//let eleArr=await $$(`//form[@id="checkboxes"]/input`)
//for(let i=0;i<eleArr.length;i++){
    //let ele=eleArr[i]
    //if(!await ele.isSelected()){
        //ele.click()
        //Open new window
  //  await $(`=Click Here`).click()
   // await $(`=Elemental Selenium`).click()
   // let currentWinTitle=await browser.getTitle()
   // let parentWinHandle=await browser.getWindowHandle()
   // console.log(`>> currentWinTitle: ${currentWinTitle}`);
     

    //Get all windowHandles
   // let winHandles=await browser.getWindowHandles()
  //  for(let i=0;i<winHandles.length;i++){
      //  console.log(`>>Win handle: ${winHandles[i]}`)
       //Switch to specific window
       // await browser.switchToWindow(winHandles[i])
       // currentWinTitle=await browser.getTitle();
       // if(currentWinTitle==="Elemental Selenium | Elemental Selenium")
         //   {
           //   await browser.switchToWindow(winHandles[i])
             // let headerTxtEleSel= (await $(`<h1>`)).getText()
             // console.log(`>>headerTxtEleSel: ${headerTxtEleSel}`);
              //       break
           // }
   // }
    //Switch back to parent window
    //await browser.switchToWindow(parentWinHandle)
    //let parentWinHeaderTxt= await $(`<h3>`).getText()
    //console.log(`>> parentWinHeaderTxt: ${parentWinHeaderTxt}`);
   // await  $(`#file-upload`).addValue(`/data/fileupload/dummy.txt`)
   // await $(`#file-submit`).click()
 // await $(`=iFrame`).click()
 // let ele=await $(`#mce_0_ifr`)
  //await browser.switchToFrame(ele)
  
 // await $(`//body[@id='tinymce']`).click()
  
 // await ele1.click()
  //await browser.keys(["Meta","A"])
 // await browser.pause(1000)
 // await browser.keys("Delete")
  //Interaction with frames...
  //await $(`#tinymce`).addValue(`Typing into a frame...`);
  //await browser.switchToParentFrame()
 //await $(`//span[.="Top Sellers in Books for you"]`).scrollIntoView()
     //ele1.click()
     
  //await browser.keys(["Meta","A"])
  //await browser.pause(1000)
   // let colCount=await $$(`//table[@id="table1"]/thead/tr/th`).length
   // console.log(`>> Number of columns: ${colCount}`);
   // chai.expect(colCount).to.eql(6)
   //let rowCount=await $$(`//table[@id="table1"]/tbody/tr`).length
   //console.log(`>> Number of rows: ${rowCount}`);
   // chai.expect(rowCount).to.eql(4)

    /**
     * 2. Get the whole data table
     */
    //table[@id="table1"]/tbody/tr[2]/td[4]
   // let arr=[]
    //for(let i=0;i<rowCount;i++){
      //  let personObj={
           //  lastname: "",
           //  firstname:"",
          //   email:"",
          //   due:"",
          //   web:""
          //  }
       // for(let j=0;j<colCount;j++){
          //  let cellValue=await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText()
          //  if(j === 0) personObj.lastname=cellValue
           // if(j===1) personObj.firstname=cellValue
           // if(j===2) personObj.email=cellValue
           // if(j===3) personObj.due=cellValue
            //if(j==4) personObj.web=cellValue

        //}arr.push(personObj)}
          //  console.log(`>> Whole table: ${JSON.stringify(arr)}`);
      // await browser.execute(() =>{
             //  window.scrollBy(0,window.innerHeight)
      // })
      // await browser.pause(5000)
     //  await browser.execute(() =>{
      //  window.scrollBy(0,-window.innerHeight)
    //})

   // await browser.pause(5000)
   // await browser.execute(()=>{
      //  window.scrollTo(0,document.body.scrollHeight)
   // })
   // await browser.pause(5000)
    //await browser.execute(()=>{
       // window.scrollTo(0,document.body.scrollTop)
    //})
      await browser.pause(3000)
     //  await browser.debug()
        
   
})
