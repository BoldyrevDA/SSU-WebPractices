var $next = $(".next"),
    $previous = $(".previous"),
    $filterForm = $("#filter");

$(function () {

    ajaxExample.render();

    $filterForm.submit(ajaxExample.filter);

    $next.click(ajaxExample.nextPage);

    $previous.click(ajaxExample.prevPage);

});
