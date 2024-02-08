import { useState } from 'react';
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { FaTimes, FaBars } from "react-icons/fa"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-auto max-w-full mx-auto px-4 text-white bg-black'>
      <div className='flex flex-col max-full justify-between items-center h-auto max-w-full mx-auto text-white bg-black w-full'>
        <div className='flex flex-row gap-6 items-center justify-between w-full sm:px-[15rem]'>
          <img className=" w-[100px] sm:w-[200px]" src="https://media.licdn.com/dms/image/D4D03AQGa_HOQr4drZg/profile-displayphoto-shrink_800_800/0/1692710862296?e=1712793600&v=beta&t=g08PSNSFOypVQR0rB-rSlXgXhPMQdiTO1JXOrgmPdGc" alt="" />
          <Input placeholder='search' className='w-full bg-gray-200 text-black' />
        </div>

        <ul className='hidden md:flex py-2'>
          <li>
            <Link to="/" className='m-4 p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
              Publicacões
            </Link>
          </li>
          <li>
            <Link to="/editais" className='p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
              Editais
            </Link>
          </li>
          <li>
            <Link to="/members" className='p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
              Membros
            </Link>
          </li>
          <li>
            <Link to="/cards" className='p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/" className='p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
              Oportunidades
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <FaTimes style={{ fontSize: "1.8rem" }} /> : <FaBars style={{ fontSize: "1.8rem" }} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] flex flex-col space-y-8'}>
        <h1 className='w-full text-lg font-bold text-[#6841ea] m-4'>Unilab student chapter</h1>
        <li>
          <Link to="/" className=' p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
            Publicacões
          </Link>
        </li>
        <li >
          <Link to="/editais" className='p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
            Editais
          </Link>
        </li>
        <li >
          <Link to="/members" className='p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
            Membros
          </Link>
        </li>
        <li>
          <Link to="/cards" className='p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/cards" className='p-2 uppercase cursor-pointer text-[#fff] font-bold hover:text-[#6841ea] hover:border-[#6841ea] border-transparent border-b-2'>
            Oportunidades
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
