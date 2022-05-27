export const navbar = () => {
  return `
  <div id="navLogoDiv">
  <img src="https://i.ibb.co/WK768hX/download.png" alt="logo" id="navLogo">
</div>
<div id="navOptions">
  <div>
      <img style="width: 54px;"
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/RBX_logo-7618eb109a17dcfa44e88596c831606746fc124a000553458d6b7fc1bf9a6345.png"
          alt="">
  </div>
  <div>Tarrif</div>
  <div style="display: flex;">What's new &nbsp;
      <i class="fa fa-angle-down"> </i>
  </div>
  <div>Careers</div>
  <div>Offers</div>
  <div style="display: flex;">Partner with us &nbsp;
      <i class="fa fa-angle-down"> </i>
  </div>
</div>
<div id="navRight">
  <div id="navLoginSignup">
      <div id="login">Login</div>
      <div id="signup">Signup</div>
  </div>
  <div id="navLocation" style="cursor: pointer;">
      <img src="https://i.ibb.co/N160zRK/location.png" alt="">
      <button>
          <p id="location">Banglore</p>
      </button>
      <i class="fa fa-angle-down"></i>
  </div>
</div>
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
      <span class="close">&times;</span>
      <div id="modelTop">
          <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/logo-b03af389c15608bf4fa52378f448a48a9c8f92f70242cc88340e971e7599d6ae.png"
              alt="">
          <p style="font-weight: 300;"> | &nbsp; Rental Bike</p>
      </div>
      <div id="modelSearch">
          <div id="searchicon">
              <img src="https://i.ibb.co/4MPMFh4/search.png" alt="">
          </div>
          <div>
              <input type="text" placeholder="Search or type city to select">
          </div>
      </div>
      <div id="modelCity">

      </div>
  </div>

</div>
<script src="./nav.js"></script>

    `;
}
