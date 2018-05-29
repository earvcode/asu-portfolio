// JavaScript Document
/*$(document).ready(function(){
	$("#originlist").sortable({connectWith: "#seatingArea"});
	$("#seatingArea").sortable({connectWith: "#originlist"});
});
*/
$(document).ready(function(){
$("#originlist").sortable();
$(".draggable").draggable({ cursor: "pointer", revert: "invalid", helper: "clone"});
$("#seatingArea").droppable({ accept: ".draggable", 
           drop: function(event, ui) {
                    console.log("drop");
             var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);

             
                }, 
          over: function(event, elem) {
                  $(this).addClass("over");
                   console.log("over");
          }
                ,
                  out: function(event, elem) {
                    $(this).removeClass("over");
                  }
                     });
$("#seatingArea").sortable({helper: 'clone'});

$("#originlist").droppable({ accept: ".draggable", drop: function(event, ui) {
                    console.log("drop");
             var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
}});

});