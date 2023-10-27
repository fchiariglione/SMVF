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
  /*END function Slider Wrap into Item----------------------------*/
  
  
  function bulletsWrap($sliderID){
    var indicatorsProduct= jQ($sliderID + " .carousel-item").size();  
    var row = jQ('<li data-target="'+$sliderID+'"></li>');
    
    for (var i=0; i<indicatorsProduct; i++) {
        jQ($sliderID + ' .carousel-indicators').append(row.clone());
    }
    var counterProduct=-1;
    jQ($sliderID + " .carousel-indicators li").each(function(){
    counterProduct++;
        var self=jQ(this);
        self.attr('data-slide-to', counterProduct);
    });  

    jQ($sliderID + " .carousel-indicators li").first().addClass('active');
  }

  jQ("#carousel__testimonials").swiperight(function() {  
    jQ(this).carousel('prev');  
  });  
  jQ("#carousel__testimonials").swipeleft(function() {  
    jQ(this).carousel('next');  
  }); 

  if(jQ(".carousel_block_testimonials").length > 0) {   

    var $title_section_float = jQ('.container-control');    
    var $positionDivTop = jQ('#carousel__testimonials .content-testimonial').offset().top - jQ('#carousel__testimonials').offset().top;
    var $positionDivLeft = jQ('#carousel__testimonials .content-testimonial').offset().left;

    jQ($title_section_float).css('top',$positionDivTop);
    jQ('#carousel__testimonials .content-testimonial').css('padding-top',$title_section_float.outerHeight()+'px');
    
  } /*---- Only on HomePage ---*/

  function myOrientResizeFunction(){
    if (jQ(window).width() >= 1200){
      
      sameheight1("#carousel__testimonials .carousel-item");
      
    } 
    // Medium devices (tablets, 991px and up)
    else if (jQ(window).width() >  991){     

    }
    else if (jQ(window).width() <  767){

    }

    jQ('#carousel__testimonials li').remove();
      bulletsWrap('#carousel__testimonials');
    // jQ('#carousel__testimonials .carousel-item').first().addClass('active');

  } myOrientResizeFunction();

    jQ(window).resize(function(){
      myOrientResizeFunction();
    });

  });