import React from 'react';
import pic01 from '../images/pic01.jpg';

const Intro = () => (
	<div>
		<h2 className="major">Intro</h2>
		<span className="image main">
			<img src={pic01} alt="" />
		</span>
		<p>
			Web developer based in Lancashire, with 12 years commercial
			experience in both agency and in-house environments. Currently
			enjoying React, Svelte and attempting to keep up with CSS.
		</p>
		<p>
			<span role="img" aria-label="heart">
				💜
			</span>{' '}
			Loves peanut butter, photography, traveling, video games, music,
			Japan, dragons and dogs.
		</p>
	</div>
);

export default Intro;
