import Card from "./componenets/Card"


function App() {
    return <div>
        <h1 className="header">Todo App</h1>
        {/* send props like attribut */}
        <Card title="Read book" desc="To gain knowledge"/>
        <Card title= "Watch a movie" desc="Learn a new language" />
    </div>
}

export default App;