import React from 'react';

function Resume() {

  return (
    <section className="section resume columns is-centered">
      <div>
        <h1 className="title resume  has-text-centered">Resume</h1>
        <h2 className="subtitle">
        
          <div class="box">
            Download my Resume <a className="resume-anchor" href={require('../../assets/janellmyrickResume.pdf').default} target="_blank" download>here.</a>
          </div>
          <h1 className="title resume  has-text-centered">Skills</h1>
          <div class="box">
            <ul>
              <li><i class="fas fa-code"></i> HTML/CSS</li>
              <li><i class="fas fa-code"></i> Git</li>
              <li><i class="fas fa-code"></i> JavaScript</li>
              <li><i class="fas fa-code"></i> React</li>
              <li><i class="fas fa-code"></i> Node.js</li>
              <li><i class="fas fa-code"></i> Express.js</li>
              <li><i class="fas fa-code"></i> MongoDB</li>
              <li><i class="fas fa-code"></i> MySQL</li>
              <li><i class="fas fa-code"></i> APIs</li>

            </ul>
          </div>

        </h2>
      </div>
    </section>
  )
}

export default Resume;