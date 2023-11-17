import Link from 'next/link';
import { CgHome } from "react-icons/cg";

const Navbar: React.FC = () => {
    return (
        <nav className='flex flex-row justify-between'>
            <div className='flex text-lg'>
                <Link href='/' className='flex justify-center items-center mx-4 hover:text-slate-700'>
                    <CgHome size={28} className="inline-block align-middle" />
                </Link>
            </div>
            <div className='flex text-lg'>
                <ul className='flex'>
                    <li className='p-4'>
                        <Link href='/login' className='hover:text-slate-700'>Login</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/register' className='hover:text-slate-700'>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
