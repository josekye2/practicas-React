import ListaProductos from "./lista-productos";

function Main() {
    return(
        <div>
        <h1>
            PÁGINA PRINCIPAL
        </h1>
        <ul>
            <li>
                <a href="/sobre">Sobre Nosotros</a>
            </li>
            <li>
                <a href="/equipo">Nuestro Equipo</a>
            </li>
            <li>
                <a href="/lista">Lista Productos</a>
            </li>
            <li>
                <a href="/modal">Modal</a>
            </li>
            <li>
                <a href="/poke">Ir a la lista de Pokemon</a>
            </li>
            <li>
                <a href="/rym">Ir a la lista de Rick And Morty</a>
            </li>
        </ul>
        </div>
    )
}

export default Main;