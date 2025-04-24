import React from "react";
import Navbar from "../components/Header";
import Adventure from "../assets/images/camping.svg";
import CartoonMonster from "../assets/images/monster.svg";
import Superhero from "../assets/images/hero.svg";
import Wizard from "../assets/images/magic.svg";
import Robotics from "../assets/images/robotics.svg";

function Home() {
  return (
    <>
    <Navbar/>
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="text-danger fw-bold display-4 mb-3">
            <i className="bi bi-stars me-2"></i>Welcome to Cartoon World
          </h1>
          <p className="fs-5">
            Dive into a world of colorful stories, legendary characters, and epic adventures!
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={{Adventure}}
            alt="Adventure"
            className="img-fluid"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={{CartoonMonster}}
            alt="About"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary fw-bold mb-3">
            <i className="bi bi-info-circle-fill me-2"></i>About Our World
          </h2>
          <p className="fs-5">
            Our universe is packed with silly creatures, brave heroes, and misfit sidekicks—all ready to entertain!
          </p>
        </div>
      </div>

      {/* Characters Section */}
      <div className="mb-5 text-center">
        <h2 className="text-success fw-bold mb-4">
          <i className="bi bi-people-fill me-2"></i>Meet the Characters
        </h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border border-dark">
              <img
                src={{Superhero}}
                className="card-img-top p-4"
                alt="Hero"
              />
              <div className="card-body">
                <h5 className="card-title">Captain Code</h5>
                <p className="card-text">The fearless bug-squashing, logic-loving superhero!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border border-dark">
              <img
                src={{Wizard}}
                className="card-img-top p-4"
                alt="Wizard"
              />
              <div className="card-body">
                <h5 className="card-title">Byte Wizard</h5>
                <p className="card-text">Master of algorithms and magical one-liners!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border border-dark">
              <img
                src={{Robotics}}
                className="card-img-top p-4"
                alt="Robot"
              />
              <div className="card-body">
                <h5 className="card-title">Botty</h5>
                <p className="card-text">The lovable AI with a heart... and a few loose wires.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Comics Section */}
      <div className="text-center">
        <h2 className="text-warning fw-bold mb-4">
          <i className="bi bi-book-half me-2"></i>Latest Comics
        </h2>
        <p className="fs-5">Check out the latest episodes from the Cartoon World saga.</p>
        <button className="btn btn-outline-dark mt-3">
          <i className="bi bi-book"></i> Read Now
        </button>
      </div>
    </div>
    
  </>
  );
}

export default Home;
