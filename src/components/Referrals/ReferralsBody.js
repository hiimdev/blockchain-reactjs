import React, { useState } from "react";
import AccountPopup from '../AccountPopup/AccountPopup';
import { images } from "../../constants";
import Network from "../Network/Network";
import "../Pay/PayBody.css";
const NotiBody = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="homebody">
      <div className="homebody__header">
        <div className="homebody__head-logo">
          <img src={images.DynamicIcon} alt="dynamicicon" />
        </div>
        <p className="homebody__header-title">Referrals</p>
        <div className="homebody__list">
          <a href="#overlay" className="homebody__list-item_ethereum">
            <img src={images.Rectangle287} alt="rectangle" />
            <p className="homebody__list-item_ethereum-text">Ethereum</p>
          </a>
          <div id="overlay">
            <Network />
          </div>
          <div className="homebody__list-item_notify">
            <img
              className="img-bell"
              src={images.NotificationsIcon}
              alt="notify"
            />
            <img
              className="img-alert"
              src={images.Notificationalert}
              alt="notifyalert"
            />
          </div>

          <div className="dash" />
          <div className="homebody__list-item_avatar">
            <a>
              <img
                src={images.ProfilePic}
                alt="profile"
                onClick={() => setIsOpen(true)}
              />
            </a>
            <AccountPopup open={isOpen} onClose={() => setIsOpen(false)}>
              <AccountPopup />
            </AccountPopup>
          </div>
        </div>
      </div>
      <div className="referrals-box">
        <div className="title-text">
          <h1 className="referrals-title">Invite & Earn</h1>
          <p className="referrals-text-title">After your referred user deposits $100+ in any vault, you both will be rewarded with $10 paid in DYNA automatically.</p>
        </div>
        <div className="link-coppy">
          <p className="your-link">Your Link:</p>
          <div className="link-left">
            <p className="link-text">app.dynamic.fi/join/cameron</p>
          </div>
          <div className="link-right">
            <p className="coppy-referrals">Coppy</p>
          </div>

        </div>
        <div className="referrals-line">
          <div className="line-option one"></div>
          <div className="or">Or</div>
          <div className="line-option two"></div>
        </div>
        <div className="referrals-icon">
          <img src={images.Intagram} alt="" className="icon-center" />
          <img src={images.Whatsapp} alt="" className="icon-center" />
          <img src={images.Discord} alt="" className="icon-center" />
          <img src={images.Telegram} alt="" className="icon-center" />
        </div>
        <br />
        <p className="your-link">Your earnings:</p>
        <div className="referrals-there-bot">
          <div className="earnings-ref">
            <img src={images.referrals_avata1} alt="" className="ref-avata"/>
            <p className="text-earnings text-ref">@christian deposited $100+ in a vault!</p>
            <p className="text-earnings color-text-ref">+$10 DYNA</p>
          </div>

          <div className="earnings-ref">
            <img src={images.referrals_avata2} alt="" className="ref-avata"/>
            <p className="text-earnings text-ref">@james deposited $100+ in a vault!</p>
            <p className="text-earnings color-text-ref">+$10 DYNA</p>
          </div>

          <div className="earnings-ref">
            <img src={images.referrals_avata3} alt="" className="ref-avata"/>
            <p className="text-earnings text-ref">@brandon deposited $100+ in a vault!</p>
            <p className="text-earnings color-text-ref">+$10 DYNA</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotiBody;
