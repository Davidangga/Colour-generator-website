
(function(){
    const changeColor = () => {
        const color = "#" + Math.floor(Math.random() * 16777215 + 1).toString(16);
        document.querySelector("body").style.backgroundColor = color;
        document.querySelector("#hex-code").innerHTML = color;
    }
    window.onload = function(){
        document.querySelector("#btn").addEventListener("click",changeColor);
    };
})();

