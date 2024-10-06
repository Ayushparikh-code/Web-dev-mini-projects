let totTest=document.querySelector('#tot-test');
let totPositive=document.querySelector('#new-positive');

const getInfo=async ()=>{
try {
    let url=`https://api.rootnet.in/covid19-in/stats/testing/latest`
    const response=await fetch(url);
    let objData= await response.json();
    let arrData=[objData];
    // console.log(arrData);

    let urlIn=`https://corona.lmao.ninja/v2/countries/india?yesterday&strict&query%20`
    const responseIn=await fetch(urlIn);
    let objDataIn= await responseIn.json();
    let arrDataIn=[objDataIn];
    // console.log(objDataIn);
    // console.log(arrData[0].data.totalPositiveCases);
    // console.log(arrData[0].recovered);
    // console.log(arrData[0].cases);
    // console.log(arrData[0].deaths);
    // console.log(arrData[0].active);
    // console.log(arrData[0].todayRecovered);

    totTest.innerHTML=`${arrData[0].data.totalSamplesTested}`
    totPositive.innerHTML=`${arrDataIn[0].todayCases}`
    
    } catch (error) {
    }
}
getInfo();