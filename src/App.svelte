<!-- App.svelte -->
<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./routes/Home.svelte";
  import Details from "./routes/Details.svelte";
</script>

<Router>
		<Route path="/">
			<Home />
		</Route>
		<Route path="details/:name" let:params>
			<Details codename={params.name} />
		</Route>
    <Route path="*">
			404
		</Route>
</Router>