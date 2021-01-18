一、主要用到的檔案與網址
(1)圖片：img (放網頁會用到的圖片)
(2)HTML: index.html 
(3)CSS: style.css
(4)JS: control.js
(5)Jquery: https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
(6)Bootstrap: https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css

二、主題簡介、使用方法、技術
    這是個兔子要逃離蛇的魔掌的遊戲。玩家們能透過按壓Space Bar，幫助兔子跳躍，躲開來自蛇的攻擊。玩家堅持得越久，所得到的分數越高。
 1. 一開始: 
    -介面：(1)玩家需使用Space Bar來操控兔子。
           (2)分數=0為起點。
           (3)玩家按下"START!"鍵，遊戲便會開始。
           (4)規則頁面會消失
           (5)兔子和蛇在對峙

    -程式：(1)利用HTML的DIV、Button、h3及CSS的Class、ID製作出一個顯示規則的畫面。
           (2)利用JS假設時間為0，並用HTML及CSS將其顯示出來。
           (3)利用Jquery的click，及HTML、CSS顯示"START!"按鈕。使玩家點下"START!"鍵，遊戲才會開始。
           (4)利用Jquery的hide，及HTML、CSS顯示"START!"按鈕。使玩家點下"START!"鍵，遊戲開始後規則頁面會消失。
           (5)利用HTML的DIV及CSS的CLASS、ID顯示出我選中的圖片(兔子與蛇)

2.遊戲進行：
    -介面：(1)畫面有藍天、草原、兔子、蛇。
           (2)玩家可用Space Bar來使兔子跳起。
           (3)兔子落地時，玩家才能使其再次跳起來。也就是說，兔子不能在半空中跳第二次。
           (4)遊戲開始時，蛇會從右邊漸漸往兔子的方向滑動。
           (5)時間在遊戲開始，就會開始計時
           (6)時間每過兩秒，分數會增加10分
           (7)當兔子接觸到蛇時，遊戲會結束。
           (8)遊戲結束時，規則畫面會再次出現。
           (9)遊戲結束時，規則畫面中的分數會顯示該次回合的分數。

    -程式：(1)利用HTML的DIV及CSS的CLASS、ID顯示出我選中的圖片(兔子、蛇、天空與草原)
          (2)利用CSS的animation(設為跳一次300毫秒)、@keyframes 及 JS 的 addEventListener 、if function、event.code 使Space Bar 一被按下去，兔子就會因被觸發而跳動。並利用JS的setTimeout(設為在300毫秒後就不跳了)，避免兔子一直跳。
          (3)利用JS的if function(當兔子不跳時，才會觸發class=jump的行為。)、.classList.add、.classList.remove(設為在300毫秒後就不跳了)，避免兔子一直跳。
          (4)當"START!"鍵被觸發時，CSS的animation、@keyframes使蛇能漸漸往兔子靠近
          (5)當"START!"鍵被觸發時，利用Jquery的time += 0.01使時間開始流動;SetInterval使每10毫秒執行Function中的動作。
          (6)當"START!"鍵被觸發時，利用Jquery的if function 使時間只要增加兩秒，分數便會增加10分。
          (7)利用JS中的parseInt(只要數字的結果)、window.getComputedStyle、getPropertyValue去算出兔子的Y POSITION、蛇的X POSITION。當觸發到到遊戲結束的條件時，.classList.remove、 clearInterval(中止每10毫秒就須執行的動作)
          (8)利用Jquery中的.show顯示出規則畫面
          (9)利用Jquery中的.text顯示出玩家的分數
三、特色、亮點
    (1)兔子和蛇都是我自己所繪畫的。
    (2)利用css使圖片能夠移動。