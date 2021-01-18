const rabbit = document.getElementById("rabbit");
const obsatcle = document.getElementById("obstacle")
const game = document.getElementById("game")


var time = 0
var score = 0
document.addEventListener('keydown', function (event) {
    if(event.code == 'Space'){
        jump();
    }
    
})

function jump() { 
    
    
    if (rabbit.classList != "jump"){
    /*當rabbit還沒有jump class，才執行。如果在跳時，就不會執行。*/
    rabbit.classList.add("jump");

setTimeout(function() {
    rabbit.classList.remove("jump");
    }, 300); 
        }
    }


    
$("#strt").click(()=>{
    $('#start').hide()
    obsatcle.classList.add("obsGogo")
    let isAlive = setInterval(function() {
        time += 0.01
        if(time >= 2){
            time = 0
            score += 10
        }
        console.log(time)
        let rabbitTop = parseInt(window.getComputedStyle(rabbit).getPropertyValue("top"));
       // console.log(rabbitTop)
        // 得知兔子的y position得知兔子的y position
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
        //得知障礙物的x position
        //console.log(obstacleLeft)
        if (obstacleLeft <45 && obstacleLeft>0 && rabbitTop >= 140){
            //console.log('obstacleLeft')
            obsatcle.classList.remove("obsGogo")
            clearInterval(isAlive)
            $('#start').show()
            $('#score').text(score)
            score = 0
            
        }
    }, 10);
  });
