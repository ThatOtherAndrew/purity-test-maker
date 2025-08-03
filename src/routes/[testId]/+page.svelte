<script lang="ts">
    import PurityTest from '$lib/components/PurityTest.svelte';
    import PurityTestForm from '$lib/components/PurityTestForm.svelte';

    let { data } = $props();
    const { name, description, completionConsequence, questions } = data.testData;
</script>

<svelte:head>
    <title>The {name} Purity Test</title>
</svelte:head>

<PurityTest {name} {description} {completionConsequence}>
    <PurityTestForm {questions} />
</PurityTest>
