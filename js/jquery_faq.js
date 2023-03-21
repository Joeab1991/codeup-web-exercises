let $hidden = $(`dd`);
let $reveal = $(`#reveal-answers`)
let $bOne = $(`.picOne`)
let $bThree = $(`.picThree`)
$reveal.on(`click`, function () {
	$hidden.toggleClass(`invisible`)
});

$(`dt`).on(`click`, function () {
	$(this).toggleClass(`highlight`)
});

$(`.highlight-li`).on(`click`, function () {
	$(`ul li:nth-child(4)`).toggleClass(`highlight`);
});

$('h3').on(`click`, function () {
	$(this).next().find('li').toggleClass('bold-it');
});

$('li').on(`click`, function () {
	$(this).parent().children().first().toggleClass('font-blue');
});

$(`button`).on(`click`, function () {
	let $btn = $(this).attr(`id`);
	let $commonParent = $(this).parents(`.row`);
	let $images = $commonParent.find('img');
	let imgSources = [];
	$images.each(function(){
		let srcValue = $(this).attr('src');
		imgSources.push(srcValue);
	});
	switch($btn) {
		case "picOne":
			// do the logic for left btn
			$($images[0]).attr('src', imgSources[1]);
			$($images[1]).attr('src', imgSources[0]);
			break;
		case "picTwo":
			// do the logic for middle btn
			let randomNum = randomNumber(1, 2);
			if (randomNum === 1) {
				//go left
				$($images[1]).attr('src', imgSources[0]);
				$($images[0]).attr('src', imgSources[1]);
			} else {
				//go right
				$($images[1]).attr('src', imgSources[2]);
				$($images[2]).attr('src', imgSources[1]);
			}
			break;
		case "picThree":
			// do the logic for right btn
			$($images[2]).attr('src', imgSources[1]);
			$($images[1]).attr('src', imgSources[2]);
			break;
	}
});
