export default function ChildComponent (props) {

  const data = "This data is from Child component"

  props.sendData(data);

  return <div>
    <h1>I am ChildComponent</h1>
  </div>
}