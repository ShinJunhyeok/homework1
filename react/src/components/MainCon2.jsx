import './MainCon2.scss';
import MainCon2List from './MainCon2List';
import { con2 } from '../assets/api/data';

const MainCon2 = () => {
    return (
        <>
            <div className="con-box con2">
                <div className="inner">
                    <h2>시대별 문화를 즐길 수 있는 전시</h2>
                    <p>현재 진행 중인 전시를 알아보세요.</p>
                    <MainCon2List data={con2} />
                </div>
            </div>
        </>
    );
};

export default MainCon2;
