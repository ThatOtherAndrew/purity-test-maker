<script lang="ts">
    import Button from './Button.svelte';

    let name = $state('');
    let description = $state('');
    let completionConsequence = $state('death');
    let questions = $state(['']);

    function handleSubmit() {
        console.log($state.snapshot(questions));
    }
</script>

<section>
    <h2>Create your own Purity Test!</h2>

    <hr />

    <h3>
        <span
            id="name"
            class="editable"
            contenteditable="plaintext-only"
            role="textbox"
            tabindex="0"
            data-placeholder="Rice"
            bind:innerText={name}
            onkeydown={e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('description')?.focus();
                }
            }}
        ></span> Purity Test
    </h3>

    <p>
        <i
            id="description"
            class="editable"
            contenteditable="plaintext-only"
            role="textbox"
            tabindex="0"
            data-placeholder="Enter your test description..."
            bind:innerText={description}
            onkeydown={e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('completionConsequence')?.focus();
                }
            }}
        ></i>
    </p>

    <p>
        <b>
            Caution: This is not a bucket list. Completion of all items on this test will likely
            result in <span
                id="completionConsequence"
                class="editable"
                contenteditable="plaintext-only"
                role="textbox"
                tabindex="0"
                data-placeholder="death"
                bind:innerText={completionConsequence}
                onfocus={e => {
                    window.getSelection()?.selectAllChildren(e.target as HTMLElement);
                }}
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
                        data-placeholder={index === questions.length - 1
                            ? 'New question...'
                            : 'Did a thing?'}
                        bind:innerText={questions[index]}
                        oninput={e => {
                            const value = (e.target as HTMLElement).innerText;
                            questions[index] = value;
                            if (index === questions.length - 1 && value.trim() !== '') {
                                questions.push('');
                            }
                        }}
                        onblur={() => {
                            if (index < questions.length - 1 && questions[index].trim() === '') {
                                questions.splice(index, 1);
                            }
                        }}
                        onkeydown={e => {
                            if (e.key === 'Tab' && !e.shiftKey && questions[index].trim() === '') {
                                // If tabbing forward from an empty field that will be removed
                                if (index < questions.length - 1) {
                                    e.preventDefault();
                                    setTimeout(() => {
                                        document.getElementById(index.toString())?.focus();
                                    }, 0);
                                    (e.target as HTMLElement).blur();
                                }
                            } else if (e.key === 'Enter') {
                                e.preventDefault();
                                if (questions[index].trim() === '') return;
                                if (index < questions.length - 2) {
                                    questions.splice(index + 1, 0, '');
                                }
                                setTimeout(() => {
                                    document.getElementById((index + 1).toString())?.focus();
                                }, 0);
                            } else if (e.key === 'Backspace' && questions[index].trim() === '') {
                                e.preventDefault();
                                const previous = document.getElementById((index - 1).toString());
                                if (previous !== null) {
                                    window.getSelection()?.selectAllChildren(previous);
                                } else {
                                    (e.target as HTMLElement).blur();
                                }
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
