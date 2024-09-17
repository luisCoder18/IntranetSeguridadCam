function ContactPage() {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-lg mb-6">Información de contacto para consultas o soporte.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input type="text" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium">Correo Electrónico</label>
            <input type="email" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium">Mensaje</label>
            <textarea className="mt-1 p-2 border rounded w-full" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">Enviar</button>
        </form>
      </div>
    );
  }
  
  export default ContactPage;
  