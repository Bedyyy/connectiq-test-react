function Footer() {
  return <>
    <footer>
      <div className="upper-footer">
        <div className="container">
            <div className="footer-content">
                <div className="fc1">
                    <h2>Exclusive</h2>
                    <h3>Subscribe</h3>
                    <p>Get 10% off your first order</p>
                    <div className="input-email">
                        <p>Enter your email</p>
                        <div className="send-icon">
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
                <div className="fc2">
                    <h3>Support</h3>
                    <p>Madison Park, Kiosk<br></br> E-06, Jakarta Barat,<br></br> Indonesia</p>
                    <p>admin@groupisa.com</p>
                    <p>+6281380804008</p>
                </div>
                <div className="fc3">
                    <h3>Account</h3>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="fc4">
                    <h3>Quick Link</h3>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="fc5">
                    <h3>Connect with us</h3>
                    <div className="social-icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  </>;
}

export default Footer;
