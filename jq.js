$(document).ready(function(){
    $("#UserName").blur(function(){
        $(this).css("background-color", "green");
    });
    $("#Password").blur(function () {
        $(this).css("background-color", "green");
    });
    $("#Password1").blur(function () {
        $(this).css("background-color", "green");
    });
    $("#UserName").focus(function(){
        $(this).css("background-color","red");
    });
    $("#Password").focus(function () {
        $(this).css("background-color", "red");
    });
    $("#Password1").focus(function () {
        $(this).css("background-color", "red");
    });
    $("#UserName").mouseenter(function () {
        $(this).css("background-color", "blue");
    });
    $("#UserName").mouseleave(function () {
        $(this).css("background-color", "orange");
    });
    $("#Password").mouseenter(function () {
        $(this).css("background-color", "blue");
    });
    $("#Password").mouseleave(function () {
        $(this).css("background-color", "orange");
    });
    $("#Password1").mouseenter(function () {
        $(this).css("background-color", "blue");
    });
    $("#Password1").mouseleave(function () {
        $(this).css("background-color", "orange");
    });
    $("#Button1").mouseenter(function () {
        $(this).css("background-color", "blue");
    });
    $("#Button1").mouseleave(function () {
        $(this).css("background-color", "orange");
    });
});