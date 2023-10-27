<?php 

//$accessibility_text = get_field('accessibility_text');
$title              = get_field('sponsors_title');

$className = 'block-sponsor-container';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$sponsors_cards = get_field('sponsors_cards');

$label              = get_field('view_all')['title'];
$url                = get_field('view_all')['url'];
$target             = get_field('view_all')['target'] ? get_field('view_all')['target'] : '_self';

if($sponsors_cards):

?>

<div class="<?php echo esc_attr($className); ?>">

		<?php if($title):?>
			<div class="title-block <?php echo esc_attr($className); ?>">
				<h2><?php echo $title;?></h2>
			</div>
    <?php endif;?>
	
	<div class="sponsor-vList" aria-describedby="sponsors block">
		<div class="row-vList">
    <?php  

			while ( have_rows('sponsors_cards') ) : the_row(); 

				$image = get_sub_field('image');
				if( $image ){

					// Image variables.
					$url = $image['url'];
					$title = $image['title'];
					$alt = $image['alt'];
					$caption = $image['caption'];
					
					// Thumbnail size attributes.
					$size = 'md';
					$thumb = $image['sizes'][ $size ];
					$width = $image['sizes'][ $size . '-width' ];
					$height = $image['sizes'][ $size . '-height' ];
					
				}else{
					$image = get_template_directory_uri().'/assets/images/defaul.svg';
				}
					
				$title  = get_sub_field('title');
				$link = get_sub_field('link');
				
				// Be aware that, if there is no title, the entire box won't show.

				if( $title ):

		?>   
				
			<?php if( $image ): ?>
				<div class="single-sponsor col-6 col-lg-3 col-md-4">				
					<?php if($link): ?><a aria-label="" href="<?php echo $link; ?>" target="_blank"><?php endif; ?>
						<figure class="featured-sponsor-images">
							<img src="<?php echo $url; ?>" alt="<?php echo $alt; ?>">
							<figcaption><?php echo $caption ;?></figcaption>
						</figure>
					<?php if($link): ?></a><?php endif; ?>
				</div>
			<?php endif; ?>
				
			<?php

				endif; 

			endwhile;

		?>
       
		</div>
	</div>

</div>
        
<?php endif; ?>


