<script lang="ts">
    import Page from '$lib/components/Page.svelte';
    import PurityTestForm from '$lib/components/PurityTestForm.svelte';
    import { page } from '$app/state';

    let { data } = $props();
    const { name, description, completionConsequence, questions } = data.testData;

    if ('created' in page.state) {
        setTimeout(() => {
            alert('Purity test successfully created!');
        });
    }
</script>

<Page
    pageTitle="The {name} Purity Test"
    pageDescription={description}
    {name}
    {description}
    {completionConsequence}
>
    <PurityTestForm {questions} />
</Page>
