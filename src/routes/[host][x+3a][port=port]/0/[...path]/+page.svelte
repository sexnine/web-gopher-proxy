<script lang="ts">
  import { page } from "$app/stores";
</script>

<pre class="w-full flex-grow whitespace-pre bg-gray-900 px-5 py-5 font-mono">
  {$page.data.content}
</pre>
