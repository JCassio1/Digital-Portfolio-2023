import { Link } from 'react-scroll'

const NavBar = () => {
  const developerName = '< 💻 {Joselson} >'
  return (
    <header aria-label='Site Header' className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex-1 md:flex md:items-center md:gap-12'>
            <p className='font-bold text-gray-600'>{developerName}</p>
          </div>

          <div className='md:flex md:items-center md:gap-12'>
            <nav aria-label='Site Nav' className='hidden md:block'>
              <ul className='flex items-center gap-6 text-sm'>
                <Link to='projectSection' smooth={true} duration={500}>
                  <li>
                    <p className='text-gray-500 transition hover:text-gray-500/75'>Projects</p>
                  </li>
                </Link>
                <Link to='contactSection' smooth={true} duration={500}>
                  <li>
                    <p className='text-gray-500 transition hover:text-gray-500/75'>Contacts</p>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
