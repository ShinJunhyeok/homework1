import './Footer.scss';
import FooterFamily from './FooterFamily';
import FooterInfo from './FooterInfo';
import FooterLink from './FooterLink';

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="inner">
                    <FooterLink />
                    <FooterInfo />

                    <div className="family">
                        <p className="title">
                            <a href="#">계열사 관련 사이트</a>
                        </p>
                        <FooterFamily />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
