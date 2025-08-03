<script lang="ts">
    let { introParagraph = null, completionConsequence = 'death' } = $props();
</script>

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

<style>
    .pre-wrap {
        white-space: pre-line;
    }
</style>
