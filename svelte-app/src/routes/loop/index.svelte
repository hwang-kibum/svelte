<script>
    const array = ['H', 'e', 'l', 'l', 'o'];
</script>

<ul>
    {#each array as item, i}
        <li>{i+1}: {item}</li>
    {/each}
</ul>