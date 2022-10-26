class Banco {
    constructor(nombre, id, tasa12, tasa24, tasa36) {
      this.nombre = nombre;
      this.id = id;
      this.tasa12 = tasa12;
      this.tasa24 = tasa24;
      this.tasa36 = tasa36;
    }
  }
  
  const bancoNacion = new Banco("Banco Nacion", 1, 10, 11, 12);
  const bancoGalicia = new Banco("Banco Galicia", 2, 12, 14, 15);
  const bancoFrances = new Banco("Banco Frances", 3, 8, 11, 14);
  
  console.log(bancoNacion, bancoGalicia, bancoFrances)
  
  const bancoSeleccionado = parseInt(
    prompt("Ingresa el N° de banco con el que desea cotizar? 1.Banco Nacio 2.Banco Galicia 3.Banco Frances")
  );

  let escogioBanco = false
  let infoBancoSeleccionado
  
  while (escogioBanco === false) {
    if (bancoSeleccionado === bancoNacion.id) {
      escogioBanco = true
      infoBancoSeleccionado = bancoNacion;
    } else if (bancoSeleccionado === bancoGalicia.id) {
      escogioBanco = true
      infoBancoSeleccionado = bancoGalicia
    } else if (bancoSeleccionado === bancoFrances.id) {
      escogioBanco = true
      infoBancoSeleccionado = bancoFrances;
    } else {
      bancoSeleccionado = parseInt(
        prompt(
          "Ingresa el N° de banco con el que desea cotizar? 1.BancoNacio 2.BancoGalicia 3.BancoFrances"
        )
      );
    }
  }
  console.log("Banco Seleccionado ", infoBancoSeleccionado)
  let montoAPrestar = parseInt(prompt("Ingresa el monto que deseas prestar"))
  const cuota12 = calcularCuotaMensual(
    montoAPrestar,
    infoBancoSeleccionado.tasa12,
    12
  )
  const cuota24 = calcularCuotaMensual(
    montoAPrestar,
    infoBancoSeleccionado.tasa24,
    24
  )
  const cuota36 = calcularCuotaMensual(
    montoAPrestar,
    infoBancoSeleccionado.tasa36,
    36
  )
  console.log(cuota12, cuota24, cuota36)
  alert(
    `las opciones que te ofrece ${infoBancoSeleccionado.nombre} son: 1.${cuota12} a 12 meses - 1.${cuota24} a 24 meses - 1.${cuota36} a 36 meses `
  );
  
  function calcularCuotaMensual(valor, interes, meses) {
    const cuota = (valor + (valor * interes) / 100) / meses;
    return cuota;
  }