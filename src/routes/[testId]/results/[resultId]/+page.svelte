<script lang="ts">
    import { page } from '$app/state';
    import PurityTest from '$lib/components/PurityTest.svelte';
    import PurityTestScore from '$lib/components/PurityTestScore.svelte';

    const testId = page.params.testId!;
</script>

<svelte:head>
    <title>Your {testId} Purity Score</title>
</svelte:head>

<PurityTest name={testId}>
    <PurityTestScore {testId} score="100" />
</PurityTest>
