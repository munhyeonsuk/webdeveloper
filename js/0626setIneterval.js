// let count = 0;
// setInterval(function(){
//     count++;
//     console.log(count);
    
// }, 500) 

// let count = 0;
// setInterval(function(){
//     console.log(count);
//     count++;
// }, 500) 

// let count = 0;
// setInterval(function(){
//     console.log(count);
//     count++;
//     count %= 10; //count = count % 10;
// }, 500)

let count = 0;
const navidata = ["네이버", "다음", "구글", "아마존", "깃"]

setInterval(function(){
    console.log(navidata[count]);
    count++;
    count %= navidata.length; //count = count % 10;
}, 500) //1000이 1초n