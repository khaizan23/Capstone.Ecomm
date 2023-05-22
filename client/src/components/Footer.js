import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='footer' style={{marginTop: "10%"}}>
        
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Super STORE <i>short for electronic commerce </i> refers to the buying and selling of goods and services 
            over the internet. It has revolutionized the way people shop by providing convenient 
            access to a wide range of products and services from the comfort of their homes or anywhere
             with an internet connection..</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Tech Stack</h6>
            <ul class="footer-links">
              <li><a href="/">React Js</a></li>
              <li><a href="/">Epress Js</a></li>
              <li><a href="">Bootstrap</a></li>
              <li><a href="/">MongoDB</a></li>
              <li><a href="/">Axios</a></li>
              <li><a href="/">Stripe</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contribute</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#"> Khaizan Bagood</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        </div>
    )
  }
}

export default Footer