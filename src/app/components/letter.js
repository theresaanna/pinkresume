"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const Paragraph = ({ text }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
    	once: false, 
    	margin: '0px 0px -100px 0px'
  	});

  	const variants = {
	    hidden: {
	      scale: 1,
	      x: 0,
	      opacity: 0.7,
	      transition: {
	        duration: 0.3
	      }
	    },
	    visible: {
	      scale: 1.1,
	      x: 20,
	      opacity: 1,
	      transition: {
	        duration: 0.3,
	        ease: 'easeOut'
	      }
	    }
	  };

return (
    <motion.p
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {text}
    </motion.p>
  );
 };

 const AnimatedParagraphs = () => {
  	const paragraphs = [
        <><strong>I am a software engineer and engineering manager.</strong> I’ve been out of work almost seven years due to disability and then, frankly, because my resume gap puts off employers.</>,
        <>I am back and better than ever, and I just need ONE shot. Just one company. <strong>Let me tell you why you should bet on me.</strong></>,
        <>I have been mentoring and learning with colleagues for as long as I have had a career; it comes naturally to me. As an engineering leader, I bring all of the following engineering wisdom with me as well as an attitude of service both to my team and to the company. <strong>I was an engineering leader for almost four years in government</strong> and grew out a high-performing new engineering department. Many people I hired and had on my team went onto become recognized technical subject area leaders and other engineering organization leaders.</>,
        <>I bring a <strong>decade of experience</strong> as a deeply integrated software engineer on teams implementing technological solutions. I have worked in media/journalism and for the federal government on agile teams. I have also had stints at startups.</>,
        <>What I mean by deeply integrated is that my approach to software development includes an <strong>understanding of business and user needs</strong>, as well as the approaches of design and project management. The more I understand, the better I can tailor solutions to meet needs effectively and efficiently. For example, I am interested, as possible, in being part of design and business processes to better understand the project landscape.</>,
        <>In addition to being thorough in this way, I am flexible. <strong>I have learned tons of frameworks, libraries, and language features over the years.</strong> Given a bit of time to study, I can tackle anything new, bringing fresh eyes married with the wisdom of best practices. I started out using obscure early <a href="https://www.php.net/">PHP</a> blogging platforms and then moved to <a href="https://wordpress.com/">Wordpress</a>, to <a href="https://new.drupal.org/home">Drupal</a>, had a brief stint in <a href="https://rubyonrails.org/">Ruby on Rails</a>, onto more bespoke solutions using <a href="https://www.python.org/">Python</a> and have landed, most recently, at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>. Within <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a> alone I have learned frameworks all the way from <a href="https://jquery.com/">jQuery</a> to the <a href="https://backbonejs.org/">Backbone.js</a>/<a href="https://underscorejs.org/">Underscore.js</a> days, up through the <a href="https://www.geeksforgeeks.org/introduction-to-es6/">ES6</a>, <a href="https://react.dev/">React</a> and <a href="https://nodejs.org/en">Node</a> ecosystems.</>,
        <>I am also iterative. I know how to prevent perfect from being the enemy of good. Software is never perfect out of the gate. It’s important to do maintenance and improvements as you go. I don’t need to use the hot, new tools. I will work with whatever technologies make sense for the project. I am not an opinionated engineer in this regard. I have made mistakes in being too quick and too slow in my approaches over the years, and <strong>now you can benefit from my relative experience</strong> in finding the right cadence.</>,
        <><strong>I am thoughtful.</strong> I don’t make rash decisions. I know that the best work comes from consulting with other great minds and adhering to best practices refined by many. Sometimes the work is in piecing together parts and applying glue.</>,
        <>I am strategic in how I apply my efforts. The work of any sort of engineer is problem solving at the core. I am a <strong>professional solution seeker</strong> and, as needed, clarifying questioner. I am good with constraints and getting creative to make things work, pulling from a decade of experience in doing so. At one media company, I was asked to be the engineering team representative on a team to rethink the company’s product because of my ideas and engagement with the product beyond code.</>,
        <><strong>Thanks for reading.</strong> Please let me know if you know of any roles that I could bring value to.</>
  	];

  	return (
	    <div className='letter' style={{ 
	      minHeight: '200vh', // Ensure we have enough scroll space
	      display: 'flex',
	      flexDirection: 'column',
	      alignItems: 'center',
	      transformOrigin: 'left'
	    }}>
	      {paragraphs.map((text, index) => (
	        <Paragraph key={index} text={text} />
	      ))}
	    </div>
	);
};

export default AnimatedParagraphs;