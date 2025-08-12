'use client';

import React from 'react';

import './about.css';


export default function About() {

  return (
    <section className="stats-section" id="about">
      <div className="container stats-content">
        <figure className="stats-image">
          <img
            src="/images/user_pic.png"
            alt="Foto de Ellen Santos com sua roupa de formatura"
            loading="lazy"
          />
        </figure>

        <div className="stats-info">
          <figure className="stats-card" >
            <div className="stats-image-container">
                  <img className="about-img" src="/images/about.jpeg" alt={"Foto com fatos sobre Ellen Santos Machado"} loading="lazy" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
