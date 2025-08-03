<script lang="ts">
	import PurityTest from '$lib/components/PurityTest.svelte';
	import { page } from '$app/state';
</script>

<PurityTest name={page?.params?.slug} />
