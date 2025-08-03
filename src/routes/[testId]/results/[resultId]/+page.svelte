<script lang="ts">
    import PurityTest from '$lib/components/PurityTest.svelte';
    import PurityTestForm from '$lib/components/PurityTestForm.svelte';
    import PurityTestScore from '$lib/components/PurityTestScore.svelte';

    let { data } = $props();
    const name = data.testData.name;
    const score = data.answers.length - data.answers.filter(Boolean).length;
</script>

<svelte:head>
    <title>Your {name} Purity Score</title>
</svelte:head>

<PurityTest {name}>
    <PurityTestScore testId={data.testId} {score} />
    <h2>Your answers:</h2>
    <PurityTestForm questions={data.testData.questions} answers={data.answers} />
</PurityTest>

<style>
    h2 {
        margin-top: 10rem;
    }
</style>
