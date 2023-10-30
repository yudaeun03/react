import { useState } from 'react';



// function Exam03(){

    const Exam03 = ()=> {
    const [money, setMoney] = useState(0);




return (
    <>
    <h1>세 번째 예제</h1>

    <h3> 출금금액 :  </h3>
    <h4> {money}원</h4>
    <br/>
    <button className ="btn btn-primary me-1" onClick={()=>setMoney(money + 100000)}> 10만원 </button>
    <button className ="btn btn-primary me-1" onClick={()=>setMoney(money + 50000)}> 5만원 </button>
    <button className ="btn btn-primary me-1" onClick={()=>setMoney(money + 10000)}> 1만원 </button>
    <button className ="btn btn-primary me-1" onClick={()=>setMoney(money + 0)}> 초기화</button>
    <br/>
    <input 
    type="range" 
    min="0" 
    max="10000000" 
    step="10000" value={money}
    onChange={e=>setMoney(parseInt(e.target.value))}/>
    </>

    );
}



export default Exam03;