const show=document.getElementById('show')
function display(key){
  show.value += key
}
function del(){
  show.value = ''
}
function calc(){
  if(show.value===''){
    alert('there is no numbers to calculate')
  }else{
    show.value=eval(show.value)
  }
}
let conv=document.getElementById('conv')
function nohide(){
  conv.style.display='block'
  discount.style.display='block'
}
function hide(){
  conv.style.display='none'
  discount.style.display='none'
}
conv.onclick=function(){
  location.assign("https://discount-x.vercel.app/")
}
function dell() {
  let currentValue = show.value;
  if (currentValue.length > 0) {
    show.value = currentValue.slice(0, -1);
  }
}
let discount=document.getElementById('dis')
discount.onclick=function(){
  location.assign("https://converter-nine-beta.vercel.app/")
}