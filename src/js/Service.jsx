import React from 'react';
import '../css/service.css'

const Services = () => {
    return (
<div className="flex my-[50px] mx-auto flex-wrap justify-center *:mb-3 *:text-white ">
    <div className="max-w-lg p-4 shadow-md bg-sky-400 rounded-xl dark:text-gray-800 mx-2">
	<div className="space-y-4 w-[300px]">
		<div className="space-y-2">
			<img src="https://static.vecteezy.com/system/resources/previews/002/936/726/non_2x/flat-illustration-of-react-native-programmer-concept-vector.jpg" alt="" className="block object-cover object-center w-[300px] rounded-md h-[300px] dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
				<h3 className="text-xl font-semibold dark:text-violet-600">Introduction to Web Development</h3>
			<p className="leading-snug dark:text-gray-600">Explore the fundamentals of web development, including the key components that make up a website: HTML, CSS, and JavaScript. Learn about the different roles in web development, such as front-end, back-end, and full-stack developers, and understand the basic workflow from concept to deployment.</p>
			<button className='btn'>See More</button>
			</div>
		</div>
	</div>
	{/* second */}
    <div className="max-w-lg p-4 shadow-md bg-sky-400 rounded-xl dark:text-gray-800 mx-2">
	<div className="space-y-4 w-[300px]">
		<div className="space-y-2">
			<img src="https://static.vecteezy.com/system/resources/previews/002/936/726/non_2x/flat-illustration-of-react-native-programmer-concept-vector.jpg" alt="" className="block object-cover object-center w-[300px] rounded-md h-[300px] dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
				<h3 className="text-xl font-semibold dark:text-violet-600">Front-End Development</h3>
			<p className="leading-snug dark:text-gray-600">Dive into the world of front-end development, where you'll learn how to create the visual and interactive aspects of a website. This section covers essential technologies such as HTML for structure, CSS for styling, and JavaScript for interactivity. Get hands-on with frameworks and libraries like React and Tailwind CSS to enhance your development process.</p>
			<button className='btn'>See More</button>
			</div>
		</div>
	</div>
	{/* third */}
    <div className="max-w-lg p-4 shadow-md bg-sky-400 rounded-xl dark:text-gray-800 mx-2">
	<div className="space-y-4 w-[300px]">
		<div className="space-y-2">
			<img src="https://static.vecteezy.com/system/resources/previews/002/936/726/non_2x/flat-illustration-of-react-native-programmer-concept-vector.jpg" alt="" className="block object-cover object-center w-[300px] rounded-md h-[300px] dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
				<h3 className="text-xl font-semibold dark:text-violet-600">Back-End Development</h3>
			<p className="leading-snug dark:text-gray-600">Explore the server-side of web development, where you'll learn how to build and manage the databases, servers, and applications that power a website. Topics include server-side languages such as Node.js, Python, and PHP, as well as databases like MongoDB and SQL. Understand how to integrate APIs and manage data effectively.</p>
			<button className='btn'>See More</button>
			</div>
		</div>
	</div>
	{/* four */}
    <div className="max-w-lg p-4 shadow-md bg-sky-400 rounded-xl dark:text-gray-800 mx-2">
	<div className="space-y-4 w-[300px]">
		<div className="space-y-2">
			<img src="https://static.vecteezy.com/system/resources/previews/002/936/726/non_2x/flat-illustration-of-react-native-programmer-concept-vector.jpg" alt="" className="block object-cover object-center w-[300px] rounded-md h-[300px] dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
				<h3 className="text-xl font-semibold dark:text-violet-600">Web Development Tools and Best Practices</h3>
			<p className="leading-snug dark:text-gray-600">Learn about the tools and practices that streamline the web development process. This section covers version control with Git, task automation with npm and Webpack, and debugging techniques. Discover best practices for responsive design, accessibility, and performance optimization to create high-quality, user-friendly websites.</p>
			<button className='btn'>See More</button>
			</div>
		</div>
	</div>
</div>
    );
};

export default Services;