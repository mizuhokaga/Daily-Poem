one = $('#one')
two = $('#author')
three = $('#three')
content = $('#poem_info')
info = null;
bdSearchUrl = "https://www.baidu.com/s?wd=";
$.get('https://v1.jinrishici.com/all.json', function(res, status) {
    // if (res.status === "error") {
    //     content.text('ERROR:' + res.errMessage + ",ERRCODE:" + res.errCode);
    //     return;
    // } else {
    //     var data = res.data;
    //     console.log(data)
    //     var originArr = data.origin;
    //     title.html(originArr.title);
    //     content.html(data.content);
    // }
    console.log(res)
    if (status === "success") {
        info = res.content;
        content.html(res.content);
        one.html(res.origin);
        two.html(res.author);
        var split = res.category.split("-");
        three.html(split[1] + "-" + split[2]);
    } else {

    }
}, 'json');

$('#search').click(function() {
    // console.log("click search")
    if (info == null) {
        info == "古诗词";
    }
    window.open(bdSearchUrl + info)
});