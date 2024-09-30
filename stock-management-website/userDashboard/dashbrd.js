function appenRow(data){
   const tab=document.getElementById("payHistory");
    tab.innerHTML="";
   data.forEach((ele)=>{
    tab.append(createColumn(ele));
   })
}

function createColumn(item){
    const row=document.createElement('tr');

  
   
    const itmDate=new Date(item.date);
    // Extract date components
    const year = itmDate.getFullYear();
    const month = itmDate.getMonth() + 1; // Month is 0-indexed, so we add 1
    const day = itmDate.getDate();
    
    // Extract time components
    const hours = itmDate.getUTCHours();
    const minutes = itmDate.getUTCMinutes();
    const seconds =itmDate.getUTCSeconds();
    
    // Create formatted strings
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
 
    const date=document.createElement('td');
    date.textContent=(`${formattedDate} (${formattedTime})`||'01.01.2001');
    row.appendChild(date) 
    
    const imgTd=document.createElement('td');
    const img=document.createElement('img')
    img.src=item.image;
    img.alt=item.coinname;
    img.className="icon-img";
    imgTd.append(img);
    row.appendChild(imgTd)
                                             
    const name=document.createElement('td')
    name.textContent=item.coinname.toLocaleString().toUpperCase();
    row.appendChild(name)
    
    const amount=document.createElement('td')
    amount.textContent=`$ ${(Number(item.quantity*item.price)).toLocaleString("en-US")}`;
    row.appendChild(amount);
    
    const pc=document.createElement('td');
    pc.textContent=`${item.price_change_percentage_24h} %`
    row.appendChild(pc);
    
    const marketCap=document.createElement('td');
    marketCap.textContent=`$ ${item.marketcap.toLocaleString("en-US")}`;
    row.appendChild(marketCap);

    const tt=document.createElement('td');
    tt.textContent=item.paymentType.toLocaleString().toUpperCase();
    row.appendChild(tt);

    return row;
}




// fetching all user details based on the userID stored in localStorage
let id = localStorage.getItem("id");
async function getUserDetails(id){
    try {
        let res = await fetch(`https://coinsquare.onrender.com/user/${id}`)
        let data = await res.json();
        console.log(data);
        let balance = document.getElementById("user-balance");
        balance.innerText = `$${data.user.balance.toLocaleString("en-US")}`;
        
        let investements = document.getElementById("user-investments");
        investements.innerText = `$${data.user.investements.toLocaleString("en-US")}`;

        let username = document.getElementById("user-name");
        username.innerText = data.user.name;

        let dashbrd_name=document.getElementById('dashbrd-name');
        dashbrd_name.textContent=data.user.name;

        let email = document.getElementById("user-email")
        email.innerText = data.user.email
       
        let username_2 = document.getElementById("user-name-2");
        username_2.value = data.user.name

        let useremail_2 = document.getElementById("user-email-2");
        useremail_2.value = data.user.email

        let usermobile = document.getElementById("user-mobile");
        usermobile.value = data.user.mobile||"Please Enter your Contact Number"

        let userage=document.getElementById("user-age-2");
        userage.value=data.user.age||"Please Enter your age";
    } catch (error) {
        console.log(error);
    }
}
getUserDetails(id);

// fetch request for payment history table
function fetchData(page, id, sortBy = 'date', sortOrder = 'desc'){
    fetch(`https://coinsquare.onrender.com/payments/${id}?page=${page || 1}&limit=5&sort=${sortBy}&order=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        
        // Update UI or perform other actions with the sorted data
        console.log(data.Data);
        appenRow(data.Data);
  
        // Add pagination logic if needed
        const total = Number(data.total);
        pagination(Math.ceil(total / 5), id);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  
function showModal() {
    // Assuming your modal has an ID of "myModal"
    const id=document.getElementById('myModal')
    const myModal = new bootstrap.Modal(id);
    myModal.show();
}

const pagination_btn=document.getElementById('btn-foot');
fetchData(1, id, 'date', 'desc');
function pagination(total,id){
   pagination_btn.innerHTML=""; 
   for( let i=1;i<=total;i++){
    let button=document.createElement('button');
    button.textContent=i;
    button.className='page-btn';
    pagination_btn.append(button) 

    button.addEventListener('click',()=>{
       fetchData(i,id);
    })
   }
    
}
//fetch req for search bar


const btn=document.getElementById('search');
btn.addEventListener('click',()=>{
    var name=document.getElementById('search-input')
    
    fetch(`https://coinsquare.onrender.com/payments/${id}?q=${name.value}`).then((res)=>res.json()).then((data)=>{
        console.log(data.Data)
        appenRow(data.Data);
         // Call and show the modal here
          
            showModal();
        pagination_btn.innerHTML="";
    })
})


// profile model use
const prof_btn = document.getElementById('prof-btn');
prof_btn.addEventListener('click', () => {
    const profile = new bootstrap.Modal(document.getElementById('profile-model'));
    profile.show();
    console.log('click');
});

//image upload js
let upload_img_form = document.getElementById("upload-img-form");
let save_img = document.getElementById("save-img");
save_img.addEventListener("click",async()=>{
    let new_image = document.getElementById("new-profile-image")
    let image = new_image.files[0];
    let data = new FormData();
    data.append('image',image)
    
    try{
        let res = await fetch(`https://coinsquare.onrender.com/user/profile/${localStorage.getItem('id')}`,{
            method:"PATCH",
            headers:{
                "enctype":"multipart/form-data"
            },
            body:data
        })
        let new_data = await res.json();
        console.log(new_data.updated);
        let test_img = document.getElementById("test-img")
        test_img.src = new_data.updated
        let profile_pic = document.getElementById("profile-pic")
        profile_pic.src = new_data.updated
        // localStorage.removeItem("image");
        // localStorage.setItem("image",new_data.updated);
        window.location.href="./dashboard.html"
    }
    catch(error){
        console.log(error)
    }
})
upload_img_form.addEventListener("submit",(e)=>{
    const profile = new bootstrap.Modal(document.getElementById('profile-model'));
    e.preventDefault();
    profile.show(); 
})

// load image on page load
async function loadImage(id){
    try {
        let res = await fetch(`https://coinsquare.onrender.com/user/profile/${id}`)
        let data = await res.json();
        console.log(data);
        let profile = data.image
        let test_img = document.getElementById("test-img")
            test_img.src = profile
            let profile_pic = document.getElementById("profile-pic")
            profile_pic.src = profile
    } catch (error) {
        console.log(error);
    }
  
}
loadImage(id);


// logout fuctionalities
const logout = async () => {
    try {
      const response = await fetch('https://coinsquare.onrender.com/user/logout', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the access token if needed
        },
      });
  
      if (response.ok) {
        // Handle successful logout
        console.log("Logout successful");
        window.location.href = '../index.html';
      } else {
        // Handle error response
        const data = await response.json();
        console.error("Logout failed:", data.err);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  // Example button click event
document.getElementById("logout-btn").addEventListener("click", logout);

//notification js

const noti_btn=document.getElementById('noti-btn');
noti_btn.addEventListener('click',()=>{
    const notification = new bootstrap.Modal(document.getElementById('notification-model'));
    notification.show();
})
// async function fetchNotifications(){

// } 
// function notification_card(data){
//     const card_div = document.createElement('div');
//     card_div.className="unread";

//     const img= document.createElement('img');
//     img.className='noti-img';
//     img.src=data.image;
//     img.alt=data.coinname;

//     card_div.appendChild(img);

//     const noti_body=document.createElement('div');
//     noti_body.textContent=`${data.coinname}'s Rate is Changing to ${data.price_change_percentage_24h}%`
//     noti_body.className='noti-body';

//     card_div.appendChild(noti_body);

//     return card_div;

// }


// function for updating the user profile
async function updateUser(userId) {
     

    const name = document.getElementById('user-name-2').value;
    const email = document.getElementById('user-email-2').value;
    const mobile = document.getElementById('user-mobile').value;
    const age = document.getElementById('user-age-2').value;

    try {
        const response = await fetch(`https://coinsquare.onrender.com/user/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                mobile,
                age,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log(data.message);
            // Optionally, you can update your UI to reflect the changes.
        } else {
            console.error(data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const toastElement = document.getElementById('toast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  });
  

const prof_update=document.getElementById('prof-chg-submit');

const prof_submit = prof_update.addEventListener('click', (e) => {
    // Prevent the default form submission
    e.preventDefault();
  
    // Update user (assuming id is defined somewhere)
    updateUser(id);
  
    // Create and show the Bootstrap Toast
    // var myToastEl = document.querySelector('.toast')
    // var myToast = bootstrap.Toast.getOrCreateInstance(myToastEl)
    // myToast.show()
    alert("Profile is being updated")
  });
  
  // Notification 


  let latest_purchase = JSON.parse(localStorage.getItem("latest"));

  async function checkCoin(latest_purchase){
    try {
        let coindata=[];
        let res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-XVgbsUJp9n4dxZmnx9iftNLW&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en")
        let data = await res.json();
        coindata = [...data]
        // console.log(coindata);
        
        
        
        coindata = coindata.filter(item => item.id==latest_purchase.coinname)
        if(coindata.length>0){
            if(coindata.current_price>latest_purchase.price){
                console.log("increase")
                let noti_cards = document.getElementById("noti-cards");
                let message = document.createElement('p')
                message.innerText = `Your latest purchase ${latest_purchase.coinname} price has increased. Consider selling if you wish`
                noti_cards.append(message);
                let mark_read = document.getElementById("mark-read")
                mark_read.addEventListener("click",()=>{
                    noti_cards.innerHTML = ""
                })
                
            }
            else{
                console.log("decrease");
                let noti_cards = document.getElementById("noti-cards");
                let message = document.createElement('p')
                message.innerText = `Your latest purchase ${latest_purchase.coinname} price has decreased. Consider buying more if you wish`
                noti_cards.append(message);
                let mark_read = document.getElementById("mark-read")
                mark_read.addEventListener("click",()=>{
                    noti_cards.innerHTML = ""
                })
            }
            

        }
        
    } catch (error) {
        console.log(error)
    }
  }
  checkCoin(latest_purchase);