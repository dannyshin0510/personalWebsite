
$('#aboutButton').click(function() {
    $('html, body').animate({scrollTop: $('#aboutMe').offset().top -2 }, 'slow');
});

$('#softwareButton').click(function() {
    $('html, body').animate({scrollTop: $("#softwareProjects").offset().top -30 }, 'slow');
});
$('#hardwareButton').click(function() {
    $('html, body').animate({scrollTop: $("#hardwareProjects").offset().top -30 }, 'slow');
});

