function generarCodigo() {
    // Caracteres permitidos para el código
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    // Longitud del código
    const longitudCodigo = 10;
  
    let codigoGenerado = "";
  
    // Generar el código aleatorio
    for (let i = 0; i < longitudCodigo; i++) {
      const indiceCaracter = Math.floor(Math.random() * caracteres.length);
      codigoGenerado += caracteres.charAt(indiceCaracter);
    }
  
    // Obtener una fecha aleatoria dentro de los próximos 7 días
    const fechaActual = new Date();
    const fechaLimite = new Date(fechaActual);
    fechaLimite.setDate(fechaActual.getDate() + 7);
  
    // Calcular una fecha aleatoria entre hoy y los próximos 7 días
    const fechaGeneracion = new Date(fechaActual.getTime() + Math.random() * (fechaLimite.getTime() - fechaActual.getTime()));
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const fechaFormato = fechaGeneracion.toLocaleDateString('es-ES', options);
  
    // Mostrar el código y la fecha en la página
    document.getElementById("codigoGenerado").innerText = codigoGenerado;
    document.getElementById("fechaGeneracion").innerText = fechaFormato;
  }
  
  // Asignar el evento clic al botón
  document.getElementById("buttonCodigo").addEventListener("click", generarCodigo);
  