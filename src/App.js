import Card from "./componenets/Card";
import data from "./data.json";


function App() {
    return <div>
        <h1 className="header">Todo App</h1>
        {/* Mapping data to components */}
        {data.map(item => <Card key={item.id} title={item.title} author={item.author} created_at={item.created_at}/>)}
        {/* Each child in a list should have a unique "key" prop. */}
    </div>
}

export default App;