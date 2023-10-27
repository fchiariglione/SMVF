var jQ = jQuery.noConflict();
jQ(document).ready(function(){
    
  function sameheight1($object){
    var Box1 = 0;
      jQ($object).each(function(){  
        if(jQ(this).height() > Box1){  
          Box1 = jQ(this).height();  
        }
    });    
    jQ($object).height(Box1);
  }  
  /*Start function Slider Wrap into Item--------------*/
    function itemswrap($path, $number, $wrap){
      var divgallry = jQ($path);
      for(var i = 0; i < divgallry.length; i+=$number) {
        divgallry.slice(i, i+$number).wrapAll($wrap);
      }    
    }
    function itemsunwrap($path){
      jQ($path).unwrap();
    }
    
    function bulletsWrap($sliderID){
      var indicatorsProduct= jQ($sliderID + ' .carousel-item').size();  
      var row = jQ('<li data-target="'+$sliderID+'"></li>');
      
      for (var i=0; i<indicatorsProduct; i++) {
          jQ($sliderID + ' .carousel-indicators').append(row.clone());
      }
      var counterProduct=-1;
      jQ($sliderID + ' .carousel-indicators li').each(function(){
      counterProduct++;
          var self=jQ(this);
          self.attr('data-slide-to', counterProduct);
      });  
  
      jQ($sliderID + ' .carousel-indicators li').first().addClass('active');
    }
  
  jQ('div[id^="carousel__sponsors_"]').swiperight(function() {  
    jQ(this).carousel('prev');  
  });  
  jQ('div[id^="carousel__sponsors_"]').swipeleft(function() {  
    jQ(this).carousel('next');  
  }); 
  /*END function Slider Wrap into Item----------------------------*/

  function myOrientResizeFunction(){          
     // Large devices (desktops, 992px and up)
     if (jQ(window).width() >= 1199.98){

      itemsunwrap('div[id^="carousel__sponsors_"] .row-vList .single-sponsor');
      itemsunwrap('div[id^="carousel__sponsors_"] .carousel-item .single-sponsor');
      
      itemswrap('div[id^="carousel__sponsors_"] .single-sponsor', 4, '<div class="row-vList"></div>');
      itemswrap('div[id^="carousel__sponsors_"] .row-vList', 1, '<div class="carousel-item"></div>');
        
    } else if (jQ(window).width() > 991.98) {
      
      itemsunwrap('div[id^="carousel__sponsors_"] .row-vList .single-sponsor');
      itemsunwrap('div[id^="carousel__sponsors_"] .carousel-item .single-sponsor');
      //sameheight1('div[id^="carousel__sponsors_"] .single-sponsor ');
      itemswrap('div[id^="carousel__sponsors_"] .single-sponsor', 3, '<div class="row-vList"></div>');
      itemswrap('div[id^="carousel__sponsors_"] .row-vList', 1, '<div class="carousel-item"></div>');


    } else if (jQ(window).width() > 767.98) {

      itemsunwrap('div[id^="carousel__sponsors_"] .row-vList .single-sponsor');
      itemsunwrap('div[id^="carousel__sponsors_"] .carousel-item .single-sponsor');
      //sameheight1('div[id^="carousel__sponsors_"] .single-sponsor ');
      itemswrap('div[id^="carousel__sponsors_"] .single-sponsor', 2, '<div class="row-vList"></div>');
      itemswrap('div[id^="carousel__sponsors_"] .row-vList', 1, '<div class="carousel-item"></div>');
    } else if (jQ(window).width() > 575.98) {

      itemsunwrap('div[id^="carousel__sponsors_"] .row-vList .single-sponsor');
      itemsunwrap('div[id^="carousel__sponsors_"] .carousel-item .single-sponsor');
      //sameheight1('div[id^="carousel__sponsors_"] .single-sponsor ');
      itemswrap('div[id^="carousel__sponsors_"] .single-sponsor', 2, '<div class="row-vList"></div>');
      itemswrap('div[id^="carousel__sponsors_"] .row-vList', 1, '<div class="carousel-item"></div>');
    } else{
      
      itemsunwrap('div[id^="carousel__sponsors_"] .row-vList .single-sponsor');
      itemsunwrap('div[id^="carousel__sponsors_"] .carousel-item .single-sponsor');
      //sameheight1('div[id^="carousel__sponsors_"] .single-sponsor ');
      itemswrap('div[id^="carousel__sponsors_"] .single-sponsor', 1, '<div class="row-vList"></div>');
      itemswrap('div[id^="carousel__sponsors_"] .row-vList', 1, '<div class="carousel-item"></div>');
    }

    jQ('div[id^="carousel__sponsors_"] li').remove();
      bulletsWrap('div[id^="carousel__sponsors_"]');

      
    jQ('div[id^="carousel__sponsors_"] .carousel-item:first-child').each(function(){
      jQ(this).addClass('active');
    });
    

  } myOrientResizeFunction();

    jQ(window).resize(function(){
      myOrientResizeFunction();
    });

});