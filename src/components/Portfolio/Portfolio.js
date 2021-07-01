import React, { useState } from 'react';
import DogsVsCats from '../../assets/large/dogsvscats.png'
import NoteTaker from '../../assets/large/notetaker.png'
import Zerostars from '../../assets/large/zerostars.png'
import TechSpot from '../../assets/large/techSpot.png'
import WeatherDashboard from '../../assets/large/weatherDashboard.png'
import WorkDay from '../../assets/large/workday.png'

function Portfolio() {
  return (
    <div className="images is-fullwidth">
      <div className="columns">
        <div className="column is-half ">
          <h2 className="title has-text-centered">Pet Adoption Quiz
          <a href="https://github.com/avamariee/pet-adoption-quiz" target="_blank"><i class="fab fa-github icon is-large" href></i></a></h2>
          <a class="image" className="image is-2by1" href="https://avamariee.github.io/pet-adoption-quiz/" target="_blank" rel="noreferrer">
          <img
              src={DogsVsCats}
              alt="A quiz website to see if you are a dog or a cat person, complete with facts about pet adoptions, and adoption links."
            />
          </a>
        </div>
        <div className="column is-half">
          <h2 className="title has-text-centered"> Note Taker
          <a href="https://github.com/luvthatduck/Note-Taker" target="_blank"><i class="fab fa-github icon is-large" href></i></a></h2>
          <a className="image is-2by1" href="https://thawing-wave-70172.herokuapp.com/" target="_blank" rel="noreferrer">
            <img
              src={NoteTaker}
              alt="This is a simple application that can be used to write and save notes."
            />
          </a>
        </div>
      </div>
      <div className="columns">
        <div className="column is-half">
          <h2 className="title has-text-centered"> Zero Stars 
          <a href="https://github.com/avamariee/zero-stars" target="_blank"><i class="fab fa-github icon is-large" href></i></a> </h2>
          <a className="image is-2by1" href="https://zero-stars-8.herokuapp.com/" target="_blank" rel="noreferrer">
            <img
              src={Zerostars}
              alt="A timed multiple-choice coding quiz. "
            />
          </a>
        </div>
        <div className="column is-half">
          <h2 className="title has-text-centered"> Weather Dashboard
          <a href="https://github.com/luvthatduck/weather-dashboard" target="_blank"><i class="fab fa-github icon is-large" href></i></a> </h2>
          <a className="image is-2by1" href="https://luvthatduck.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
            <img
              src={WeatherDashboard}
              alt="A website where you can search for weather information in any city."
            />
          </a>
        </div>
      </div>
      <div className="columns">
        <div className="column is-half">
          <h2 class="title has-text-centered has-text-black">The Tech Spot
          <a href="https://github.com/luvthatduck/Tech-Blog" target="_blank"><i class="fab fa-github icon is-large" href></i></a></h2>
          <a className="image is-3by1" href="https://fathomless-cove-73714.herokuapp.com/" target="_blank" rel="noreferrer">
            <img
              src={TechSpot}
              alt="A fake tech blog site."
            />
          </a>
        </div>
        <div className="column is-half">
          <h2 class=" title has-text-centered has-text-black"> Work Day Scheduler
          <a href="https://github.com/luvthatduck/work-day-scheduler" target="_blank"><i class="fab fa-github icon is-large" href></i></a> </h2>
          <a className="image is-by1" href="https://luvthatduck.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">
            <img
              src={WorkDay}
              alt="A simple daily planner app for standard business hours."
            />
          </a>
        </div>
      </div>

    </div>
  )

}

export default Portfolio;