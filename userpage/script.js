window.onload = function() {
    var avatar = document.getElementById("avatar");
    avatar.addEventListener("error", function() {
        avatar.src = "默认头像图片路径";
    });

    var occupation = document.getElementById("occupation");
    var status = document.getElementById("status");
    var words = document.getElementById("words");

    occupation.textContent = "你的职业";}
   
