import React, { useId } from 'react'

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    
}) {
    const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
    <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
            {label}
        </label>
        <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-black funny"
                    type="number"
                    step='any'
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => 
                        {
                            onAmountChange && onAmountChange(Number(e.target.value));
                            if(e.target.value == 0){
                                onAmountChange();
                                
                            }
                        }

                    }
        />
    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}
        >
            {currencyOptions.map((currency)=> {
              return  (
          <option key={currency} value={currency} className='text-black'>
             {currency}
             
            </option>
              )
            })}

{/* {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))} */}
              
        
        </select>
    </div>
</div>
  )
}

export default Inputbox