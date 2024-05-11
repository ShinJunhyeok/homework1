import Header from './components/Header';
import Visual from './components/Visual';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
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
