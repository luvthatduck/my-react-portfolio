import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Resume() {

  return (
    <section>
      <Row>
        <section className="section resume">
          <div>
            <h1 className="title resume  has-text-centered">Interested in Learning More?</h1>
            <h2 className="subtitle"></h2>

            <div class="box">
              <div className="mb-2">

                <Button variant="light" size="lg">

                  <a className="resume-anchor" style={{ color: "#000000" }} href={require('../../assets/janellmyrickResume.pdf').default} target="_blank" download >Download My Resume</a>
                </Button>
              </div>
            </div>
            <Col>
              <h1 className="title resume  has-text-centered ">Skills</h1>
              <div class="box skillBox columns">
                <div class="columns ">
                  <ul>
                    <li><i class="fas fa-code"></i>Agile Methodologies</li>
                    <li><i class="fas fa-code"></i>API/JSON</li>
                    <li><i class="fas fa-code"></i>Bootstrap </li>
                    <li><i class="fas fa-code"></i> Express.js</li>
                    <li><i class="fas fa-code"></i> Git</li>
                    <li><i class="fas fa-code"></i> HTML/CSS</li>
                  </ul>
                </div>
                <div class="columns ">
                  <ul>
                    <li><i class="fas fa-code"></i> JavaScript</li>
                    <li><i class="fas fa-code"></i>jQuery </li>
                    <li><i class="fas fa-code"></i> MongoDB</li>
                    <li><i class="fas fa-code"></i> Mongoose</li>
                    <li><i class="fas fa-code"></i> MySQL</li>
                    <li><i class="fas fa-code"></i> Node.js</li>
                   
                  </ul>
                </div>
                <div class="columns ">
                  <ul>
                  <li><i class="fas fa-code"></i> React</li>
                    <li><i class="fas fa-code"></i> Responsive Design</li>
                    <li><i class="fas fa-code"></i> Restful API </li>
                    <li><i class="fas fa-code"></i> SEO </li>
                    <li><i class="fas fa-code"></i>Social Coding Best Practices </li>
                    <li><i class="fas fa-code"></i>State Management </li>
                  </ul>
                </div>
              </div>


            </Col>
          </div>

        </section>
      </Row>
    </section>
  )
}

export default Resume;