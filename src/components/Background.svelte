<style>
	#bg {
		transform: scale(1);
		-webkit-backface-visibility: hidden;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 1;
	}

	#bg:before,
	#bg:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	#bg:before {
		transition: background-color 2.5s ease-in-out;
		transition-delay: 0.75s;
		background-image: linear-gradient(
				0deg,
				rgba(19, 21, 25, 0.5),
				rgba(19, 21, 25, 0.5)
			),
			url(overlay.png);
		background-size: auto, 256px 256px;
		background-position: 50%, 50%;
		background-repeat: no-repeat, repeat;
		z-index: 2;
	}

	#bg:after {
		transform: scale(1.125);
		transition: transform 0.325s ease-in-out,
			-webkit-filter 0.325s ease-in-out;
		transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out;
		transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,
			-webkit-filter 0.325s ease-in-out;
		background-image: url(bg02.jpg);
		background-position: 50%;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 1;
	}
</style>

<div id="bg" />
