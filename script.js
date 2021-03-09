let clickBtn = document.querySelector('.click');
let progress = document.querySelector('.progress');
let i = 0

clickBtn.addEventListener('click', progressMove);
function progressMove(){
    if(i == 0){
        i = 1;
        var progressBar = progress;
        var width = 1;
        var apply = setInterval(moveProgress, 10);

        function moveProgress(){
            if(width >= 100){
                clearInterval(apply);
                i = 0;
            }else{
                width++;
                progress.style.width = width + '%';
                progress.textContent = width + '%'
               
            }
        }
    }
}