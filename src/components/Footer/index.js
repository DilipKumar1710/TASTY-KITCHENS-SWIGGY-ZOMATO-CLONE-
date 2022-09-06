import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-and-heading-container">
        <img
          src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662271193/Frame_275footer_logo_virrgu.png"
          alt="website-footer-logo"
          className="footer-logo"
        />
        <h1 className="footer-heading">Tasty Kitchens</h1>
      </div>
      <p className="footer-description">
        The only thing we are serious about is food.
        <br />
        Contact Us on
      </p>
      <div className="social-media-apps-container">
        <FaPinterestSquare
          className="social-media-app"
          testid="pintrest-social-icon"
        />
        <FaInstagram
          className="social-media-app"
          testid="instagram-social-icon"
        />
        <FaTwitter className="social-media-app" testid="twitter-social-icon" />
        <FaFacebookSquare
          className="social-media-app"
          testid="facebook-social-icon"
        />
      </div>
    </div>
  )
}
