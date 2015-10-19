

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
			var microContent;

	$('#popover').popover({html:true});

	$('#micro-content').keydown(function(event) {
		// event.preventDefault();
		if(event.keyCode == 13) {
			if ($('#micro-content').val().trim().length > 0) {
				microContent = $('#micro-content').serialize();
				$('#micro-content').val('');
				console.log("form submitted");

				$.ajax({
					url: '/posts',
					type: "POSTS",
					data: microContent
				})
				.done(function(data) {
					console.log(microContent);
				    var newContent = "<li class='list-group-item'>" + microContent + "<span data-id='" + data._id + "' class='close delete'>X</span></li>";
					    $('.entries').prepend(newContent);
				})
				.fail(function(data) {
					console.log("failed to post");
				});

		return false;
			}
		}

	});

	$('.entries').on('click', '.close', function(e) {
		e.preventDefault();
		console.log("delete works");
	});

});
