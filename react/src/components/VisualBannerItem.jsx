import './VisualBannerItem.scss';

const VisualBannerItem = ({ item }) => {
    const { imgurl } = item;
    return (
        <>
            <li>
                <img src={imgurl} alt="" />
            </li>
        </>
    );
};

export default VisualBannerItem;
