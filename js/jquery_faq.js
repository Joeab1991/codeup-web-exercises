let $hidden = $(`dd`);

let $reveal = $(`#reveal-answers`)

$reveal.on(`click`, function () {
	$hidden.toggleClass(`invisible`)
});

$(`dt`).on(`click`, function () {
	$(this).toggleClass(`highlight`)
});