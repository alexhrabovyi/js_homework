const $header = $('.block-wrapper__header-panel');
const $text_block = $('.block-wrapper__text-block');

$header.on("click", function () {
    $text_block.slideUp();
    $(this).next().slideToggle();
});