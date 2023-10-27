
<?php 

require_once ( get_stylesheet_directory() . '/inc/base/TeamClass.php' );
$team = new TeamClass();

$postID = get_the_ID();
$GLOBALS['accessibility_text']     = get_field( 'accessibility_text', $postID );
$GLOBALS['team_title'] = get_field( 'team_title' );


$GLOBALS['layout_view'] = get_field_object( 'layout_view' );
$value = $GLOBALS['layout_view']['value'];
$label = $GLOBALS['layout_view']['choices'][ $value ];

$team_cards = get_field('team_cards');

?>

  <?php if($GLOBALS['team_title']):?>
    <h2><?php echo $GLOBALS['team_title'];?></h2>
  <?php endif;?>
  <?php if($GLOBALS['accessibility_text']):?>
    <p class="sr-only" id="task-description"><?php echo $GLOBALS['accessibility_text'];?></p>
  <?php endif;?>

  <?php if( esc_attr($value) == 'team-vGrid-square' ): ?>
    <div class="<?php echo esc_attr($value); ?>">
      <div class="row">      
        <?php  $team->LoopTeamGeneral2(); ?>
      </div>  
    </div>

  <?php elseif( esc_attr($value) == 'team-vGrid-square-sm' ): ?>
    <div class="<?php echo esc_attr($value); ?>">
      <div class="row">
        <?php  $team->LoopTeamGeneral2(); ?>
      </div>
    </div>

  <?php elseif( esc_attr($value) == 'team-vList' ): ?>
    <div class="<?php echo esc_attr($value); ?>">
       <?php  $team->LoopTeamGeneral(); ?>
    </div>

  <?php elseif( esc_attr($value) == 'team-vCarousel' ): ?>
    <div class="<?php echo esc_attr($value); ?>">
      <div id="carousel__team" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators"></ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox"> 

         <?php  $team->LoopTeamGeneral(); ?>
            
        </div>
        <a class="carousel-control-prev" href="#carousel__team" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel__team" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> 
    </div> <!-- .team-vCarousel --> 

    <script type="text/javascript">
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

        function myOrientResizeFunction(){
          if (jQ(window).width() >= 991){

          } else if (jQ(window).width() < 991) {

          }  
          // Large devices (desktops, 992px and up)
          if (jQ(window).width() > 992){

            itemsunwrap('#carousel__team .row.justify-content-center .single-member');
            itemsunwrap('#carousel__team .carousel-item .single-member');
            
            itemswrap("#carousel__team .single-member", 3, '<div class="row justify-content-center"></div>');
            itemswrap("#carousel__team .row.justify-content-center", 1, '<div class="carousel-item"></div>');
              
            } 
            // Medium devices (tablets, 768px and up)
            else if (jQ(window).width() > 768){     

              itemsunwrap('#carousel__team .row.justify-content-center .single-member');
              itemsunwrap('#carousel__team .carousel-item .single-member');
              itemswrap("#carousel__team .single-member", 2, '<div class="row justify-content-center"></div>');
              //sameheight1("#carousel__team .row.justify-content-center");
              itemswrap("#carousel__team .row.justify-content-center", 1, '<div class="carousel-item"></div>');
          
              
            } 
            else if (jQ(window).width() > 576){
              itemsunwrap('#carousel__team .row.justify-content-center .single-member');
              itemsunwrap('#carousel__team .carousel-item .single-member');
            
              itemswrap("#carousel__team .single-member", 1, '<div class="row justify-content-center"></div>');
              //sameheight1("#carousel__team .row.justify-content-center");
              itemswrap("#carousel__team .row.justify-content-center", 1, '<div class="carousel-item"></div>');
            }
            else {

              itemsunwrap('#carousel__team .row.justify-content-center .single-member');
              itemsunwrap('#carousel__team .carousel-item .single-member');
              itemswrap("#carousel__team .single-member", 1, '<div class="row justify-content-center"></div>');
              //sameheight1("#carousel__team .single-member ");
              itemswrap("#carousel__team .row.justify-content-center", 1, '<div class="carousel-item"></div>');
            
              setTimeout(function(){
              },2300);
            }

        } myOrientResizeFunction();

          jQ('#carousel__team .carousel-item').first().addClass('active');

          jQ(window).resize(function(){
            myOrientResizeFunction();
          });

        });
    </script>

  <?php elseif( esc_attr($value) == 'team-vCarousel-bgc' ): ?>
    <div class="<?php echo esc_attr($value); ?>">
      <div id="carousel__team-bgc" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators"></ol>
          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
         
              <?php  $team->LoopTeamGeneral(); ?>
            
          </div>
        <a class="carousel-control-prev" href="#carousel__team-bgc" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel__team-bgc" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> 
    </div> <!-- .team-vCarousel --> 

    <script type="text/javascript">
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

        function myOrientResizeFunction(){
          if (jQ(window).width() >= 991){

          } else if (jQ(window).width() < 991) {

          }  
          // Large devices (desktops, 992px and up)
          if (jQ(window).width() > 992){

            itemsunwrap('#carousel__team-bgc .row.justify-content-center .single-member');
            itemsunwrap('#carousel__team-bgc .carousel-item .single-member');
             
              sameheight1("#carousel__team-bgc .row.justify-content-center");

            itemswrap("#carousel__team-bgc .single-member", 3, '<div class="row justify-content-center"></div>');
            itemswrap("#carousel__team-bgc .row.justify-content-center", 1, '<div class="carousel-item"></div>');
              
            } 
            // Medium devices (tablets, 768px and up)
            else if (jQ(window).width() > 768){     

              itemsunwrap('#carousel__team-bgc .row.justify-content-center .single-member');
              itemsunwrap('#carousel__team-bgc .carousel-item .single-member');
              itemswrap("#carousel__team-bgc .single-member", 2, '<div class="row justify-content-center"></div>');
              //sameheight1("#carousel__team-bgc .row.justify-content-center");
              itemswrap("#carousel__team-bgc .row.justify-content-center", 1, '<div class="carousel-item"></div>');
          
              
            } 
            else if (jQ(window).width() > 576){
              itemsunwrap('#carousel__team-bgc .row.justify-content-center .single-member');
              itemsunwrap('#carousel__team-bgc .carousel-item .single-member');
            
              itemswrap("#carousel__team-bgc .single-member", 1, '<div class="row justify-content-center"></div>');
              //sameheight1("#carousel__team-bgc .row.justify-content-center");
              itemswrap("#carousel__team-bgc .row.justify-content-center", 1, '<div class="carousel-item"></div>');
            }
            else {

              itemsunwrap('#carousel__team-bgc .row.justify-content-center .single-member');
              itemsunwrap('#carousel__team-bgc .carousel-item .single-member');
              itemswrap("#carousel__team-bgc .single-member", 1, '<div class="row justify-content-center"></div>');
              //sameheight1("#carousel__team-bgc .single-member ");
              itemswrap("#carousel__team-bgc .row.justify-content-center", 1, '<div class="carousel-item"></div>');
            
              setTimeout(function(){
              },2300);
            }

        } myOrientResizeFunction();

          jQ('#carousel__team-bgc .carousel-item').first().addClass('active');

          jQ(window).resize(function(){
            myOrientResizeFunction();
          });

        });
    </script>
  <?php elseif( esc_attr($value) == 'team-vGrid-circle' ): ?>
    <div class="team-vGrid-circle">
      <div class="row justify-content-center">  
        
        <?php  $team->LoopTeamGeneral2(); ?>

      </div>
    </div>

  <?php elseif( esc_attr($value) == 'team-vGrid-circle_wn' ): ?>
    <div class="team-vGrid-circle_wn">
      <div class="row justify-content-center">
        
        <?php  $team->LoopTeamGeneral2(); ?>

      </div>
    </div>

  <?php endif; ?>

  <?php 
  
  $GLOBALS['single_view'] = get_field_object( 'single_view' );
  $value = $GLOBALS['single_view']['value'];
  $label = $GLOBALS['single_view']['choices'][ $value ];
  
 if( esc_attr($value) == 'side-panel' ): 

  $team->singleViewTeamSidePanel();

  elseif( esc_attr($value) == 'pop-up' ):
    
  $team->singleViewTeamPopup();

 endif;


