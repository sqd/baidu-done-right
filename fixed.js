$.ajax({
    url: "http://e.baidu.com/",
    success: function(result){
        $("#img").attr("src", "images/connected.png");
        $("#tip").text("网络有连接");
        $("#tip").css("color", "#86c54b");
    },
    error: function(err){
        $("#img").attr("src", "images/error.png");
        $("#tip").text("网络错误");
        $("#tip").css("color", "#f44336");
    }
});
