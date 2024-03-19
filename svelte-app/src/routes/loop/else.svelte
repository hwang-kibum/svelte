<script>
    let array=[];
    setTimeout(()=> {
        array=['H', 'e', 'l', 'l', 'o'];
    }, 1000);    
</script>
<ul>
    {#each array as item}
        <li>{item}</li>
    {:else}
        <li>빈 배열입니다.</li>
    {/each}
</ul>
