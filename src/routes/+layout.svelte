<script lang="ts">
    import '../app.css';
    import { page } from '$app/state';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />

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
