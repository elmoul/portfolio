import React from 'react';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
		 	<div className='app__navbar-logo'>
			 	<img src={images.logo} alt="logo" />
		 	</div>
		 	<ul className='app__navbar-links'>
			 	{ [ 'home', 'about', 'contact', 'work', 'skills', 'testimonial'].map( (item) => (
				 	<li className='app_flex p-text' key={`link-${item}`}>
					 	<div />
					 	<a href={`link-${item}`}>{item}</a>
				 	</li>
			 	))}
		 	</ul>
		</nav>
  )
}

export default Navbar