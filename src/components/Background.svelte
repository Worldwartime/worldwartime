<script>
  import { height, width } from '$stores';

  // props (external)
  export let context;
  export let fillStyle = 'hsl(0, 0%, 10%)';

  $: if (context) {
    context.fillStyle = fillStyle;
    context.fillRect(0, 0, $width, $height);
  }
</script>
