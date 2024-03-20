import { FaFacebook, FaInstagram, FaMusic, FaSpotify, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="bg-pink-50 border border-t-pink-400 shadow-xl">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <blockquote className="text-center text-gray-500">
                    <p className="text-lg font-md font-bold ">
                    "Without music, life would be a mistake."
                    </p>
                    <footer className="mt-2 text-sm">
                        — Friedrich Nietzsche
                    </footer>
                </blockquote>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <FaFacebook size={25} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <FaInstagram size={25} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <FaTwitter size={25} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Spotify</span>
                        <FaSpotify size={25}/>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Music</span>
                        <FaMusic size={25} />
                    </a>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2024 Love Music, Inc. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;
