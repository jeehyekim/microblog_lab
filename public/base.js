

$(document).ready(function(){
	console.log("Sanity Check: JS is working!");
			
			var count = 0;
			var date = new Date();
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var postTime = hours + ":" + minutes;
			var month = date.getMonth();
			var day = date.getDate();
			var year = date.getFullYear();
			var postDate =  (month+1) + "/" + day + "/" + year;


	$('#popover').popover({html:true});


	$('#micro-content').keydown(function(event) {
		if(event.keyCode == 13) {
			var count = 0;
			if ($('#micro-content').val().trim().length > 0) {
				var microContent = $('#micro-content').val();
				console.log(microContent);
				$('#micro-content').val('');
				console.log("client side keydown works");

				// $.ajax ({
				// 	type: "POST",
				// 	url: '/posts',
				// 	data: microContent
				// })
				// .done(function(data) {
				// 	console.log("Made a post successfully: ",  data);
				// 	var newContent = "<li class='list-group-item'>" + microContent + "<span data-id='" + data._id + "' class='close delete'>X</span></li>";
				// 	$('.list-group').prepend(newContent);
				// })
				// .fail(function(data) {
				// 	console.log("Failed to make post");
				// });



		$('.entries').on('click', '.close', function(e) {
			e.preventDefault();
			console.log("delete works");
		});
		return false;
			}
		}

	});

});
