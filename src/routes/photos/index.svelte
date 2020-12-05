<script context="module">
	export function preload({ params, query }) {
		return this.fetch('https://www.instagram.com/mikachan_/?__a=1')
			.then(r => r.json())
			.then(photos => {
				return { photos };
			});
	}
</script>

<script>
	export let photos;
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
	<title>Photos</title>
</svelte:head>

<h1>Photos</h1>

<div class="flex flex-wrap justify-between">
	{#each photos.graphql.user.edge_owner_to_timeline_media.edges as photo}
		<div class="w-full sm:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
			<div
				class="flex-1 rounded overflow-hidden shadow-lg">
				<a href={`http://www.instagram.com/p/${photo.node.shortcode}`} target="_blank">
					<img src={photo.node.thumbnail_src} alt={photo.node.accessibility_caption} />
				</a>
			</div>
		</div>
	{/each}
</div>