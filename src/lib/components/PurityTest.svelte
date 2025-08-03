<script lang="ts">
    import PurityTestHeader from './PurityTestHeader.svelte';

    let {
        name,
        introParagraph = null,
        completionConsequence = 'death',
        backgroundImage = 'https://ricepuritytest.com/owl.png'
    } = $props();
</script>

<div class="main" style="background-image: url({backgroundImage});">
    <PurityTestHeader {name} />

    {#if introParagraph !== null}
        <p class="pre-wrap">
            <i>{introParagraph}</i>
        </p>
    {/if}

    <p>
        <b>
            Caution: This is not a bucket list. Completion of all items on this test will likely
            result in {completionConsequence}.
        </b>
    </p>

    <br />
    <p>Click on every item you have done.</p>
</div>

<style>
    .main {
        padding: 1rem;
        min-height: calc(100vh - 2rem);
    }

    .pre-wrap {
        white-space: pre-line;
    }

    #list {
        text-align: left;
        margin-left: 10px;
        margin-right: 20px;
    }

    ol {
        margin-top: 0;
        padding-top: 0;
    }

    input[type='checkbox'] {
        width: 20px;
        height: 20px;
        accent-color: #9fddf9;
        cursor: pointer;
    }

    label {
        cursor: pointer;
    }

    .button {
        justify-content: center;
        padding: 10px 20px;
        margin: 10px;
        font-size: 1em;
        text-align: center;
        border-radius: 20px;
        background-color: rgba(102, 255, 220, 0.3);
        color: rgb(0, 0, 5);
    }

    @media (max-width: 768px) {
        .button {
            font-size: 0.9em;
            padding: 16px 16px;
        }
    }
</style>
