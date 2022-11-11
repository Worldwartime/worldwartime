<script>
  import { browser } from '$app/environment';
  import { height, width } from '$stores';

  // handlers
  const resizeHandler = () => {
    if (browser) {
      $height = window.innerHeight;
      $width = window.innerWidth;
    }
  };

  // props (internal)
  let canvas;
  let context;

  // props(dynamic)
  $: if (canvas) {
    if (browser) resizeHandler();
    context = canvas.getContext('2d');
  }
</script>

<canvas bind:this={canvas} height={$height} width={$width} />
<slot {canvas} {context} />
<svelte:window on:resize|passive={resizeHandler} />
