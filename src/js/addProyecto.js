async function agregarProyecto() {

    let proyecto = {}
    proyecto.nombre = document.getElementById('input__nombre').value;
    proyecto.descripcion = document.getElementById('input__descripcion').value;
    proyecto.repositorio = document.getElementById('input__repositorio').value;
    proyecto.web = document.getElementById('input__web').value;

    let enviar = await fetch ('https://190.138.132.45:8081/api/proyecto', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(proyecto)
    });

    window.location.href = "/panelProyectos.html";
}