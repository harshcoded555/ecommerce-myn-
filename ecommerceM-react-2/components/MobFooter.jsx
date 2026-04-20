import "bootstrap/dist/css/bootstrap.min.css";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="footer-wrapper mt-5">
      <div className="container py-5">
        <div className="row gy-4">

          {/* Shop */}
          <div className="col-6 col-md-3">
            <h6 className="footer-title">SHOP</h6>
            <ul className="footer-links">
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Home & Living</a></li>
              <li><a href="#">Beauty</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-6 col-md-3">
            <h6 className="footer-title">HELP</h6>
            <ul className="footer-links">
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Cancel Order</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="col-6 col-md-3">
            <h6 className="footer-title">ABOUT</h6>
            <ul className="footer-links">
              <li><a href="#">Company</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Extras */}
          <div className="col-6 col-md-3">
            <h6 className="footer-title">EXTRAS</h6>
            <ul className="footer-links">
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Myntra Insider</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="footer-copy">© 2026 Myntra Clone</div>

          <div className="footer-social d-flex gap-3">
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube />
          </div>

          <div className="d-flex gap-3 footer-policy">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>

      {/* Styling */}
      <style>{`
        .footer-wrapper {
          background: #fafafb;
          border-top: 1px solid #eaeaec;
        }

        .footer-title {
          font-weight: 600;
          font-size: 13px;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 6px;
        }

        .footer-links a {
          text-decoration: none;
          color: #696b79;
          font-size: 13px;
          transition: all 0.2s ease;
        }

        .footer-links a:hover {
          color: #ff3f6c;
          padding-left: 3px;
        }

        .footer-divider {
          margin: 30px 0 20px;
          opacity: 0.2;
        }

        .footer-copy {
          font-size: 13px;
          color: #94969f;
        }

        .footer-policy a {
          text-decoration: none;
          font-size: 13px;
          color: #94969f;
        }

        .footer-policy a:hover {
          color: #ff3f6c;
        }

        .footer-social svg {
          cursor: pointer;
          color: #696b79;
          transition: all 0.2s ease;
        }

        .footer-social svg:hover {
          color: #ff3f6c;
          transform: scale(1.1);
        }
      `}</style>
    </footer>
  );
}