<script>
  import { twMerge } from 'tailwind-merge';
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

  // props (external)
  export let contextType = '2d';

  // props(dynamic)
  $: if (canvas) {
    if (browser) resizeHandler();
    context = canvas.getContext(contextType);
  }
  $: classes = twMerge('absolute', $$props.class);
</script>

<canvas bind:this={canvas} class={classes} height={$height} width={$width} />
<slot {canvas} {context} {contextType} />
<svelte:window on:resize|passive={resizeHandler} />
