"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll } from 'motion/react';

const Paragraph = ({ text, hasScrolled }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
    	once: false, 
    	margin: '0px 0px -200px 0px'
  	});

  	const variants = {
	    hidden: {
	      scale: 1,
	      x: 0,
	      transition: {
	        duration: 0.3
	      }
	    },
	    visible: {
	      scale: 1.1,
	      x: 40,
	      transition: {
	        duration: 0.3,
	        ease: 'easeOut'
	      }
	    }
	  };

const animationState = hasScrolled && isInView ? 'visible' : 'hidden';

return (
    <motion.p
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={animationState}
		>
      {text}
    </motion.p>
  );
 };

 const AnimatedParagraphs = () => {
 	const [hasScrolled, setHasScrolled] = useState(false);
  	const { scrollY } = useScroll();
  	const paragraphs = [
        <><strong>I am the best engineering hire you’ll make this year.</strong></>,
        <>Resume gap be damned,<strong> I am an excellent engineer</strong>. I have had diverse experience from small startups to the US federal government. I have written in more languages than I have fingers on one hand. I am great at identifying code improvements. I am absolutely top tier at crafting code that is easy to maintain and has a svelte tailor to the business application.</>,
        <>I can code. Without AI. I've been making the internet, as I say, since the late 1990's. I am always working on adding to a <a href="https://github.com/theresaanna/leetcode">Github repository of Leetcode exercises</a> to demonstrate some of my ability. Please take a look.</>,
	<>Since working for the government, I have taken <strong>various classes on computer science</strong> material. I am currently attending a certification course at <a href="https://engineering.jhu.edu/">Johns Hopkins University Whiting School of Engineering</a> in Generative AI. I answer other students’ questions for my teachers in the class chat when the teacher misses it. I ask for additional work to be unlocked in the learning platform early for me to complete.</>,
	<>I am raring to go. Unleash me on your organization. <strong>I am who you bring in when you want measured disruption.</strong> When you want someone to ask the hard questions. When you want an engineer that values cross disciplinary collaboration. I put my all into doing everything I do. I insist on doing things to a high degree of excellence.</>,
	<>As an engineering manager, I worked to create a safe and empowering space for my engineers. <strong>I fought for higher performance bonuses, mentored engineers into management positions themselves.</strong> I bring a sharp, analytical mind paired with keen emotional intelligence. I am someone that creates such deep bonds naturally that I am good friends with so many colleagues to this day. I put my all into my work, head and heart.</>,
	<>If you believe in me, you will not regret it. Give me an interview. Let me show you what I can do. <strong>I am not a conventional candidate, but I am the best one for your open position.</strong> Thank you.</>
	];

  	useEffect(() => {
	    const unsubscribe = scrollY.on('change', (y) => {
	      if (y > 0 && !hasScrolled) {
	        setHasScrolled(true);
	    	}
    	});

    	return () => unsubscribe();
  	}, [scrollY, hasScrolled]);

  	return (
	    <div className='letter'>
	      {paragraphs.map((text, index) => (
	        <Paragraph key={index} text={text} hasScrolled={hasScrolled} />
	      ))}
	    </div>
	);
};

export default AnimatedParagraphs;
