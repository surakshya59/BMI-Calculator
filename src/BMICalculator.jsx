import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineBMICategory(bmiValue);
    } else {
      alert("Please enter valid weight and height.");
    }
  };

  const determineBMICategory = (bmi) => {
    if (bmi < 18.5) {
      setStatus("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setStatus("Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-600">
        BMI Calculator
      </h1>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button
        onClick={calculateBMI}
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Calculate
      </button>

      {bmi && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">Your BMI: {bmi}</h3>
          <p className={`text-lg ${bmi < 18.5 || bmi >= 25 ? 'text-red-600' : 'text-green-600'}`}>
            Status: {status}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
