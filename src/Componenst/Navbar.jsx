export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-center space-x-4">
                <li><a href="#hero" className="text-white hover:text-gray-400">Home</a></li>
                <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
                <li><a href="#projects" className="text-white hover:text-gray-400">Projects</a></li>       
            </ul>   
        </nav>
    )
}