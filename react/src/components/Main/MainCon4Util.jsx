import MainCon4UtilItem from './MainCon4UtilItem';
import './MainCon4Util.scss';

const MainCon4Util = ({ data }) => {
    return (
        <>
            <ul>
                {data.map((item) => (
                    <MainCon4UtilItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default MainCon4Util;
