import React, { useState } from "react";
import Navbar from "../componentes/assets/navbar";
import Footer from "../componentes/assets/Footer";
import calendarioIcono from "../assets/icons/calendario.png";

function AppointmentPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState(""); // Nuevo estado para el mensaje

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !email || !phone || !date || !time || !service){
      setMessage("Por favor rellena todos los campos")
      return;
    }
  
    const payload = {
      name: name,
      email: email,
      phone: phone,
      date: date,
      time: time,
      service: service
    };
  
    try {
      const response = await fetch('http://localhost:3001/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        console.log("Datos del formulario enviados correctamente");
        setMessage("La cita se ha creado con éxito."); // Actualiza el mensaje de éxito
        // Resetear los estados de los campos del formulario
        setName('');
        setDate('');
        setEmail('');
        setPhone('');
        setService('');
        setTime('');
        // Realizar alguna acción adicional aquí después de enviar los datos
      } else {
        console.error("Error al enviar los datos del formulario:", response.statusText);
      }
    } catch (error) {
      console.error("Error al enviar los datos del formulario:", error.message);
    }
  };

  return (
    <div className="App text-start bg-customD">
      <Navbar />
      <div className="flex justify-center items-start">
      <div className="message-container">
        {message && <p className={`text-customA ${message && 'fade-in'}`}>{message}</p>}
      </div>
      <form
          className="bg-customB shadow-md rounded mt-16 px-6 pt-6 pb-8 mb-8 w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          
          <div className="mb-4">
            <label
              className="block text-customA text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-customA text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo electrónico:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-customA text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Teléfono:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-customA text-sm font-bold mb-2 required:*"
              htmlFor="date"
            >
              Fecha:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="Fecha"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-customA text-sm font-bold mb-2"
              htmlFor="time"
            >
              Hora:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              type="time"
              placeholder="Hora"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-customA text-sm font-bold mb-2"
              htmlFor="service"
            >
              Servicio:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Seleccionar servicio</option>
              <option value="Corte de cabello">Corte de cabello</option>
              <option value="Afeitado">Afeitado</option>
              <option value="Coloración">Coloración</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-customE hover:text-primary text-customD font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
              type="submit"
            >
              <span className="mr-2">
                <img
                  src={calendarioIcono}
                  alt="Calendario"
                  className="w-6 h-6"
                />
              </span>
              Agendar cita
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AppointmentPage;
