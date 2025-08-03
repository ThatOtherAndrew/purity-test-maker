<script lang="ts">
    import '../app.css';
    import favicon from '$lib/assets/favicon.svg';
    import { page } from '$app/state';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />

    <meta property="og:site_name" content="The Official Purity Test Maker" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://{page.url.hostname}{page.url.pathname}" />
</svelte:head>

{@render children?.()}

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 20px;
        background-color: #fbeec8;
    }
</style>
