<script>
  import { Background, Canvas, Image } from '$components';
</script>

<!-- Canvas | Background -->
<Canvas let:context>
  <Background {context} fillStyle="hsl(0, 0%, 10%)" />
</Canvas>

<!-- Canvas | Tiles -->
<Canvas let:context>
  <Background {context} />
  <Image {context} src={`./assets_pixel_50x50/isometric_pixel_0000.png`} />
  <Image {context} src={`./assets_pixel_50x50/isometric_pixel_0000.png`} x="42" />
  <Image {context} src={`./assets_pixel_50x50/isometric_pixel_0000.png`} x="84" />
  <Image {context} src={`./assets_pixel_50x50/isometric_pixel_0010.png`} x="21" y="12" />
</Canvas>
