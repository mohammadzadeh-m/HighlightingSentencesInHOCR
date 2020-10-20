function stringHighlight() {
    $(".highlight").removeClass("highlight");
    var searchedString = "go out to wait for the meat barrow";
    var searchedArray = searchedString.split(" ");
    var CSSSelector = ".ocr_page .ocrx_word:contains(" + searchedArray[0] + ")";
    for (var i = 1; i < searchedArray.length; i++) {
        CSSSelector += " + .ocrx_word:contains(" + searchedArray[i] + ")";
    }

    var element = $(CSSSelector);
    for (var i = 0; i < searchedArray.length; i++) {
        element.addClass("highlight");
        element = element.prev();
    }

    $("button:contains('Fit width')").click();
    window.onresize = function () {
        $("button:contains('Fit width')").click()
    };
}