<script lang="ts">
  import { page } from "$app/stores";

  const route = $page.data.route;
</script>

<div class="flex flex-grow items-center justify-center bg-gray-900 px-5 py-5 font-mono">
  <div>
    <img src="/{route.host}:{route.port}/api/image/{route.path}" />
  </div>
</div>
