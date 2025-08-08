<script lang="ts">
    import type { Snippet } from 'svelte';
    import PurityTestHeader from './PurityTestHeader.svelte';
    import PurityTestText from './PurityTestText.svelte';

    // prettier-ignore
    type Props = {
        children?: Snippet;
        pageTitle: string;
        pageDescription: string;
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
        pageTitle,
        pageDescription,
        noHeader = false,
        name,
        description,
        completionConsequence = 'death',
        backgroundImage = '/background.png',
    }: Props = $props();
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta property="og:title" content={pageTitle} />
    <meta name="description" content={pageDescription} />
    <meta name="og:description" content={pageDescription} />
</svelte:head>

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
        background-size: 120px;
    }
</style>
