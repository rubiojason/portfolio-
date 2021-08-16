import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import { init, sendForm } from 'emailjs-com';
init('user_rtDgIzAchqa0J0ddVq0WU');

function Portfolio() {

	//email 
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = data => {
		console.log(data)
		generateContactNumber();

  	sendForm('contact_form', 'template_ypmntb7', '#contact-form')
    	.then(function(response) {
      		console.log('SUCCESS!', response.status, response.text);
    	}, function(error) {
      	console.log('FAILED...', error);
    	});
	}
	//email 
	
	//useState 
	const [contactNumber, setContactNumber] = useState("000000");
	//useState 

	const generateContactNumber = () => {
    	const numStr = "000000" + (Math.random() * 1000000 | 0);
    	setContactNumber(numStr.substring(numStr.length - 6));
 	}

    return (
        <div>

			<div id="page-wrapper">

				<section id="banner">
					<div className="inner">
						<h2>Jason Rubio</h2>
						<p>Frontend Developer</p>
					</div>
				</section>

				<section id="wrapper">

					<section id="one" className="wrapper spotlight style1">
						<div className="inner">
							<a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
							<div className="content">
								<h2 className="major">About Me</h2>
								<p style={{textAlign: 'left'}}>I am a Web Developer aspired to learn more every single day. Enjoy building websites from the bottom up.</p>
							</div>
						</div>
					</section>

					<section id="three" className="wrapper spotlight style3">
						<div className="inner">
							<a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
							<div className="content">
								<h2 className="major">Skills</h2>
								<p style={{textAlign: 'left'}}>Can use React JS for complex and well designed websites, with Redux for state management across web applications. </p>
							</div>
						</div>
					</section>

					<section id="four" className="wrapper alt style1">
						<div className="inner">
							<h2 className="major">Projects</h2>

							<section className="features">

								<article>
									<a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
									<h3 className="major">Movie Rate</h3>
									<p>Fetched data from the MovieDB api. You can search a movie, look at the most popular ones, or currently airing ones. </p>
									<a href="https://rubiojason.github.io/Movie__Rate/" target="_blank" className="special">Go To App</a>
									<a href="https://github.com/rubiojason/Movie__Rate" target="_blank" className="special">Go To Source</a>
								</article>

								<article>
									<a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
									<h3 className="major">Soccer Way</h3>
									<p>Tracks soccer stats from clubs around the world and professional soccer players. </p>
									<a href="https://rubiojason.github.io/Soccer_Way/" target="_blank" className="special">Go To App</a>
									<a href="https://github.com/rubiojason/Soccer_Way" target="_blank" className="special">Go To Source</a>
								</article>

								<article>
									<a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
									<h3 className="major">Gym Pro</h3>
									<p>A landing page to a gym with a modern and polished looking user interface. </p>
									<a href="https://rubiojason.github.io/Gym__Pro/" target="_blank" className="special">Go To App</a>
									<a href="https://github.com/rubiojason/Gym__Pro" target="_blank" className="special">Go To Source</a>
								</article>

								<article>
									<a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
									<h3 className="major">Cudil Car</h3>
									<p>Landing page for a car dealership</p>
									<a href="https://rubiojason.github.io/Cudil__Car/" target="_blank" className="special">Go To App</a>
									<a href="https://github.com/rubiojason/Cudil__Car" target="_blank" className="special">Go To Source</a>
								</article>

								<article>
									<a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>
									<h3 className="major">Language Statistics</h3>
									<p>Showcases all of the most popular programming languages, how they're doing in terms of popularity and pay. </p>
									<a href="https://rubiojason.github.io/Language-Stats/" target="_blank"  className="special">Go To App</a>
									<a href="https://github.com/rubiojason/Language-Stats" target="_blank" className="special">Go To Source</a>
								</article>								

								<article>
									<a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
									<h3 className="major">HyWave</h3>
									<p>A landing page for ocean resorts and aquatic nature with stunning UI/UX designs. </p>
									<a href="https://rubiojason.github.io/Hy_Wave/" target="_blank" className="special">Go To App</a>
									<a href="https://github.com/rubiojason/Hy_Wave" target="_blank" className="special">Go To Source</a>
								</article>

							</section>
						</div>
					</section>

				</section>

				<section id="footer">
					<div className="inner">
						<h2 className="major">Get in touch</h2>
						
						<form method="post" action="#" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
							<div className="fields">
								<div className="field">
									<input type='hidden' name='contact_number' value={contactNumber} />
									<label htmlFor="name">Name</label>
									{errors.user_name && errors.user_name.type === "required" && (
  									<div role="alert">Name is required<br/></div>)}
									<input type="text" name="name" id="name" ref={register} maxLength='30' aria-invalid={errors.user_name ? "true" : "false"} ref={register({ required: true })}/>
								</div>
								<div className="field">
									<label htmlFor="email">Email</label>
									{errors.user_name && errors.user_name.type === "required" && (<div role="alert">Name is required<br/></div>)}
									<input type="email" name="email" id="email" ref={register} maxLength='30' aria-invalid={errors.user_name ? "true" : "false"} ref={register({ required: true })}/>
								</div>
								<div className="field">
									<label htmlFor="message">Message</label>
									{errors.user_name && errors.user_name.type === "required" && (<div role="alert">Name is required<br/></div>)}
									<textarea name="message" id="message" rows="4" ref={register} aria-invalid={errors.user_name ? "true" : "false"} ref={register({ required: true })} maxLength='1500'></textarea>
								</div>
							</div>
							<ul className="actions">
								<input type="submit" value="Send Message" />
							</ul>
						</form>

						<ul className="contact">
							<li className="icon solid fa-envelope">Gmail: <a href="#">rubiojason420@gmail.com</a></li>
							<li className="icon brands fa-twitter">GitHub: <a href="https://github.com/rubiojason">github.com/rubiojason</a></li>
							<li className="icon brands fa-facebook-f">LinkedIn: <a href="https://www.linkedin.com/in/jason-rubio-0260631aa/">linkedin.com</a></li>
						</ul>
					</div>
				</section>

		</div>
        </div>
    )
}

export default Portfolio
