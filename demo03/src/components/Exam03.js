import { useState } from 'react';



function Exam03(){
    const[number, setNumber] = useState(0);

    function one() {
        setNumber(number + 10000);
    }
    function five() {
        setNumber(number + 50000);
    }
    function ten() {
        setNumber(number + 100000);
    }
    function reset() {
        setNumber(0);
    }
    


return (
    <>
    <h1>세 번째 예제</h1>

    <h3> 출금금액 :  </h3>
    <h4> {number}원</h4>
    <br/>
    <button onClick={one}> 1만원 </button>
    <button onClick={five}> 5만원 </button>
    <button onClick={ten}> 10만원 </button>
    <button onClick={reset}> 초기화</button>
    <br/><br/>
    </>

    );
}



export default Exam03;