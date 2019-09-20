// document.querySelector('.header__search-toggle').addEventListener('click', function () {
//     document.querySelector('.header').classList.toggle('searchOpen');
//     $('.header__search--wrap--mob').slideToggle();
//     document.querySelector('.header__nav--tablet').classList.remove('showMenu');
//     document.querySelector('.header__nav--tablet .topNav').style.display = 'none';
// });

// function checkMenu() {
//     if(document.querySelector('body').getBoundingClientRect().top < 0){
//         document.querySelector('.header').classList.add('fixed');
//     }else {
//         document.querySelector('.header').classList.remove('fixed');
//     }
// }
// checkMenu();
// window.addEventListener('scroll', checkMenu);

//hide menu
var lastScrollTop = 0;
function hideMenu() {
    $(window).scroll(function(event){
        if(!document.querySelector('.header__nav--tablet').classList.contains('showMenu')){
            var st = $(this).scrollTop();
            if (st < 120){
                $('.header').css('top','0');
            } else if (st > lastScrollTop){
                $('.header').css('top', '-100px');
                document.querySelector('.header').classList.remove('searchOpen');
                $('.header__search--wrap--mob').slideUp();
            } else {
                $('.header').css('top','0');
            }
            lastScrollTop = st;
        }
    });
}
hideMenu();

//drop-down
$(document).ready(function () {
    $(".header__nav--desktop .menu-item-has-children").hover(function () { //When trigger is hovered...
        $(this).children(".sub-menu").stop().slideDown();
    }, function () {
        $(this).children(".sub-menu").stop().slideUp();
    });

    $(".header__nav--tablet .menu-item-has-children").click(function (e) {
        if(!$(this).hasClass('showSubMenu')){
            $(this).addClass('showSubMenu');
            $(this).children(".sub-menu").stop().slideDown();
        }else {
            $(this).removeClass('showSubMenu');
            $(this).children(".sub-menu").stop().slideUp();
        }
    })
});

document.querySelector('.header__btn').addEventListener('click', function () {
    document.querySelector('.header__nav--tablet').classList.toggle('showMenu');
    $('.header__nav--tablet .topNav').stop().slideToggle();
    // document.querySelector('.header__search--wrap--mob').style.display = 'none';
    // document.querySelector('.header').classList.remove('searchOpen');
});