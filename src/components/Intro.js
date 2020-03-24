import React from 'react';
import pic01 from '../images/pic01.jpg';

const Intro = () => (
	<div>
		<h2 className="major">Intro</h2>
		<span className="image main">
			<img src={pic01} alt="" />
		</span>
		<p>
			Front end web developer based in Lancashire, with 11 years
			commercial experience in both agency and in-house environments.
			Loves peanut butter, photography, traveling, video games, dragons
			and dogs.
		</p>
	</div>
);

export default Intro;
