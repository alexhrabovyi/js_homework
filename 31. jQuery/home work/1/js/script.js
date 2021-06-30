const $button_1 = $('#button-1');
const $button_2 = $('#button-2');
const $button_3 = $('#button-3');

const $info = $('.information-block');
const $rating = $('.rating-block');
const $prices = $('.where-to-buy-block');

$button_1.on("click", function () {
    $button_1.addClass("active");
    $button_2.removeClass("active");
    $button_3.removeClass("active");

    $info.addClass("visible");
    $info.removeClass("hidden");
    $rating.addClass("hidden");
    $rating.removeClass("visible");
    $prices.addClass("hidden");
    $prices.removeClass("visible");
})

$button_2.on("click", function () {
    $button_1.removeClass("active");
    $button_2.addClass("active");
    $button_3.removeClass("active");

    $info.addClass("hidden");
    $info.removeClass("visible");
    $rating.addClass("visible");
    $rating.removeClass("hidden");
    $prices.addClass("hidden");
    $prices.removeClass("visible");
})

$button_3.on("click", function () {
    $button_1.removeClass("active");
    $button_2.removeClass("active");
    $button_3.addClass("active");

    $info.addClass("hidden");
    $info.removeClass("visible");
    $rating.addClass("hidden");
    $rating.removeClass("visible");
    $prices.addClass("visible");
    $prices.removeClass("hidden");
})
