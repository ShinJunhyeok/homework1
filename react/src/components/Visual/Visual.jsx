import './Visual.scss';
import VisualBanner from './VisualBanner';
import { banners } from '../../assets/api/data';

const Visual = () => {
    return (
        <>
            <section id="visual">
                <VisualBanner data={banners} />
                <p className="btn-wrap">
                    <button className="btn prev">
                        <i className="xi-arrow-left"></i>
                    </button>
                    <button className="btn next">
                        <i className="xi-arrow-right"></i>
                    </button>
                </p>
                <ul className="paging">
                    <li className="on"></li>
                    <li></li>
                    <li></li>
                </ul>
                <p className="play">
                    <i className="xi-pause-circle"></i>
                </p>
            </section>
        </>
    );
};

export default Visual;
