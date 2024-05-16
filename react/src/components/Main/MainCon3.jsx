import './MainCon3.scss';
import MainCon3List from './MainCon3List';
import { con3 } from '../../assets/api/data';

const MainCon3 = () => {
    return (
        <>
            <div className="con-box con3">
                <div className="inner">
                    <h2>민속박물관의 즐겁고 다양한 프로그램</h2>
                    <p>다양한 프로그램을 확인해보세요.</p>
                    <MainCon3List data={con3} />
                </div>
            </div>
        </>
    );
};

export default MainCon3;
