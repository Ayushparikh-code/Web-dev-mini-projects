const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-XVgbsUJp9n4dxZmnx9iftNLW&per_page=10";
const search_url = "https://api.coingecko.com/api/v3/"
const container = document.getElementById('container');


const sort_market_asc = document.getElementsByClassName('ascending-market')[0];
const sort_market_desc = document.getElementsByClassName('descending-market')[0];
const pagination_sec = document.getElementById('pagination-wrapper');
const selected_input = document.getElementById('coin-input');


const page = 1;

function fetchingUrl(queryparams,page) {
    pagination_sec.innerHTML = "";
    container.innerHTML = "";
    fetch(`${url}${queryparams}&page=${page}`)
        .then((res)=>{
            pagination()
            return res.json();
        })
        .then(data => {
            coinsList(data)
            // console.log(data);
        })
        .catch(err => console.log(err));
}

fetchingUrl();

function coinsList(data) {
    container.innerHTML="";
    data.forEach((item) => {
        container.append(coinMaker(item));
        // console.log(item);
    });
}

function coinMaker(item) {
    const coin_div = document.createElement('tr');
    coin_div.className = "coin-div";

    const imgTd=document.createElement('td');
    const image = document.createElement('img');
    image.src = item.image;
    image.className = "coin-image";
    image.alt = "coin image";
    imgTd.appendChild(image)


    const nameTd=document.createElement('td');
    const name = document.createElement('h1');
    name.className = "coin-name";
    name.textContent = item.id.charAt(0).toUpperCase() + item.id.slice(1);
    nameTd.appendChild(name)

    const price=document.createElement('td');
    const current_price = document.createElement('span');
    current_price.className = "current-price";
    current_price.textContent = `$ ${item.current_price}`;
    price.appendChild(current_price)

    const rate=document.createElement('td'); 
    const price_change = document.createElement('span');
    price_change.className = `price-change ${parseFloat(item.price_change_percentage_24h) >= 0 ? 'positive-change' : 'negative-change'}`;
    price_change.textContent = `${parseFloat(item.price_change_percentage_24h).toFixed(2)} %`;
    rate.appendChild(price_change)
   
    const mp=document.createElement('td'); 
    const market_price = document.createElement('span');
    market_price.className = "market-price";
    market_price.textContent = item.market_cap;
    mp.appendChild(market_price);

    const btn=document.createElement('td');
    const button = document.createElement('button');
    button.className = "trade-btn";
    button.innerHTML = "TRADE";
    btn.appendChild(button);
    button.addEventListener('click',()=>{
        const local_items = {'coin_name' : item.id, 'price' : item.current_price, "market_price" : item.market_cap, 'change' : item.price_change_percentage_24h, 'coin_image' : item.image};
        localStorage.setItem('local_items',JSON.stringify(local_items));
        window.location.href = '../purchase coins/purchase.html';
    })

    // Set button color based on market price change
    if (parseFloat(item.price_change_percentage_24h) < 0) {
        button.classList.add('negative-change');
    } else {
        button.classList.add('positive-change');
    }



   coin_div.append(imgTd,nameTd,price,rate,mp,btn);

    return coin_div;
}

sort_market_asc.addEventListener('click',()=>{
    fetchingUrl('&order=market_cap_asc');
});

sort_market_desc.addEventListener('click',()=>{
    fetchingUrl('&order=market_cap_desc');
})

// pagination

function pagination(){

    // pagination_sec.innerHTML="";
    for(let i=1; i<=10; i++){
       const paginated_btn = document.createElement('button');
       paginated_btn.className = "paginated-buttons";
       paginated_btn.innerHTML = i;
       paginated_btn.addEventListener("click",()=>{
        container.innerHTML = "";
        fetchingUrl("",i)
    })
    pagination_sec.append(paginated_btn);
    }


}

// filtering 
var coindata = [];

async function getData(sample) {
    try {
        let res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-XVgbsUJp9n4dxZmnx9iftNLW&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en")
        let data = await res.json();
        coindata = [...data]
        console.log(coindata);
        
        const regex = new RegExp(sample, 'i');
        
        coindata = coindata.filter(item => regex.test(item.id))
        
        let req_data = coindata.splice(0,10);
        coinsList(req_data)
        console.log(req_data);
    } catch (error) {
        console.log(error)
    }
}

selected_input.addEventListener('input',()=>{
    getData(selected_input.value)
    console.log(selected_input.value);
})


//