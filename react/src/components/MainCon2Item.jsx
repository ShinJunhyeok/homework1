import './MainCon2Item.scss';
const MainCon2Item = ({ item }) => {
    const { imgurl, desc } = item;
    return (
        <>
            <li>
                <a href="#">
                    <img src={imgurl} alt={desc} />
                    <strong>{desc}</strong>
                </a>
            </li>
        </>
    );
};

export default MainCon2Item;
