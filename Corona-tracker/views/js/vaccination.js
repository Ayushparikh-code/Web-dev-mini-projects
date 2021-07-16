
const searchBtn=document.querySelector('.search-btn')
const imgCorana=document.querySelector('.img-corona')
const info=document.querySelector('.info')
const kidding=document.querySelector('.kidding')


imgCorana.innerHTML=`
<img src="images/vaccine2.gif" alt="Loading...">`
info.innerHTML=``
let date=new Date;
let curdate=date.getDate() +"-"+(date.getMonth()+1) +"-" +date.getFullYear()

// console.log(curdate);

const getInfo=async ()=>{
    const inval=document.querySelector('.search-text').value;
    // console.log(inval.value);
    if(inval==""){
        // imgCorana.innerHTML=``;
        // kidding.innerHTML=`<h1 class="title">Are U Kidding, Pls Enter PINCODE</h1>`
        // info.innerHTML=``
        // console.log(1);
    }else{
        // console.log(2);
        // kidding.innerHTML=``;
        try {
            imgCorana.innerHTML=``;
            let url=fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${inval}&date=${curdate}`);
            
            const response=await url
            let objData= await response.json();
            let arrData=[objData];
            // console.log(arrData);
            
          info.innerHTML+=`
          <div class="country-info">
            <div class="container">
                ${arrData[0].centers[0].district_name}
            </div>
            </div>
            <div class="country-info-note">Not this area pls refersh and enter PIN again
          `

          arrData[0].centers.map(val=>{
                // console.log(val.address);
          info.innerHTML+=`
          <div class="container-1" style="margin-top:3rem">
            <div class="card-vaccine text mb-3">
              <div class="card-header"><i class="far fa-grin-alt"></i></div>
              <div class="card-body">
                <h5 class="card-title">${val.name}</h5>
                <p class="card-text-vaccine">ADREESS : ${val.address}</p>
                <p class="card-text-vaccine">AVALIABLE VACCINES : ${val.sessions[0].available_capacity}</p>
                <p class="card-text-vaccine">DOSE 1 : ${val.sessions[0].available_capacity_dose1}</p>
                <p class="card-text-vaccine">DOSE 2 : ${val.sessions[0].available_capacity_dose2}</p>
                <p class="card-text-vaccine">VACCINE NAME : ${val.sessions[0].vaccine}</p>
                <p class="card-text-vaccine">AGE : ${val.sessions[0].min_age_limit}+</p>
                <p class="card-text-vaccine">FEE : ${val.fee_type}</p>
                <p class="card-text-vaccine">TIME : ${val.from} - ${val.to}</p>
                <p class="card-text-vaccine"></p>
              </div>
            </div>
          </div>
                `

            })


        } catch (error) {
          imgCorana.innerHTML=``;
          info.innerHTML=`<div style=" display:flex; height:100vh; width:100%;align-items: center; justify-content:center; text-align:center " >ENTER VALID PINCODE<div>`
        }    
    }
}

searchBtn.addEventListener('click',getInfo)