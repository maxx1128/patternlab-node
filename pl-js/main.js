//=require ../_bower_components/jquery/dist/jquery.min.js
//=require ../_bower_components/a11y-toggle/a11y-toggle.min.js

//=require pattern-lab/pl-nav.js
//=require pattern-lab/pl-screen-sizes.js

(function(w){
  var sw = document.body.clientWidth,
    sh = document.body.clientHeight;

  $(w).resize(function(){ //Update dimensions on resize
    sw = document.body.clientWidth;
    sh = document.body.clientHeight;
    
    //updateAds();
  });


  //Navigation toggle
  $('.nav-toggle-menu').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
  });
  
  //Navigation toggle
  $('.nav-toggle-search').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header .search-form').toggleClass('active');
  });
})(this);

