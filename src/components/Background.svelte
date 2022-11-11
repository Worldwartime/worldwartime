<script>
  import { height, width } from '$stores';

  // props (external)
  export let context;
  export let fillStyle = 'rgba(0, 0, 0, 0)';

  $: if (context) {
    console.log('yup');
    context.fillStyle = fillStyle;
    context.fillRect(0, 0, $width, $height);
  }
</script>
