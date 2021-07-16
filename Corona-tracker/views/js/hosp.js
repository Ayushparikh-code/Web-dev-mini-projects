const searchBtn=document.querySelector('.search-btn')
const imgCorana=document.querySelector('.img-corona')
const info=document.querySelector('.info')
const kidding=document.querySelector('.kidding')
let url=fetch(`https://api.rootnet.in/covid19-in/hospitals/beds`);

const stateInfo=document.querySelector('#state-info')
const totHosp=document.querySelector('#tot-hosp')
const totBeds=document.querySelector('#tot-beds')
const urbHosp=document.querySelector('#urb-hosp')
const urbBeds=document.querySelector('#urb-beds')
const rurHosp=document.querySelector('#rur-hosp')
const rurBeds=document.querySelector('#rur-beds')


// imgCorana.innerHTML=`
// <img src="images/corona-gif.gif" alt="Loading...">`

const getIndInfo=async ()=>{
  let url=fetch(`https://api.rootnet.in/covid19-in/hospitals/beds`);
  const response=await url
  let objData= await response.json();
  let arrData=[objData];
  // console.log(arrData);

  stateInfo.innerHTML=`${arrData[0].data.regional[36].state}`
  totHosp.innerHTML=`${arrData[0].data.regional[36].totalHospitals}`
  totBeds.innerHTML=`${arrData[0].data.regional[36].totalBeds}`
  urbHosp.innerHTML=`${arrData[0].data.regional[36].urbanHospitals}`
  urbBeds.innerHTML=`${arrData[0].data.regional[36].urbanBeds}`
  rurHosp.innerHTML=`${arrData[0].data.regional[36].ruralHospitals}`
  rurBeds.innerHTML=`${arrData[0].data.regional[36].ruralBeds}`
}
getIndInfo();


const getInfo=async ()=>{
    const inval=document.querySelector('.search-text').value;
    if(inval==""){
        // kidding.innerHTML=`<h1 class="title">Are U Kidding, Pls Enter state</h1>`
        // info.innerHTML=``
    }else{
        // kidding.innerHTML=``;
        try {
            // info.innerHTML=``
            let url=fetch(`https://api.rootnet.in/covid19-in/hospitals/beds`);
            const response=await url
            let objData= await response.json();
            let arrData=[objData];
            // console.log(arrData);
            
            let code;
            if(inval=="Andhra Pradesh"||inval=="andhra pradesh")code=0;
            else if(inval=="Arunachal Pradesh"||inval=="arunachal pradesh")code=1;
            else if(inval=="Assam"||inval=="assam")code=2;
            else if(inval=="Bihar"||inval=="bihar")code=3;
            else if(inval=="Chhattisgarh"||inval=="chhattisgarh")code=4;
            else if(inval=="Goa"||inval=="goa")code=5;
            else if(inval=="Gujarat"||inval=="gujarat")code=6;
            else if(inval=="Haryana"||inval=="haryana")code=7;
            else if(inval=="Himachal Pradesh"||inval=="himachal pradesh")code=8;
            else if(inval=="Jammu and Kashmir"||inval=="jammu and kashmir")code=9;
            else if(inval=="Jharkhand"||inval=="jharkhand")code=10;
            else if(inval=="Karnataka"||inval=="karnataka")code=11;
            else if(inval=="Kerala"||inval=="kerala")code=12;
            else if(inval=="Madhya Pradesh"||inval=="madhya pradesh")code=13;
            else if(inval=="Maharashtra"||inval=="maharashtra")code=14;
            else if(inval=="Manipur"||inval=="manipur")code=15;
            else if(inval=="Meghalaya"||inval=="meghalaya")code=16;
            else if(inval=="Mizoram"||inval=="mizoram")code=17;
            else if(inval=="Nagaland"||inval=="nagaland")code=18;
            else if(inval=="Odisha"||inval=="odisha")code=19;
            else if(inval=="Puducherry"||inval=="puducherry")code=26;
            else if(inval=="Punjab"||inval=="punjab")code=20;
            else if(inval=="Rajasthan"||inval=="rajasthan")code=21;
            else if(inval=="Sikkim"||inval=="sikkim")code=22;
            else if(inval=="Tamil Nadu"||inval=="tamil nadu")code=23;
            else if(inval=="Telangana"||inval=="telangana")code=24;
            else if(inval=="Tripura"||inval=="tripura")code=25;
            else if(inval=="Uttarakhand"||inval=="uttarakhand")code=27;
            else if(inval=="Uttar Pradesh"||inval=="uttar pradesh")code=26;
            else if(inval=="West Bengal"||inval=="west bengal")code=28;
            else if(inval=="Andaman and Nicobar Islands"||inval=="andaman and nicobar islands")code=29;
            else if(inval=="Chandigarh"||inval=="chandigarh")code=30;
            else if(inval=="Dadra and Nagar Haveli "||inval=="dadra and nagar haveli")code=31;
            else if(inval=="Daman & Diu"||inval=="daman and diu")code=32;
            else if(inval=="Delhi"||inval=="delhi")code=33;
            else if(inval=="Lakshadweep"||inval=="lakshadweep")code=34;
            else if(inval=="Puducherry"||inval=="puducherry")code=35;

            stateInfo.innerHTML=`${arrData[0].data.regional[code].state}`
            totHosp.innerHTML=`${arrData[0].data.regional[code].totalHospitals}`
            totBeds.innerHTML=`${arrData[0].data.regional[code].totalBeds}`
            urbHosp.innerHTML=`${arrData[0].data.regional[code].urbanHospitals}`
            urbBeds.innerHTML=`${arrData[0].data.regional[code].urbanBeds}`
            rurHosp.innerHTML=`${arrData[0].data.regional[code].ruralHospitals}`
            rurBeds.innerHTML=`${arrData[0].data.regional[code].ruralBeds}`

           
        } catch (error) {
          // imgCorana.innerHTML=``;
          info.innerHTML=`<div style=" display:flex; height:100vh; width:100%;align-items: center; justify-content:center; text-align:center " >ENTER VALID STATE<div>`
        }    
    }
}

searchBtn.addEventListener('click',getInfo)

