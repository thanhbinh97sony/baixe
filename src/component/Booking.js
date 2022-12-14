import React, { useState } from 'react'
import './Booking.css'

const Booking = () => {

    const [lastname, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [bienso, setBienSo] = useState(null);
    const [vitri, setViTri] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "lastname") {
            setLastName(value);
        }
        if (id === "phone") {
            setPhone(value);
        }
        if (id === "bienso") {
            setBienSo(value);
        }
        if (id === "vitri") {
            setViTri(value);
        }
    }

    const handleSubmit = () => {
        console.log(lastname, phone, bienso, vitri);
    }

    return (
        <div className="form">
            <div className="form-body">
                <div className="lastname">
                    <label className="form__label" for="lastname">Họ và tên </label>
                    <input type="text" name="" id="lastname" className="form__input" placeholder="Họ và tên" value={lastname} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="phone">
                    <label className="form__label" for="phone">Số điện thoại </label>
                    <input type="text" id="phone" className="form__input" placeholder="Số điện thoại" value={phone} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="bienso">
                    <label className="form__label" for="password">Biển số </label>
                    <input className="form__input" type="text" id="bienso" placeholder="Biển số" value={bienso} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="vitri">
                    <label className="form__label" for="confirmPassword">Vị trí </label>
                    <input className="form__input" type="text" id="vitri" placeholder="Vị trí" value={vitri} onChange={(e) => handleInputChange(e)} />
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>Đặt lịch</button>
            </div>
        </div>
    )
}

export default Booking