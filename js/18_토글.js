function 보이기숨기기(){
    const 박스 = document.getElementById("토글박스");
    // 클래스 목록에 hidden 클래스가 포함되어 있는지 확인
    if( 박스.classList.contains("hidden")) {
        //만약에 존재한다면 hidden을 지워줘
        박스.classList.remove("hidden");
    } else {
        //hidden이 존재하지 않는다면 추가하기
        박스.classList.add("hidden");
    }
}