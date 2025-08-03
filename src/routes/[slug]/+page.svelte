<script lang="ts">
    import PurityTest from '$lib/components/PurityTest.svelte';
    import { page } from '$app/state';

    const slug = page?.params?.slug;
    const introParagraph = `
        The Purity Test has historically served as a segue from O-week to true college life at ${slug}.
        It's a voluntary opportunity for O-week groups to bond, and for students to track the maturation of their experiences throughout college.
    `.trim();
</script>

<PurityTest name={slug} {introParagraph} />
