(function(){
	       	
	Contacts = can.Control({
		init: function(){
                    this.element.html(can.view('views/left.ejs', {
				contacts: this.options.contacts,
				categories: this.options.categories
                            }));
		},
                ".category_class change": function(){
                    alert('hi');
                },
	});

	$(document).ready(function(){
		var people = new can.List(['Alex', 'Bill']);
                people.attr(0, 'Adam');
                people[0] = 'Adam';
			var categories = [{name: 'test'}], 
			contacts = [{
			id: 1,
			name: 'William',
			address: '1 CanJS Way',
			email: 'william@husker.com',
			phone: '0123456789',
			category: 'co-workers',
                        country: 'Usa'
		}];
              
                //consol.log(test.attr(0));
			new Contacts('#demo', {
				contacts: contacts,
				categories: categories,
                                
			});
		
           
	});

})()