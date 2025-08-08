<script>
    import Page from '$lib/components/Page.svelte';
    import PurityTestBuilder from '$lib/components/PurityTestBuilder.svelte';
    import PurityTestHeader from '$lib/components/PurityTestHeader.svelte';

    let { data } = $props();
</script>

<Page
    noHeader
    pageTitle="The Official Purity Test Maker"
    pageDescription="Make your own Purity Test quiz, and get a link to share with your friends and compare scores!"
>
    <PurityTestHeader
        name="Purity Test Maker"
        isFullTitle
        stamp="The Official"
        comment="{data.testCount} Purity Tests and counting..."
    />
    <PurityTestBuilder />
</Page>
