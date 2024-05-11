import MainCon2Item from './MainCon2Item';
import './MainCon2List.scss';

const MainCon2List = ({ data }) => {
    return (
        <>
            <ul>
                {data.map((item) => (
                    <MainCon2Item key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default MainCon2List;
