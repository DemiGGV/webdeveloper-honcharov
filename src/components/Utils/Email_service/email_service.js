import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

emailjs.init({
  publicKey: publicKey,
  blockHeadless: true,
  limitRate: {
    id: 'app',
    throttle: 5000,
  },
});

export const email_send = (email) => {
  console.log(publicKey, serviceId, templateId)
  emailjs.send(serviceId, templateId, email).then(
    () => {
      toast.success('Sending an email - SUCCESS!');
    },
    (e) => {
      toast.error(`Sending an email - ERROR!`);
      console.log(e)
    },
  );
};
