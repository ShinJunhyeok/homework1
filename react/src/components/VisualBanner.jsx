import VisualBannerItem from './VisualBannerItem';
import './VisualBanner.scss';

const VisualBanner = ({ data }) => {
    return (
        <>
            <ul className="main-banner">
                {data.map((item) => (
                    <VisualBannerItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default VisualBanner;
