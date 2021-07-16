const searchBtn=document.querySelector('.search-btn')
const imgCorana=document.querySelector('.img-corona')
const info=document.querySelector('.info')
const kidding=document.querySelector('.kidding')


imgCorana.innerHTML=`
<img src="images/corona.gif" alt="Loading...">`
info.innerHTML=``

const getInfo=async ()=>{
    const inval=document.querySelector('.search-text').value;
    // console.log(inval.value);

    if(inval==""){
        // imgCorana.innerHTML=``;
        // kidding.innerHTML=`<h1 class="title">Are U Kidding, Pls Enter Country</h1>`
        // info.innerHTML=``
        // console.log(1);
    }else{
        // console.log(2);
        // kidding.innerHTML=``;
        try {
            imgCorana.innerHTML=``;
            let url=`https://corona.lmao.ninja/v2/countries/${inval}?yesterday&strict&query%20`
            const response=await fetch(url);
            let objData= await response.json();
            let arrData=[objData];
            // console.log(arrData);
            // console.log(arrData[0].todayCases);
            // console.log(arrData[0].todayDeaths);
            // console.log(arrData[0].recovered);
            // console.log(arrData[0].cases);
            // console.log(arrData[0].deaths);
            // console.log(arrData[0].active);
            // console.log(arrData[0].todayRecovered);
            info.innerHTML=`

            <div class="country-info">
            <div class="container">
                ${arrData[0].country}
            </div>
            </div>     

            <div class="container-1">
            <div class="card text-white mb-3">
              <div class="card-header"><i class="far fa-grin-alt"></i></div>
                <div class="card-body">
                <h5 class="card-title">New Cases </h5>
                <p class="card-text">${arrData[0].todayCases}</p>
              </div>
            </div>
            <div class="card text-white mb-3" style="max-width: 18rem;">
              <div class="card-header"><i class="far fa-frown"></i></div>
                <div class="card-body">
                <h5 class="card-title">Today Deaths</h5>
                <p class="card-text">${arrData[0].todayDeaths}</p>
              </div>
            </div>
            <div class="card text-white mb-3" style="max-width: 18rem;">
              <div class="card-header"><i class="far fa-surprise"></i></div>
                <div class="card-body">
                <h5 class="card-title">Total Cases</h5>
                <p class="card-text">${arrData[0].cases}</p>
              </div>
            </div>
          </div>
            
          <div class="container-2">
            <div class="card text-white mb-3" style="max-width: 18rem;">
              <div class="card-header"><i class="far fa-sad-cry"></i></div>
                <div class="card-body">
                <h5 class="card-title">Total Deaths</h5>
                <p class="card-text">${arrData[0].deaths}</p>
              </div>
            </div>
            <div class="card text-white mb-3" style="max-width: 18rem;">
              <div class="card-header"><i class="far fa-flushed"></i></div>
                <div class="card-body">
                <h5 class="card-title">Active</h5>
                <p class="card-text">${arrData[0].active}</p>
              </div>
            </div>
            <div class="card text-white mb-3" style="max-width: 18rem;">
              <div class="card-header"><i class="far fa-smile-beam"></i></div>
                <div class="card-body">
                <h5 class="card-title">Recovered</h5>
                <p class="card-text">${arrData[0].todayRecovered}</p>
              </div>
            </div>
         </div>
        `
        } catch (error) {
          imgCorana.innerHTML=``;
          info.innerHTML=`<div style=" display:flex; height:100vh; width:100%;align-items: center; justify-content:center; text-align:center " >ENTER VALID COUNTRY<div>`
        }    
    }
}

searchBtn.addEventListener('click',getInfo)