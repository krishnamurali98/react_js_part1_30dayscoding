import './App.css';
function App() {
    let a = 2;
    return (
        <div>
            <h1 className='main'>let a = {a}</h1>
            <h1>Hello I am from component</h1>
            <p style={{backgroundColor: 'red', color: 'white'}}>This is React</p>
        </div>
    );
}

export default App;