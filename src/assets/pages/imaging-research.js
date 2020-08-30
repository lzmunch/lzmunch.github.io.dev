import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import ProjectModalImage from './ProjectModalImage';
// <a href="url" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">

const project = () => ( 
	<div className="Project">
	    <h>Accessible Digital Imaging Platform</h>
	    <h3 style={{fontWeight:"normal"}}>Research project at Carnegie Mellon University</h3>

	    <ProjectModalImage size="large" imgPath="./imaging-research/beaglebone.jpg"/>

	    <p>In Spring 2020, I took a 15400 Research Symposium, and worked on a research project. The goal was to create the basis for an experimental platform and API for computational imaging, with intended usage for education and creative making. There has been limited research in this field, especially using new technologies like cheap portable cameras, projectors, and computers. My mentor was <a href="https://www.ri.cmu.edu/ri-faculty/matthew-otoole/" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">Professor Matthew O'Toole</a>.
	    </p>

	    <p>
	    	<a href="https://lzmunch.github.io/beaglebone-imaging/" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">
	    		Project Page 
	    	</a>
	    </p>
	</div>
);

export default project;