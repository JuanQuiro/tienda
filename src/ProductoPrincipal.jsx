import React, { Component } from 'react'
import second from './components/producto'
export const ProductoPrincipal = () => {

    return (
        <div className='productcont group relative cursor-pointer items-center  overflow-hidden    group ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  shadow-2xl hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="../img/1.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'> Servicio </h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div className="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

            </div>
          </a>
        </div>
        
    )
}

class ProductoOne extends Component {
    state = {
        productos: [
            {name: 'Osito Firu Firu', price: 100, img: '../img/1.png'},
        ]
    }

    render() {
        return (
            <div>
                <Productos 
                    productos={this.state.productos}
                />
            </div>
        )
    }
}
