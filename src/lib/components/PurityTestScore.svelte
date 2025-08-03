<script lang="ts">
    let { testId, score } = $props();

    function copyLink() {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
</script>

<section>
    <h2>Your score:</h2>
    <h1>{score}</h1>

    <div class="buttons">
        <a id="restart" href="/{testId}">
            <button>Take again!</button>
        </a>
        <button onclick={copyLink}>Copy Link</button>
    </div>
</section>

<style>
    h1 {
        font-size: 300%;
        font-weight: bold;
        color: red;
        padding: 0px;
        margin: 0px;
    }

    .buttons {
        margin-top: 1em;
    }

    button {
        justify-content: center;
        padding: 10px 20px;
        margin: 10px;
        font-size: 1em;
        text-align: center;
        border-radius: 20px;
        background-color: rgba(255, 0, 0, 0.3);
        color: rgb(0, 0, 5);
    }
</style>
