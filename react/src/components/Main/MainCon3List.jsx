import MainCon3Item from './MainCon3Item';
import './MainCon3List.scss';

const MainCon3List = ({ data }) => {
    return (
        <>
            <ul>
                {data.map((item) => (
                    <MainCon3Item key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default MainCon3List;
