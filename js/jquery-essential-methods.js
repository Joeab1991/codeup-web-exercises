let $jQueryParent = $(`#paragraphParent`);

let $paragraphs = $(`p`);

$paragraphs.css('color', `cornflowerBlue`);

$paragraphs.attr(`data-name`, `anything`);
let newParaValue = $paragraphs.attr(`data-name`);