<script>
    import PurityTestHeader from '$lib/components/PurityTestHeader.svelte';
    import Page from '$lib/components/Page.svelte';
    import { page } from '$app/state';

    const description =
        'Caution: This is not a Purity Test. Completion of all (non-existent) items on this page will likely result in feeling stupid.';
</script>

<svelte:head>
    <title>You broke the website...</title>
</svelte:head>

<Page noHeader pageTitle="You broke the website..." pageDescription={description}>
    <PurityTestHeader
        name="{page.status} {page.error?.message}"
        isFullTitle
        stamp="The Error"
        comment="You broke the website..."
    />
    <p><b>{description}</b></p>
</Page>
