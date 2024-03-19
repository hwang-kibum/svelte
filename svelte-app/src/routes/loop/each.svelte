<script>
    const arrayLike = {
        0:'H',
        1:'e',
        2:'l',
        3:'l',
        4:'o',
        length: 5,
    };
</script>
<ul>
    {#each arrayLike as item}
        <li>{item}</li>
    {/each}
</ul>