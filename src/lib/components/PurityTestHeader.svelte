<script lang="ts">
    let { name } = $props();
</script>

<header>
    <h3>The Unofficial</h3>
    <div class="title">
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <h2>{name} Purity Test</h2>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
</header>

<style>
    @font-face {
        font-family: Typewriter;
        src: url(/fonts/typewriter-serial-bold-subset.woff2);
    }

    header {
        position: relative;
        width: fit-content;
        font-size: 3vw;
        margin: 0 auto;
    }

    .title {
        padding-top: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25em;
    }

    .lines {
        display: flex;
        flex-direction: column;
        gap: 0.25em;
        margin-top: 0.2em;
    }

    h3 {
        content: 'The Unofficial';
        position: absolute;
        bottom: -0.2em;
        left: 0.4em;
        transform: rotate(-10deg);

        font-family: Typewriter;
        font-size: 105%;
        font-stretch: condensed;
        font-weight: 900;
        color: #831003;
    }

    .line {
        width: 6em;
        height: 0.08em;
        background-color: currentColor;
    }

    h2 {
        margin: 0;
        text-align: center;
    }
</style>
