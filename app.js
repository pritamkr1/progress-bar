


let clickBtn = document.querySelector('.click');
let progressBar = document.querySelector('.progress');

clickBtn.addEventListener('click', move);
//window.addEventListener('DOMLoadedContent', move);
var i = 0;
function move(){
    if(i == 0){
        i = 1;
        var progress = progressBar;
        var width = 1;
        var id = setInterval(frame, 10);

        function frame(){
            if(width >= 100){
                clearInterval(id);
                i = 0;
            }else {
                width++;
                progress.style.width = width + '%';
                progress.textContent = width  + '%';
            }
        }
    }
}


