import { Link } from 'react-router-dom'

const AuthFooter = () => {
  return (
    <div className='containers border-t-[1px] border-dark-moonstone/10 py-6 md:flex md:justify-between'>
      <ul className='flex items-center justify-center md:justify-start'>
        <li className='mx-3'>
            <Link to="/" className='text-custom opacity-80 hover:opacity-100 default-transition font-bold'>Venky Photo</Link>
        </li>
        <li className='mx-3'>
            <Link to="/login" className='text-custom opacity-80 hover:opacity-100 default-transition font-medium'>Back to Login</Link>
        </li>
        <li className='mx-3'>
            <Link to="/register" className='text-custom opacity-80 hover:opacity-100 default-transition font-medium'>Register Here</Link>
        </li>
      </ul>
      <div className="text-sm text-custom font-medium text-center mt-4 md:mt-0 opacity-80 md:text-end">
        &copy; Design and Developed by{" "}
        <span className="font-bold">Venky Kumar.</span>
        </div>
    </div>
  )
}

export default AuthFooter
