import logo from '../assets/images/logo.png';


const Nav = () => {
    return (
      <nav className="w-full sticky  top-0 flex justify-between items-center p-4  bg-blue-400 border border-gray-950">
        <div className="flex items-center">
          <span className="italic text-3xl text-white ml-10">fundrise</span>
        </div>
        <ul className="flex justify-evenly space-x-12">
          <li><a href="#" className="text-white hover:text-blue-900">Home</a></li>
          <li><a href="#" className="text-white hover:text-blue-900">Location</a></li>
          <li><a href="#" className="text-white hover:text-blue-900">About</a></li>
          <li><a href="#" className="text-white hover:text-blue-900">Contact</a></li>
        </ul>
        <button className="hidden sm:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-10 rounded">
          Login
        </button>
      </nav>
    );
  }
  
  export default Nav;
