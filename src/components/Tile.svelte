<script>
  import { Spritesheet } from '$components';
  import { cameraX, cameraY, height as windowHeight, width as windowWidth } from '$stores';

  // props (external)
  export let context;
  export let height = 24;
  export let tileNum = 0;
  export let width = 42;
  export let x = 0;
  export let y = 0;

  $: imageX = $windowWidth / 2 - $cameraX + (x * width) / 2 - (y * width) / 2;
  $: imageY = $windowHeight / 2 - $cameraY + (x * height) / 2 + (y * height) / 2;
</script>

{#if imageX < $windowWidth && imageX > -50 && imageY < $windowHeight && imageY > -50}
  <Spritesheet
    {context}
    dHeight="50"
    dWidth="50"
    dX={imageX}
    dY={imageY}
    src="/spritesheet.png"
    sHeight="50"
    sWidth="50"
    sX={tileNum * 50}
    sY="0"
  />
{/if}
