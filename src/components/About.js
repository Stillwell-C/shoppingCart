import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-top-text'>Who are we?</div>
      <div className='about-bottom-text'>
        <div className='about-beginnings'>
          <h1 aria-label='heading1'>Our Beginnings</h1>
          <p>
            in hands had its humble beginnings as a creative outlet for Elena
            Cojocaru's university side projects. She soon began to peddle unique
            design pieces at school events and on the streets of Chișinău with
            some success. It further materialized into its current incarnation
            in 2018 as part of her university capstone project.
          </p>
          <p>
            Over time, Elena grew her side project into a small fashion house
            and then into a budding powerhouse in the Moldovan design scene.
            Word soon spread that in hands was the nation's premier house for
            all things fashion and lifestyle. With overwhelming customer support
            and many media appearances including 'Mornings With Gheorghe and the
            Village Dunce', Elena has rapidly scaled the business to meet the
            unprecidented foreign and domestic demand while maintaining strict
            creative and quality control.{" "}
          </p>
          <p>
            Contrary to the defamitory claims of another Moldovan fashion house
            which will not be named, we do not now nor have we ever operated an
            "illegal sweat shop" that employs "abusive and exploitative" labor
            practices including but not limited to "intimidation," "coercion,"
            and "threats of violence." We assure you that our factory meets the
            minimum requirements set by the Ministry of Labour and Social
            Protection.
          </p>
        </div>
        <div className='about-creator'>
          <h1>Our Creator</h1>
          <div className='about-creator-info'>
            <img src='/img/creator.jpg' alt='Elena Cojocaru' />
            <p>
              Hi, My name is Elena. In addition to my work at in hands I enjoy
              crocheting and worshiping Satan.
            </p>
          </div>
        </div>
        <div className='about-contact'>
          <h1>Get in Contact!</h1>
          <div className='about-contact-info'>
            <p>
              Questions, comments, concerns? in hands is able to create custom
              design pieces to fit your needs and desires. We are also always
              looking to collaborate with inspiring artisans and designers.
            </p>
            <img
              src='/img/hennie-stander-wO8zbE8iAas-unsplash.jpg'
              alt='contact us'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
