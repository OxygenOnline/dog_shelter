import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className='flex justify-end align-end text-lg'>
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
