import React from 'react';
import ProfilePic from '../../assets/large/JanellMyrickProfilePic.jpg'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <section className="my-5" class="hero ">
      <h1 id="about" class="about"></h1> 
     
      <div style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', alignItems: 'center', }}>
        
        <div class="card2 is-align-content-center mt-3">
          <div class="card-content" style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', alignItems: 'center', }}>
            
          <figure class="image is-128x128 ">
            <Image class="profilepic " src={ProfilePic} alt="profile picture" roundedCircle></Image>
          </figure>
            <div class="content" style={{ display: 'flex',  justifyContent: 'center', alignItems: 'right', }}>
              Hello there! <br></br>
               I am a STEM teacher and Full Stack web developer. I love educating people and help them reach their potential. I LOVE science of all types but especially microbiology and entomology. I'm a vivacious reader of fiction, connoisseur of all chocolates and try to eat as much Mexican food as I can get.
            </div>
          </div>
        </div>
      </div>



    </section>


  );
}

export default About;