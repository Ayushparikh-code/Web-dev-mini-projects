
function calculateLoan(){
    const amount = document.querySelector("#amount").value;
    const interestRate = document.querySelector("#interest").value;
    const months =  document.querySelector("#months").value;

    const interest =(amount*(interestRate*0.01))/months;
    const payment = ((amount/months) + interest).toFixed(2);

    document.querySelector("#payment").innerHTML = `EMI: ₹ ${payment}`

}