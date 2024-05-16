import './MainCon3Item.scss';

const MainCon3Item = ({ item }) => {
    const { imgurl, desc } = item;
    return (
        <div>
            <li>
                <a href="#">
                    <img src={imgurl} alt={desc} />
                    <strong>{desc}</strong>
                </a>
            </li>
        </div>
    );
};

export default MainCon3Item;
