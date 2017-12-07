
function onSignIn(googleUser) {

	console.log('Entry point');

    var profile = googleUser.getBasicProfile();
	$(".g-signin2").css("display", "none");
	$(".data").css("display","block");
	$("#pic").attr('src', profile.getImageUrl());
	$("#email").text(profile.getEmail());
	
	console.log('Exit point');

}


function signOut() {

	var auth2 = gapi.auth2.getAuthInstance();

	auth2.signOut().then(function() {
        alert("You have been successfuly signed out");
        $(".data").css("display","none");
        $(".g-signin2").css("display", "block");

	});

}