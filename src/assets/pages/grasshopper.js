import React from 'react';
import ProjectModalImage from './ProjectModalImage';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here
// <a href="url" target="_blank" rel="noopener noreferrer">

const project = () => ( 
	<div className="Project">
	    <h>3D Printing Experiments with Grasshopper</h>

	    <ProjectModalImage size="med" imgPath="./grasshopper/filled_lattice_y.gif"/>
	    <ProjectModalImage size="med" imgPath="./grasshopper/printed.png"/>
	    <ProjectModalImage size="med" imgPath="./grasshopper/printed2.png"/>
	    <p>My overall goal with this project was to create the impression of a hand by populating the space or surface in interesting parametric ways, using the <a href="https://www.grasshopper3d.com/" target="_blank">Grasshopper</a> plugin for Rhnio's 3D modeling tools is a node-based graphical algorithm editor. It didn't work out quite as I hoped, but I was able to interpret the hand mesh in a couple slightly different ways.</p>
	    <br/>
	    <p>Other attempts that did not print:</p>
	    <ProjectModalImage size="med" imgPath="./grasshopper/diag_stl_cocooned.gif"/>
	    <ProjectModalImage size="med" imgPath="./grasshopper/cross_stl.gif"/>
	    <ProjectModalImage size="med" imgPath="./grasshopper/group.png"/>
	    <br/>
	    <br/>
	    <p>This is a project form Intermediate Rapid Prototyping Technologies, taught in spring 2019 by David Touretzky.</p>

	    
	    <ScrollUpButton/>
	</div>
);

export default project;