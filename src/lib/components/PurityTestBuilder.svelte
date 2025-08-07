<script lang="ts">
    import Button from './Button.svelte';

    let description = $state('');
    let completionConsequence = $state('death');
    let questions = $state(['foo', 'bar', 'baz']);

    function handleSubmit() {
        // TODO
    }
</script>

<section>
    <h2>Create your own Purity Test!</h2>

    <p>
        <i
            class="editable"
            contenteditable="plaintext-only"
            role="textbox"
            tabindex="0"
            data-placeholder="Enter your test description..."
            bind:innerText={description}
            onkeydown={e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    (e.target as HTMLElement)?.blur();
                }
            }}
        ></i>
    </p>

    <p>
        <b>
            Caution: This is not a bucket list. Completion of all items on this test will likely
            result in <span
                class="editable"
                contenteditable="plaintext-only"
                role="textbox"
                tabindex="0"
                data-placeholder="death"
                bind:innerText={completionConsequence}
                onkeydown={e => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        (e.target as HTMLElement)?.blur();
                    }
                }}
            ></span>.
        </b>
    </p>

    <div class="form">
        <ol>
            {#each questions, index}
                <li>
                    <input type="checkbox" class="checkbox" disabled />
                    <span
                        id={index.toString()}
                        class="editable"
                        contenteditable="plaintext-only"
                        role="textbox"
                        tabindex="0"
                        data-placeholder="Did a thing?"
                        bind:innerText={questions[index]}
                        onkeydown={e => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                document.getElementById((index + 1).toString())?.focus();
                            }
                        }}
                    ></span>
                </li>
            {/each}
        </ol>

        <Button id="submit" value="Submit Purity Test!" onclick={handleSubmit} />
    </div>
</section>

<style>
    p {
        margin-top: 0;
    }

    .editable {
        display: inline-block;
        padding: 2px 4px;
        background-color: rgba(102, 255, 220, 0.3);
        border: 2px solid transparent;
        border-radius: 8px;
    }

    .editable:focus {
        outline: 4px solid #9fddf9;
    }

    .editable:empty::before {
        content: attr(data-placeholder);
        color: #777;
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
    }
</style>
