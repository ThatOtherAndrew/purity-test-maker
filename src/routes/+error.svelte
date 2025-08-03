<script>
    import PurityTestHeader from '$lib/components/PurityTestHeader.svelte';
    import { page } from '$app/state';
</script>

<PurityTestHeader name="{page.status} {page.error?.message}" isFullTitle stamp="The Error" />
<p>
    <b>
        Caution: This is not a Purity Test. Completion of all (non-existent) items on this page will
        likely result in feeling stupid.
    </b>
</p>
