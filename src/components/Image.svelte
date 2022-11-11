<script>
  import { onMount } from 'svelte';
  import { images } from '$stores';

  // props (external)
  export let context;
  export let dHeight;
  export let dWidth;
  export let dX;
  export let dY;
  export let src;
  export let sHeight;
  export let sWidth;
  export let sX = 0;
  export let sY = 0;

  $: if ($images[src] === undefined) {
    const image = new Image();
    image.onload = function () {
      if (dHeight === undefined) dHeight = this.height;
      if (dWidth === undefined) dWidth = this.width;
      if (sHeight === undefined) sHeight = this.height;
      if (sWidth === undefined) sWidth = this.width;
      $images[src] = image;
    };
    image.src = src;
  }
  $: if (context) {
    if ($images[src]) {
      context.drawImage($images[src], sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
    }
  }

  onMount(() => {});
</script>
