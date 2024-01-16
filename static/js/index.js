$("header").hide();

setTimeout(() => {
    $("header").fadeIn();
}, 2000)

$("img[alt='coffee']").mouseenter(() => {
    $("img[alt='snack']").addClass("opacity");
})

$("img[alt='coffee']").mouseleave(function () { 
    $("img[alt='snack']").removeClass("opacity");
});

$("img[alt='snack']").mouseenter(() => {
    $("img[alt='coffee']").addClass("opacity");
})

$("img[alt='snack']").mouseleave(function () { 
    $("img[alt='coffee']").removeClass("opacity");
});