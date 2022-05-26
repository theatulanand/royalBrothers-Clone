export const navbar = () => {
  return `
    <div id="navLogoDiv">
    <img src="https://i.ibb.co/WK768hX/download.png" alt="logo" id = "navLogo">
</div>
<div id="navOptions">
        <div> <a href="tariff.html">Tarrif</a> </div>
        <div style="display: flex;">What's new &nbsp;
            <i class="fa fa-angle-down"> </i>
        </div>
        <div >  <a href="offer.html"> Offers </a></div>
        <div style="display: flex;">Partner with us &nbsp;
            <i class="fa fa-angle-down"> </i>
        </div>

</div>
<div id="navRight">
    <div id="navLoginSignup">
        <div id="login">Login</div>
        <div id="signup">Signup</div>
    </div>
    <div id="navLocation">
        <img src=" https://i.ibb.co/dkkvtXQ/location.png" alt="">
    </div>
</div>

    `;
}
