import MainCon4NewsItem from './MainCon4NewsItem';

const MainCon4News = ({ data }) => {
    return (
        <>
            <ul>
                {data.map((item) => (
                    <MainCon4NewsItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default MainCon4News;
