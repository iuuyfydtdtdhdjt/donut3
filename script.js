
let btn = document.querySelector('.inp_btn')

btn.addEventListener('click', function(){
    let text = document.querySelector('.text_inp').value
    if (text != ''){
let coms = document.querySelector('.coments')
    coms.innerHTML += `
    <div class="comentator">
          <img src="img/comentator3.png" alt="" width="135pc" height="135px">
          <div class="com_text">
            <p class="name">your coment</p>
            <p class="com_text1">${text}</p>
          </div>
        </div>
    `
    }
    
})