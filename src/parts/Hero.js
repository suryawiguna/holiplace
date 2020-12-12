import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconPlace from "assets/images/icons/icon_place.svg";
import IconTraveler from "assets/images/icons/icon_traveler.svg";
import IconCamera from "assets/images/icons/icon_camera.svg";
import Button from "elements/Button";
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
  
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center mt-5">
        <div className="col-auto" style={{ width: 590 }}>
          <h1 className="font-weight-extra-bold line-height-1 mb-3">
            Escape from your routines <br />
            to our best places
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75" style={{ fontSize: 18 }}>
            We provide best-quality, comfortable, and affordable places for you
            to enjoy your holiday with family.
          </p>
          <Button
            className="btn px-5 mb-4"
            hasShadow
            isPrimary
            onClick={showMostPicked}
            style={{ width: 200, minHeight: 60 }}
          >
            <h4 className="mb-0 font-weight-bold">
              Let's Go!
            </h4>
          </Button>

          <div className="row mt-5">
            <div className="col-4">
              <div className="row">
                <img
                  src={IconTraveler}
                  alt={`${props.data.travelers} travelers`}
                  width="64"
                  height="64"
                />
                <div className="d-flex align-items-center p-0">
                  <div className="d-flex flex-column">
                    <h5 className="m-0 font-weight-bold">{formatNumber(props.data.travelers)}</h5>
                    <h6 className="text-gray-500 font-weight-light">
                      travelers
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <img
                  src={IconCamera}
                  alt={`${props.data.spots} spots`}
                  width="64"
                  height="64"
                />
                <div className="d-flex align-items-center p-0 mx-2">
                  <div className="d-flex flex-column">
                    <h5 className="m-0 font-weight-bold">{formatNumber(props.data.spots)}</h5>
                    <h6 className="text-gray-500 font-weight-light">spots</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <img
                  src={IconPlace}
                  alt={`${props.data.cities} cities`}
                  width="64"
                  height="64"
                />
                <div className="d-flex align-items-center p-0">
                  <div className="d-flex flex-column">
                    <h5 className="m-0 font-weight-bold">{formatNumber(props.data.cities)}</h5>
                    <h6 className="text-gray-500 font-weight-light">cities</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div style={{ width: 500, height: 400 }}>
            <img
              src={ImageHero}
              alt="Houses"
              className="img-fluid position-absolute"
              style={{ margin: "-15px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHero_}
              alt="Houses frame"
              className="img-fluid position-absolute"
              style={{ margin: "15px -15px 0 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
