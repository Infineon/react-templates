import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ShowToaster = (message, type="error") => {
    toast[type](message);
    <ToastContainer />
}