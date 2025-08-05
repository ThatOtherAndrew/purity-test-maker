<script lang="ts">
    let {
        name,
        isFullTitle = false,
        stamp = 'The Unofficial',
        comment = 'Have you ever...',
    } = $props();

    const title = isFullTitle ? name : `${name} Purity Test`;
</script>

<a href="/">
    <header>
        <h3>{stamp}</h3>
        <div class="title">
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <h2>{title}</h2>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
        <i>{comment}</i>
    </header>
</a>

<style>
    @font-face {
        font-family: typewriter-serial-bold;
        src: url(/fonts/typewriter-serial-bold-subset.woff2);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    header {
        position: relative;
        width: fit-content;
        font-size: 3vw;
        margin: 0 auto;
    }

    .title {
        margin: 2em 0;
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

        font-family: typewriter-serial-bold;
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

    i {
        position: absolute;
        left: 1em;
        bottom: -1.25em;

        font-family: Arial, sans-serif;
        font-size: 0.45em;
        font-weight: 600;
    }
</style>
