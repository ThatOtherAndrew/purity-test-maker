<script lang="ts">
    import PurityTestHeader from './PurityTestHeader.svelte';

    let { name, introParagraph = null, completionConsequence = 'death' } = $props();
</script>

<PurityTestHeader {name} />

{#if introParagraph !== null}
    <p class="pre-wrap">
        <i>{introParagraph}</i>
    </p>
{/if}

<p>
    <b>
        Caution: This is not a bucket list. Completion of all items on this test will likely result
        in {completionConsequence}.
    </b>
</p>

<br />
<p>Click on every item you have done.</p>

<style>
    .pre-wrap {
        white-space: pre-line;
    }
</style>
