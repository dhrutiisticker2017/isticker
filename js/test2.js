(function(){
	
   	var testControl = can.Control.extend({
        init: function (element, options) {
            
            },
        "#leftLink click": function () {
            //window.location.hash = "#!registerSubscriber";
            $('#rForm').html('');
           $('#lForm').html(can.view('views/left.ejs',{FirstName:"Dhruti",LastName:"Das"}));
        },
        "#rightLink click": function () {
            //window.location.hash = "#!registerSubscriber";
             $('#lForm').html('');
           $('#rForm').html(can.view('views/right.ejs',{testFirst:"Ranjan",testLast:"Das"}));
        }
                
    });

	$(document).ready(function(){            
                /*var people = new can.List(['Alex', 'Bill']);
                people.attr(3, 'Adam');
                 people[2] = 'Test';
                console.log(people.attr());*/
		  return new testControl(document);         
	});

})()