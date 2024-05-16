import Header from './components/Header/Header';
import Visual from './components/Visual/Visual';
import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <>
            <p id="skipNav">
                <a href="#content">본문바로가기</a>
            </p>
            <Header />
            <Visual />
            <Main />
            <Footer />
        </>
    );
}

export default App;
