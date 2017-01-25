function show_rsvp_hacker(){
  //hey if you're running this command before the button is avaiable
  //we'll know, and we'll not be happy :-(
  $('#rsvp-hacker')
    .removeClass('unavailable')
    .addClass('available')
    .attr('href', 'hacker-typeform.html');
}

$(function () {
  var available = new Date('January 27, 2017 17:00:00')
  var now = new Date();

  if (available.getTime() <= now.getTime()) {
    show_rsvp_hacker();
  } else {
    window.setTimeout(show_rsvp_hacker, available.getTime() - now.getTime());
  }
});
