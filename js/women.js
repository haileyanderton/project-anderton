$(document).ready(function() {

  $('.womenInfo').hide();

  $('.women').click(function() {
    $('#radio').click( function() {
            Popup();
  });

    // function to hide all divs
    function hideAll() {
      $('#underrepInfo').hide();
      $('#radioInfo').hide();
      $('#tvInfo').hide();
      $('#filmInfo').hide();
      $('#gamingInfo').hide();
    }

    hideAll();

    $('.women').click(function() {

    hideAll();

  });

  function Popup() {
             $('.womenInfo').fadeIn("fast");
             $("#container").css({
             });
         }
    });

});
