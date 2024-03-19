<script>
    import Header from '../Header.svelte';
    import Footer from '../Footer.svelte';
</script>

<Header/>
<main>
    <h1>Hello, svelte</h1>
</main>
<Footer/>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
	}
</style>
