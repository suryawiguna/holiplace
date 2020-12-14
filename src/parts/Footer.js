import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <h6 className="brand-tagline text-gray-500">
              Find beautiful places to visit and stay
            </h6>
          </div>
          <div className="col-2 offset-1 mr-5">
            <h6 className="mt-2 font-weight-bold">Start Here</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Create New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Book A Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/destinations">
                  Destinations
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2 font-weight-bold">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6 className="mt-2 font-weight-bold">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@holiplace.id">
                  support@holiplace.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal  type="link" href="tel:+623617890987">
                  0361 - 7890987
                </Button>
              </li>
              <li className="list-group-item">
                <span>Holiplace, Denpasar, Bali</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2020 © Holiplace - All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
