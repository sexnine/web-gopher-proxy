<script lang="ts">
  import { page } from "$app/stores";
  import GopherMenuIcon from "$lib/components/GopherMenuIcon.svelte";

  const route = $page.data.route;
</script>

<div class="flex-grow bg-gray-900 px-2 py-5 font-mono">
  <!--    <p class="whitespace-pre-line">-->
  <!--      {JSON.stringify($page.data.content, null, 2)}-->
  <!--    </p>-->
  {#each $page.data.content as line}
    <div class="flex whitespace-pre">
      <GopherMenuIcon type={line.type} />
      {#if line.displayAs === "text"}
        <p>
          {line.text}
        </p>
      {:else}
        <a class="text-green-400" href="/{line.host}:{line.port}/{line.type}/{line.path}"
          >{line.label}</a
        >
      {/if}
    </div>
  {/each}
</div>
