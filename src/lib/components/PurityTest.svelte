<script lang="ts">
    import type { Snippet } from 'svelte';
    import PurityTestHeader from './PurityTestHeader.svelte';
    import PurityTestText from './PurityTestText.svelte';

    // prettier-ignore
    type Props = {
        children?: Snippet;
        backgroundImage?: string;
    } & (
        | {
            noHeader: true;
            name?: never;
            description?: never;
            completionConsequence?: never;
          }
        | {
            noHeader?: false;
            name: string;
            description: string;
            completionConsequence?: string;
          }
    );

    let {
        children,
        noHeader = false,
        name,
        description,
        completionConsequence = 'death',
        backgroundImage = 'https://ricepuritytest.com/owl.png',
    }: Props = $props();
</script>

<div class="main" style="background-image: url({backgroundImage});">
    {#if !noHeader}
        <PurityTestHeader {name} />
        <PurityTestText {description} {completionConsequence} />
    {/if}
    {@render children?.()}
</div>

<style>
    .main {
        padding: 1rem;
        min-height: calc(100vh - 2rem);
    }
</style>
