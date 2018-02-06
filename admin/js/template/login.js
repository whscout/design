/**
 * Created by hwang1 on 2018/2/6.
 */
$(function(){
    $("#submit").click(function(){
        if($("#username").val() == ''){
            confirm("请输入用户名！！");
            return false;
        }
        if($("#userPassword").val() == ''){
            confirm("请输入密码！！");
            return false;
        }
    });
});
