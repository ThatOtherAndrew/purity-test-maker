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
            introParagraph?: never;
            completionConsequence?: never;
          }
        | {
            noHeader?: false;
            name: string;
            introParagraph?: string | null;
            completionConsequence?: string;
          }
    );

    let {
        children,
        noHeader = false,
        name,
        introParagraph = null,
        completionConsequence = 'death',
        backgroundImage = 'https://ricepuritytest.com/owl.png',
    }: Props = $props();
</script>

<div class="main" style="background-image: url({backgroundImage});">
    {#if !noHeader}
        <PurityTestHeader {name} />
        <PurityTestText {introParagraph} {completionConsequence} />
    {/if}
    {@render children?.()}
</div>

<style>
    .main {
        padding: 1rem;
        min-height: calc(100vh - 2rem);
    }
</style>
