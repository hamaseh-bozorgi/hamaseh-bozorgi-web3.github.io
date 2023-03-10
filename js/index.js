$(document).ready(function () {
    $(".list-gp").click(function () {
        $(".modal-container-sm").removeClass("hidden");
    })
    $(".close-modal-sm").click(function () {
        $(".modal-container-sm").addClass("hidden");
    })
    $(".mobile-click").click(function () {
        $(".mobile-sub-menu-sm").toggleClass("custom-height");
    })
    $(".gaming").mouseenter(function () {
        $(".sub-gaming").removeClass("hidden");
    })
    $(".gaming").mouseout(function () {
        $(".sub-gaming").addClass("hidden");
    })
    $($(".footer-titles")[0]).click(function () {
        $(".footer-sub-1").toggleClass("custom-height");
    })
    $($(".footer-titles")[1]).click(function () {
        $(".footer-sub-2").toggleClass("custom-height");
    })
    $($(".footer-titles")[2]).click(function () {
        $(".footer-sub-3").toggleClass("custom-height");
    })
    let activeImage=0;
    let img=document.querySelector(".slider-image");
    let sliderRight=function(){
        activeImage++;
        if(activeImage==6){
            activeImage=0;
        }
        let imgWidth=img.clientWidth;
        img.style.marginLeft=`-${activeImage *imgWidth}px`;
    }
    setInterval(sliderRight,3000);
    let sliderLeft=function(){
        activeImage--;
        if(activeImage==-1){
            activeImage=5;
        }
        let imgWidth=img.clientWidth;
        img.style.marginLeft=`-${activeImage *imgWidth}px`;
    }
    $(".right-btn").click(sliderRight);
    $(".left-btn").click(sliderLeft);
});