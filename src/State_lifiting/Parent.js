import ChildComponent from "./Child"

export default function ParentComponent () {

  const handleChildData = (childData) => {
    console.log(childData);
  }

  return <div>
    <h1>I am ParentComponent</h1>
    <ChildComponent sendData={handleChildData}/>
  </div>
}