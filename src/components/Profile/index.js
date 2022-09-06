import {IoIosArrowDown} from 'react-icons/io'
import {FaRupeeSign} from 'react-icons/fa'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {FcApproval, FcCheckmark} from 'react-icons/fc'
import Header from '../Header'
import './index.css'

const Profile = () => (
  <>
    <Header activeTabId="Profile" />
    <div className="profile-container">
      <div className="name-edit">
        <h1 className="name">
          DILIP KUMAR
          <BsFillPersonCheckFill className="profile-name-icon" />
        </h1>
        <button type="button" className="edit-button">
          EDIT
        </button>
      </div>
      <p className="profile-desc">dilipkumar.vaddepally141@gmail.com</p>
      <hr className="profile-line" />

      <div className="profile-section">
        <div className="acc-main">
          <h1 className="profile-head">My Account</h1>
          <IoIosArrowDown color="#909090" />
        </div>
        <p className="profile-desc">Address, Favorites, Offers & Settings...</p>
      </div>
      <hr className="underline" />

      <div className="profile-section">
        <div className="acc-main">
          <h1 className="profile-head">Payments & Refunds</h1>
          <IoIosArrowDown color="#909090" />
        </div>
        <p className="profile-desc">Manage your Refunds, Payment Modes...</p>
      </div>
      <hr className="underline" />

      <div className="profile-section">
        <div className="acc-main">
          <h1 className="profile-head">
            <FcApproval /> PRO membership
          </h1>
        </div>
        <p className="profile-desc">
          Get Unlimited Free Delivery & Extra Discounts with Tasty Kitchens PRO.
          Buy @199 for 1 month.
        </p>
      </div>
      <hr className="underline" />

      <h1 className="profile-head"> PAST ORDERS </h1>

      <div className="item-delivery">
        <h1 className="profile-head">Cream Stone</h1>
        <p className="profile-desc">
          Delivered <FcCheckmark />
        </p>
      </div>
      <p>Keerthi Nagar</p>
      <p className="profile-desc">
        <FaRupeeSign /> 525
      </p>
    </div>
  </>
)
export default Profile
