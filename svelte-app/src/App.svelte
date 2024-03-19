<script>
	import {Route, Link, Router} from 'svelte-routing';
	import login from './routes/login/login.svelte'
	import common from './routes/common/common.svelte'
	import else1 from './routes/loop/else.svelte'
	import each from './routes/loop/each.svelte'
	import index from './routes/loop/index.svelte'
	import deconstructing from './routes/loop/deconstructing.svelte'
	import key1 from './routes/loop/key1.svelte'
	import key2 from './routes/loop/key2.svelte'
</script>
<Router>
	<div class="contaner">
		<div class="item">
			<nav class="item" style="margin: 2px; backgroud-color: brack;"><Link to="/login">HOME</Link></nav>
			<nav class="item" style="border: solid 4px; backgroud-color: yellow;"><Link to="/login">LOGIN</Link></nav>
			<nav class="item" style="padding: 10px; backgroud-color: green;"><Link to="/each">each</Link></nav>
			<nav class="item" style="background-color:blueviolet;"><Link to="/else1">else</Link></nav>
			<nav><Link to="/index">index</Link></nav>
			<nav><Link to="/deconstructing">deconstructing</Link></nav>
			<nav><Link to="/key1">key1</Link></nav>
			<nav><Link to="/key2">key2</Link></nav>
			<nav><Link to="/common">common</Link></nav>
		</div>
		<div class="item">
			<Route path="/each" component={each}/>
			<Route path="/else1" component={else1}/>
			<Route path="/index" component={index} />
			<Route path="/deconstructing" component={deconstructing} />
			<Route path="/key1" component={key1} />
			<Route path="/key2" component={key2} />
			<Route path="/login" component={login} />
			<Route path="/common" component={common} />
		</div>
	</div>
</Router>

<style>
	/*
	.container {
		position:static;
		margin: 2px;
		border: 10px solid black;
		padding: 3px;
		font-size: 30px;
		background-color:yellow;
	}
	*/
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* grid-template-columns: 200px 200px 200px; */
		/* grid-template-columns: repeat(3, 1fr) */
		/* grid-template-columns: 200px 1fr */
		/* grid-template-columns: 100px 200px auto */
		grid-template-rows: 1fr 1fr;
	}

</style>