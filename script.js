
$('#aboutButton').click(function() {
    $('html, body').animate({scrollTop: $('#aboutMe').offset().top -30 }, 'slow');
});

$('#projectButton').click(function() {
    $('html, body').animate({scrollTop: $("#projects").offset().top -30 }, 'slow');
});
