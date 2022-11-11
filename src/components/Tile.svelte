<script>
  import { Image } from '$components';
  import { cameraX, cameraY, height as windowHeight, width as windowWidth } from '$stores';

  // props (external)
  export let context;
  export let height = 24;
  export let src;
  export let width = 42;
  export let x = 0;
  export let y = 0;

  $: imageX = $windowWidth / 2 - $cameraX + (x * width) / 2 - (y * width) / 2;
  $: imageY = $windowHeight / 2 - $cameraY + (x * height) / 2 + (y * height) / 2;
</script>

<Image {context} {src} x={imageX} y={imageY} />
