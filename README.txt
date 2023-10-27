<!-- ------

Interior Blocks

(do not use paddign-vertical, background-extended)


*Notes

NEW Field groups:
Size (select),
Padding Top and Padding Bottom (range)
has-texture (boolean)
btn-align
has-shadow (boolean)






KEEP Field Groups:
has-*-background-color {allow alpha}
has-*-color
BTN-TYPE

-->







<script>
  [
    {
      "title": "interior",
      "fields": [
        // NEW
        {
          "label": "Size",
          "name": "tb_size",
          "type": "select",
          "instructions": "Block's Width",
          "wrapper": {
            "width": "25",
            "class": "",
            "id": ""
          },
          "choices": {
            "col-xl-12": "Full",
            "col-xl-10": "Medium",
            "col-xl-8": "Small",
          },
          "default_value": false,
          "allow_null": 0,
          "multiple": 0,
          "ui": 0,
          "return_format": "value",
          "ajax": 0,
          "placeholder": ""
        },
        // NEW
        {
          "label": "Padding Top",
          "name": "tb_padding-top",
          "type": "range",
          "instructions": "Adds space above block in PX",
          "required": 0,
          "conditional_logic": 0,
          "wrapper": {
            "width": "",
            "class": "",
            "id": ""
          },
          "default_value": 0,
          "min": "0",
          "max": "150",
          "step": 10,
          "prepend": "top",
          "append": "px"
        },
        // NEW
        {
          "label": "Padding Bottom",
          "name": "tb_padding-bottom",
          "type": "range",
          "instructions": "Adds space below block in PX",
          "required": 0,
          "conditional_logic": 0,
          "wrapper": {
            "width": "",
            "class": "",
            "id": ""
          },
          "default_value": 0,
          "min": "0",
          "max": "150",
          "step": 10,
          "prepend": "bottom",
          "append": "px"
        },
        {
          "label": "Button Align",
          "name": "tb_btn-align",
          "type": "select",
          "instructions": "Block's Width",
          "wrapper": {
            "width": "25",
            "class": "",
            "id": ""
          },
          "choices": {
            "btn-align-center": "Center",
            "btn-align-left": "Left",
            "btn-align-right": "Right",
            "btn-align-between": "Opposite Sides",
            "btn-align-even": "Spaced Evenly",
          },
          "default_value": false,
          "allow_null": 0,
          "multiple": 0,
          "ui": 0,
          "return_format": "value",
          "ajax": 0,
          "placeholder": ""
        },
        {
          "label": "Line Spacer Color",
          "name": "tb_spacer_color",
          "type": "color_picker",
          "instructions": "",
          "required": 0,
          "conditional_logic": 0,
          "wrapper": {
            "width": "",
            "class": "",
            "id": ""
          },
          "default_value": "",
          "enable_opacity": 0,
          "return_format": "string"
        },






        // SAME AS AUTISM
        {
          "label": "Background Color",
          "name": "tb_bg_color",
          "type": "color_picker",
          "instructions": "",
          "required": 0,
          "conditional_logic": 0,
          "wrapper": {
            "width": "",
            "class": "",
            "id": ""
          },
          "default_value": "",
          "enable_opacity": 0,
          "return_format": "string"
        },
        {
          "label": "Text Color",
          "name": "tb_text_color",
          "type": "color_picker",
          "instructions": "",
          "required": 0,
          "conditional_logic": 0,
          "wrapper": {
            "width": "33",
            "class": "",
            "id": ""
          },
          "default_value": "",
          "enable_opacity": 0,
          "return_format": "string"
        },

      ]

    }
  ]

</script>



<!-- Accordion Block -->

Taken from WNPA but padding-vertical bg-*-color will not work


Add a Separator BOOLEAN option to the repeater that adds a span below accordion-item if toggled

<!-- Example -->

<!-- WHILE -->

<div class="accordion-item">
  <h6 class="accordion-header" id="heading-1">
    <button class="accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1"
      aria-expanded="true" aria-controls="collapse-1">
      Accordion Item #1
    </button>
  </h6>
  <div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="heading-1"
    data-bs-parent="#accordionBlock">
    <div class="accordion-body">
      overflow.
    </div>
  </div>
</div>
<!-- IF SEPARATOR TRUE, RETURN -->
<span class="separator"></span>
<!-- END IF -->

<!-- END WHILE -->

-------------------------------------------------------------------------------------------------------------


<!-- Line Spacer Block -->




<div
  class="custom-block line-spacer-block alignfull <?php echo 'padding-top-' . $tb_padding-top; ?> <?php echo 'padding-bottom-' . $tb_padding-bottom; ?>">
  <div class="container">
    <div class="row justify-content-center">

      <!-- SIZE GOES HERE -->
      <div class="col-12 <?php echo $tb_size; ?>">
        <hr style="background-color: <?php the_field('tb_spacer_color'); ?> ;">
      </div>
    </div>
  </div>
</div>



-------------------------------------------------------------------------------------------------------------


<!-- Text Block-->


<div
  class="custom-block text-only-block  alignfull  has-<?php echo $tb_bg_color; ?>-background-color  <?php echo 'padding-top-' . $tb_padding-top; ?> <?php echo 'padding-bottom-' . $tb_padding-bottom; ?>">
  <div class="container">
    <div class="row justify-content-center">

      <!-- SIZE GOES HERE -->
      <div class="col-12 <?php echo $tb_size; ?>">

        <h4>H4. Text-Only Block</h4>
        <p>Maximum 50 words per paragraph. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          <a href="">incididunt ut labore et dolore magna</a> aliqua. Vitae et leo duis ut
          diam. Pellentesque elit ullamcorper dignissim cras. Consequat nisl
          vel pretium lectus quam id leo in.
        </p>
        <blockquote>
          <p>Highlight. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Vitae et leo duis ut diam. Pellentesque elit
            ullamcorper.</p>
        </blockquote>
        <p>Maximum 50 words per paragraph. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Vitae et leo duis ut diam.
          Pellentesque elit ullamcorper dignissim cras. Consequat nisl vel
          pretium lectus quam id leo in.</p>

      </div>
    </div>

    <!-- IF HAS BUTTON, RETURN -->
    <div class="btn-container <?php echo $tb_btn_align; ?>">
      <a href="" class="<?php echo $tb_btn_type ;?>">Call to Action</a>
    </div>
  </div>
</div>




----------------------------------------------------------------------------------------------------------------
<!-- Options Block -->

<div class="custom-block alignfull custom-options-block">
  <div class="bg-img-wrapper"><img src="images/gradient-example.png" alt=""></div>
  <div class="container">
    <div class="row justify-content-center">
      <!-- Size variable -->
      <div class="col-12 col-xl-10">
        <h4>H4. Options Block</h4>
      </div>
    </div>
    <div class="row justify-content-center">
      <!-- size variable -->
      <div class="col-xl-10">
        <div class="option-boxes">

          <div class="option-box">
            <div class="img-container">
              <!-- has shado variable -->
              <div class="img-wrapper has-shadow">
                <img class="w-100" src="images/options-block1-photo.jpg">
                <!-- show only if text is entered -->
                <div class="option-inside-text-container">
                  <h5 class="option-inside-text">Option One</h5>
                </div>
              </div>
            </div>
            <h5>H5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod nisi, scelerisque nunc
              scelerisque tristique rutrum. Mi felis nibh pellentesque bibendum et sapien et erat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>