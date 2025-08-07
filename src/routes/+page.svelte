<script>
    import Button from '$lib/components/Button.svelte';
    import PurityTest from '$lib/components/PurityTest.svelte';
    import PurityTestHeader from '$lib/components/PurityTestHeader.svelte';
    import purityTests from '$lib/purity-tests';

    // prettier-ignore
    const description = 'Answer various Rice Purity Test style quizzes, or make your own to share with your friends!';
</script>

<svelte:head>
    <title>The Official Purity Test Maker</title>
    <meta name="description" content={description} />
</svelte:head>

<PurityTest noHeader>
    <PurityTestHeader
        name="Purity Test Maker"
        isFullTitle
        stamp="The Official"
        comment="{Object.keys(purityTests).length} Purity Tests and counting..."
    />
    <a href="/new">
        <Button value="Make your own test!" />
    </a>

    <h2>Choose a test:</h2>
    {#each Object.entries(purityTests) as [testId, test] (testId)}
        <a href={testId}>
            <div>
                <h3>{test.name} Purity Test</h3>
                <i>{test.description}</i>
            </div>
        </a>
    {/each}
</PurityTest>

<style>
    a {
        text-decoration: none;
    }

    div {
        justify-content: center;
        padding: 1em;
        margin: 10px;
        font-size: 1em;
        text-align: center;
        border: solid;
        border-radius: 20px;
        background-color: rgba(102, 255, 220, 0.3);
        color: rgb(0, 0, 5);
    }

    h3 {
        margin-top: 0;
    }
</style>
