<script>
	import Nav from '../components/Nav.svelte';
	import Background from '../components/Background.svelte';
	import GoogleAnalytics from 'sapper-google-analytics/GoogleAnalytics.svelte';
	import { stores } from '@sapper/app';

	export let segment;
	let ga_measurment_id = 'UA-7281616-1';
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		z-index: 3;

		@apply text-white;
		font-family: 'Hind Madurai', sans-serif;
	}
</style>

<link
	href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;600&display=swap"
	rel="stylesheet" />

<GoogleAnalytics {stores} id={ga_measurment_id} />

<Background />

<Nav {segment} />

<main>
	<slot />
</main>
