import React, { figure, Fragment } from "react";
import "../Css/home.css";
import instituteImage from "../../../IMAGES/location_5.jpg";
import { Link } from "react-router-dom";

export default function InstituteLayout() {
  return (
    <div class="col-lg-10">
      <div class="row mt-50">
        <div class="col-md-3">
          <div class="strip grid">
            <figure>
              {/* <Link href="#0" class="wish_bt"></Link> */}
              <Link>
                <img src={instituteImage} class="img-fluid" alt="" />
              </Link>
            </figure>
            <div class="wrapper">
              <h3>
                <a href="detail-restaurant.html">SBI MANACHIRA</a>
              </h3>
              <small>(0km away)</small>

              <a class="address">
                <i class="fa fa-map-marker"></i>
                Calicut, Arayadath Palam
              </a>
              <a class="address">
                <i class="fa fa-clock-o"></i>9 AM to 5 PM
              </a>
              <a class="address">
                <i class="fa fa-mobile"></i>
                +91 987 654 32 10
              </a>
            </div>
            <ul>
              <li>
                <a href="#0" class="btn btn-primary col-md-12">
                  TIME SLOT
                </a>
              </li>
              <li>
                <a href="#0" class="btn btn-success col-md-12">
                  TOKEN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
