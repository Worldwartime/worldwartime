<script>
  import { onMount } from 'svelte';
  import { cameraX, cameraY, height as windowHeight, width as windowWidth } from '$stores';

  // props (internal)
  let image;
  let loaded;

  // props (external)
  export let context;
  export let height;
  export let src;
  export let width;
  export let x = 0;
  export let y = 0;

  $: if (context) {
    if (loaded) context.drawImage(image, x, y, width, height);
  }

  onMount(() => {
    image = new Image();
    image.onload = function () {
      if (height === undefined) height = this.height;
      if (width === undefined) width = this.width;
      loaded = true;
    };
    image.src = src;
  });
</script>
