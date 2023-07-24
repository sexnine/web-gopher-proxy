<script lang="ts">
  import HeroiconsDocumentTextSolid from "~icons/heroicons/document-text-solid";
  import HeroiconsListBulletSolid from "~icons/heroicons/list-bullet-solid";
  import HeroiconsPhotoSolid from "~icons/heroicons/photo-solid";
  import HeroiconsMagnifyingGlassSolid from "~icons/heroicons/magnifying-glass-solid";
  import HeroiconsArchiveBoxSolid from "~icons/heroicons/archive-box-solid";
  import HeroiconsGlobeAltSolid from "~icons/heroicons/globe-alt-solid";
  import HeroiconsExclamationCircleSolid from "~icons/heroicons/exclamation-circle-solid";

  export let type: string;

  const icons = {
    "0": HeroiconsDocumentTextSolid,
    "1": HeroiconsListBulletSolid,
    "2": HeroiconsArchiveBoxSolid,
    "3": HeroiconsExclamationCircleSolid,
    "7": HeroiconsMagnifyingGlassSolid,
    I: HeroiconsPhotoSolid,
    h: HeroiconsGlobeAltSolid,
  };

  const iconComponent = icons[type];
</script>

<div class="mr-1 h-6 w-6 p-0.5">
  {#if iconComponent}
    <svelte:component this={iconComponent} class="h-full w-full" />
  {/if}
</div>
