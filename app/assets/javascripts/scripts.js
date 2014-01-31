$(function() {
  initGallery();
});

function initGallery() {
  $('#image1').addClass('active');
  $('#image1').removeClass('inactive');

  $('#large1').addClass('active');

  var timer = setInterval(startSlideshow, 3500);

  $('#image1').click(function(){
    for(var i = 1; i < 5; i++)
    {
      if($('#image' + i).hasClass('active'))
      {
        $('#image' + i).addClass('inactive');
        $('#image' + i).removeClass('active');
      }
    }

    $('#image1').removeClass('inactive');
    $('#image1').addClass('active');

    $('.gallery .gallery-main .active').removeClass('active');
    $('#large1').addClass('active');

    clearInterval(timer);
    timer = setInterval(startSlideshow, 3500);
  });

  $('#image2').click(function(){
    for(var i = 1; i < 5; i++)
    {
      if($('#image' + i).hasClass('active'))
      {
        $('#image' + i).addClass('inactive');
        $('#image' + i).removeClass('active');
      }
    }

    $('#image2').removeClass('inactive');
    $('#image2').addClass('active');

    $('.gallery .gallery-main .active').removeClass('active');
    $('#large2').addClass('active');

    clearInterval(timer);
    timer = setInterval(startSlideshow, 3500);
  });

  $('#image3').click(function(){
    for(var i = 1; i < 5; i++)
    {
      if($('#image' + i).hasClass('active'))
      {
        $('#image' + i).addClass('inactive');
        $('#image' + i).removeClass('active');
      }
    }

    $('#image3').removeClass('inactive');
    $('#image3').addClass('active');

    $('.gallery .gallery-main .active').removeClass('active');
    $('#large3').addClass('active');

    clearInterval(timer);
    timer = setInterval(startSlideshow, 3500);
  });

  $('#image4').click(function(){
    for(var i = 1; i < 5; i++)
    {
      if($('#image' + i).hasClass('active'))
      {
        $('#image' + i).addClass('inactive');
        $('#image' + i).removeClass('active');
      }
    }

    $('#image4').removeClass('inactive');
    $('#image4').addClass('active');

    $('.gallery .gallery-main .active').removeClass('active');
    $('#large4').addClass('active');

    clearInterval(timer);
    timer = setInterval(startSlideshow, 3500);
  });
}

function startSlideshow() {
  $current_large = $('.gallery div.active')
  $current_small = $('.gallery-slides li.active');

  if($('#large4').hasClass('active'))
  {
    $('#image4').removeClass('active');
    $('#image4').addClass('inactive');

    $('#image1').addClass('active');
    $('#image1').removeClass('inactive');

    $('#large4').removeClass('active');
    $('#large1').addClass('active');
  }
  else
  {
    $current_large.removeClass('active');
    $current_large.next('.gallery-large').addClass('active');

    $current_small.removeClass('active');
    $current_small.addClass('inactive');

    $current_small.next('.gallery-small').addClass('active');
    $current_small.next('.gallery-small').removeClass('inactive');

    //$current_parent = $current_overlay.parent();
    //$next_parent = $current_parent.next();
    //$next_overlay = $next_parent.
  }
}