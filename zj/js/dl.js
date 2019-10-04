$(function() {
    $("#user").addClass("block");
    $(".sao").click(function() {
        $(this).parent().addClass("active");
        $(".user").parent().removeClass("active");
        $("#saoma").addClass("block");
        $("#user").removeClass("block");
    });
    $(".user").click(function() {
        $(this).parent().addClass("active");
        $(".sao").parent().removeClass("active");
        $("#user").addClass("block");
        $("#saoma").removeClass("block");
    })
    $("#btn").click(function() {
        $(".name").val()
        $(".password").val()
        $.ajax({
            type: "get",
            url: "../server/user.php",

            data: `phone=${$(".name").val()}&password=${$(".password").val()}`,
            datatype: "json",
            success: function(response) {
                console.log(response);
                if (response == "true") {
                    alert("登录成功")
                }

            }
        });
    })
})