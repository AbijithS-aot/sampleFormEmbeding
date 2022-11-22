import React from 'react'
import {Link} from "react-router-dom"

const home = () => {
  return (
    <div className="hero-container" id="hero-sec">
    <div className="container-fluid ">
      <div className="row d-flex">
        <div className="col align-middle">
          <div className="px-2 py-2">
            <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=900&t=st=1667037491~exp=1667038091~hmac=7c71ea8afc8f3cc8065c5ccc05d105e3c8a7b76f0133016cb210a7882dc19611" className="img-fluid" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="px-5 py-5 mt-5">
            <div className="px-2 py-2 align-middle">
              <h4>Get all your needs Here</h4>
              <p> An online learning and teaching marketplace with over 204000 courses and 54 million students. Learn programming, marketing, data science and more.</p>
            </div>
            <div className="px-2 py-2">
            <Link to="/contact"  className="btn btn-outline-primary" >Contact Us</Link> 
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="main-container">
      <div className="container-fluid">
        ...
      </div>
    </div>

    <div className="card-container bg-black" id="team">
      <div className="container-fluid px-3 py-3">
        <div className="row center mx-4 my-4 text-white">
          <h2>Meet Our Expert</h2>
          <p>Highly professional team</p>
        </div>
        <div className="row mb-5">
          <div className="col">
            <div className="card" >
              <img src="https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1474.jpg?w=740&t=st=1667038053~exp=1667038653~hmac=7f51a4d7c9f7dc9e0e3a6d53d45f381fc455e5424bcc36a0bedca65db24487e7" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Martina doena</h5>
                <p className="card-text">Highly proficient in Web3 and AI and professional in Designing Websites with tools of Web3.0.</p>
                <a href="#" className="btn org-btn">Learn More.</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src="https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1074.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Zaid S.</h5>
                <p className="card-text">A professional web designer with a wealth of knowledge about the web Development and Software Development. </p>
                <a href="#" className="btn org-btn">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src="https://img.freepik.com/free-vector/teaching-concept-illustration_114360-1708.jpg?w=740&t=st=1667038099~exp=1667038699~hmac=d144ede4a891a4bfcb57b109cc26614850ed35f5260bbf32541845325c476dbb" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jhon Doe</h5>
                <p className="card-text">Expert in all aspects of coding and knowledgeable about a wide range of coding languages</p>
                <a href="#" className="btn org-btn">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>








    <div className="banner-container mt-5 mb-5" id="featured">
      <div className="container-fluid px-4 py-4">
        <div className="card bg-black text-white shadow-lg ">
          <h5 className="card-header">Featured Courses</h5>
          <div className="card-body">

            <div className="conatiner">
              <div className="row d-flex justify-content-around">
                <div className="col">
                  <div className="card text-black move-up mb-3" >
                    <div className="card-header">Web Development</div>
                    <div className="card-body">
                      <h5 className="card-title">Front End + Backend</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-black move-up mb-3" >
                    <div className="card-header">Web3.0</div>
                    <div className="card-body">
                      <h5 className="card-title">Web3 and Tools</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-black move-up mb-3" >
                    <div className="card-header">Java Masterclass</div>
                    <div className="card-body">
                      <h5 className="card-title">Begineer Course</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-black move-up mb-3" >
                    <div className="card-header">Python </div>
                    <div className="card-body">
                      <h5 className="card-title">Python AI</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  )
}

export default home