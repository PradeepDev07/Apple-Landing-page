import {useEffect,useRef } from 'react'

const Hero = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate=2
        }
    , []);

  return (
    <section id='hero'>
        <div> <h1 className="">
        MacBook Pro
        </h1>  
        <img src="title.png" alt="MacBook Title" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay loop muted playsInline className='w-full h-auto'></video>
        <button>Buy Now</button>
        <p>From $1,599 or $130/mo. for 12 months</p>
    </section>
  )
}

export default Hero