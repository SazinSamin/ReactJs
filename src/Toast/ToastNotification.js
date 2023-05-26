import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ToastNotification () {


  const initToast = () => {
    toast("Here I am the toast")
  }

  return (<div>
    <h1>Toast Notification</h1>
    <button onClick={initToast}>Test Notification</button>
    <ToastContainer></ToastContainer>
  </div>)
}