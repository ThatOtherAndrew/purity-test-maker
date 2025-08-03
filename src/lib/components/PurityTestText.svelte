<script lang="ts">
    let { description = null, completionConsequence = 'death' } = $props();
</script>

{#if description !== null}
    <p class="pre-wrap">
        <i>{description}</i>
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
