jQuery(document).ready(function ($) {
    $('.menu_btn').on('click', function (e) {
        $(".menu_btn").toggleClass('close');
        $(".menu").toggleClass('active');
    })
})

$('a[href*="#"]').on('click', function (e) {
    let href = $(this).attr('href');
    let hashIndex = href.indexOf('#');


    if (hashIndex !== -1) {
        let hash = href.substring(hashIndex);


        if ($(hash).length) {

            e.preventDefault();


            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 500);
        }
    }
});
