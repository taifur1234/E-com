import React from 'react';
import "./about.css"; 

export default function About() {
  return (
    <section className="about-section">
      <div className="About-container">
        
        {/* Left: Video */}
        <div className="video-box">
          <video src="hp.mp4"  autoPlay muted loop></video>
        </div>

        {/* Right: Details */}
        <div className="details">
          <h6>Like You, We Love  Music</h6>
          <p>
         And we believe a headphone is more than just an instrument for sound. It's the key to a mind-blowing movement of emotion, transporting you into a world where every note, beat, and lyric comes alive. It brings you closer to your favourite artist, immerses you in your personal sanctuary of music, and reconnects you with your own thoughts and feelings.
          </p>
        
        </div>

      </div>
 <div className="About-container">

   {/* Right: Details */}
        <div className="details">
          <h6>Like You, We Live Time</h6>
          <p>
         A watch is more than just a tool to tell time. It is a gateway to moments that matter, capturing every second of your life with elegance and precision. Every tick connects you to your own rhythm, reflecting your style, your story, and your personality. It immerses you in a world where craftsmanship meets emotion, making each glance at your wrist a reminder of memories, ambitions, and the passage of time in perfect harmony.
          </p>
        
        </div>
        
        {/* Left: Video */}
        <div className="video-box">
          <video src="wv.mp4"  autoPlay muted loop></video>
        </div>

       

      </div>

      
    </section>
    

    
  );
}
