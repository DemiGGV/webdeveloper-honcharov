import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// const publicKey = import.meta.env.VITE_PUBLIC_KEY;
// const serviceId = import.meta.env.VITE_SERVICE_ID;
// const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = '_fc5lvapttQECnMGG';
const serviceId = 'service_mb64pcv';
const templateId = 'template_haov9xh';


emailjs.init({
  publicKey: publicKey,
  blockHeadless: true,
  limitRate: {
    id: 'app',
    throttle: 5000,
  },
});

export const email_send = (email) => {
  emailjs.send(serviceId, templateId, email).then(
    () => {
      toast.success('Sending an email - SUCCESS!');
    },
    () => {
      toast.error(`Sending an email - ERROR!`);
    },
  );
};
