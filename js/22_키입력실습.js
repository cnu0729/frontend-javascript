// 키 다운 background = lightblue
            // 키 다운 color = pink

            // 키 업 background = light pint
            // 키 업 color = lightblue
            const 키들 = document.querySelectorAll(".key");
            function 키다운기능(e){

                let 숫자값저장;

                switch(e.key){
                    case 'q' : 숫자값저장 = 0;
                        break;
                    case 'w' : 숫자값저장 = 1;
                        break;
                    case 'e' : 숫자값저장 = 2;
                        break;
                    case 'r' : 숫자값저장 = 3;
                        break;
                    default  :
                        return;
                }

                키들[숫자값저장].style.background = "lightblue";
                키들[숫자값저장].style.color = "pink";
            }

            function 키업기능(e){
                let 숫자값저장;

                    switch(e.key){
                        case 'q' : 숫자값저장 = 0;
                            break;
                        case 'w' : 숫자값저장 = 1;
                            break;
                        case 'e' : 숫자값저장 = 2;
                            break;
                        case 'r' : 숫자값저장 = 3;
                            break;
                        default  :
                            return;
                    }

                    키들[숫자값저장].style.background = "pink";
                    키들[숫자값저장].style.color = "black";
            }
            
            document.addEventListener("keydown", 키다운기능);
            document.addEventListener("keyup", 키업기능);