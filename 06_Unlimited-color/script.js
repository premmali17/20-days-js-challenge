const randomcolor=function(){

  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color+= hex[Math.floor(Math.random()*16)]

  }
  return color;

}

console.log(randomcolor())
let intervalid
const startchangingcolor=function(){

   intervalid=setInterval(changebg,1000)
  
  function changebg(){document.body.style.backgroundColor=randomcolor();
  }
}
const stopchangingcolor=function(){

  clearInterval(intervalid)
}

const start=document.querySelector('#start').addEventListener('click', startchangingcolor)


const stop=document.querySelector('#stop').addEventListener('click', stopchangingcolor)




let promise=new Promise((resolve,reject)=>{
  
})