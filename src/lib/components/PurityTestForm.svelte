<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import Button from './Button.svelte';

    let { questions, answers = null } = $props();

    const initialState = answers ?? new Array(questions.length).fill(false);
    let formState: boolean[] = $state(initialState);

    function getResultId(): string {
        const binaryString = formState.map(checked => (checked ? '1' : '0')).join('');
        const paddedBinary = binaryString.padEnd(Math.ceil(binaryString.length / 8) * 8, '0');
        const bytes: number[] = [];
        for (let i = 0; i < paddedBinary.length; i += 8) {
            const byte = paddedBinary.slice(i, i + 8);
            bytes.push(parseInt(byte, 2));
        }
        const uint8Array = new Uint8Array(bytes);
        const base64 = btoa(String.fromCharCode.apply(null, Array.from(uint8Array)));
        return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }

    function handleSubmit() {
        const resultId = getResultId();
        goto(`${page.url.pathname}/results/${resultId}`);
    }

    function handleReset() {
        formState = new Array(questions.length).fill(false);
    }

    function copyLink() {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
</script>

<section>
    {#if answers === null}
        <p>Click on every item you have done.</p>
    {/if}

    <div class="form">
        <ol>
            {#each questions as question, index (index)}
                <li class:disabled={answers}>
                    <input
                        type="checkbox"
                        class:disabled={answers}
                        id={index.toString()}
                        class="checkbox"
                        bind:checked={formState[index]}
                    />
                    <label for={index.toString()} class:clickable={!answers}>{question}</label>
                </li>
            {/each}
        </ol>

        {#if answers === null}
            <Button value="Calculate My Score!" onclick={handleSubmit} />
            <Button value="Clear Checkboxes" onclick={handleReset} />
            <Button value="Copy Test Link" onclick={copyLink} />
        {/if}
    </div>
</section>

<style>
    p {
        margin-top: 0;
    }

    .form {
        text-align: left;
        margin-left: 10px;
        margin-right: 20px;
    }

    ol {
        margin-top: 0;
        padding-top: 0;
    }

    .checkbox {
        width: 20px;
        height: 20px;
        accent-color: #9fddf9;
        cursor: pointer;
    }

    .disabled,
    .checkbox.disabled {
        accent-color: grey;
        pointer-events: none;
    }
</style>
