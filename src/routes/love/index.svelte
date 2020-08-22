<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`love.json`)
			.then(r => r.json())
			.then(posts => {
				return { posts };
			});
	}
</script>

<script>
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { heart } from 'svelte-awesome/icons';

	export let posts;
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
	<title>Love</title>
</svelte:head>

<h1>Love</h1>

<div class="flex flex-wrap justify-between -mx-6">
	{#each posts as post}
		<div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
			<div
				class="flex-1 pt-6 bg-white rounded-t rounded-b-none
				overflow-hidden shadow-lg">
				<a
					rel="prefetch"
					href="love/{post.slug}"
					class="flex flex-wrap no-underline hover:no-underline">
					<p class="w-full text-gray-600 text-xs md:text-sm px-6">
						{post.date}
					</p>
					<div class="w-full font-bold text-xl text-gray-900 px-6">
						{post.title}
					</div>
					<p class="text-gray-800 font-serif text-base px-6 mb-5">
						{post.intro}
					</p>
				</a>
			</div>
			<div
				class="flex-none mt-auto bg-white rounded-b rounded-t-none
				overflow-hidden shadow-lg p-6">
				<div class="flex items-center justify-between">
					<Icon
						data={heart}
						class="fill-current"
						style="fill: grey;" />
					<p class="text-gray-600 text-xs md:text-sm">
						{post.category}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>
