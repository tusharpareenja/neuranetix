"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypewriterComponent from "typewriter-effect";

const testimonials = [
  {
    id: 1,
    name: "Dylan Rodriguez",
    role: "Frontend Developer",
    company: "Webflow",
    avatar:
      "https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg",
    text: "Osmo is my new go-to resource for the best Webflow capabilities and code snippets...",
  },
  {
    id: 2,
    name: "Nicole Smith",
    role: "UX Designer",
    company: "Creative Labs",
    avatar:
      "https://tse2.mm.bing.net/th/id/OIP.4AV8Es1Zb2Fb5HO1EseQsQHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
    text: "It's nice to get access to some creative developer fuel sources...",
  },
  {
    id: 3,
    name: "Jason Kennedy",
    role: "Product Lead",
    company: "TechCorp",
    avatar:
      "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
    text: "Osmo is full of awesome (and easy to use) interactions that save so much time...",
  },
  {
    id: 4,
    name: "Amy Lin Wang",
    role: "Animation & Motion Designer",
    company: "Studio Eight",
    avatar:
      "https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png",
    text: "One of a kind platform for any developers out there...",
  },
  {
    id: 5,
    name: "Carole Evans",
    role: "Developer Educator",
    company: "CodeX",
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/259457545/original/ddae8fe0c3227b501a69d573de778bed11bba640/design-your-profile-picture-for-social-media.png",
    text: "Even if you know GSAP, it can be tricky to apply abstract animation concepts...",
  },
  {
    id: 6,
    name: "Jordan Lawrence",
    role: "Web Developer",
    company: "Nexus Tech",
    avatar:
      "https://yt3.googleusercontent.com/ytc/AGIKgqM1UhxojUx9aJCmWTpX0PPpYy-K5hAA-2nV8gv0Gzc=s900-c-k-c0x00ffffff-no-rj",
    text: "Osmo Supply is a gem for clever and well-thought-out animation code and tutorials...",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const pauseTimerRef = useRef(null);
  const sectionRef = useRef(null);

  const handleAvatarClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setIsPaused(false), 5000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTypewriter(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % testimonials.length;
        setIsPaused(true);
        pauseTimerRef.current = setTimeout(() => setIsPaused(false), 3000);
        return newIndex;
      });
    }, 4000);
    return () => {
      clearInterval(interval);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [isPaused]);

  const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center bg-black font-rubik justify-center py-20 px-4 min-h-screen"
    >
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          {showTypewriter && (
            <TypewriterComponent
              options={{
                strings: [
                  "We built Osmo to help creative developers work smarter, faster, and better.",
                ],
                autoStart: true,
                loop: false,
                delay: 50,
                deleteSpeed: 999999999,
              }}
            />
          )}
        </h1>
        <p className="text-gray-400 mt-8 font-rubik">Trusted by:</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-2xl">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            onClick={() => handleAvatarClick(index)}
            className={`cursor-pointer transition-all duration-300 ${
              index === activeIndex ? "scale-125 z-10" : "opacity-70 hover:opacity-100"
            }`}
            whileHover={{ scale: index === activeIndex ? 1.25 : 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Avatar
              className={`h-12 w-12 border-2 ${
                index === activeIndex ? "border-white" : "border-transparent"
              }`}
            >
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </motion.div>
        ))}
      </div>

      <div className="relative w-full max-w-6xl h-80 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={`prev-${testimonials[prevIndex].id}`}
            className="absolute top-0 left-0 w-1/3 h-full px-4 opacity-50"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-gray-900 p-6 rounded-lg h-full flex flex-col">
              <p className="text-sm text-gray-300 flex-grow">
                "{testimonials[prevIndex].text.substring(0, 120)}..."
              </p>
              <div className="mt-4">
                <p className="font-semibold">{testimonials[prevIndex].name}</p>
                <p className="text-xs text-gray-400">{`${testimonials[prevIndex].role}, ${testimonials[prevIndex].company}`}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key={`active-${testimonials[activeIndex].id}`}
            className="absolute top-0 left-1/3 w-1/3 h-full px-4 z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg h-full border-2 border-white shadow-lg shadow-white/10 flex flex-col">
              <p className="text-white flex-grow">"{testimonials[activeIndex].text}"</p>
              <div className="mt-4">
                <p className="font-bold text-white">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-gray-300">{`${testimonials[activeIndex].role}, ${testimonials[activeIndex].company}`}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            key={`next-${testimonials[nextIndex].id}`}
            className="absolute top-0 right-0 w-1/3 h-full px-4 opacity-50"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-gray-900 p-6 rounded-lg h-full flex flex-col">
              <p className="text-sm text-gray-300 flex-grow">
                "{testimonials[nextIndex].text.substring(0, 120)}..."
              </p>
              <div className="mt-4">
                <p className="font-semibold">{testimonials[nextIndex].name}</p>
                <p className="text-xs text-gray-400">{`${testimonials[nextIndex].role}, ${testimonials[nextIndex].company}`}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
