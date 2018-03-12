var ajaxExample = (function () {
    var $container = $('#heroes-list'),
        $lengthEl = $('#length'),
        $pageEl = $('#page'),
        $searchEl = $('#search'),
        $quantityHeroes = $('#quantityHeroes'),
        start = 0,
        query = '';

    function render() {
        $.get("http://demo.webility.ru/api", {
            "from": start,
            q: query
        }, function (data) {
            updateContent(data.meta, data.data);
        });
    }

    function updateContent(meta, heroes) {
        tableClear();
        updateNumberPage(meta.length, heroes.length);
        updatePageBtn(meta.length);
        updateTable(heroes);
    }

    function updateNumberPage(heroesLength, heroesLengthInPage){
        let startNum = heroesLengthInPage == 0 ? 0 : start + 1;
        let endNum = start + heroesLengthInPage;
        let str = "Shown " + startNum + '-' + endNum + " of " + heroesLength;
        $quantityHeroes.text(str);
    }

    function updatePageBtn (quantity){
        if (start + 10 >= quantity) {
            $next.hide();
        } else {
            $next.show();
        }
        if (start == 0) {
            $previous.hide();
        } else {
            $previous.show();
        }
    }

    function tableClear() {
        $container.empty();
    }

    function updateTable(heroes) {
        var str = '';
        for (let i = 0; i < heroes.length; i++) {
            str += ('<tr><td>' + heroes[i].name + '</td><td>' + heroes[i].episodes + '</td></tr>');
        }
        $container.append(str);
    }

    function filter() {
        start = 0;
        query = $searchEl.val();
        render();
        return false;
    }

    function nextPage() {
        start += 10;
        render();
    }

    function prevPage() {
        start -= 10;
        render();
    }


    return {
        render: render,
        nextPage: nextPage,
        prevPage: prevPage,
        filter: filter
    }

})();