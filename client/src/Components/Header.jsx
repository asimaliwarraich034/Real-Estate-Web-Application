import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='text-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-400'>Asim</span>&nbsp;
           <span className='text-slate-600'>Ali</span>&nbsp;  
        <span className='text-slate-800'>Estate</span>

          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='search....' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/'>Home</Link></li>
          <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/about'>About</Link></li>
          <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/sign-in'>Sign in</Link></li>
        </ul>
      </div>
    </header>
  );
}
