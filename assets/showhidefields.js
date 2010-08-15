jQuery(document).ready(function(){

  $ = jQuery;

/*-------------------------------------------------------------------------
    Localization
  -------------------------------------------------------------------------*/

  Symphony.Language.add({
    'Collapse all':   false,
    'Expand all':     false,
    'Collapse':       false,
    'Expand':         false,
  });

/*-------------------------------------------------------------------------
    Dinamically-added elements
  -------------------------------------------------------------------------*/

  elements = {
    button:     $('<a class=\'button\' />').text(Symphony.Language.get('Collapse all')),
    link:       $('<a class=\'visibility\' />').attr('title', Symphony.Language.get('Collapse')).text('-')
  };

/*-------------------------------------------------------------------------
    Elements insertion
  -------------------------------------------------------------------------*/

  $('.instance h4').append(elements['link'].clone());
  $('.settings .label').append(elements['button'].clone());
  $('.settings .duplicator').after(elements['button']);

/*-------------------------------------------------------------------------
    Events handling
  -------------------------------------------------------------------------*/

  buttons = $('.settings .button');

  $('.visibility').live('click', function() {
    instance = $(this).closest('li');

    if (instance.hasClass('collapsed'))
      $(this).attr('title', Symphony.Language.get('Collapse')).text('-');
    else
      $(this).attr('title', Symphony.Language.get('Expand')).text('+');

    instance.toggleClass('collapsed');
    instance.find('.content').toggleClass('hidden');
  });

  buttons.click(function () {
    if ($(this).hasClass('collapsed')) {
      buttons.text(Symphony.Language.get('Collapse all'));
      $('.instance.collapsed .visibility').click();
    }
    else {
      buttons.text(Symphony.Language.get('Expand all'));
      $('.instance:not(.collapsed) .visibility').click();
    }

    buttons.toggleClass('collapsed');
  });

  $('.constructor').bind('click', function() {
    $('.instance:last h4').append(elements['link'].clone());
  });

});
