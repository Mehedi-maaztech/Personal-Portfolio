
function onScreenScroll(){
    var footerBtn = document.getElementById('footerBtn');
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        footerBtn.classList.remove("d-none");
        footerBtn.classList.add("d-block");
    }else{
        footerBtn.classList.remove("d-block");
        footerBtn.classList.add("d-none");
    }
}
window.onscroll = function(){onScreenScroll()};
