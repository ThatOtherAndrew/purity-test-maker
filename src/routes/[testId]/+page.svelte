<script lang="ts">
    import PurityTest from '$lib/components/PurityTest.svelte';
    import PurityTestForm from '$lib/components/PurityTestForm.svelte';
    import { page } from '$app/state';

    let { data } = $props();
    const { name, description, completionConsequence, questions } = data.testData;

    if ('created' in page.state) {
        setTimeout(() => {
            alert('Purity test successfully created!');
        });
    }
</script>

<svelte:head>
    <title>The {name} Purity Test</title>
    <meta name="description" content={description} />

    <meta property="og:title" content="The {name} Purity Test" />
    <meta property="og:description" content={description} />
</svelte:head>

<PurityTest {name} {description} {completionConsequence}>
    <PurityTestForm {questions} />
</PurityTest>
