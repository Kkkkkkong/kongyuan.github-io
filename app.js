$(document).ready(function(){

  $('.button-8').on('click', function(){
    $(this).addClass('wobble')
  })

  $('.button-8').on('animationend', function(){
    $(this).removeClass('wobble')
  })

})
