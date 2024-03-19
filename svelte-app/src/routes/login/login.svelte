<script>
    import Header from '../Header.svelte';
    import LoginFrom from './LoginFrom.svelte';
    import Footer from '../Footer.svelte';
</script>

<Header/>
<main>
    <LoginFrom/>
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