import React from 'react';
import aboutImage from "../about.jpeg";
const resumeLink = "https://docs.google.com/document/d/e/2PACX-1vTXxkb2OZLoH1P1nq28pMjGIp_--eJyJep3qC8vsTO67oX8AoxtgkAHmE-KShgOwuDFXW4Y2hDdb4Ro/pub";
const project = () => ( 
	<div className="Project">
	  <img src={aboutImage} alt="me"/>
	  <h>Software Developer + Creative</h>
	  <p>Hi! I'm an integrated master's student at Carnegie Mellon University Entertainment Technology Center. My undergrad is in Computer Science at CMU. I'm interested in using technology to enable accessible and interactive entertainment.</p>
	  <a href={resumeLink} target="_blank" rel="noopener noreferrer">[Resume]</a><br/><br/>

	  <a href="https://linkedin.com/in/lauzhang" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">LinkedIn</a><br/>
	  <a href="https://instagram.com/lz_munch" target="_blank" rel="noopener noreferrer">Instagram - @lz_munch</a><br/>
	  <a href="https://twitter.com/lzmunch" target="_blank" rel="noopener noreferrer">Twitter - @lzmunch</a><br/>
	  <a href="https://github.com/lzmunch" target="_blank" rel="noopener noreferrer">Github - @lzmunch</a><br/>
	</div>
);

export default project;