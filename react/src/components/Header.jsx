import './Header.scss';
import HeaderNav from './HeaderNav';
import HeaderTopMenu from './HeaderTopMenu';
const Header = () => {
    return (
        <>
            <header id="header">
                <div className="inner">
                    <h1>
                        <a href="index.html">
                            <img
                                src="https://adventure.lotteworld.com/common_mus/images/logo.png"
                                alt="lotte world"
                            />
                        </a>
                    </h1>
                    <HeaderTopMenu />
                    <HeaderNav />
                </div>
            </header>
        </>
    );
};

export default Header;
