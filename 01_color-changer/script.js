btns=document.querySelectorAll('.button')
bg=document.querySelector('body')

btns.forEach((btns)=>{
    btns.addEventListener('click',(e)=>{
     console.log(e.target.id)
     if(e.target.id==='grey'){
       bg.style.backgroundColor='grey'
     }
     if(e.target.id==='white'){
       bg.style.backgroundColor='white'
     }
     if(e.target.id==='blue'){
       bg.style.backgroundColor='blue'
     }
     if(e.target.id==='yellow'){
       bg.style.backgroundColor='yellow'
     }
     if(e.target.id==='red'){
       bg.style.backgroundColor='red'
     }
     if(e.target.id==='green'){
       bg.style.backgroundColor='green'
     }
     if(e.target.id==='orange'){
       bg.style.backgroundColor='orange'
     }
     if(e.target.id==='purple'){
       bg.style.backgroundColor='purple'
     }
     if(e.target.id==='pink'){
       bg.style.backgroundColor='pink'
     }
     if(e.target.id==='brown'){
       bg.style.backgroundColor='brown'
     }
     
    })


})