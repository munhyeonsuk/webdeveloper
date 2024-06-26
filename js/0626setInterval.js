const bannerdata = [
    "/img/0626/banner2/1.png",
    "/img/0626/banner1/0.png",
    "/img/0626/banner2/event.png"
]

let num = 0;
document.querySelector("#bannerimg").setAttribute("src",bannerdata[num])
document.querySelector(".bannerwrap").style.background =`
                           url(${bannerdata[num]}) center no-repeat`;

const autoBanner =  setInterval(function(){
    num++;
    num %= bannerdata.length;
    document.querySelector(".bannerwrap").style.background =`url(${bannerdata[num]}) center no-repeat`;
    document.querySelector("#bannerimg").setAttribute("src",bannerdata[num]) 
}, 1000)



document.querySelector(".bannerwrap  button").addEventListener('click', function(){
    clearInterval(autoBanner);
    this.innerHTML = "PLAY";
})