import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FiHome, FiClock, FiMenu, FiX } from 'react-icons/fi';
import { IoSettingsOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import Fixit from '../assets/Fixitlogo.png';
import { CiLocationOn } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdShowChart } from "react-icons/md";
import PotHoles from '../assets/Holes.png';
import Road from '../assets/Badroads.png';
import Drainage from '../assets/Wusedrainage.jpg';
import Light from '../assets/Streetlight.png';
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import Hydrant from '../assets/Hydrant.png'

const Dashboard = () => {
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    const [category, setCategory] = useState('All Categories');
    const [status, setStatus] = useState('All Status');
    const [time, setTime] = useState('All Time');
    // const [username, setUsername] = useState('');
    const [userData, setUserData] = useState({})

    useEffect(() => {
        // const storedUsername = localStorage.getItem('fixitnaija_username');
        // if (storedUsername) {
        //     setUsername(storedUsername);
        // }
        let savedToken = Cookies.get('token')
        if (savedToken) {
            const data = jwtDecode(savedToken)
            setUserData(data)
        }
    }, []);
    // console.log(userData)
    // const toggleSidebar = () => {
    //     setSidebarOpen(!sidebarOpen);
    // };

    const issues = [
        {
            img: PotHoles,
            title: 'Large pothole on Main Street',
            location: 'Anuoluwapo Estate Road F Panseke Abeokuta',
            description: 'Deep pothole causing traffic hazard near the intersection',
            likes: 24,
            comments: 8,
            date: '2023-11-15',
            category: 'Road Damage',
            status: 'Reported',
            time: 'This Month',
        },
        {
            img: Light,
            title: 'Broken Streetlight',
            location: 'Rounder Soyeye, Lafenwa Abeokuta',
            description: 'The area becomes dark posing safety risks for pedestrians',
            likes: 18,
            comments: 8,
            date: '2023-10-14',
            category: 'Electricity',
            status: 'In Progress',
            time: 'This Month',
        },
        {
            img: Road,
            title: 'Bad Roads',
            location: 'Adigbe-opako, Abeokuta',
            description: 'The roads have worsen due to rainfall and lack of maintenance',
            likes: 12,
            comments: 3,
            date: '2023-09-15',
            category: 'Road Damage',
            status: 'Resolved',
            time: 'This Month',
        },
        {
            img: Drainage,
            title: 'Blocked Drainage',
            location: 'Oke ile iwo, Abeokuta',
            description: 'Trash bin near the park has now turned to a dump place',
            likes: 24,
            comments: 8,
            date: '2023-11-15',
            category: 'Drainage',
            status: 'Reported',
            time: 'This Month',
        },
        {
            img: Hydrant,
            title: 'Water Supply disruption',
            location: 'Panseke, Abeokuta',
            description: 'Underground pipes have started leaking, causing water was ',
            likes: 14,
            comments: 8,
            date: '2023-11-15',
            category: 'Water Supply',
            status: 'Reported',
            time: 'This Week',
        },
    ];

    

    // Filtering logic
    const filteredIssues = issues.filter(issue => {
        const matchCategory = category === 'All Categories' || issue.category === category;
        const matchStatus = status === 'All Status' || issue.status === status;
        const matchTime = time === 'All Time' || issue.time === time;
        return matchCategory && matchStatus && matchTime;
    });

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Sidebar */}
            {/* <div className={`fixed md:relative z-20 w-64 bg-white text-black transition-all duration-300 ease-in-out ${sidebarOpen ? 'left-0' : '-left-full'} md:left-0 h-full`}>
                <div className="flex-col items-center justify-between p-4 border-b border-blue-700">
                    <Link to='/Homepage'><img src={Fixit} alt='logo' /></Link>
                    <h1 className="text-xl font-bold">Community Infrastructure platform</h1>
                    <button className="md:hidden" onClick={toggleSidebar}>
                        <FiX size={24} />
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        <li className='hover:bg-green-100  rounded-lg transition-colors'>
                            <Link to="/UserPage" className="flex items-center p-2">
                                <FiHome className="mr-3" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className='hover:bg-green-100 rounded-lg transition-colors'>
                            <Link to="/UserIssue" className="flex items-center p-2">
                                <RxPerson className="mr-3" />
                                <span>Issues</span>
                            </Link>
                        </li>
                        <li className='hover:bg-green-100 rounded-lg transition-colors'>
                            <a href="#" className="flex items-center p-2">
                                <IoSettingsOutline className="mr-3" />
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> */}

            {/* Main Content */}
            <div className="flex-1 w-full">
                {/* Mobile Header */}
                {/* <header className="md:hidden bg-blue shadow p-4 flex items-center">
                    <button onClick={toggleSidebar} className="mr-4">
                        <FiMenu size={24} />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                </header> */}

                {/* Dashboard Content */}
                <main className="container px-2 sm:px-4 py-4 sm:py-8 mx-auto">
                    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-4 bg-white shadow-sm gap-2 overflow-x-auto">

                        {/* Search Box */}
                        <div className="flex-1 flex items-center min-w-0 mb-2 sm:mb-0">
                            <input
                                type="text"
                                placeholder="Search for issues..."
                                className="w-full max-w-full sm:w-[350px] md:w-[500px] lg:w-[700px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Right Side: Notification + Profile */}
                        <div className="flex items-center gap-2 sm:gap-4 justify-end">
                            <GoBell className="w-5 h-5 sm:w-8 sm:h-8 text-gray-600 cursor-pointer" />

                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-sm">
                                    JS
                                </div>
                                <span className="text-gray-800 font-medium hidden xs:inline-block">John Samuel</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl w-full mx-auto">
                        {/* Header */}
                        <div className="pt-[10px] mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userData?.user?.name || 'User'}!</h1>
                                <p className="text-gray-600">Here's what's happening in your community.</p>
                            </div>
                            <button
                                className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md shadow w-full sm:w-auto"
                                onClick={() => window.location.href = '/Issue'}
                            >
                                + Report Issue
                            </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-[12px] leading-[18px] font-medium">
                            <StatCard title="Active Issues" value="10" className='w-full h-[86px]' icon={<CiLocationOn size={20} />} />
                            <StatCard title="Resolved This Week" value="10" className='w-full h-[86px]' icon={<IoMdCheckmarkCircleOutline size={20} color='lightgreen' />} />
                            <StatCard title="Average Response time" value="50 days" className='w-full h-[86px]' icon={<FiClock size={20} color='lightpurple' />} />
                            <StatCard title="Community Engagement" value="10" className='w-full h-[86px]' icon={<MdShowChart size={20} color='orange' />} />
                        </div>

                        {/* Recent Issues Section */}
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            {/* Filters */}
                            <div className="border-b border-gray-200 px-4 sm:px-6 py-4 flex flex-wrap items-center gap-4">
                                <h2 className="text-lg font-semibold text-gray-800">Recent Issues</h2>
                                <div className="flex flex-wrap gap-2 ml-auto">
                                    <select
                                        className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={category}
                                        onChange={e => setCategory(e.target.value)}
                                    >
                                        <option>All Categories</option>
                                        <option>Road Damage</option>
                                        <option>Electricity</option>
                                        <option>Water Supply</option>
                                        <option>Drainage</option>
                                        <option>Others</option>
                                    </select>
                                    <select
                                        className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={status}
                                        onChange={e => setStatus(e.target.value)}
                                    >
                                        <option>All Status</option>
                                        <option>Reported</option>
                                        <option>In Progress</option>
                                        <option>Resolved</option>
                                    </select>
                                    <select
                                        className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={time}
                                        onChange={e => setTime(e.target.value)}
                                    >
                                        <option>All Time</option>
                                        <option>Today</option>
                                        <option>This Week</option>
                                        <option>This Month</option>
                                    </select>
                                </div>
                            </div>

                            {/* Issues List */}
                            <div>
                                {filteredIssues.map((issue, idx) => (
                                    <div key={idx} className='flex flex-col sm:flex-row justify-between mt-6 sm:mx-4 lg:mx-[66px] mb-4 w-full overflow-x-auto'>
                                        <div className="w-full sm:w-1/3 flex-shrink-0">
                                            <img src={issue.img} alt={issue.title} className="w-full h-auto max-h-[180px] object-cover rounded-lg" />
                                        </div>
                                        <div className="flex-1 min-w-0 sm:pl-6 pl-0"> {/* Add left padding for spacing */}
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                <div>
                                                    <h2 className='font-poppins font-medium text-[20px] leading-[38px]'>{issue.title}</h2>
                                                    <p className='font-poppins font-normal text-[16px] leading-[28px]'>{issue.location}</p>
                                                    <p className='font-poppins font-normal text-[16px] leading-[28px]'>{issue.description}</p>
                                                    <p className='font-poppins font-normal text-[14px] leading-[22px] mt-2'>{issue.date}</p> {/* Date moved back inside */}
                                                </div>
                                            </div>
                                            <div className='flex gap-[12px] mt-2'>
                                                <p className='flex items-center font-poppins font-normal text-[16px] leading-[28px]'><AiOutlineLike /> {issue.likes}</p>
                                                <p className='flex items-center font-poppins font-normal text-[16px] leading-[28px]'><BiComment /> {issue.comments}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

// Stat Card Component
const StatCard = ({ title, value, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 flex items-start w-full h-full min-h-[86px] transition-colors duration-200 hover:bg-green-100 hover:border-green-600 border border-transparent cursor-pointer">
            <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-4 flex-shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
};

// Issue Item Component
const IssueItem = ({ title, location,issue, description, stats, date }) => {
    const statusColor = {
        'Pending': 'bg-yellow-100 text-yellow-600',
        'In Progress': 'bg-blue-100 text-blue-600',
        'Resolved': 'bg-green-100 text-green-600',
    };
    return (
        <div className="p-6 hover:bg-gray-50">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-gray-600">{location}</p>
                    <p className="text-gray-700 mt-2">{description}</p>
                </div>
                <div className="text-right">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {stats[0]}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {stats[1]}
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{date}</p>
                    <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[issue.status]}`}
                    >
                        {issue.status}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;




// import React, { useEffect, useState } from 'react';
// import Roads from '../assets/Badroads.png'
// import Pothole from '../assets/Potholes.jpg'
// import Light from '../assets/Streetlight.png'
// import Drainage from '../assets/Wusedrainage.jpg'
// import Hydrant from '../assets/Hydrant.png'
// import Cookies from 'js-cookie'
// import { jwtDecode } from 'jwt-decode'



// // Dummy data for demonstration
// const stats = [
//     { title: 'Active Issues', value: 10, icon: '📍', color: 'text-blue-600' },
//     { title: 'Resolved This Week', value: 10, icon: '✅', color: 'text-green-600' },
//     { title: 'Average Response time', value: '50 days', icon: '⏱️', color: 'text-purple-600' },
//     { title: 'Community Engagement', value: 10, icon: '📣', color: 'text-orange-600' },
// ];

// const issues = [
//     {
//         id: 1,
//         title: 'Large pothole on Main Street',
//         location: 'Anuoluwapo Estate Road F Panseke Abeokuta',
//         description: 'Deep pothole causing traffic hazard near the intersection',
//         image: Pothole,
//         status: 'Pending',
//         comments: 8,
//         likes: 24,
//         date: '2023-11-15',
//     },
//     {
//         id: 2,
//         title: 'Broken Streetlight',
//         location: 'Rounder Soyoye, Lafenwa Abeokuta',
//         description: 'The area becomes dark posing safety risks for pedestrians',
//         image: Light,
//         status: 'In Progress',
//         comments: 8,
//         likes: 18,
//         date: '2023-10-14',
//     },
//     {
//         id: 3,
//         title: 'Bad Roads',
//         location: 'Adigbe-opako, Abeokuta',
//         description: 'The roads have worsened due to rainfall and lack of maintenance',
//         image: Roads,
//         status: 'Pending',
//         comments: 3,
//         likes: 12,
//         date: '2023-09-15',
//     },
//     {
//         id: 4,
//         title: 'Water Supply Disruption',
//         location: 'Panseke, Abeokuta',
//         description: 'Underground pipes have started leaking, causing water was...',
//         image: Hydrant,
//         status: 'Pending',
//         comments: 8,
//         likes: 14,
//         date: '2023-11-15',
//     },
//     {
//         id: 5,
//         title: 'Blocked Drainage',
//         location: 'oke-ile owo, Abeokuta',
//         description: 'Trash bin near the park has now turned to a dump place',
//         image: Drainage,
//         status: 'Pending',
//         comments: 8,
//         likes: 24,
//         date: '2023-11-15',
//     },
// ];

// const statusColors = {
//     Pending: 'bg-yellow-100 text-yellow-600',
//     'In Progress': 'bg-blue-100 text-blue-600',
//     Resolved: 'bg-green-100 text-green-600',
// };
// //     // Filtering logic



// const UserDashboard = () => {
//     const [category, setCategory] = useState('All Categories');
//     const [status, setStatus] = useState('All Status');
//     const [time, setTime] = useState('All Time');
//     const [view, setView] = useState('list');
//     const [userData, setUserData] = useState({})
//     useEffect(() => {
//         // const storedUsername = localStorage.getItem('fixitnaija_username');
//         // if (storedUsername) {
//         //         //     setUsername(storedUsername);
//         //         // }
//         let savedToken = Cookies.get('token')
//         if (savedToken) {
//             const data = jwtDecode(savedToken)
//             setUserData(data)
//         }
//     }, []);

//     //     // Filtering logic
//     const filteredIssues = issues.filter(issue => {
//         const matchCategory = category === 'All Categories' || issue?.category === category;
//         const matchStatus = status === 'All Status' || issue.status === status;
//         const matchTime = time === 'All Time' || issue.time === time;
//         return matchCategory && matchStatus && matchTime;
//     });

//     return (
//         <div className="min-h-screen bg-gray-100 p-4 md:p-10">
//             {/* Search & Profile */}
//             <div className="flex justify-between items-center mb-6">
//                 <input
//                     type="text"
//                     placeholder="Search for issues..."
//                     className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-600 focus:outline-none"
//                 />

//                 {/* Right Side: Notification + Profile */}
//                 <div className="flex items-center gap-4">
//                     <GoBell className="w-5 h-5 text-gray-600 cursor-pointer" />

//                     <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-sm">
//                             JS
//                         </div>
//                         <span className="text-gray-800 font-medium">John Samuel</span>                             </div>
//                 </div>





//             </div>

//             {/* Welcome and Stats */}
//             <h2 className="text-xl font-semibold text-gray-800 mb-1">Welcome back, {userData?.user?.name || 'User'}!</h2>
//             <p className="text-gray-500 mb-6">Here's what's happening in your community.</p>
//             <button className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg">
//                 + Report Issue
//             </button>


//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                 {stats.map((stat, i) => (
//                     <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col">
//                         <span className={`text-2xl mb-2 ${stat.color}`}>{stat.icon}</span>
//                         <p className="text-sm text-gray-500">{stat.title}</p>
//                         <p className="text-xl font-bold">{stat.value}</p>
//                     </div>
//                 ))}
//             </div>

//             {/* Filters */}
//             <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
//                 <h3 className="font-medium text-gray-700">Recent Issues</h3>
//                 <div className="flex flex-wrap gap-2">
//                     <select className="px-3 py-1 text-sm rounded border border-gray-300">
//                         <option>All Categories</option>
//                         <option>Drainage</option>
//                         <option>Water Supply</option>
//                         <option>Electricity</option>
//                         <option>Road Damage</option>
//                         <option>Others</option>
//                     </select>
//                     <select className="px-3 py-1 text-sm rounded border border-gray-300">
//                         <option>All Status</option>
//                         <option>Reported</option>
//                         <option>Resolved</option>
//                         <option>In Progress</option>
//                     </select>
//                     <select className="px-3 py-1 text-sm rounded border border-gray-300">
//                         <option>All Time</option>
//                         <option>Today</option>
//                         <option>This week</option>
//                         <option>This Month</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Issue List + Map View */}
//             <div className="flex flex-col lg:flex-row gap-6">
//                 {/* Left: Issues List */}
//                 <div className="flex-1 space-y-4">
//                     {issues.map((issue) => (
//                         <div
//                             key={issue.id}
//                             className="bg-white rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-4"
//                         >
//                             <img
//                                 src={issue.image}
//                                 alt={issue.title}
//                                 className="w-full md:w-32 h-24 object-cover rounded-lg"
//                             />
//                             <div className="flex-1">
//                                 <h4 className="font-semibold text-gray-800">{issue.title}</h4>
//                                 <p className="text-sm text-gray-600">{issue.location}</p>
//                                 <p className="text-sm text-gray-500 mt-1 truncate">{issue.description}</p>
//                                 <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
//                                     <span>👍 {issue.likes}</span>
//                                     <span>💬 {issue.comments}</span>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col items-end gap-2">
//                                 <span className={`text-xs px-3 py-1 rounded-full ${statusColors[issue.status]}`}>
//                                     {issue.status}
//                                 </span>
//                                 <span className="text-sm text-gray-400">{issue.date}</span>
//                             </div>
//                         </div>
//                     ))}

//                     {/* Pagination */}
//                     <div className="flex justify-center mt-6 space-x-2 text-sm items-center">
//                         <button className="border px-2 py-1 rounded text-gray-600">{'<'}</button>
//                         <span className="bg-green-100 text-green-700 px-3 py-1 rounded">1</span>
//                         <span className="text-gray-500">of 2</span>
//                         <button className="border px-2 py-1 rounded text-gray-600">{'>'}</button>
//                     </div>
//                 </div>

//                 {/* Right: Map View Toggle */}
//                 <div className="w-full lg:w-[300px]">
//                     <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
//                         <div className="flex justify-between items-center mb-2">
//                             <p className="font-semibold">Issues Near You</p>
//                             <div className="flex gap-2 text-sm">
//                                 <button
//                                     onClick={() => setView('list')}
//                                     className={`px-2 py-1 rounded ${view === 'list' ? 'bg-green-100 text-green-700' : 'text-gray-500'}`}
//                                 >
//                                     List View
//                                 </button>
//                                 <button
//                                     onClick={() => setView('map')}
//                                     className={`px-2 py-1 rounded ${view === 'map' ? 'bg-green-100 text-green-700' : 'text-gray-500'}`}
//                                 >
//                                     Map View
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="h-60 w-full bg-gray-200 rounded-md overflow-hidden">
//                             {/* Replace this with real map component (e.g., Google Maps) */}
//                             <iframe
//                                 title="Map"
//                                 src="https://maps.google.com/maps?q=abeokuta&t=&z=10&ie=UTF8&iwloc=&output=embed"
//                                 className="w-full h-full"
//                             ></iframe>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserDashboard;

