<script>
    import Button from 'sveltestrap/src/Button.svelte';
    const handleClick = () => alert('I warned you!');
</script>

<Button color="danger" on:click={handleClick}>
    <slot></slot>
</Button>
