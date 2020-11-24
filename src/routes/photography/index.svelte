<script context="module">
	export function preload({ params, query }) {
		return this.fetch('https://www.instagram.com/mikachan_/?__a=1')
			.then(r => r.json())
			.then(pics => {
				return { pics };
			});
	}
</script>

<script>
	export let pics;
</script>

<style>
	h1 {
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 0.8rem;
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>Photography</title>
</svelte:head>

<h1>Photography</h1>

<div class="flex flex-wrap justify-between">
	{#each pics.graphql.user.edge_owner_to_timeline_media.edges as pic}
		<div class="w-full md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
			<div
				class="flex-1 rounded overflow-hidden shadow-lg">
				<a href={`http://www.instagram.com/p/${pic.node.shortcode}`} target="_blank">
					<img src={pic.node.thumbnail_src} alt={pic.node.accessibility_caption} />
				</a>
			</div>
		</div>
	{/each}
</div>