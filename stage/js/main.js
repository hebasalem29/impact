$(".car1").attr("data-interval", "100");

//$(".carousel").attr("data-interval", "100");
$(window).on('scroll',function()
{
    if($(this).scrollTop()< 900)
    {
        $('.footer').addClass('pos');
        console.log('hi');
    }
    else{
        $('.footer').removeClass('pos');
    }
})
$(window).on('load',function()
{
    $('.sp').fadeToggle();
    $('.sp').fadeOut(1000);
     
})