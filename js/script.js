let API_azure = 'https://api-dw.azure-api.net/v1/api/v1/clientes/';
let API_URL = 'https://localhost:7053/api/v1/';

function getByID(tipo) {
    let tbody = document.getElementById('detalle');
    tbody.innerHTML = '';
    
    if(tipo == 1)
    {
        let id = document.getElementById('clienteid').value;
        if (id == '') 
        {
            alert('Debe especificar el ID');
            return ;
        }
        
        console.log(API_URL);
        fetch(API_URL+'clientes/'+id)
            .then(respuesta => respuesta.json())
            .then(
                data => {
                    let fila = tbody.insertRow();
                        
                    let idCelda = fila.insertCell(0);
                    let nombreCelda = fila.insertCell(1);
                    let telefonoCelda = fila.insertCell(2);
                    let direccionCelda = fila.insertCell(3);

                    idCelda.innerHTML = data.clienteId;
                    nombreCelda.innerHTML = data.nombre;
                    telefonoCelda.innerHTML = data.telefono;
                    direccionCelda.innerHTML = data.direccion;
            
                    tbody.appendChild(fila);
                    console.log(data);
                }
            )
        ;
    }
    else if(tipo == 2) 
    {
        let id = document.getElementById('facturaid').value;
        if (id == '') 
        {
            alert('Debe especificar el Número de Factura');
            return ;
        }

        fetch(API_URL+'facturas/'+id)
            .then(respuesta => respuesta.json())
            .then(
                data => {
                    let fila = tbody.insertRow();
                        
                    let idCelda = fila.insertCell(0);
                    let estadoCelda = fila.insertCell(1);
                    let descCelda = fila.insertCell(2);
                    let fechaCelda = fila.insertCell(3);
                    let vencimCelda = fila.insertCell(4);
                    let totalCelda = fila.insertCell(5);
                    let clienteCelda = fila.insertCell(6);
                    let cliNombreCelda = fila.insertCell(7);

                    idCelda.innerHTML = data.facturaId;
                    estadoCelda.innerHTML = data.estado;
                    descCelda.innerHTML = data.descripcion;
                    fechaCelda.innerHTML = data.fecha;
                    vencimCelda.innerHTML = data.vencimiento;
                    totalCelda.innerHTML = data.total;
                    clienteCelda.innerHTML = data.clienteId;
                    cliNombreCelda.innerHTML = data.cliente.nombre;
            
                    tbody.appendChild(fila);
                    console.log(data);
                }
            )
        ;
    }
    else if(tipo==3)
    {
        let id = document.getElementById('movimientoid').value;
        if (id == '') 
        {
            alert('Debe especificar el Número de Factura');
            return ;
        }

        fetch(API_URL+'movimientos/'+id)
            .then(respuesta => respuesta.json())
            .then(
                data => {
                    let fila = tbody.insertRow();
                            
                    let idCelda = fila.insertCell(0);
                    let fechaMovCelda = fila.insertCell(1);
                    let totalPagCelda = fila.insertCell(2);
                    let numFactCelda = fila.insertCell(3);
                    let estadoFactCelda = fila.insertCell(4);
                    let fechaFactCelda = fila.insertCell(5);
                    let vencimFactCelda = fila.insertCell(6);
                    let valorFactCelda = fila.insertCell(7);
                    let clienteCelda = fila.insertCell(8);
                    let cliNombreCelda = fila.insertCell(9);

                    idCelda.innerHTML = data.movimientoId;
                    fechaMovCelda.innerHTML = data.fecha;
                    totalPagCelda.innerHTML = data.totalPago;
                    numFactCelda.innerHTML = data.factura.facturaId;
                    estadoFactCelda.innerHTML = data.factura.estado;
                    fechaFactCelda.innerHTML = data.factura.fecha;
                    vencimFactCelda.innerHTML = data.factura.vencimiento;
                    valorFactCelda.innerHTML = data.factura.total;
                    clienteCelda.innerHTML = data.factura.clienteId;
                    cliNombreCelda.innerHTML = data.factura.cliente.nombre;
                
                    tbody.appendChild(fila);
                    console.log(data);
                }
            )
        ;
    }
}

function getAll(tipo) {
    let tbody = document.getElementById('detalle');
    tbody.innerHTML = '';
    
    if(tipo==1)
    {
        fetch(API_URL+'clientes/')
        .then(respuesta => respuesta.json())
        .then(
            data => {
                for (let i = 0; i < data.length; i++) {
                    let fila = tbody.insertRow(i);
                    
                    let idCelda = fila.insertCell(0);
                    let nombreCelda = fila.insertCell(1);
                    let telefonoCelda = fila.insertCell(2);
                    let direccionCelda = fila.insertCell(3);
            
                    idCelda.innerHTML = data[i].clienteId;
                    nombreCelda.innerHTML = data[i].nombre;
                    telefonoCelda.innerHTML = data[i].telefono;
                    direccionCelda.innerHTML = data[i].direccion;
            
                    tbody.appendChild(fila);
                }
                console.log(data);
            }
        )
    ;
    }
    else if(tipo==2)
    {
        fetch(API_URL+'facturas/')
        .then(respuesta => respuesta.json())
        .then(
            data => {
                for (let i = 0; i < data.length; i++) {
                    let fila = tbody.insertRow(i);
                        
                    let idCelda = fila.insertCell(0);
                    let estadoCelda = fila.insertCell(1);
                    let descCelda = fila.insertCell(2);
                    let fechaCelda = fila.insertCell(3);
                    let vencimCelda = fila.insertCell(4);
                    let totalCelda = fila.insertCell(5);
                    let clienteCelda = fila.insertCell(6);
                    let cliNombreCelda = fila.insertCell(7);

                    idCelda.innerHTML = data[i].facturaId;
                    estadoCelda.innerHTML = data[i].estado;
                    descCelda.innerHTML = data[i].descripcion;
                    fechaCelda.innerHTML = data[i].fecha;
                    vencimCelda.innerHTML = data[i].vencimiento;
                    totalCelda.innerHTML = data[i].total;
                    clienteCelda.innerHTML = data[i].clienteId;
                    cliNombreCelda.innerHTML = data[i].cliente.nombre;
            
                    tbody.appendChild(fila);
                }
                console.log(data);
            }
        )
    ;
    }
    else if(tipo==3)
    {
        fetch(API_URL+'movimientos/')
        .then(respuesta => respuesta.json())
        .then(
            data => {
                for (let i = 0; i < data.length; i++) {
                    let fila = tbody.insertRow(i);
                        
                    let idCelda = fila.insertCell(0);
                    let fechaMovCelda = fila.insertCell(1);
                    let totalPagCelda = fila.insertCell(2);
                    let numFactCelda = fila.insertCell(3);
                    let estadoFactCelda = fila.insertCell(4);
                    let fechaFactCelda = fila.insertCell(5);
                    let vencimFactCelda = fila.insertCell(6);
                    let valorFactCelda = fila.insertCell(7);
                    let clienteCelda = fila.insertCell(8);
                    let cliNombreCelda = fila.insertCell(9);

                    idCelda.innerHTML = data[i].movimientoId;
                    fechaMovCelda.innerHTML = data[i].fecha;
                    totalPagCelda.innerHTML = data[i].totalPago;
                    numFactCelda.innerHTML = data[i].factura.facturaId;
                    estadoFactCelda.innerHTML = data[i].factura.estado;
                    fechaFactCelda.innerHTML = data[i].factura.fecha;
                    vencimFactCelda.innerHTML = data[i].factura.vencimiento;
                    valorFactCelda.innerHTML = data[i].factura.total;
                    clienteCelda.innerHTML = data[i].factura.clienteId;
                    cliNombreCelda.innerHTML = data[i].factura.cliente.nombre;
            
                    tbody.appendChild(fila);
                }
                console.log(data);
            }
        )
    ;
    }    
}

function generarEstadoDeCuenta() {
    let tbody = document.getElementById('detalle');
    tbody.innerHTML = '';
    let id = document.getElementById('clienteid').value;
    if (id == '') 
    {
        alert('Debe especificar el Codigo del Cliente');
        return ;
    }

    fetch(API_URL+'reportes/'+id)
        .then(respuesta => respuesta.json())
        .then(
            data => {
                for (let i = 0; i < data.length; i++) {
                    let fila = tbody.insertRow(i);
                        
                    let clienteCelda = fila.insertCell(0);
                    let cliNombreCelda = fila.insertCell(1);
                    let idCelda = fila.insertCell(2);
                    let estadoCelda = fila.insertCell(3);
                    let descCelda = fila.insertCell(4);
                    let fechaCelda = fila.insertCell(5);
                    let vencimCelda = fila.insertCell(6);
                    let totalCelda = fila.insertCell(7);

                    clienteCelda.innerHTML = data[i].clienteId;
                    cliNombreCelda.innerHTML = data[i].cliente.nombre;
                    idCelda.innerHTML = data[i].facturaId;
                    estadoCelda.innerHTML = data[i].estado;
                    descCelda.innerHTML = data[i].descripcion;
                    fechaCelda.innerHTML = data[i].fecha;
                    vencimCelda.innerHTML = data[i].vencimiento;
                    totalCelda.innerHTML = data[i].total;
            
                    tbody.appendChild(fila);
                }
                console.log(data);
            }
        )
    ;
}

function postCliente() {
    var form = document.getElementById('form')
    form.addEventListener('submit', function(e) 
    {
        e.preventDefault()

        let nombre = document.getElementById('nombre').value;
        let telefono = document.getElementById('telefono').value;
        let direccion = document.getElementById('direccion').value;

        fetch(API_URL+'clientes', {
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                telefono: telefono,
                direccion: direccion
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(function(data) {
            alert('Cliente agregado');
            document.getElementById('nombre').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('direccion').value = '';
        })
    });
}

function postFactura() {
    var form = document.getElementById('form')
    form.addEventListener('submit', function(e) 
    {
        e.preventDefault()

        let descripcion = document.getElementById('descripcion').value;
        let fecha = document.getElementById('fecha').value;
        let vencimiento = document.getElementById('vencimiento').value;
        let total = document.getElementById('total').value;
        let clienteId = document.getElementById('clienteId').value;

        fetch(API_URL+'facturas', {
            method: 'POST',
            body: JSON.stringify({
                descripcion: descripcion,
                fecha: fecha,
                vencimiento: vencimiento,
                total: total,
                clienteId: clienteId
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(function(data) {
            alert('Factura agregada');
            document.getElementById('descripcion').value = '';
            document.getElementById('fecha').value = '';
            document.getElementById('vencimiento').value = '';
            document.getElementById('total').value = '';
            document.getElementById('clienteId').value = '';
        })
    });
}

function postMovimiento() {
    var form = document.getElementById('form')
    form.addEventListener('submit', function(e) 
    {
        e.preventDefault()

        let fecha = document.getElementById('fecha').value;
        let totalPago = document.getElementById('totalPago').value;
        let facturaId = document.getElementById('facturaId').value;

        fetch(API_URL+'movimientos', {
            method: 'POST',
            body: JSON.stringify({
                fecha: fecha,
                totalPago: totalPago,
                facturaId: facturaId
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(function(data) {
            alert('Movimiento registrado');
            document.getElementById('fecha').value = '';
            document.getElementById('totalPago').value = '';
            document.getElementById('facturaId').value = '';
        })
    });
}