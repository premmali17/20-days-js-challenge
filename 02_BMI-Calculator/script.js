const form= document.querySelector('form')

    // height=parseInt(document.querySelector('#height').value)
    // this use case will give uh empty value
form.addEventListener('submit',(e)=>{e.preventDefault()

    height=parseInt(document.querySelector('#height').value)
    // console.log(height);
    
    weight=parseInt(document.querySelector('#weight').value)//we take this value here cuz we want the value when our our event is occurring
    
    result=document.querySelector('#results')

    if (height==='' || height<0 || isNaN(height)) {
        result.innerHTML='please give a valid number '
    }else if  (weight==='' || weight<0 || isNaN(weight)) {
        result.innerHTML='please give a valid number '
    }
    else {
      const bmi= (weight/((height*height)/10000)).toFixed(2)
      result.innerHTML=`<span>${bmi}<span/>`
    }

     if(bmi>24.9){
        // result.innerHTML='overwheight'
          result.innerHTML += `<br><span style="color:red;">Overweight</span>`;

     }
     else if(bmi<18.6){
        // result.innerHTML='under weight'
          result.innerHTML += `<br><span style="color:orange;">Underweight</span>`;
     }
     else{

        // result.innerHTML='normal range'
        result.innerHTML+=`<br><span style="color:green;">normal</span>`;
     }

})