<script>
    const array = [
        {id: 1, value: 'H'},
        {id: 2, value: 'e'},
        {id: 3, value: 'l'},
        {id: 4, value: 'l'},
        {id: 5, value: 'o'},
    ];
</script>

<ul>
    {#each array as {id, value}}
        <li>{id}:{value}</li>
    {/each}
</ul>