

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
			var heartIcon = "<i class='ion-heart' role='button'>" + count + "</i>";


	$('#popover').popover({html:true});




	$('#micro-content').keydown(function(event) {
		if(event.keyCode == 13) {
			var count = 0;
			if ($('#micro-content').val().trim().length > 0) {
				var counter = 3;
				var microContent = $('#micro-content').val();
				var newContent = "<div class='list-group-item' id='post-'" + counter + ">" + microContent + "<br><span id='date'></span><span class='close'>x</span></div>";
				$('#micro-posts').prepend(newContent).each(function(){$('#date',this).html(postDate + "      " + postTime + heartIcon);});
				$('#micro-content').val('');
				counter++;
				console.log("client side keydown works");
		$('.list-group-item').on('click',function(e) {
			$('#date').children().html(count++);
			
			// console.log(count++);
		});
		return false;
			}
		}

	});

});
