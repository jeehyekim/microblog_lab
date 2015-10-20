

$(document).ready(function(){
	console.log("Sanity Check: JS is working!");
			
			// var count = 0;
			// var date = new Date();
			// var hours = date.getHours();
			// var minutes = date.getMinutes();
			// var postTime = hours + ":" + minutes;
			// var month = date.getMonth();
			// var day = date.getDate();
			// var year = date.getFullYear();
			// var postDate =  (month+1) + "/" + day + "/" + year;
			// var microContent;

	$('#popover').popover({html:true});


	$('#newPost').on('submit', function(e) {
		e.preventDefault();
		var microContent = $(this).serialize();
		$('#micro-content').val('');
		console.log(microContent);
		$.ajax({
			url: '/posts',
			type: "POST",
			data: microContent
		})
		.done(function(data) {
			console.log("made a new post", data);
			var newContent = "<li class='list-group-item'>" + data.content + "<span data-id='" + data._id + "' class='close delete'>X</span></li>";
			$('.entries').prepend(newContent);
			$('#newPost')[0].reset();
		})
		.fail(function(data) {
			alert("Failed to post");
			console.log("Failed to post");
		});

	});


	$('.entries').on('click', '.close', function(e) {
		e.preventDefault();
		var postId = $(this).data().id;
		var deletedPost = $(this).closest('li');
		$(deletedPost).remove();

		$.ajax({
			url: '/posts/' + postId,
			type: 'DELETE'
		})
		.done(function(data) {
			console.log(data);
			console.log("Post was deleted");
		})
		.fail(function(data){
			console.log("Failed to deleted post");
		});
	});

});
