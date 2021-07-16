const searchBtn=document.querySelector('.search-btn')
const imgCorana=document.querySelector('.img-corona')
const info=document.querySelector('.info')
const kidding=document.querySelector('.kidding')



imgCorana.innerHTML=`
<img src="images/corona-gif.gif" alt="Loading...">`
info.innerHTML=``

const getInfo=async ()=>{
    const inval=document.querySelector('.search-text').value;
    // console.log(inval.value);

    if(inval==""){
        // imgCorana.innerHTML=``;
        // kidding.innerHTML=`<h1 class="title">Are U Kidding, Pls Enter State...</h1>`
        // info.innerHTML=``
        // console.log(1);
    }else{
        // console.log(2);
        // kidding.innerHTML=``;
        try {
            imgCorana.innerHTML=``;
            let url=fetch(`https://api.rootnet.in/covid19-in/stats/latest`);
            
            const response=await url
            let objData= await response.json();
            let arrData=[objData];
            // console.log(arrData);
            
            let code;
            if(inval=="Andaman and Nicobar Islands"||inval=="andaman and nicobar islands")code=0;
            else if(inval=="Andhra Pradesh"||inval=="andhra pradesh")code=1;
            else if(inval=="Arunachal Pradesh"||inval=="arunachal pradesh")code=2;
            else if(inval=="Assam"||inval=="assam")code=3;
            else if(inval=="Bihar"||inval=="bihar")code=4;
            else if(inval=="Chandigarh"||inval=="chandigarh")code=5;
            else if(inval=="Chhattisgarh"||inval=="chhattisgarh")code=6;
            else if(inval=="Dadra and Nagar Haveli and Daman and Diu"||inval=="dadra and nagar haveli and daman and diu")code=7;
            else if(inval=="Delhi"||inval=="delhi")code=8;
            else if(inval=="Goa"||inval=="goa")code=9;
            else if(inval=="Gujarat"||inval=="gujarat")code=10;
            else if(inval=="Haryana"||inval=="haryana")code=11;
            else if(inval=="Himachal Pradesh"||inval=="himachal pradesh")code=12;
            else if(inval=="Jammu and Kashmir"||inval=="jammu and kashmir")code=13;
            else if(inval=="Jharkhand"||inval=="jharkhand")code=14;
            else if(inval=="Karnataka"||inval=="karnataka")code=15;
            else if(inval=="Kerala"||inval=="kerala")code=16;
            else if(inval=="Ladakh"||inval=="ladakh")code=17;
            else if(inval=="Lakshadweep"||inval=="lakshadweep")code=18;
            else if(inval=="Madhya Pradesh"||inval=="madhya pradesh")code=19;
            else if(inval=="Maharashtra"||inval=="maharashtra")code=20;
            else if(inval=="Manipur"||inval=="manipur")code=21;
            else if(inval=="Meghalaya"||inval=="meghalaya")code=22;
            else if(inval=="Mizoram"||inval=="mizoram")code=23;
            else if(inval=="Nagaland"||inval=="nagaland")code=24;
            else if(inval=="Odisha"||inval=="odisha")code=25;
            else if(inval=="Puducherry"||inval=="puducherry")code=26;
            else if(inval=="Punjab"||inval=="punjab")code=27;
            else if(inval=="Rajasthan"||inval=="rajasthan")code=28;
            else if(inval=="Sikkim"||inval=="sikkim")code=29;
            else if(inval=="Tamil Nadu"||inval=="tamil nadu")code=30;
            else if(inval=="Telangana"||inval=="telangana")code=31;
            else if(inval=="Tripura"||inval=="tripura")code=32;
            else if(inval=="Uttarakhand"||inval=="uttarakhand")code=33;
            else if(inval=="Uttar Pradesh"||inval=="uttar pradesh")code=34;
            else if(inval=="West Bengal"||inval=="west bengal")code=35;

            // console.log(arrData[0].data.regional[code].loc);

            info.innerHTML=`

            <div class="country-info">
            <div class="container">
                ${arrData[0].data.regional[code].loc}
            </div>
            </div>     

          <div class="container-1">
            <div class="card text-white mb-3">
              <div class="card-header"><i class="far fa-surprise"></i></div>
                <div class="card-body">
                <h5 class="card-title">Total Cases </h5>
                <p class="card-text">${arrData[0].data.regional[code].totalConfirmed}</p>
              </div>
            </div>
            <div class="card text-white mb-3" style="max-width: 18rem;">
              <div class="card-header"><i class="far fa-frown"></i></div>
                <div class="card-body">
                <h5 class="card-title">Total Deaths</h5>
                <p class="card-text">${arrData[0].data.regional[code].deaths}</p>
              </div>
            </div>
            <div class="card text-white mb-3" style="max-width: 18rem;">
              <div class="card-header"><i class="far fa-smile-beam"></i></div>
                <div class="card-body">
                <h5 class="card-title">Recovered</h5>
                <p class="card-text">${arrData[0].data.regional[code].discharged}</p>
              </div>
            </div>
          </div>

        `
        } catch (error) {
          imgCorana.innerHTML=``;
          info.innerHTML=`<div style=" display:flex; height:100vh; width:100%;align-items: center; justify-content:center; text-align:center " >ENTER VALID STATE<div>`

        }    
    }
}

searchBtn.addEventListener('click',getInfo)