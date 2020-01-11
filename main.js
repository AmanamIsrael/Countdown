        let btn = document.querySelector("button");
        btn.addEventListener("click", countDown);
               
        let hours = "0";
        let minutes = "0";
        let seconds =  "10";

        hours < 10 ? hours = '0' + hours : hours = hours;
        minutes < 10 ? minutes = '0' + minutes : minutes = minutes;
        seconds < 10 ? seconds = '0' + seconds : seconds = seconds;
        
        let countContainer = document.getElementById('count');

        
        function countDown(){       
            
             setInterval(() => {
                let watch = hours + ':' + minutes + ':' + seconds;
                seconds!="00" ?
                seconds-- :
                seconds = '00';
                countContainer.innerHTML = watch;
                clearInterval();
             }, 1000);


             function stopInterval(){
                window.clearInterval();
            }
                    
            }
            