import React from "react";

const Siteabout = () => {
  return (
    <div className="container siteabout d-flex justify-content-center align-items-center flex-column">
      <div className="d-flex justify-content-center align-items-center flex-column siteMain">
        <div className="align-left siteInfo">
          <h2 className="align-left">What's your site about ?</h2>
          <p className="align-left">
            This will help us to find some starting ideas and examples
          </p>
        </div>
        <div className="siteMain__btns">
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Restaurant
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Cloth shop
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Barbershop
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Grossery
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Fashion
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Merchant
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Food
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Book Store
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Pharmacy
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Travel Agency
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Enetertainment
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Personal CV
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Events
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Health
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Home & Decor
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
            Gift Shop
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
          Local Business
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
          Community & Non-Profits
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
          Media & Podcasts
          </button>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 px-5">
          Real Estate & Properties
          </button>
        </div>
        
      </div>
      <div className="lastBtns mt-5">
          <div>
          <button type="button" className="btn btn-outline-dark mx-2 mt-2 py-3 px-5">
            Back
          </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-dark mx-2 mt-2 py-3 px-5"
            >
              Next
            </button>
            <button
              type="button"
              className="btn btn-outline-dark mx-2 mt-2 py-3 px-5"
            >
              Skip
            </button>
          </div>
        </div>
    </div>
  );
};

export default Siteabout;
