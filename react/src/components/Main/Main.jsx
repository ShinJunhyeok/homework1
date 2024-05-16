import './Main.scss';
import MainCon1 from './MainCon1';
import MainCon2 from './MainCon2';
import MainCon3 from './MainCon3';
import MainCon4 from './MainCon4';
const Main = () => {
    return (
        <>
            <main id="container" className="main">
                <section id="content">
                    <MainCon1 />
                    <MainCon2 />
                    <MainCon3 />
                    <MainCon4 />
                </section>
            </main>
        </>
    );
};

export default Main;
