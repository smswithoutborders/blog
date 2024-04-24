"use client";
import { useState } from "react";
import Container from "@/app/_components/container";
import Logo from "./logo";
import { FACEBOOK_URL, GITHUB_URL, X_URL, LINKEDIN_URL } from "@/lib/constants";
import { FaFacebook, FaXTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="border-b text-black border-neutral-300 bg-white w-full z-10 py-4 fixed top-0">
			<Container>
				<div className="flex justify-between items-center">
					<Logo src="/icon.png" alt="SMSWithoutBorders Logo" name="SWOB" url="/" />
					<div className="md:hidden">
						{isMenuOpen ? (
							<AiOutlineClose onClick={toggleMenu} size={20} className="cursor-pointer" />
						) : (
							<AiOutlineMenu onClick={toggleMenu} size={20} className="cursor-pointer" />
						)}
					</div>

					<div className="hidden md:flex justify-end gap-6">
						<a href="/posts" className="text-gray-700 hover:text-blue-500 transition duration-300">
							Articles
						</a>
						<a
							href="/releases"
							className="text-gray-700 hover:text-blue-900 transition duration-300"
						>
							Releases
						</a>
						<a
							href="mailto:support@smswithoutborders.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-blue-500 transition duration-300"
						>
							<FaEnvelope size={30} className="rounded bg-white p-1" />
						</a>
						<a
							href={FACEBOOK_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-blue-500 transition duration-300"
						>
							<FaFacebook size={30} className="rounded-full bg-white p-1" />
						</a>
						<a
							href={X_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-blue-500 transition duration-300"
						>
							<FaXTwitter size={30} className="rounded-full bg-white p-1" />
						</a>
						<a
							href={GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-blue-500 transition duration-300"
						>
							<FaGithub size={30} className="rounded-full bg-white p-1" />
						</a>
						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-blue-500 transition duration-300"
						>
							<FaLinkedin size={30} className="rounded-full bg-white p-1" />
						</a>
					</div>
				</div>
			</Container>
			<div
				className={`md:hidden ${isMenuOpen ? "block" : "hidden"} block justify-center gap-8 mt-5 px-20 py-2 rounded-lg shadow-md`}
			>
				<a
					href="/posts"
					target="_blank"
					rel="noopener noreferrer"
					className=" block text-gray-700 hover:text-blue-500 transition duration-300"
				>
					Articles
				</a>
				<a
					href="/releases"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-blue-500 transition duration-300"
				>
					Releases
				</a>
				<a
					href="mailto:support@smswithoutborders.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-blue-500 transition duration-300"
				>
					<FaEnvelope size={30} className="rounded p-1" />
				</a>
				<a
					href={FACEBOOK_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-blue-500 transition duration-300"
				>
					<FaFacebook size={30} className="rounded-full p-1" />
				</a>
				<a
					href={X_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-blue-500 transition duration-300"
				>
					<FaXTwitter size={30} className="rounded-full p-1" />
				</a>
				<a
					href={GITHUB_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-blue-500 transition duration-300"
				>
					<FaGithub size={30} className="rounded-full p-1" />
				</a>
				<a
					href={LINKEDIN_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-blue-500 transition duration-300"
				>
					<FaLinkedin size={30} className="rounded-full p-1" />
				</a>
			</div>
		</div>
	);
}

export default Navbar;
