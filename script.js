$(document).ready(function() {
  
  // Animacja pasków postępu
  $('.skills-prog li').each(function() {
    var percent = $(this).attr('data-percent'); 
    $(this).find('.bar').animate({
      width: percent + '%'
    }, 1500);
  });

  // Animacja kółek
  $('.skills-soft li').each(function() {
    var circle = $(this).find('.cbar');
    var percent = $(this).data('percent');
    var r = circle.attr('r');
    var c = Math.PI * (r * 2);
    var cbar = ((100 - percent) / 100) * c;

    circle.css({
      'stroke-dashoffset': c,
      'stroke-dasharray': c
    });

    circle.animate({
      'stroke-dashoffset': cbar
    }, 1500);

    // Licznik procentowy w <small>
    $(this).find('small').prop('Counter', 0).animate({
      Counter: percent
    }, {
      duration: 1500,
      step: function(now) {
        $(this).text(Math.ceil(now) + '%');
      }
    });
  });
});