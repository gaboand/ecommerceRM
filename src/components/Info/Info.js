import './Info.css'
import { Link, NavLink } from "react-router-dom";

const Info = () => {
    return (
        <section className='Notes'>
        <div className="carrito__beneficios-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-box-seam" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                </svg>
            <h4 className="carrito__beneficios--title">Envíos a todo el país</h4>
            <p className='detalles'>Los envíos se realizan en un plazo de 3 a 10 días hábiles.   </p>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-wallet2" viewBox="0 0 16 16">
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                </svg>
            <h4 className="carrito__beneficios--title">Medios de pagos</h4>
            <p className='detalles'>Podes pagar con tarjeta de crédito, débito o efectivo.</p>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
              </svg>
            <h4 className="carrito__beneficios--title">Cambios y devoluciones</h4>
            <p className='detalles'>Si tuviste algún problema o no es lo que querias tenes 30 días.</p>
        </div>
      </section>

    )
}

export default Info