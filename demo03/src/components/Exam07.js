import { useEffect, useState } from "react";

const Exam07 = ()=>{

    //객체로 상태 변수를 정의
    const [member, setMember] = useState({//입력데이터
        memberId:"",
        memberPw:"",
        memberPwRe:""
    });
    const [result, setResult] = useState({//입력값의 유효성 검사결과
        memberId:null,
        memberPw:null,
        memberPwRe:null
    });
    // 각 필드가 null이면 유효성 검사가 아직 이뤄지지 않음을 나타냄.


    //입력데이터가 변하면 검사결과가 자동으로 계산되도록 처리
    const checkMember = ()=>{
        //console.log("member가 변했습니다");
        //ID검사
        const idRegex = /^[a-z][a-z0-9]{7,19}$/;

        // memberId의 길이가 '0', 'null' 이면 조건식의 결과 = true
        // idRegex.test(memberId) = test 메서드는 해당 패턴과 memberId가 매치되는지 검사
        const idMatch = member.memberId.length === 0 ? null : idRegex.test(member.memberId);
        


        //PW검사
        const pwRegex = /^[A-Za-z0-9!@#$]{8,16}$/;
        const pwMatch = member.memberPw.length === 0 ? null : pwRegex.test(member.memberPw);

        //PW-RE검사
        const pwReMatch = member.memberPwRe.length === 0 ? null : 
                                        member.memberPw.length > 0 && member.memberPw === member.memberPwRe;



        setResult({
            memberId : idMatch,
            memberPw : pwMatch,
            memberPwRe : pwReMatch
        });
    };
     // 정규식을 사용하여 유효성을 검사하고 결과를 result 상태에 업데이트한다.



     //useEffect(checkMember, [member]);

    //객체의 상태를 한 번에 변경하는 함수를 구현
    //입력된 이벤트 객체 'e'를 받아와서 처리
    const changeMember = (e)=>{
        setMember({
            ...member,
            [e.target.name] : e.target.value
        });
    };

    // className 속성을 사용하여 bootstrap 클래스를 동적으로 적용, 입력필드 스타일변경
    // 유효한 입력 값 = is-vaild, 유효하지 않은 입력 값 = is-invaild 클래스 적용
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    
                    {/* 점보트론 */}
                    {/* 점보트론 = 배경색이 어두운 배경에 흰색 텍스트로 표시 */}

                    <div className="p-4 text-light bg-dark rounded">
                        <h1>객체 상태 변수 문제</h1>
                    </div>

                    <form autoComplete="off">

                    <div className="row mt-4">
                        <div className="col">
                            <label className="form-label">아이디</label>
                            <input type="text" name="memberId" 
                                    className={`
                                        form-control 
                                        ${result.memberId === true ? 'is-valid' : ''}
                                        ${result.memberId === false ? 'is-invalid' : ''}
                                    `}
                                    value={member.memberId} onChange={changeMember}
                                            onBlur={checkMember}/>

                        {/* form-control 클래스는 bootstrap에서 제공하는 스타일, 
                        입력필드를 깔끔하게 스타일링한다. 유효한 아이디가 입력되면 is-vaild 클래스 적용,
                        그렇지 않으면 is-invaild 클래스가 적용된다. 
                        onChange={changeMember}= 사용자가 입력을 변경할 때마다 changeMember함수가
                        호출된다 -> 입력된 값을 memberId 상태에 업데이트한다.onBlur={checkMember}: 
                        사용자가 입력 필드를 떠날 때 (즉, 포커스가 떠날 때) checkMember 함수가 호출됩니다. 
                        이 함수는 입력값의 유효성을 검사하고, 그 결과를 상태에 업데이트합니다. */}

                        
                            <div className="valid-feedback">멋진 아이디입니다!</div>
                            <div className="invalid-feedback">사용할 수 없는 아이디입니다</div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <label className="form-label">비밀번호</label>
                            <input type="password" name="memberPw" 
                                    className={`
                                        form-control
                                        ${result.memberPw === true ? 'is-valid' : ''}
                                        ${result.memberPw === false ? 'is-invalid' : ''}
                                    `}
                                    value={member.memberPw} onChange={changeMember}
                                        onBlur={checkMember}/>
                            <div className="valid-feedback">올바른 형식의 비밀번호입니다</div>
                            <div className="invalid-feedback">비밀번호 형식이 올바르지 않습니다</div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <label className="form-label">비밀번호 확인</label>
                            <input type="password" name="memberPwRe" 
                                    className={`
                                        form-control
                                        ${result.memberPwRe === true ? 'is-valid' : ''}
                                        ${result.memberPwRe === false ? 'is-invalid' : ''}
                                    `}
                                    value={member.memberPwRe} onChange={changeMember}
                                    onBlur={checkMember}/>
                            <div className="valid-feedback">비밀번호가 일치합니다</div>
                            <div className="invalid-feedback">비밀번호가 일치하지 않습니다</div>
                        </div>
                    </div>

                    </form>

                    <div className="row mt-4">
                        <div className="col">
                            <button type="button" className="btn btn-primary w-100"
                                disabled={!(result.memberId === true && result.memberPw === true
                                                    && result.memberPwRe === true)}>
                                회원가입
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );    
};

export default Exam07;