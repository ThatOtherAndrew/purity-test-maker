<script lang="ts">
    import Button from './Button.svelte';
    import { page } from '$app/state';
    import type { PurityTestData } from '$lib/types';

    let name = $state('');
    let description = $state('');
    let completionConsequence = $state('death');
    let questions = $state(['']);

    export function cleanPaste(e: ClipboardEvent) {
        e.preventDefault();
        const text = e.clipboardData ? e.clipboardData.getData('text') : '';
        const clean = text.replace(/\r?\n|\r/g, ' ');
        const selection = window.getSelection();
        if (!selection?.rangeCount) return;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(clean));
        selection.collapseToEnd();
    }

    function handleSubmit() {
        const data: PurityTestData = {
            name: name === '' ? 'Rice' : name,
            description,
            completionConsequence,
            questions: questions.filter(q => q.trim() !== ''),
        };

        console.log(data);

        fetch(`${page.url.pathname}/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
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
            onpaste={cleanPaste}
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
            onpaste={cleanPaste}
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
                onpaste={cleanPaste}
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
    </div>
    <hr />

    <Button id="submit" value="Submit Purity Test!" onclick={handleSubmit} />
</section>

<style>
    hr {
        border: 1px solid;
        margin: 2rem 0;
    }

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
