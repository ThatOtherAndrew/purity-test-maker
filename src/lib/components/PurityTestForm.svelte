<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';

    let { questions, answers = null } = $props();

    const initialState = answers ?? new Array(questions.length).fill(false);
    let formState: boolean[] = $state(initialState);

    function getResultId(): string {
        const binaryString = formState.map((checked) => (checked ? '1' : '0')).join('');
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
</script>

<section>
    {#if answers === null}
        <p>Click on every item you have done.</p>
    {/if}

    <div class="form">
        <ol>
            {#each questions as question, index (index)}
                <li>
                    <input
                        type="checkbox"
                        id={index.toString()}
                        bind:checked={formState[index]}
                        disabled={answers}
                    />
                    <label for={index.toString()}>{question}</label>
                </li>
            {/each}
        </ol>

        {#if answers === null}
            <input
                class="button"
                id="submit"
                type="button"
                value="Calculate My Score!"
                onclick={handleSubmit}
            />
            <input
                class="button"
                id="reset"
                type="button"
                value="Clear checkboxes"
                onclick={handleReset}
            />
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
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .button {
            font-size: 0.9em;
            padding: 16px 16px;
        }
    }
</style>
