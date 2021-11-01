import { toast } from 'react-toastify';

const showNotification = (message:string, type:any) => {
  toast(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type,
    progress: undefined,
    theme: 'colored',
  });
};

export const showAllNotifications = (notifications:string[], type:any) => {
  notifications.forEach((notification) => showNotification(notification, type));
};

export default showNotification;
