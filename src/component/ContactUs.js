import React from "react";
import SimpleMap from "./SimpleMap";

const ContactUs = () => {
  return (
    <div>
      <SimpleMap />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info">
              <div className="info_item">
                <i className="lnr lnr-home"></i>
                <h6>Tân Phú, Thành phố Hồ Chí Minh</h6>
                <p>140 Lê Trọng Tấn</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-phone-handset"></i>
                <h6>
                  <p>(84-28) 38 161 673</p>
                </h6>
                <p>Thứ 2 đến thứ 7 (7h-16h)</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-envelope"></i>
                <h6>
                  <p>cntp@cntp.edu.vn</p>
                </h6>
                <p>Gửi cho chúng tôi truy vấn của bạn bất cứ lúc nào!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
