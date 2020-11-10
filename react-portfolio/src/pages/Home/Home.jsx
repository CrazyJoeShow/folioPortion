import React from "react";

const Home = () => {
  return (
    <>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center">About me</h2>
            </div>
            <div class="card-body">
              <p>
                Hi, I'm Joe Lowery. I am completely new to development in general. I've always been surrounded by technology and want to expand my technical concepts with this bootcamp.
                I enjooy playing music, video games, and donuts in the mall parking lot with snow on the ground!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h2 class="text-center">Proficiencies</h2>
            </div>
            <div class="card-body">
              <div class="text-center">
                <i class="fab fa-git-alt fa-3x"></i>
                <i class="fab fa-html5 fa-3x"></i>
                <i class="fab fa-css3 fa-3x"></i>
                <i class="fab fa-bootstrap fa-3x"></i>
                <i class="fab fa-js-square fa-3x"></i>
                <i class="fab fa-node-js fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
