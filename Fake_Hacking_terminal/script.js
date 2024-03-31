function asyncOperation1() {
  return new Promise((res) => {
    setTimeout(() => {
      document.getElementById(
        "head-1"
      ).innerHTML = `Initialize Hacking  <span class="loader__dot">.</span>
            <span class="loader__dot">.</span>
            <span class="loader__dot">.</span></div> `;
      res();
    }, 1500);
  });
}

function asyncOperation2(res) {
  return new Promise((res) => {
    setTimeout(() => {
      document.getElementById(
        "head-2"
      ).innerHTML = `Reading Your Files <span class="loader__dot">.</span>
            <span class="loader__dot">.</span>
            <span class="loader__dot">.</span></div> `;
        res();
    }, 1000);
  });
}


function asyncOperation3(res) {
    return new Promise((res) => {
        setTimeout(() => {
            document.getElementById(
              "head-3"
            ).innerHTML = `Password files Detected <span class="loader__dot">.</span>
                  <span class="loader__dot">.</span>
                  <span class="loader__dot">.</span></div> `;
                  res();
          },2000);
    })
    
}




function asyncOperation4(res) {
    return new Promise((res) => {
        setTimeout(() => {
            document.getElementById(
              "head-4"
            ).innerHTML = `Sending all passwords and personal files to server <span class="loader__dot">.</span>
                  <span class="loader__dot">.</span>
                  <span class="loader__dot">.</span></div> `;
                  res();
          },2300);
    })
    
}





function asyncOperation5(res) {
    return new Promise((res) => {
        setTimeout(() => {
            document.getElementById(
              "head-5"
            ).innerHTML = `Cleaning Up <span class="loader__dot">.</span>
                  <span class="loader__dot">.</span>
                  <span class="loader__dot">.</span></div> `;
                  res();
          },3000);
    })
    
}



window.onload = async function MainFn() {

    try{
        await asyncOperation1();
        await asyncOperation2();
        await asyncOperation3();
        await asyncOperation4();
        await asyncOperation5();

    }
    catch(error){
        console.log("error");
    }

};
