<script>
    let array = [
        {id:1, value: 'H'}, 
        {id:2, value: 'e'}, 
        {id:3, value: 'l'}, 
        {id:4, value: 'l'}, 
        {id:5, value: 'o'}, 
    ];
</script>
<ul>
    {#each array as item}
        <li>{item.id}:{item.value}</li>
    {/each}
</ul>

<button on:click="{()=>array=array.slice(1)}">첫번째 아이템 제거</button>