<script>
    import PurityTest from '$lib/components/PurityTest.svelte';
    import PurityTestBuilder from '$lib/components/PurityTestBuilder.svelte';
    import PurityTestHeader from '$lib/components/PurityTestHeader.svelte';
    import purityTests from '$lib/purity-tests';

    // prettier-ignore
    const description = 'Make your own Purity Test quiz, and get a link to share with your friends and compare scores!';
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
    <PurityTestBuilder />
</PurityTest>
