$(document).ready(function() {

  $('.womenInfo').hide();

  $('.women').click(function() {
    $('#radio').click(function() {
      Popup();
  });

  // planning to make the '.women' divs responsive/interractive so that the viewer is aware that they can click on the divs to recieve more information. 

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

//trying to figure out how to make a switch statement that applies/works in place of the popUp function, so that the correct popup will fade in for the corresponding topics.

  function Popup() {
         $('.womenInfo').fadeIn("fast");
         }
    });

});
