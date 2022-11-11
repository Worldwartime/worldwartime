<script>
  import { cameraX, cameraY } from '$stores';

  // handlers
  const keydownHandler = (e) => {
    if (e.code === 'ArrowLeft' || e.code === 'Numpad4') $cameraX = $cameraX - movementSpeed * 1;
    if (e.code === 'ArrowRight' || e.code === 'Numpad6') $cameraX = $cameraX + movementSpeed * 1;
    if (e.code === 'ArrowUp' || e.code === 'Numpad8') $cameraY = $cameraY - movementSpeed * 0.5;
    if (e.code === 'ArrowDown' || e.code === 'Numpad2') $cameraY = $cameraY + movementSpeed * 0.5;
    if (e.code === 'Numpad7') {
      $cameraX = $cameraX - movementSpeed * 0.5;
      $cameraY = $cameraY - movementSpeed * 0.25;
    }
    if (e.code === 'Numpad9') {
      $cameraX = $cameraX + movementSpeed * 0.5;
      $cameraY = $cameraY - movementSpeed * 0.25;
    }
    if (e.code === 'Numpad1') {
      $cameraX = $cameraX - movementSpeed * 0.5;
      $cameraY = $cameraY + movementSpeed * 0.25;
    }
    if (e.code === 'Numpad3') {
      $cameraX = $cameraX + movementSpeed * 0.5;
      $cameraY = $cameraY + movementSpeed * 0.25;
    }
  };

  // props (internal)
  let movementSpeed = 10;
</script>

<svelte:window on:keypress={keydownHandler} />
