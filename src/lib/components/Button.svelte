<script lang="ts">
    let allProps = $props();
</script>

<input type="button" class="button" {...allProps} />

<style>
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
