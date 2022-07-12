let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let slides = document.getElementsByClassName("mySlides");
let slideIndex = 1;
function plusSlider(n) {
  showSlides(slideIndex += n);
}
	
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
 
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}
one.addEventListener("click",()=>{
  link='https://www.goal.com/kr/%EB%89%B4%EC%8A%A4/%E1%84%8B%E1%85%AB-%E1%84%92%E1%85%A1%E1%84%91%E1%85%B5%E1%86%AF-%E1%84%87%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%92%E1%85%A1%E1%84%80%E1%85%A6-%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%AE%E1%84%89%E1%85%B3-%E1%84%91%E1%85%AE%E1%86%B7%E1%84%8B%E1%85%B3%E1%86%AB-%E1%84%8B%E1%85%A1%E1%84%89%E1%85%B3%E1%84%82%E1%85%A5%E1%86%AF-9%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%B4-%E1%84%8C%E1%85%A5%E1%84%8C%E1%85%AE/blt5106dcad1f8adaa4'
  location.href=link;
})
two.addEventListener("click",()=>{
  link='http://basketkorea.com/news/newsview.php?ncode=1065582312370055';
  location.href=link;
})
three.addEventListener("click",()=>{
  link='http://basketkorea.com/news/newsview.php?ncode=1065577381321771'
  location.href=link;
})
four.addEventListener("click",()=>{
  link='http://basketkorea.com/news/newsview.php?ncode=1065611776790100'
  location.href=link;
})
five.addEventListener("click",()=>{
  link='https://www.goal.com/kr/%EB%89%B4%EC%8A%A4/%E1%84%8C%E1%85%A2%E1%84%80%E1%85%A8%E1%84%8B%E1%85%A3%E1%86%A8-%E1%84%89%E1%85%A5%E1%84%86%E1%85%A7%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1-2025%E1%84%82%E1%85%A7%E1%86%AB%E1%84%81%E1%85%A1%E1%84%8C%E1%85%B5-%E1%84%85%E1%85%B5%E1%84%87%E1%85%A5%E1%84%91%E1%85%AE%E1%86%AF-%E1%84%82%E1%85%A1%E1%86%B7%E1%84%82%E1%85%B3%E1%86%AB%E1%84%83%E1%85%A1-%E1%84%80%E1%85%A9%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8/blt1704c04d7a25746d'
  location.href=link;
})
let number
function check(a){
  document.getElementsByClassName("mySlides fade").style.display="none"
  number=a;
}
function home(){
  location.reload
}