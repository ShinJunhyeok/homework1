import './MainCon4.scss';
import MainCon4News from './MainCon4News';
import MainCon4Util from './MainCon4Util';
import { news, util } from '../../assets/api/data';

const MainCon4 = () => {
    return (
        <>
            <div className="con-box con4">
                <div className="inner">
                    <h2>민속박물관 소식을 한눈에!</h2>
                    <p>오늘의 민속박물관 소식을 만나보세요.</p>
                    <div className="news-wrap">
                        <div className="box left">
                            <h3>민속박물관소식</h3>
                            <a href="#">
                                <strong>
                                    [롯데월드X제로월드] 두번째 방탈출 &lt;바람,우리는 그저
                                    바람이었소&gt; 오픈
                                </strong>
                                <span>2022.11.09</span>
                            </a>
                            <MainCon4News data={news} />
                            <p className="more">
                                <a href="">더보기</a>
                            </p>
                        </div>
                        <div className="box right">
                            <MainCon4Util data={util} />
                            <div>
                                <p>우리 고유의 옛멋과 품격을 선도합니다</p>
                                <p className="more">
                                    <a href="#">
                                        전통혼례바로가기<i className="xi-long-arrow-right"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainCon4;
