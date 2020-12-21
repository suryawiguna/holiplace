import React from "react";
import Fade from 'react-reveal/Fade';

import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";
import Star from "elements/Star";
import Button from "elements/Button";

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 2 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }}
              />
            </div>
          </div>
          <div className="col">
            <h4 className="font-weight-bold" style={{ marginBottom: 15 }}>{data.name}</h4>
            <Star value={data.rate} width={32} height={32} spacing={3}></Star>
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5 font-weight-bold"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
