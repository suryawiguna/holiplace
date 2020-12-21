import React from "react";
import Fade from 'react-reveal/Fade';

import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
        <Fade bottom> 
        <h4 className="mb-4 font-weight-bold">Most Visited</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      <strong>${item.price}</strong>
                      <span className="font-weight-light"> / {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white text-decoration-none"
                        href={`/properties/${item._id}`}
                      >
                        <h5 className="font-weight-bold text-white">{item.name}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
