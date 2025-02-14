import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <motion.nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[110%] bg-inherit text-[#2C2C2C] p-4  rounded-b-3xl
            flex flex-row items-center justify-between
            "
        >
            <div className='flex flex-row items-center justify-start
                sm:ml-3 lg:ml-10 w-[30%]'>
                    <p className='text-xl text-yellow-600 font-bold  hover:text-400 items-center  ml-10  flex'>Pizza Paradise</p>
            </div>
            <div className='flex flex-row items-center justify-center  w-[70%]'>
            <ul className=' w-[80%] flex fle-1 flex-row justify-around lg:justify-end lg:gap-5 items-center px-5 py-3 space-x-5  md:space-x-10'>
                <li className="font-bold text-[#fff] underline decoration-transparent hover:decoration-white transition-all duration-300 hover:scale-110">
                <Link to='/' className='text-2xl font-bold text-white hover:text-400 items-center space-x-2 flex'>
                        Home
                    </Link>
                </li>

                <li className="font-bold text-[#fff] underline decoration-transparent hover:decoration-white transition-all duration-300 hover:scale-110">
                <Link to='/about' className='text-2xl font-bold text-white hover:text-400 items-center space-x-2 flex'>
                        About
                    </Link>
                </li>
                <Link to='/menu' className='text-2xl font-bold text-white hover:text-400 items-center space-x-2 flex'>
                        Menu
                    </Link>
                <li className="font-bold text-[#fff] underline decoration-transparent hover:decoration-white transition-all duration-300 hover:scale-110">
                    <Link to='/contact' className='text-2xl font-bold text-white hover:text-400 items-center space-x-2 flex'>
                        Contact
                    </Link>
                </li>
            </ul>
            </div>
        </motion.nav>
    )
}

export default NavBar
