<script lang="ts">
    let { questions } = $props();
</script>

<section>
    <p>Click on every item you have done.</p>

    <div id="list">
        <ol>
            {#each questions as question, index (index)}
                <li>
                    <input type="checkbox" id={index.toString()} />
                    <label for={index.toString()}>{question}</label>
                </li>
            {/each}
        </ol>

        <input class="button" id="submit" type="submit" value="Calculate My Score!" />
        <input class="button" id="reset" type="submit" value="Clear checkboxes" />
    </div>
</section>

<style>
    p {
        margin-top: 0;
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
