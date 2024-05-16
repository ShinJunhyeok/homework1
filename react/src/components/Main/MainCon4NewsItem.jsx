import './MainCon4NewsItem.scss';

const MainCon4NewsItem = ({ item }) => {
    const { title, date } = item;
    return (
        <>
            <li>
                <a href="#">{title}</a>
                <span>{date}</span>
            </li>
        </>
    );
};

export default MainCon4NewsItem;
