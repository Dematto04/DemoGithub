let imgs = document.querySelectorAll(".image");
let modal = document.querySelector(".modal");
let modalImg = document.getElementById("img");
let modalClose = document.querySelector(".modal--close");
let modalNext = document.querySelector(".modal--next");
let modalPrev = document.querySelector(".modal--prev");

let currentIndex = 0;
imgs.forEach((img, index) => {
    
    img.onclick = ()=>{
        currentIndex = index;
        showModal();
    }
})
function showModal() {

    //nếu ảnh cuối thì ẩn mũi tên next
    currentIndex == imgs.length - 1
        ? modalNext.classList.add("disable")
        : modalNext.classList.remove("disable")
    //nêú ảnh cuối thì ẩn mũi tên prev
    currentIndex == 0
        ? modalPrev.classList.add("disable")
        : modalPrev.classList.remove("disable");

    
    modal.classList.add("active");
    //thay ảnh trong modal giống với ảnh đã click
    modalImg.src = imgs[currentIndex].children[0].src;

}
modalClose.onclick = function () {
    modal.classList.remove("active");
}

modalNext.onclick = ()=>{
    currentIndex != imgs.length-1 ? currentIndex++ : undefined
    showModal();
    console.log(currentIndex);
}
modalPrev.onclick = ()=>{
    currentIndex != 0 ? currentIndex-- : undefined
    showModal();
    console.log(currentIndex);
}
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) modal.classList.remove("active");
  });
