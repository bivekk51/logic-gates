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
        <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
                <Signal value={inputA} toggle={toggleInputA} label="Input A" />
                <Signal value={inputB} toggle={toggleInputB} label="Input B" />
            </div>

            <div className="flex space-x-4">
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
            className={`w-16 h-16 rounded-full ${value ? 'bg-yellow-500' : 'bg-red-500'}`}
        />
        <span>{label}</span>
    </div>
);

Signal.propTypes = {
    value: PropTypes.number.isRequired,
    toggle: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

const Gate = ({ label, output, image }) => (
    <div className="flex flex-col items-center">
        <img src={image} alt={`${label} gate`} className="w-32 h-32" />
        <div className={`w-16 h-16 rounded-full ${output ? 'bg-yellow-500' : 'bg-red-500'}`} />
        <span>{label}</span>
    </div>
);

Gate.propTypes = {
    label: PropTypes.string.isRequired,
    output: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};

export default LogicGateVisualizer;
