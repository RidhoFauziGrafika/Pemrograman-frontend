// membuat component Hello

function Hello(props){
    const {name, jurusan} = props;
    return (
        <div>
            <h2>Hello {name}</h2>
            <h3>nama saya {name} dengan jurusan {jurusan}</h3>
        </div>
    );
    
}
function Header(){
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

function Main(){
    return (
        <main>
            <Hello name="ridho" jurusan="Informatics"/>
            <Hello name="fauzi" jurusan="Informatics"/>
            <Hello name="grafika" jurusan="Arab"/>
        </main>
    );
}

function Footer(){
    return (
        <footer>
            <h2>copyright @ridhofaauzi</h2>
            <p>Created by react.js</p>
        </footer>
    );
}

function App(){
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>  
    );
}

// akses elemen root id
const rootElement = document.getElementById("root");

// buat react root untuk menampilkan component di browser
const root = ReactDOM.createRoot(rootElement);

// render component hello di root
root.render(<App/>);