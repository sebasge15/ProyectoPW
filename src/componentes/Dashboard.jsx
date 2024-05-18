import React from 'react';
import './Dashboard.css'


function Dashboard(){
    return(
        <div>
            <div className='sidebar'>
                <p id='admin'>Admin</p>
                <p>Dashboard</p>
                <p><a href='#'>Usuarios registrados</a></p>
                <p><a href='#'>Productos</a></p>
                <p><a href='#'>Órdenes</a></p>
                <p><a href='#'>Productos más vendidos</a></p>
                <p><a href='#'>Series</a></p>
            </div>
            <div className='primeraClaseDashboard'>
                <p>Dashboard</p>
                <p><a href='#'>Cambiar Fecha o Periodo</a></p>
            </div>
            <div>
                <div className='datos'>
                    <p className='principal'>68</p>
                    <p>Órdenes del día de hoy</p>
                </div>
                <div className='datos'>
                    <p className='principal'>12</p>
                    <p>Usuarios nuevos</p>
                </div>
                <div className='datos'>
                    <p className='principal'>S/ 13,500.00</p>
                    <p>Ingresos de hoy</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard