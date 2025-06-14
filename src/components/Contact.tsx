import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Contact() {
  const { t } = useTranslation();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');

  const handleClose = () => {
    setOpen(false);
  };


  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_pzx3k2o', 'template_398ybum', templateParams, 'LlFNPFhsgEm4RFK6z').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setAlertMessage('Message sent successfully!');
          setAlertSeverity('success');
          setOpen(true);
        },
        (error) => {
          console.log('FAILED...', error);
          setAlertMessage('Failed to send message. Please try again.');
          setAlertSeverity('error');
          setOpen(true);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }}>
          {alertMessage}
        </MuiAlert>
      </Snackbar>
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t(`HomePage.Contact.Title`)}</h1>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label={t(`HomePage.Contact.Name.label`)}
                placeholder={t(`HomePage.Contact.Name.placeholder`)}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? (t('HomePage.Contact.Name.helperText') as string) : ""}
              />
              <TextField
                required
                id="outlined-required"
                label={t(`HomePage.Contact.Email.label`)}
                placeholder={t(`HomePage.Contact.Email.placeholder`)}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? (t(`HomePage.Contact.Email.helperText`) as string) : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label={t(`HomePage.Contact.Message.label`)}
              placeholder={t(`HomePage.Contact.Message.placeholder`)}
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? (t(`HomePage.Contact.Message.helperText`) as string) : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              {t(`HomePage.Contact.Send`)}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;