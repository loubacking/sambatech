// Starting Carousel w/ its options

$(document).ready(function(){
    $('.carousel').carousel({
      duration: 200, 
      dist: 0, 
      shift: 0,
      padding: 150, 
      numVisible: 5, 
      fullWidth: false, 
      indicators: false, 
      noWrap: false, 
      onCycleTo: null 
    });
  });
      