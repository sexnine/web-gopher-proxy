<script lang="ts">
  import { page } from "$app/stores";

  const route = $page.data.route;
</script>

<div class="relative flex min-h-screen w-fit min-w-full flex-col text-gray-200">
  <slot />
  <!--  <div class="sticky bottom-0 bg-gray-950 px-2 py-2 text-white">-->
  <!--    <input-->
  <!--      class="w-full rounded bg-gray-950 px-2 text-gray-300 outline-0 transition hover:bg-gray-800 focus:bg-gray-800"-->
  <!--      value="{route.host}:{route.port}/{route.type}/{route.path}"-->
  <!--    />-->
  <!--  </div>-->
</div>
