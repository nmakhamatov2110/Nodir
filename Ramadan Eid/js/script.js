const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
$(".toggle").click(function(){
    $(".fa-bars").toggle();
    $(".fa-times").toggle();
});
