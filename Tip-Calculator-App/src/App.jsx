import React, { useRef, useState } from 'react';

function TipCalculator() {
  const billAmountRef = useRef(null);
  const tipPercentageRef = useRef(null);
  const numberOfPeopleRef = useRef(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [billOption, setBillOption] = useState('custom');

  const tipPercentages = [5, 10, 15, 20, 25];

  const calculateTip = () => {
    const billAmount = parseFloat(billAmountRef.current.value);
    let tipPercentage = parseFloat(tipPercentageRef.current.value);
    const numberOfPeople = parseFloat(numberOfPeopleRef.current.value);

    if (isNaN(billAmount) || isNaN(numberOfPeople) || billAmount <= 0 || numberOfPeople <= 0) {
      alert('Please enter valid numbers for Bill Amount and Number of People.');
      return;
    }

    if (billOption === 'even') {
      tipPercentage = 0;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const total = (billAmount + tipAmount) / numberOfPeople;
    setTotalAmount(total.toFixed(2));
  };

  const clearFields = () => {
    billAmountRef.current.value = '';
    tipPercentageRef.current.value = '';
    numberOfPeopleRef.current.value = '';
    setTotalAmount(0);
  };

  return (
    <div className=" mx-auto flex justify-center items-center h-screen bg-gray-700">
      <div className="bg-darkBlue shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Tip Calculator</h1>
        <div className="mb-4">
          <label htmlFor="billAmount" className="block mb-1 text-white">Bill Amount:</label>
          <input type="number" id="billAmount" ref={billAmountRef} className="border border-gray-400 focus:border-blue-500 focus:outline-none p-2 mr-2 transition duration-500 rounded-xl" placeholder="0.00" />
        </div>
        <div className="mb-4">
          <label htmlFor="tipPercentage" className="block mb-1 text-white">Tip Percentage:</label>
          <select id="tipPercentage" ref={tipPercentageRef} className="border border-gray-400 focus:border-blue-500 focus:outline-none p-2 mr-2 transition duration-500 rounded-xl">
            {tipPercentages.map((percentage, index) => (
              <option key={index} value={percentage}>{percentage}%</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfPeople" className="block mb-1 text-white">Number of People:</label>
          <input type="number" id="numberOfPeople" ref={numberOfPeopleRef} className="border border-gray-400 focus:border-blue-500 focus:outline-none p-2 mr-2 transition duration-500 rounded-xl" placeholder="1" />
        </div>
        <div className="mb-4">
          <label htmlFor="billOption" className="block mb-1 text-white">Bill Option:</label>
          <select id="billOption" className="border border-gray-400 focus:border-blue-500 focus:outline-none p-2 mr-2 transition duration-500 rounded-xl" value={billOption} onChange={(e) => setBillOption(e.target.value)}>
            <option value="custom">Custom</option>
            <option value="even">Split Evenly</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button onClick={calculateTip} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition duration-500">Calculate Tip</button>
          <button onClick={clearFields} className="bg-lightRed hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl transition duration-500">Clear</button>
        </div>
        {totalAmount > 0 && <p className="mt-4 text-white">Total Amount per person (including tip): ${totalAmount}</p>}
      </div>
    </div>
  );
}

export default TipCalculator;
