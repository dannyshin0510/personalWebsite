
$('#aboutButton').click(function() {
    $('html, body').animate({scrollTop: $('#aboutMe').offset().top -2 }, 'slow');
});

$('#softwareButton').click(function() {
    $('html, body').animate({scrollTop: $("#softwareProjects").offset().top -30 }, 'slow');
});
$('#hardwareButton').click(function() {
    $('html, body').animate({scrollTop: $("#hardwareProjects").offset().top -30 }, 'slow');
});




var skillsDiv = $('#skills');

$(window).on('scroll', function(){
	var winT = $(window).scrollTop(),
  	winH = $(window).height(),
  	skillsT = skillsDiv.offset().top;
  if(winT + winH -150 > skillsT){
  	$('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      },	3000);
    });
  }
});


