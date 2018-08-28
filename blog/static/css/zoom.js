
// 이미지를 선택시에만 확대볼수 있게.
        function off() {
            document.getElementById('myresult').className = 'img-zoom-result';
        }

        // 이미지파일 형태를 불러온다.
        var loadFile = function (files) {
        // reader 는 인스턴트 객체
            var reader = new FileReader();
            reader.onload = function () {
                var output = document.getElementById('myimage');
                output.src = reader.result;
                console.log(reader.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        };


        function imageZoom(imageID, resultID) {
            var img, lens, result, cx, cy;
            // src = reader.result 파일을 불러온 결과의 주소;
            img = document.getElementById(imageID);
            result = document.getElementById(resultID);
            /* lens 이미지 확대하는 블럭박스 만들기*/
            lens = document.createElement("DIV");
            lens.setAttribute("class", "img-zoom-lens");
            /* lens 를 이미지에 넣기:*/
            img.parentElement.insertBefore(lens, img);
            /*결과 DIV와 lens 사이의 비율을 계산합니다.*/
            cx = result.offsetWidth / lens.offsetWidth;
            cy = result.offsetHeight / lens.offsetHeight;
            /*결과 DIV의 배경 속성 설정*/

            myimage.onload = function () {

                result.style.backgroundImage = "url('" + img.src + "')";
                result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
            }

            /* 이미지나 lens 위로 커서를 움직일 때 기능을 실행합니다.*/
            lens.addEventListener("mousemove", moveLens);
            img.addEventListener("mousemove", moveLens);
//           /* 터치 스크린의 경우 */
//            lens.addEventListener("touchmove", moveLens);
//            img.addEventListener("touchmove", moveLens);

            function moveLens(e) {
                var pos, x, y;
               /*이미지를 이동할 때 발생할 수 있는 다른 모든 작업을 방지.*/
                e.preventDefault();
                /*커서의 x 및 y 위치를 가져옵니다.*/
                pos = getCursorPos(e);
                /*렌즈의 위치를 계산합니다.*/
                x = pos.x - (lens.offsetWidth / 2);
                y = pos.y - (lens.offsetHeight / 2);
                /* 렌즈가 이미지 외부에 위치하지 않도록 합니다.*/
                if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
                if (x < 0) { x = 0; }
                if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
                if (y < 0) { y = 0; }
                /*렌즈의 위치를 설정합니다.*/
                lens.style.left = x + "px";
                lens.style.top = y + "px";
              /* 렌즈의 "시즈"를 표시합니다.*/
                result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
                document.getElementById('myresult').className = 'img-zoom-result2';
            }
            function getCursorPos(e) {
                var a, x = 0, y = 0;
                e = e || window.event;
               /*이미지의 x 및 y 위치를 가져옵니다.*/
                a = img.getBoundingClientRect();
               /*커서의 x 및 y 좌표를 이미지를 기준으로 계산합니다.*/
                x = e.pageX - a.left;
                y = e.pageY - a.top;
               /*모든 페이지 스크롤 고려:*/
                x = x - window.pageXOffset;
                y = y - window.pageYOffset;
                return { x: x, y: y };
            }
        }

        imageZoom("myimage", "myresult");