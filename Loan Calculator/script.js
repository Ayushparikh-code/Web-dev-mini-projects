
function calculateLoan(){
    const amount = document.querySelector("#amount").value;
    const interestRate = document.querySelector("#interest").value;
    const months =  document.querySelector("#months").value;

    const monthlyRate = (interestRate)/(12*100);
    const onePlusR = Math.pow(1+monthlyRate, months);
    const den = onePlusR - 1;

    const emi = (amount * monthlyRate * (onePlusR/ den)).toFixed(2);
    const totalPay =  (emi * months).toFixed(2);

    document.querySelector("#payment").innerHTML = `EMI: ₹ ${emi} <br><br> Total Payment: ₹${totalPay}`

}