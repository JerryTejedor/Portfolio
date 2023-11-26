import React, { useRef, useState } from 'react';
import img_left from '../assets/img/contact-img.svg';
import emailjs from '@emailjs/browser';
import './Contact.css';
import CustomAlert from './CustomAlert'; // Ajusta la ruta según la ubicación real del archivo

const Contact = () => {
  // Referencia al formulario
  const refForm = useRef();
  // Estado para el indicador de carga
  const [isLoading, setIsLoading] = useState(false);
  // Estado para la alerta personalizada
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Manejador para mostrar la alerta personalizada
  const showAlert = (message) => {
    setAlertMessage(message);
    setIsAlertVisible(true);
  };

  // Manejador para cerrar la alerta
  const handleAlertClose = () => {
    setIsAlertVisible(false);
  };

  // Manejador para el envío del formulario
  const handleSutmit = async (event) => {
    event.preventDefault();

    const serviceId = 'service_o4md0aq';
    const templateId = 'template_7387ozh';
    const apiKey = 'EsMlybFYXVSn8YGVW';

    // Mostrar el indicador de carga
    setIsLoading(true);

    try {
      // Envío del formulario utilizando emailjs
      await emailjs.sendForm(serviceId, templateId, refForm.current, apiKey);
      // Mostrar alerta cuando el formulario se envíe correctamente
      showAlert('¡Se envió correctamente!');
    } catch (error) {
      console.log(error);
      // Manejar errores y mostrar una alerta de error
      showAlert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      // Ocultar el indicador de carga, ya sea que el envío haya tenido éxito o no
      setIsLoading(false);
    }
  };

  return (
    <div id='contact'>
      <form className='contact' ref={refForm} action='' onSubmit={handleSutmit}>
        <div className='left-contact'>
          <img src={img_left} alt='' />
        </div>
        <div className='right-contact'>
          <h1>Contacto</h1>
          <div className='right-contact__form'>
            <div className='contact-from__input'>
              <div className='left-input'>
                {/* Campo de entrada para el nombre */}
                <fieldset className='field-name'>
                  <label htmlFor='' className='symbol-requiered name'>
                    Nombre
                  </label>
                  <input name='name' type='text' placeholder='Ejemplo Dev' autoComplete='no' required />
                </fieldset>

                {/* Campo de entrada para el correo electrónico */}
                <fieldset className='field-email'>
                  <label htmlFor='' className='symbol-requiered name'>
                    Correo
                  </label>
                  <input name='email' type='email' placeholder='Ejemplo@gmail.com' id='email' autoComplete='none' required />
                </fieldset>
              </div>

              <div className='right-input'>
                {/* Campo de entrada para el apellido */}
                <fieldset className='field-firsname'>
                  <label htmlFor='' className='symbol-requiered name'>
                    Segundo Nombre
                  </label>
                  <input name='firsname' type='text' placeholder='Segundo Nombre  *opcional*' id='firstname' />
                </fieldset>

                {/* Campo de entrada para el número de teléfono */}
                <fieldset className='field-number'>
                  <label htmlFor='' className='symbol-requiered name'>
                    N°. Telefonico
                  </label>
                  <input className='number' name='firsname' type='number' placeholder='31000000000 *opcional*' id='firstname' autoComplete='none' />
                </fieldset>
              </div>
            </div>

            {/* Campo de entrada para el mensaje */}
            <fieldset className='field-message'>
              <label htmlFor='' className='symbol-requiered'>
                Mensaje
              </label>
              <textarea maxLength='500' name='message' id='' cols='30' rows='10' placeholder='Mensaje'></textarea>
            </fieldset>
          </div>
          {/* Botón de envío del formulario */}
          <button className='btn-send' type='submit' disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>

      {/* Alerta personalizada */}
      {isAlertVisible && <CustomAlert message={alertMessage} onClose={handleAlertClose} />}
    </div>
  );
};

export default Contact;






































