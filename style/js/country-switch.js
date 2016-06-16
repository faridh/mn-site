$('.switch-all').click(function(){
  $('.selected').removeClass('selected');
  $('.switch-all').addClass('selected');

  $('.argentina').removeClass('overlay-hidden');
  $('.chile').removeClass('overlay-hidden');
  $('.colombia').removeClass('overlay-hidden');
  $('.mexico').removeClass('overlay-hidden');
  return false;
});

$('.switch-argentina').click(function(){
  $('.selected').removeClass('selected');
  $('.switch-argentina').addClass('selected');

  $('.argentina').removeClass('overlay-hidden');
  $('.chile').addClass('overlay-hidden');
  $('.colombia').addClass('overlay-hidden');
  $('.mexico').addClass('overlay-hidden');
  return false;
});

$('.switch-chile').click(function(){
  $('.selected').removeClass('selected');
  $('.switch-chile').addClass('selected');

  $('.argentina').addClass('overlay-hidden');
  $('.chile').removeClass('overlay-hidden');
  $('.colombia').addClass('overlay-hidden');
  $('.mexico').addClass('overlay-hidden');
  return false;
});

$('.switch-colombia').click(function(){
  $('.selected').removeClass('selected');
  $('.switch-colombia').addClass('selected');

  $('.argentina').addClass('overlay-hidden');
  $('.chile').addClass('overlay-hidden');
  $('.colombia').removeClass('overlay-hidden');
  $('.mexico').addClass('overlay-hidden');
  return false;
});

$('.switch-mexico').click(function(){
  $('.selected').removeClass('selected');
  $('.switch-mexico').addClass('selected');

  $('.argentina').addClass('overlay-hidden');
  $('.chile').addClass('overlay-hidden');
  $('.colombia').addClass('overlay-hidden');
  $('.mexico').removeClass('overlay-hidden');
  return false;
});