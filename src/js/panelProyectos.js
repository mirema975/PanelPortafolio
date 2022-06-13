window.onload = () => {
    cargarProyectos();
}

async function cargarProyectos() {
        const apiProyectos = await fetch('http://127.0.0.1:8080/api/proyecto', {
          method: 'GET'
        });

        const proyectos = await apiProyectos.json();

        console.log(proyectos)
      
        let listado = "";

        for (pro of proyectos) {
            listado += `<tr>
            <td>${pro.nombre}</td>
            <td>${pro.descripcion}</td>
            <td>
            <span class="material-symbols-outlined" onclick="eliminarProyecto(${pro.id})">
                delete
            </span>
            </td>
            </tr>`
        }

        document.getElementById("tbody").innerHTML = listado;

}

async function eliminarProyecto(id){
    const rawResponse = await fetch(`http://127.0.0.1:8080/api/proyecto/${id}`, {
    method: 'DELETE'
    });

    cargarProyectos();

}

function btnAgregar(){
    window.location.href = "/addProyecto.html";
}