function countChars()
{
	
	var area = document.getElementById("micropost_content");
	var message = document.getElementById("micropost_content_char_count");
	var maxLength = 140;
	var checkLength = function() {
	    if(area.value.length <= maxLength) {
	        message.innerHTML = (maxLength-area.value.length) + " characters remaining";
	    }
	}
	setInterval(checkLength, 300);

}