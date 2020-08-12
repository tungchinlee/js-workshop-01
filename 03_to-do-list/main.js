// TO DO
document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.addBtn').addEventListener('click', function(){
    let text = document.getElementById('input').value
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.classList.add('close')
    span.textContent = "x"
    li.textContent = text
    li.append(span)
    li.setAttribute('draggable','true')
    li.querySelector('span').addEventListener('click', function(){
      li.remove()
    })
    li.addEventListener('click', function(){
      li.classList.toggle('checked')
    })
    document.querySelector('ul').appendChild(li)
  })

  let lis = document.querySelectorAll("ul li")
  lis.forEach((li) =>{
    li.setAttribute('draggable','true')
    li.addEventListener('click', function(){
      li.classList.toggle('checked')
    })
    li.querySelector('span').addEventListener('click', function(){
      li.remove()
    })
    li.addEventListener('drag', function(e){
      let div = document.elementFromPoint(e.clientX, e.clientY)
      console.log(div)
      if ()
    })
    
  })
})