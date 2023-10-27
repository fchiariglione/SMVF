var jQ = jQuery.noConflict();

jQ(document).ready(function(){
  if (typeof foo !== 'undefined') {
    // Now we know that foo is defined, we are good to go.
  }
  
  jQ('html').attr('user-agent',navigator.userAgent);
  
		/*START function Same height boxes--------------------*/ 
	
    function sameheight1($object){
      var Box1 = 0;
        jQ($object).each(function(){  
          if(jQ(this).height() > Box1){  
            Box1 = jQ(this).height();  
          }
      });    
      jQ($object).height(Box1);
    }
  
    // sameheight1("#");  
  
    function sameheight2($object1, $object2){
      var Box2 = 0;
      jQ($object1).each(function(){  
        if(jQ(this).height() > Box2){  
          Box2 = jQ(this).height();  
        }
      });    
      jQ($object2).height(Box2);
    }
  
    // sameheight2("#1", "#2" );
  
/*END function Same height boxes--------------------*/
/*Start function Slider Wrap into Item--------------*/

  function itemswrap($path, $number, $wrap){
     var divgallry = jQ($path);
    for(var i = 0; i < divgallry.length; i+=$number) {
      divgallry.slice(i, i+$number).wrapAll($wrap);
    }    
  }
  function itemswrapInner($path, $number, $wrap){
    var divgallry = jQ($path);
   for(var i = 0; i < divgallry.length; i+=$number) {
     divgallry.slice(i, i+$number).wrapInner($wrap);
   }    
 }
  function itemsunwrap($path){
    jQ($path).unwrap();
  }

/*END function Slider Wrap into Item----------------------------*/
/*Start function Slider Bullets Wrap----------------------------*/

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

/*END function Slider Bullets Wrap----------------------------*/
/*START Slider Touchable--------------------*/

  jQ("#carousel__sponsor").swiperight(function() {  
    jQ(this).carousel('prev');  
   });  
  jQ("#carousel__sponsor").swipeleft(function() {  
    jQ(this).carousel('next');  
  }); 

  
/*-------- Start Media Queries ----------*/
/*START Resize--------------------*/
function myOrientResizeFunction(){

  itemsunwrap('.wrap-container .container');
  itemswrapInner('.wrap-container', 1 , '<div class="container"></div>');
  
  itemsunwrap('body.single-post blockquote .container');
  itemswrapInner('body.single-post blockquote', 1 , '<div class="container"></div>');

  jQ('body.single-post blockquote').append('<div class="blockquote-bg"><span class="overlay"></span></div>');
  

  // Extra large devices (large desktops, 1200px and up)
    if (jQ(window).width() >= 991){
     
      setTimeout(function() {
       
        
      },500);
      
     
    }

    else if (jQ(window).width() < 991) {

      setTimeout(function() {
    
      },500);

    }
 
  // Large devices (desktops, 992px and up)
  if (jQ(window).width() >= 992){
    
    itemsunwrap('#carousel__sponsor .d-flex.justify-content-center.align-items-center .single-sponsor');
    itemsunwrap('#carousel__sponsor .carousel-item .single-sponsor');
   
    itemswrap("#carousel__sponsor .single-sponsor", 5, '<div class="d-flex justify-content-center align-items-center"></div>');
    itemswrap("#carousel__sponsor .d-flex.justify-content-center.align-items-center", 1, '<div class="carousel-item"></div>');
    
  } 
  // Medium devices (tablets, 768px and up)
  else if (jQ(window).width() > 768){
    itemsunwrap('#carousel__sponsor .d-flex.justify-content-center.align-items-center .single-sponsor');
    itemsunwrap('#carousel__sponsor .carousel-item .single-sponsor');
    itemswrap("#carousel__sponsor .single-sponsor", 3, '<div class="d-flex justify-content-center align-items-center"></div>');
    //sameheight1("#carousel__sponsor .d-flex.justify-content-center.align-items-center");
    itemswrap("#carousel__sponsor .d-flex.justify-content-center.align-items-center", 1, '<div class="carousel-item"></div>');

    setTimeout(function(){
     
    },2300);

  } 
  else if (jQ(window).width() > 576){
    itemsunwrap('#carousel__sponsor .d-flex.justify-content-center.align-items-center .single-sponsor');
    itemsunwrap('#carousel__sponsor .carousel-item .single-sponsor');
    itemswrap("#carousel__sponsor .single-sponsor", 1, '<div class="d-flex justify-content-center align-items-center"></div>');
    //sameheight1("#carousel__sponsor .d-flex.justify-content-center.align-items-center");
    itemswrap("#carousel__sponsor .d-flex.justify-content-center.align-items-center", 1, '<div class="carousel-item"></div>');
  }
  else {
    itemsunwrap('#carousel__sponsor .d-flex.justify-content-center.align-items-center .single-sponsor');
    itemsunwrap('#carousel__sponsor .carousel-item .single-sponsor');
    itemswrap("#carousel__sponsor .single-sponsor", 1, '<div class="d-flex justify-content-center align-items-center"></div>');
    //sameheight1("#carousel__sponsor .single-sponsor ");
    itemswrap("#carousel__sponsor .d-flex.justify-content-center.align-items-center", 1, '<div class="carousel-item"></div>');
     setTimeout(function(){
      
    },2300);
  }


    jQ('#carousel__sponsor .carousel-item').first().addClass('active');

  } myOrientResizeFunction();

  //*START carousels Touchable--------------------*/


  jQ(window).bind('resize', function(e){
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function(){
       // this.location.reload(false); /* false to get page from cache */
        myOrientResizeFunction();
    }, 0);
  }); 

  jQ(window).resize(function(){
   myOrientResizeFunction();
  });

});
 