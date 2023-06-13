import Button from "./Button"
import Card from "./Card"

export default function App() {


  return <>
    <Card>
      <h1>I am a card</h1>
    </Card>
    
    <Button>
      Click me
    </Button>
    <Button>
      Submit
    </Button>

    <Card>
      <Button>
        Button inside card
      </Button>
    </Card>
    
  </>
}
