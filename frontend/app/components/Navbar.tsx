import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className='flex justify-end align-end'>
                <ul className='flex'>
                    <li className='p-4'>
                        <Link href='/login'>Login</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/register'>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
