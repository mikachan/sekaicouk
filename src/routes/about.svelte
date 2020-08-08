<script>
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import {
		linkedin,
		twitter,
		lastfm,
		facebook,
		instagram,
		github,
		heart,
	} from 'svelte-awesome/icons';
</script>

<style>
	h1 {
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 0.8rem;
		margin: 0 0 0.5em 0;
	}

	p {
		@apply mb-4;
	}

	ul {
		margin: 0;
		padding: 0;
		text-align: center;
		@apply mt-16;
	}

	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: inline-block;
		@apply text-gray-400 px-2 pb-4;
	}

	li a {
		@apply border rounded-full h-16 w-16 flex items-center justify-center;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About</h1>

<p>
	Front end web developer based in Lancashire, with experience working in both
	agency and in-house environments since 2008. Loves
	<Icon data={heart} />
	music, peanut butter, photography, traveling, video games, dragons and dogs.
</p>

<ul>
	<li>
		<a
			href="https://www.linkedin.com/in/sarahnorris88"
			target="_blank"
			class="hover:text-blue-500">
			<Icon
				data={linkedin}
				class="fill-current"
				label="LinkedIn"
				scale="2" />
		</a>
	</li>
	<li>
		<a
			href="https://www.twitter.com/mikachan_"
			target="_blank"
			class="hover:text-orange-600">
			<Icon
				data={twitter}
				class="fill-current"
				label="Twitter"
				scale="2" />
		</a>
	</li>
	<li>
		<a
			href="http://last.fm/user/mikachan_"
			target="_blank"
			class="hover:text-green-600">
			<Icon data={lastfm} class="fill-current" label="Lastfm" scale="2" />
		</a>
	</li>
	<li>
		<a
			href="https://www.facebook.com/sarah.norris88"
			target="_blank"
			class="hover:text-purple-400">
			<Icon
				data={facebook}
				class="fill-current"
				label="Facebook"
				scale="2" />
		</a>
	</li>
	<li>
		<a
			href="https://www.instagram.com/mikachan_/"
			target="_blank"
			class="hover:text-yellow-600">
			<Icon
				data={instagram}
				class="fill-current"
				label="Instagram"
				scale="2" />
		</a>
	</li>
	<li>
		<a
			href="https://github.com/mikachan"
			target="_blank"
			class="hover:text-red-500">
			<Icon data={github} class="fill-current" label="Github" scale="2" />
		</a>
	</li>
</ul>
