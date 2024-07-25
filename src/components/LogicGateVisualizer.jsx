import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AndGateImage from '/src/assets/AND gate.jpg';
import OrGateImage from '/src/assets/orgate.png';
import NotGateImage from '/src/assets/notgate.jpg';

const LogicGateVisualizer = () => {
    const [inputA, setInputA] = useState(0);
    const [inputB, setInputB] = useState(0);

    const [andOutput, setAndOutput] = useState(0);
    const [orOutput, setOrOutput] = useState(0);
    const [notOutput, setNotOutput] = useState(0);

    useEffect(() => {
        setAndOutput(Number(inputA && inputB));
        setOrOutput(Number(inputA || inputB));
        setNotOutput(Number(!inputA));
    }, [inputA, inputB]);

    const toggleInputA = () => setInputA(inputA ? 0 : 1);
    const toggleInputB = () => setInputB(inputB ? 0 : 1);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl text-white font-bold mb-8">Logic Gate Visualizer</h1>
            <div className="flex space-x-8 mb-8">
                <Signal value={inputA} toggle={toggleInputA} label="Input A" />
                <Signal value={inputB} toggle={toggleInputB} label="Input B" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Gate label="AND" output={andOutput} image={AndGateImage} />
                <Gate label="OR" output={orOutput} image={OrGateImage} />
                <Gate label="NOT A" output={notOutput} image={NotGateImage} />
            </div>
        </div>
    );
};

const Signal = ({ value, toggle, label }) => (
    <div className="flex flex-col items-center">
        <button
            onClick={toggle}
            className={`w-20 h-20 rounded-full border-4 ${value ? 'bg-yellow-500 border-yellow-600' : 'bg-red-500 border-red-600'
                } transition-all duration-300 transform hover:scale-105`}
        />
        <span className="mt-4 text-white text-xl font-semibold">{label}</span>
    </div>
);

Signal.propTypes = {
    value: PropTypes.number.isRequired,
    toggle: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

const Gate = ({ label, output, image }) => (
    <div className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg shadow-lg">
        <img src={image} alt={`${label} gate`} className="w-32 h-32 mb-4" />
        <div className={`w-20 h-20 rounded-full border-4 ${output ? 'bg-yellow-500 border-yellow-600' : 'bg-red-500 border-red-600'
            } transition-all duration-300 transform hover:scale-105`} />
        <span className="mt-4 text-white text-xl font-semibold">{label}</span>
    </div>
);

Gate.propTypes = {
    label: PropTypes.string.isRequired,
    output: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};

export default LogicGateVisualizer;
