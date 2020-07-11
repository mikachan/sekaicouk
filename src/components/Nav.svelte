<script>
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { heart } from 'svelte-awesome/icons';

	export let segment;
</script>

<style>
	nav {
		position: relative;
		z-index: 3;
		padding: 0 1em;
		font-weight: 300;
		text-align: right;
		font-family: 'Hind Madurai', sans-serif;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: inline-block;
		@apply text-gray-400;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255, 62, 0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		@apply text-white;
	}

	.heart {
		@apply px-2;
	}
</style>

<nav>
	<ul>
		<li>
			<a
				aria-current={segment === undefined ? 'page' : undefined}
				href=".">
				home
			</a>
		</li>
		<li>
			<a
				aria-current={segment === 'about' ? 'page' : undefined}
				href="about">
				about
			</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'blog' ? 'page' : undefined}
				href="blog">
				blog
			</a>
		</li>

		<li class="heart">
			<Icon data={heart} class="fill-current" style="fill: white;" />
		</li>
	</ul>
</nav>
