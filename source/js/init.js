!function(){"use strict";function t(t){return Array.prototype.slice.call(document.querySelectorAll(t))}function e(t){if(t.closest)return t.closest("[data-a11y-toggle]");for(;t;){if(1===t.nodeType&&t.hasAttribute("data-a11y-toggle"))return t;t=t.parentNode}return null}function r(t){var r=e(t.target),a=r&&n[r.getAttribute("aria-controls")];if(!a)return!1;var u=i["#"+a.id],o="false"===a.getAttribute("aria-hidden");a.setAttribute("aria-hidden",o),u.forEach(function(t){t.setAttribute("aria-expanded",!o)})}var a=0,i={},n={};document.addEventListener("DOMContentLoaded",function(){i=t("[data-a11y-toggle]").reduce(function(t,e){var r="#"+e.getAttribute("data-a11y-toggle");return t[r]=t[r]||[],t[r].push(e),t},i);var e=Object.keys(i);e.length&&t(e).forEach(function(t){var e=i["#"+t.id],r=t.hasAttribute("data-a11y-toggle-open"),u=[];e.forEach(function(e){e.id||e.setAttribute("id","a11y-toggle-"+a++),e.setAttribute("aria-controls",t.id),e.setAttribute("aria-expanded",r),u.push(e.id)}),t.setAttribute("aria-hidden",!r),t.hasAttribute("aria-labelledby")||t.setAttribute("aria-labelledby",u.join(" ")),n[t.id]=t})}),document.addEventListener("click",r),document.addEventListener("keyup",function(t){if(13===t.which||32===t.which){var a=e(t.target);a&&"button"===a.getAttribute("role")&&r(t)}})}();


$('.sg-menu-button').on('click', function(){

  $('#patternlab-html').toggleClass('show-menu');

});




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

