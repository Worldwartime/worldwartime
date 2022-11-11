<script>
  import { Background, Canvas, Tile } from '$components';
</script>

<!-- Canvas | Background -->
<Canvas let:context>
  <Background {context} fillStyle="hsl(0, 0%, 10%)" />
</Canvas>

<!-- Canvas | Tiles -->
<Canvas let:context>
  <Background {context} />
  <Tile {context} src={`./assets_pixel_50x50/isometric_pixel_0000.png`} x="0" y="0" />
  <Tile {context} src={`./assets_pixel_50x50/isometric_pixel_0000.png`} x="1" y="0" />
  <Tile {context} src={`./assets_pixel_50x50/isometric_pixel_0001.png`} x="0" y="1" />
  <Tile {context} src={`./assets_pixel_50x50/isometric_pixel_0001.png`} x="1" y="1" />
  <Tile {context} src={`./assets_pixel_50x50/isometric_pixel_0002.png`} x="0" y="2" />
  <Tile {context} src={`./assets_pixel_50x50/isometric_pixel_0002.png`} x="1" y="2" />
</Canvas>
