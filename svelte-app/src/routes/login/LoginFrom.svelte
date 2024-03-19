<script type="module">
    let id='';
    let password='';

    const submitFrom=()=>{
        console.log({id, password});
    };
    let count = 0;
    setInterval(()=>count +=1, 1000);
</script>
<form on:submit|preventDefault={submitFrom}>
    <div>
        <label for="id">id</label>
        <input id="id" type="id" bind:value={id}>
    </div>
    <div>
        <label for="password">Password</label>
        <input id="password" type="password" bind:value={password}>
    </div>
    <button type="submit">Login</button>
    <p>cout: {count} </p>
</form>

<style>
    form{
        display: flex; /* 폼 요소를 세로로 배치*/
        flex-direction: column;
        gap: 12px;
        width: 100;
        max-width: 300px;
        margin: 20px auto;
    }
    input, button {
        padding: 8px;
    }
    button {
        cursor: pointer; /* 버튼 위에 마우스를 올렸을 떄 커서 변경 */
    }
</style>