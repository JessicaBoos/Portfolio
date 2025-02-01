import React from "react";
import placeholder from "./placeholder.png";

export default function Projects() {
  return (
    <div className="info-container text-center">
      <strong className="Projects fs-1">Projects</strong>
      <div class="container text-center d-none d-sm-block" id="projects">
        <div class="row align-items-center mt-5 mb-5">
          <div class="col-2">
            Project 1 <br />
            <a href="#" class="m-3">
              <i class="fa-solid fa-link monospace"></i>link
            </a>
          </div>
          <div class="col-6">
            <img class="img-fluid" src={placeholder} alt="Project picure" />
          </div>
          <div class="col-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div class="row align-items-center mt-5 mb-5">
          <div class="col-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div class="col-6">
            <img class="img-fluid" src={placeholder} alt="Project picure" />
          </div>
          <div class="col-2">
            Project 2 <br />
            <a href="#" class="m-3">
              <i class="fa-solid fa-link monospace"></i>link
            </a>
          </div>
        </div>
        <div class="row align-items-center mt-5 mb-5">
          <div class="col-2">
            Project 3 <br />
            <a href="#" class="m-3">
              <i class="fa-solid fa-link monospace"></i>link
            </a>
          </div>
          <div class="col-6">
            <img class="img-fluid" src={placeholder} alt="Project picure" />
          </div>
          <div class="col-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>

      <div class="container text-center d-block d-sm-none" id="projects">
        <div class="row align-items-center mt-5 mb-5">
          <div class="col-4">
            Project 1 <br />
            <a href="#">
              <i class="fa-solid fa-link monospace"></i>link
            </a>
          </div>
          <div class="col-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div class="row align-items-center mt-5 mb-5">
          <div class="col-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div class="col-4">
            Project 2 <br />
            <a href="#">
              <i class="fa-solid fa-link monospace"></i>link
            </a>
          </div>
        </div>
        <div class="row align-items-center mt-5 mb-5">
          <div class="col-4">
            Project 3 <br />
            <a href="#">
              <i class="fa-solid fa-link monospace"></i>link
            </a>
          </div>
          <div class="col-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
}
