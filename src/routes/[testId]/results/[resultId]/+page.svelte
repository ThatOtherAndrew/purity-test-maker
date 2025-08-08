<script lang="ts">
    import Page from '$lib/components/Page.svelte';
    import PurityTestForm from '$lib/components/PurityTestForm.svelte';
    import PurityTestScore from '$lib/components/PurityTestScore.svelte';

    let { data } = $props();
    const { name, description, completionConsequence } = data.testData;
    const score = data.answers.length - data.answers.filter(Boolean).length;
</script>

<svelte:head>
    <title>Your {name} Purity Score</title>
    <meta name="description" content={description} />

    <meta property="og:title" content="Your {name} Purity Score" />
    <meta property="og:description" content={description} />
</svelte:head>

<Page {name} {description} {completionConsequence}>
    <PurityTestScore testId={data.testId} {score} />
    <h2>Your answers:</h2>
    <PurityTestForm questions={data.testData.questions} answers={data.answers} />
</Page>

<style>
    h2 {
        margin-top: 5rem;
    }
</style>
