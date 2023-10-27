<?php 

$title             = get_field('accordion_title');
$accordion_cards   = get_field('accordion_cards');

if($accordion_cards):

?>
	<?php if($title):?>
		<h2 class="section-title"><?php echo $title;?></h2>
	<?php endif;?>   
	
	<div class="accordion" id="accordionBlock">

    <?php
			$count = 0;

			while ( have_rows('accordion_cards') ) : the_row(); 

				$title  = get_sub_field('title');
				$content = get_sub_field('content');
				
		?>   
		
			<?php if( $title ): ?>

				<div class="card">
					<div class="card-header" id="heading-<?php echo $count;?>">
						<h2 class="mb-0">
						<?php if($count === 0): ?>
							<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-<?php echo $count;?>" aria-expanded="true" aria-controls="collapse-<?php echo $count;?>">
						<?php else: ?>
							<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-<?php echo $count;?>" aria-expanded="false" aria-controls="collapse-<?php echo $count;?>">
						<?php endif; ?>

							<?php echo $title; ?>
							</button>
						</h2>
					</div>

					<?php if($count === 0): ?>
						<div id="collapse-<?php echo $count;?>" class="collapse show" aria-labelledby="heading-<?php echo $count;?>" data-parent="#accordionBlock">
					<?php else: ?>
						<div id="collapse-<?php echo $count;?>" class="collapse" aria-labelledby="heading-<?php echo $count;?>" data-parent="#accordionBlock">
					<?php endif; ?>
						<div class="card-body">
							<?php echo $content; ?>
						</div>
					</div>
				</div>

			<?php endif; ?>
			
			<?php $count++; ?>

		<?php	endwhile; ?>
       
	</div>
      
<?php endif; ?>