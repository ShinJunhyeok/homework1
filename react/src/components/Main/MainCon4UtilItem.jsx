import './MainCon4UtilItem.scss';

const MainCon4UtilItem = ({ item }) => {
    const { desc } = item;
    return (
        <>
            <li>
                <a href="#">
                    <span>{desc}</span>
                </a>
            </li>
        </>
    );
};

export default MainCon4UtilItem;
