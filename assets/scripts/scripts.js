$(document).ready(function(){
    $("#contactModal").modal('show');
}); 

$(function(){
    function equalHeight(){
        var heightArray = $(".sameHeight").map( function(){
            return  $(this).height();
        }).get();
        var maxHeight = Math.max.apply( Math, heightArray);
            $(".sameHeight").height(maxHeight);
        }
    equalHeight();
});
