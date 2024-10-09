import NavBar from '../../components/NavBar/NavBar'

export default function LandingPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <header className='flex items-center'>
        <NavBar />
      </header>

      <main className='my-8 bg-red-500'>Main section</main>

      <footer className='bg-gray-800 text-white py-4'>
        <p className='text-center'>
          © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  )
}
