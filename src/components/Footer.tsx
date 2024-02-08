import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 flex flex-col md:flex-row md:justify-between md:items-center text-gray-300 text-gray-500'>
      <div className='md:w-[60%]'>
        <h1 className='text-xl font-bold text-[#000]'>Unilab Student Chapter</h1>
        <p className='py-4 text-gray-500 md:w-[600px] text-gray-800'>
          O Unilab Student Chapter – capítulo estudantil da Unilab vinculado à instituição americana The Optical Society (OSA)
          e reconhecida pelo Instituto de Engenharias e Desenvolvimento Sustentável (IEDS)
        </p>
      </div>

      <div className='flex flex-col mt-6 md:mt-0 items-center md:items-end text-gray-800'>
        <div className='flex gap-2 my-4 md:my-0'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>

        <p className='text-center md:text-right'>
          &copy; 2024 Unilab Student Chapter. Todos os direitos reservados.
        </p>
      </div>
    </div>

  );
};

export default Footer;
