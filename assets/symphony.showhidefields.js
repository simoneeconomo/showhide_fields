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
    Dinamically-added elements and common selectors
  -------------------------------------------------------------------------*/

  elements = {
    button:     $('<a class=\'button\' />').text(Symphony.Language.get('Collapse all')),
    link:       $('<a class=\'destructor visibility\' />').text(Symphony.Language.get('Collapse'))
  };

  selectors = {
    instances:  $('#fields-duplicator li'),
  };

/*-------------------------------------------------------------------------
    Elements insertion
  -------------------------------------------------------------------------*/

  selectors['instances'].find('h4').each(function(){
    $(this).append(elements['link'].clone());
  });

  $('.settings .label').append(elements['button']);

/*-------------------------------------------------------------------------
    Events handling
  -------------------------------------------------------------------------*/

  $('.visibility').live('click', function() {

    instance = $(this).closest('li');

    if (instance.hasClass('collapsed'))
      $(this).text(Symphony.Language.get('Collapse'));
    else
      $(this).text(Symphony.Language.get('Expand'));

    instance.toggleClass('collapsed');
    instance.find('> *:not(h4)').toggleClass('hidden');
  });

  elements['button'].click(function () {
    $(this).toggleClass('collapsed');

    $(this).text(function() {
      if ($(this).hasClass('collapsed'))
        return Symphony.Language.get('Expand all');
      else
        return Symphony.Language.get('Collapse all');
    });

    $('.visibility').trigger('click');

  });

  $('.constructor').bind('click', function() {
    $('#fields-duplicator li:last h4').append(elements['link'].clone());
  });

});
