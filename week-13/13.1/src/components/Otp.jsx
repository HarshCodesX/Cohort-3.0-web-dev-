// Otp component to render the otp page with 6 input boxes and a button
import React, { useRef, useState } from 'react';
import Button from './Button';

const Otp = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled, setDisabled] = useState(true);

  return (
    // main logic here, rendering 6 input boxes and a button, on change of each input, if non empty value is there, then move to next
    // box,, if it is empty, then move to previous box
    <div className=' flex-col justify-center flex items-center'>
    <div className='flex justify-center items-center mb-5'>
        <SubOtpBox reference={ref1} onDone={() => {
            ref2.current.focus();
        }} />
        <SubOtpBox reference={ref2} onDone={() => {
            ref3.current.focus();
        }} />
        <SubOtpBox reference={ref3} onDone={() => {
            ref4.current.focus();
        }} />
        <SubOtpBox reference={ref4} onDone={() => {
            ref5.current.focus();
        }} />
        <SubOtpBox reference={ref5} onDone={() => {
            ref6.current.focus();
        }} />
        <SubOtpBox reference={ref6} onDone={() => {
            setDisabled(false);
        }} />
    </div>
    <Button disabled={disabled} children={"Continue"} />
    </div>
  )
}

function SubOtpBox({reference, onDone}){
    // sub otp logic here to add value to the subotp
    const [inputBoxVal, setInputBoxVal] = useState("");
    return <div>
        <input value={inputBoxVal} ref={reference} onChange={(e)=> {
            const val = e.target.value;
            if(e.target.value == ""){
                // go bcak logic here
            }
            else if (!isNaN(val) && val.length <= 1){
                // only number logic here
            }
            onDone()
        }} type="text" className='m-1 w-[40px] h-[50px] rounded-2xl bg-blue-300 outline-none px-4 text-white' />
    </div>
}

export default Otp;