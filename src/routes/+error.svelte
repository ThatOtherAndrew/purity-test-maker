<script>
    import PurityTestHeader from '$lib/components/PurityTestHeader.svelte';
    import PurityTest from '$lib/components/PurityTest.svelte';
    import { page } from '$app/state';
</script>

<PurityTest noHeader>
    <PurityTestHeader
        name="{page.status} {page.error?.message}"
        isFullTitle
        stamp="The Error"
        comment="You broke the website..."
    />
    <p>
        <b>
            Caution: This is not a Purity Test. Completion of all (non-existent) items on this page
            will likely result in feeling stupid.
        </b>
    </p>
</PurityTest>
