<script lang="ts">
    import '../app.css';
    import favicon from '$lib/assets/favicon.svg';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
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
