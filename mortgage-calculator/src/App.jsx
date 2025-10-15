import { useState, createContext, useContext } from "react"
const DataContext = createContext();

const FirstComponent = () => {
    const { data, handleFormdata, handleSubmit, errors, handleClear } = useContext(DataContext);
    
    return (
        <>
            <section className="px-6 py-8 bg-white laptop:rounded-l-3xl">
                <form action="post" onSubmit={handleSubmit}>
                    <div className="laptop:flex justify-between items-center">
                        <h1 className="font-bold text-2xl text-slate-900">Mortgage Calculator</h1>
                        <button type="reset" className="capitalize font-medium underline text-[#4E6E7E] mt-2" onClick={handleClear}>
                            clear all 
                        </button>
                    </div>
                    <div className="mt-6 space-y-6">
                        <div className="space-y-3">
                            <label htmlFor="amount" className="capitalize font-medium text-slate-700">
                                mortgage amount
                            </label>
                                {errors.amount &&
                                    <>
                                        <div className="relative">
                                            <input type="number" name="amount" id="amount" value={data.amount} onChange={handleFormdata} className="w-full h-12 border border-custom-red outline-none rounded-md pl-12"/>
                                            <span className="bg-custom-red h-12 px-4 grid place-items-center absolute top-1/2 left-0 -translate-y-1/2 border border-y-custom-red border-l-custom-red border-r-0 rounded-l-md font-bold text-lg text-white">
                                                £
                                            </span>
                                        </div>
                                        <p className="text-custom-red ">{errors.amount}</p>
                                    </> 
                                } {!errors.amount && 
                                    <div className="relative">
                                        <input type="number" name="amount" id="amount" value={data.amount} onChange={handleFormdata} className="w-full h-12 border border-slate-500 outline-none rounded-md pl-12"/>
                                        <span className="bg-slate-100 h-12 px-4 grid place-items-center absolute top-1/2 left-0 -translate-y-1/2 border border-y-slate-500 border-l-slate-500 border-r-0 rounded-l-md font-bold text-lg text-slate-700">
                                            £
                                        </span>
                                    </div>
                                }
                        </div>
                        <div className="space-y-6 laptop:space-y-0 laptop:flex justify-between items-center gap-6">
                            <div className="space-y-3">
                                <label htmlFor="term" className="capitalize font-medium text-slate-700">
                                    mortgage term
                                </label>
                                {errors.term && 
                                    <>
                                        <div className="relative">
                                            <input type="number" name="term" id="term" value={data.term} onChange={handleFormdata} className="w-full h-12 border border-custom-red outline-none rounded-md pr-[60px] pl-3"/>
                                            <span className="bg-custom-red h-12 px-4 grid place-items-center absolute top-1/2 right-0 -translate-y-1/2 border border-y-custom-red border-r-custom-red border-l-0 rounded-r-md font-bold text-lg text-white">
                                                years
                                            </span>
                                        </div>
                                        <p className="text-custom-red ">{errors.term}</p>
                                    </>
                                }   
                                {!errors.term && 
                                    <div className="relative">
                                        <input type="number" name="term" id="term" value={data.term} onChange={handleFormdata} className="w-full h-12 border border-slate-500 outline-none rounded-md pr-[60px] pl-3"/>
                                        <span className="bg-slate-100 h-12 px-4 grid place-items-center absolute top-1/2 right-0 -translate-y-1/2 border border-y-slate-500 border-r-slate-500 border-l-0 rounded-r-md font-bold text-lg text-slate-700">
                                            years
                                        </span>
                                    </div>
                                }
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="rate" className="capitalize font-medium text-slate-700">
                                    interest rate
                                </label>
                                {errors.rate && 
                                    <>
                                        <div className="relative">
                                            <input type="number" name="rate" id="rate" value={data.rate} onChange={handleFormdata} className="w-full h-12 border border-custom-red outline-none rounded-md pl-3 pr-14 "/>
                                            <span className="bg-custom-red h-12 px-4 grid place-items-center absolute top-1/2 right-0 -translate-y-1/2 border border-y-custom-red border-r-custom-red border-l-0 rounded-r-md font-bold text-lg text-white">
                                                %
                                            </span>
                                        </div>
                                        <p className="text-custom-red ">
                                            {errors.rate}
                                        </p>
                                    </>
                                } 
                                {!errors.rate &&
                                    <div className="relative">
                                        <input type="number" name="rate" id="rate" value={data.rate} onChange={handleFormdata} className="w-full h-12 border border-slate-500 outline-none rounded-md pl-3 pr-14"/>
                                        <span className="bg-slate-100 h-12 px-4 grid place-items-center absolute top-1/2 right-0 -translate-y-1/2 border border-y-slate-500 border-r-slate-500 border-l-0 rounded-r-md font-bold text-lg text-slate-700">
                                            %
                                        </span>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="type" className="capitalize font-medium text-slate-700">
                                mortgage type
                            </label>
                            <div className="space-y-3">
                                <div className="w-full border border-[#6B94A8] px-3 py-3 flex items-center radio-container">
                                    <input type="radio" name="type" id="repayment" value="repayment" onChange={handleFormdata}/>
                                    <label htmlFor="repayment" className="radio-label capitalize text-slate-900 font-bold text-lg"> repayment </label>
                                </div>
                                <div className="w-full border border-[#6B94A8] px-3 py-3 flex items-center radio-container">
                                    <input type="radio" name="type" id="interest" value="interest" onChange={handleFormdata}/>
                                    <label htmlFor="interest" className="radio-label capitalize text-slate-900 font-bold text-lg"> Interest only </label>
                                </div>
                            </div>
                            {errors.type && 
                                <p className="text-custom-red "> 
                                    {errors.type} 
                                </p>
                            }
                        </div>
                        <button type="submit" className="w-full bg-custom-lime rounded-[999px] flex justify-center items-center py-4"> 
                            <img src="/assets/images/icon-calculator.svg" alt="" />
                            Calculate Repayments 
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

const SecondComponent = () => {
    const { mortgage, totalMortgage } = useContext(DataContext);
    return (
        <>
            <section className="bg-slate-900 py-8 px-6 laptop:rounded-r-3xl laptop:rounded-bl-[80px]">
                {!mortgage &&
                    <div className="text-center space-y-4">
                        <div className="w-full grid place-items-center">
                            <img src="/assets/images/illustration-empty.svg" alt="" />
                        </div>
                        <h1 className="text-white font-bold text-2xl">Results shown here</h1>
                        <p className="text-slate-300 font-medium">
                            Complete the form and click “calculate repayments” to see what your monthly repayments would be.
                        </p>
                    </div>
                }
                {mortgage &&
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-white font-bold text-2xl">
                                Your results
                            </h1>
                            <p className="text-slate-300 font-medium">
                                Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
                            </p>
                        </div>
                        <div className="bg-black bg-opacity-25 py-6 px-4 text-slate-300 font-medium space-y-4">
                            <div>
                                <p>
                                    Your monthly repayments
                                </p>
                                <p className="text-custom-lime font-bold text-[40px]">
                                    £{mortgage}
                                </p>
                            </div>
                            <hr />
                            <div>
                                <p>
                                    Total you&apos;ll repay over the term
                                </p>
                                <p className="text-white font-bold text-2xl">
                                    £{totalMortgage}
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </>
    )
}

function App() {
    const [data, setData] = useState({
        "amount" : "",
        "term" : "",
        "rate" : "",
        "type" : ""
    });
    const [mortgage, setMortgage] = useState(0);
    const [totalMortgage, settotalMortgage] = useState(0);
    const [errors, setErrors] = useState({})
        
    const handleFormdata = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({...prevData, [name] : value}));
        
        // const { amount, term, rate, type } = data;
        // if (!amount || !term || !rate ||!type) setErrors('This field is required');
        // else setErrors(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let { amount, term, rate, type } = data;

        if (!amount) {setErrors(prevData => ({...prevData, 'amount' : 'This field is required'}))}
        else setErrors(prevData => ({...prevData, 'amount' : null}));
        if (!term) setErrors(prevData => ({...prevData, 'term' : 'This field is required'}))
        else setErrors(prevData => ({...prevData, 'term' : null}));
        if (!rate) setErrors(prevData => ({...prevData, 'rate' : 'This field is required'}))
        else setErrors(prevData => ({...prevData, 'rate' : null}));
        if (!type) setErrors(prevData => ({...prevData, 'type' : 'This field is required'}))
        else setErrors(prevData => ({...prevData, 'type' : null}));
    
    rate = (rate / 100) / 12;
    term = term * 12;
    let mortgagePayment;
    let totalMortgagePayment;
    
        if (type === "repayment") {
            let numerator = rate * ((1 + rate) ** term);
            let denominator = ((1 + rate) ** term) - 1;
            mortgagePayment = amount * (numerator / denominator);
        } else if (type === "interest"){ 
            mortgagePayment = amount * rate;
        } else {
            setErrors(prevData => ({...prevData, 'type' : 'This field is required'}))
        };
        totalMortgagePayment = mortgagePayment * term;

        
        if(isNaN(mortgagePayment)) {
            setMortgage(false);
            settotalMortgage(false);
        } else {
            setMortgage(mortgagePayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
            settotalMortgage(totalMortgagePayment.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2}));  
        }
        
    };

    const handleClear = () => {
        setMortgage(0);
        settotalMortgage(0);
        setData({
            "amount" : "",
            "term" : "",
            "rate" : "",
            "type" : ""
        });
    };
    return (
        <>
            <main className="w-full min-h-screen grid place-items-center font-jarkata bg-slate-100 laptop:p-10">
                <div className="laptop:grid grid-cols-2 laptop:bg-white max-w-[800px]">
                    <DataContext.Provider value={{ data, handleFormdata, handleSubmit, errors, mortgage,handleClear, totalMortgage }}>
                        <FirstComponent />
                        <SecondComponent />
                    </DataContext.Provider>    
                </div>
            </main>
        </>
    )
}


export default App