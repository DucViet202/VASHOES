import React from 'react';

import './Footer.css';

function Footer() {

    return (
        <section className="footer">
            <hr className="footer-seperator" />
            <section className="footer-social-media">
                <a href="/" target="_blank" rel="noopener noreferrer">VASHOES</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-info__name">
                        Members
                    </section>
                    <section className="footer-info__returns">
                        Nguyễn Đức Việt
                        <br />
                        Đinh Hoàng Anh Duy
                    </section>
                </section>
                <section className="footer-info-center">
                    <section className="footer-info__email">
                        VASHOES@gmail.com
                    </section>
                    <section className="footer-info__terms">
                        Terms and Conditions
                        <br />
                        © Copyright 2024
                    </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-info__number">
                        Liên hệ
                        <br />
                        0123456789
                    </section>
                    <section className="footer-info__contact">
                        Địa Chỉ
                        <br />
                        123 Nguyễn Ảnh Thủ, Phường Hiệp Thành, Quận 12, TP.HCM
                    </section>
                </section>
            </section>
            <hr className="footer-seperator" />
        </section>
    )

}

export default Footer;