<script>
  import { Background, Canvas, Controls, Tile } from '$components';
  import { cameraX, cameraY } from '$stores';

  const tileMapWidth = 11 * 11;
  const tileMap = [...Array(tileMapWidth * tileMapWidth)].map((_, i) => {
    const x = i % tileMapWidth;
    const y = Math.floor(i / tileMapWidth);
    const tileNum =
      i % tileMapWidth === Math.floor(tileMapWidth / 2) &&
      Math.floor(i / tileMapWidth) === Math.floor(tileMapWidth / 2)
        ? Math.floor(Math.random() * 230)
        : 1;
    return { tileNum, x, y };
  });
  $cameraX = 0;
  $cameraY = (tileMapWidth / 2) * 8;
</script>

<svelte:head>
  <title>World War Time</title>
</svelte:head>

<Controls />

<!-- Canvas | Background -->
<Canvas let:context>
  <Background {context} fillStyle="hsl(0, 0%, 10%)" />
</Canvas>

<!-- Canvas | Tiles -->
<Canvas let:context>
  <Background {context} />
  {#each tileMap as { tileNum, x, y }}
    <Tile {context} {tileNum} {x} {y} />
  {/each}
</Canvas>
