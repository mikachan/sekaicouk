<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`love/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	h1 {
		padding: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.title} | sekai.co.uk</title>
</svelte:head>

<div class="container max-w-5xl mx-auto">
	<div class="mx-0 sm:mx-6">
		<div class="bg-white rounded w-full p-6 md:p-20 text-gray-800">
			<h1
				class="text-center font-bold break-normal text-gray-800 text-2xl
				md:text-3xl">
				{post.title}
			</h1>

			<div class="text-m md:text-l">
				{@html post.html}
			</div>

			<p class="text-right mt-4 text-xs">
				<em>Last modified: {post.date}</em>
			</p>
		</div>
	</div>
</div>
