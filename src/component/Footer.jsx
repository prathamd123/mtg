import '../../src/index.css';
import React from 'react';
import "../font.css";

function Footer() {
  return (
    <div className="w-full bg-black font-Montserrat font-normal relative">
      <div className="relative w-full mx-auto min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[550px] p-4 md:p-9 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-70"
        >
          <source src="/footer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

        {/* Content */}
        <div className="relative z-20 text-white flex flex-col gap-6">
          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 text-center sm:text-left">

            {/* HQ Office */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-xl text-black font-bold">HQ Office</h1>
              <p className="text-md">via di villamagna 98</p>
              <p className="text-md">Firenze, Italy 50126</p> <br />
              <p className="text-md">Weekday: 9:00 AM to 5:00 PM</p> <br />
              <h1 className="text-xl text-black font-bold">Phone number</h1>
              <p className="text-md">+393318476757</p>
              <p className="text-md">+393249887245</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className=" text-md sm:text-2xl font-extrabold text-black">Quick Links</h1>
              <ul className="text-black text-md flex flex-wrap justify-center sm:block gap-x-4 sm:gap-x-0 space-y-0 sm:space-y-1 mt-2">
                <li><a href="#" className="dot-link hover:text-gray-300">Undergraduation</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Masters/PhD</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Short Courses</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Scholarships</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Events</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">About Maitri</a></li>
              </ul>
            </div>

            {/* Countries */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-md sm:text-2xl font-extrabold text-black">Countries</h1>
              <ul className="text-black text-sm flex flex-wrap justify-center sm:block gap-x-4 sm:gap-x-0 space-y-0 sm:space-y-1 mt-2">
                <li><a href="#" className="dot-link hover:text-gray-300">Italy</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">France</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Germany</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Ireland</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Spain</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">USA</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Canada</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Ukraine</a></li>
              </ul>
            </div>

            {/* Courses */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-md sm:text-2xl font-extrabold text-black">Courses</h1>
              <ul className="text-black text-sm flex flex-wrap justify-center sm:block gap-x-4 sm:gap-x-0 space-y-0 sm:space-y-1 mt-2">
                <li><a href="#" className="dot-link hover:text-gray-300">Portfolio Prep</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Italian Language</a></li>
              </ul>
            </div>

            {/* Career Areas */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-md sm:text-2xl font-extrabold text-black">Career Areas</h1>
              <ul className="text-black text-md flex flex-wrap justify-center sm:block gap-x-4 sm:gap-x-0 space-y-0 sm:space-y-1 mt-2">
                <li><a href="#" className="dot-link hover:text-gray-300">Arts & Design</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Business</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Media & Acting</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Hospitality</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Events</a></li>
                <li><a href="#" className="dot-link hover:text-gray-300">Engineering</a></li>
              </ul>
            </div>
          </div>


          {/* Bottom Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:items-start text-center lg:text-left gap-2 sm:gap-4 mt-2 sm:mt-4">
            {/* Maitri Logo Section */}
            <div className="flex flex-col items-center lg:items-start gap-2">
              <img
                className="w-[160px] sm:w-[200px] md:w-[240px] h-auto"
                src="/maitri.png"
                alt="Maitri Logo"
              />
              <div className="flex justify-center items-center gap-3 mt-1">
                <a href="#"><img className="w-5 h-5 sm:w-12 sm:h-12 hover:scale-110 transition-transform" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9IiMxODc3ZjIiIGQ9Ik0yNTYgMTI4QzI1NiA1Ny4zMDggMTk4LjY5MiAwIDEyOCAwUzAgNTcuMzA4IDAgMTI4YzAgNjMuODg4IDQ2LjgwOCAxMTYuODQzIDEwOCAxMjYuNDQ1VjE2NUg3NS41di0zN0gxMDhWOTkuOGMwLTMyLjA4IDE5LjExLTQ5LjggNDguMzQ4LTQ5LjhDMTcwLjM1MiA1MCAxODUgNTIuNSAxODUgNTIuNVY4NGgtMTYuMTRDMTUyLjk1OSA4NCAxNDggOTMuODY3IDE0OCAxMDMuOTlWMTI4aDM1LjVsLTUuNjc1IDM3SDE0OHY4OS40NDVjNjEuMTkyLTkuNjAyIDEwOC02Mi41NTYgMTA4LTEyNi40NDUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTc3LjgyNSAxNjVsNS42NzUtMzdIMTQ4di0yNC4wMUMxNDggOTMuODY2IDE1Mi45NTkgODQgMTY4Ljg2IDg0SDE4NVY1Mi41UzE3MC4zNTIgNTAgMTU2LjM0NyA1MEMxMjcuMTEgNTAgMTA4IDY3LjcyIDEwOCA5OS44VjEyOEg3NS41djM3SDEwOHY4OS40NDVBMTI5IDEyOSAwIDAgMCAxMjggMjU2YTEyOSAxMjkgMCAwIDAgMjAtMS41NTVWMTY1eiIvPjwvc3ZnPg==" alt="Facebook" /></a>
                <a href="#"><img className="w-5 h-5 sm:w-12 sm:h-12 hover:scale-110 transition-transform" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSJ1cmwoI3NraWxsSWNvbnNJbnN0YWdyYW0wKSIgcng9IjYwIi8+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9InVybCgjc2tpbGxJY29uc0luc3RhZ3JhbTEpIiByeD0iNjAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTI4LjAwOSAyOGMtMjcuMTU4IDAtMzAuNTY3LjExOS00MS4yMzMuNjA0Yy0xMC42NDYuNDg4LTE3LjkxMyAyLjE3My0yNC4yNzEgNC42NDZjLTYuNTc4IDIuNTU0LTEyLjE1NyA1Ljk3MS0xNy43MTUgMTEuNTMxYy01LjU2MyA1LjU1OS04Ljk4IDExLjEzOC0xMS41NDIgMTcuNzEzYy0yLjQ4IDYuMzYtNC4xNjcgMTMuNjMtNC42NDYgMjQuMjcxYy0uNDc3IDEwLjY2Ny0uNjAyIDE0LjA3Ny0uNjAyIDQxLjIzNnMuMTIgMzAuNTU3LjYwNCA0MS4yMjNjLjQ5IDEwLjY0NiAyLjE3NSAxNy45MTMgNC42NDYgMjQuMjcxYzIuNTU2IDYuNTc4IDUuOTczIDEyLjE1NyAxMS41MzMgMTcuNzE1YzUuNTU3IDUuNTYzIDExLjEzNiA4Ljk4OCAxNy43MDkgMTEuNTQyYzYuMzYzIDIuNDczIDEzLjYzMSA0LjE1OCAyNC4yNzUgNC42NDZjMTAuNjY3LjQ4NSAxNC4wNzMuNjA0IDQxLjIzLjYwNGMyNy4xNjEgMCAzMC41NTktLjExOSA0MS4yMjUtLjYwNGMxMC42NDYtLjQ4OCAxNy45MjEtMi4xNzMgMjQuMjg0LTQuNjQ2YzYuNTc1LTIuNTU0IDEyLjE0Ni01Ljk3OSAxNy43MDItMTEuNTQyYzUuNTYzLTUuNTU4IDguOTc5LTExLjEzNyAxMS41NDItMTcuNzEyYzIuNDU4LTYuMzYxIDQuMTQ2LTEzLjYzIDQuNjQ2LTI0LjI3MmMuNDc5LTEwLjY2Ni42MDQtMTQuMDY2LjYwNC00MS4yMjVzLS4xMjUtMzAuNTY3LS42MDQtNDEuMjM0Yy0uNS0xMC42NDYtMi4xODgtMTcuOTEyLTQuNjQ2LTI0LjI3Yy0yLjU2My02LjU3OC01Ljk3OS0xMi4xNTctMTEuNTQyLTE3LjcxNmMtNS41NjItNS41NjItMTEuMTI1LTguOTc5LTE3LjcwOC0xMS41M2MtNi4zNzUtMi40NzQtMTMuNjQ2LTQuMTYtMjQuMjkyLTQuNjQ3Yy0xMC42NjctLjQ4NS0xNC4wNjMtLjYwNC00MS4yMy0uNjA0em0tOC45NzEgMTguMDIxYzIuNjYzLS4wMDQgNS42MzQgMCA4Ljk3MSAwYzI2LjcwMSAwIDI5Ljg2NS4wOTYgNDAuNDA5LjU3NWM5Ljc1LjQ0NiAxNS4wNDIgMi4wNzUgMTguNTY3IDMuNDQ0YzQuNjY3IDEuODEyIDcuOTk0IDMuOTc5IDExLjQ5MiA3LjQ4YzMuNSAzLjUgNS42NjYgNi44MzMgNy40ODMgMTEuNWMxLjM2OSAzLjUyIDMgOC44MTIgMy40NDQgMTguNTYyYy40NzkgMTAuNTQyLjU4MyAxMy43MDguNTgzIDQwLjM5NnMtLjEwNCAyOS44NTUtLjU4MyA0MC4zOTZjLS40NDYgOS43NS0yLjA3NSAxNS4wNDItMy40NDQgMTguNTYzYy0xLjgxMiA0LjY2Ny0zLjk4MyA3Ljk5LTcuNDgzIDExLjQ4OGMtMy41IDMuNS02LjgyMyA1LjY2Ni0xMS40OTIgNy40NzljLTMuNTIxIDEuMzc1LTguODE3IDMtMTguNTY3IDMuNDQ2Yy0xMC41NDIuNDc5LTEzLjcwOC41ODMtNDAuNDA5LjU4M2MtMjYuNzAyIDAtMjkuODY3LS4xMDQtNDAuNDA4LS41ODNjLTkuNzUtLjQ1LTE1LjA0Mi0yLjA3OS0xOC41Ny0zLjQ0OGMtNC42NjYtMS44MTMtOC0zLjk3OS0xMS41LTcuNDc5cy01LjY2Ni02LjgyNS03LjQ4My0xMS40OTRjLTEuMzY5LTMuNTIxLTMtOC44MTMtMy40NDQtMTguNTYzYy0uNDc5LTEwLjU0Mi0uNTc1LTEzLjcwOC0uNTc1LTQwLjQxM3MuMDk2LTI5Ljg1NC41NzUtNDAuMzk2Yy40NDYtOS43NSAyLjA3NS0xNS4wNDIgMy40NDQtMTguNTY3YzEuODEzLTQuNjY3IDMuOTgzLTggNy40ODQtMTEuNXM2LjgzMy01LjY2NyAxMS41LTcuNDgzYzMuNTI1LTEuMzc1IDguODE5LTMgMTguNTY5LTMuNDQ4YzkuMjI1LS40MTcgMTIuOC0uNTQyIDMxLjQzNy0uNTYzem02Mi4zNTEgMTYuNjA0Yy02LjYyNSAwLTEyIDUuMzctMTIgMTEuOTk2YzAgNi42MjUgNS4zNzUgMTIgMTIgMTJzMTItNS4zNzUgMTItMTJzLTUuMzc1LTEyLTEyLTEyem0tNTMuMzggMTQuMDIxYy0yOC4zNiAwLTUxLjM1NCAyMi45OTQtNTEuMzU0IDUxLjM1NXMyMi45OTQgNTEuMzQ0IDUxLjM1NCA1MS4zNDRjMjguMzYxIDAgNTEuMzQ3LTIyLjk4MyA1MS4zNDctNTEuMzQ0YzAtMjguMzYtMjIuOTg4LTUxLjM1NS01MS4zNDktNTEuMzU1em0wIDE4LjAyMWMxOC40MDkgMCAzMy4zMzQgMTQuOTIzIDMzLjMzNCAzMy4zMzRjMCAxOC40MDktMTQuOTI1IDMzLjMzNC0zMy4zMzQgMzMuMzM0cy0zMy4zMzMtMTQuOTI1LTMzLjMzMy0zMy4zMzRjMC0xOC40MTEgMTQuOTIzLTMzLjMzNCAzMy4zMzMtMzMuMzM0Ii8+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJza2lsbEljb25zSW5zdGFncmFtMCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgLTI1My43MTUgMjM1Ljk3NSAwIDY4IDI3NS43MTcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZkNSIvPjxzdG9wIG9mZnNldD0iLjEiIHN0b3AtY29sb3I9IiNmZDUiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjZmY1NDNlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgzN2FiIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9InNraWxsSWNvbnNJbnN0YWdyYW0xIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMjIuMjU5NTIgMTExLjIwNjEgLTQ1OC4zOTUxOCA5MS43NTQ0OSAtNDIuODgxIDE4LjQ0MSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMzc3MWM4Ii8+PHN0b3Agb2Zmc2V0PSIuMTI4IiBzdG9wLWNvbG9yPSIjMzc3MWM4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjBmIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L2c+PC9zdmc+" alt="Instagram" /></a>
                <a href="#"><img className="w-5 h-5 sm:w-12 sm:h-12 hover:scale-110 transition-transform" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNC4xNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1NiAxODAiPjxwYXRoIGZpbGw9IiNmMDAiIGQ9Ik0yNTAuMzQ2IDI4LjA3NUEzMi4xOCAzMi4xOCAwIDAgMCAyMjcuNjkgNS40MThDMjA3LjgyNCAwIDEyNy44NyAwIDEyNy44NyAwUzQ3LjkxMi4xNjQgMjguMDQ2IDUuNTgyQTMyLjE4IDMyLjE4IDAgMCAwIDUuMzkgMjguMjRjLTYuMDA5IDM1LjI5OC04LjM0IDg5LjA4NC4xNjUgMTIyLjk3YTMyLjE4IDMyLjE4IDAgMCAwIDIyLjY1NiAyMi42NTdjMTkuODY2IDUuNDE4IDk5LjgyMiA1LjQxOCA5OS44MjIgNS40MThzNzkuOTU1IDAgOTkuODItNS40MThhMzIuMTggMzIuMTggMCAwIDAgMjIuNjU3LTIyLjY1N2M2LjMzOC0zNS4zNDggOC4yOTEtODkuMS0uMTY0LTEyMy4xMzQiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTAyLjQyMSAxMjguMDZsNjYuMzI4LTM4LjQxOGwtNjYuMzI4LTM4LjQxOHoiLz48L3N2Zz4=" alt="youtube" /></a>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="flex flex-col items-center lg:items-start gap-2 mt-2">
              <h1 className="text-sm sm:text-base font-extrabold text-black leading-tight">Subscribe</h1>
              <p className="text-black text-xs sm:text-sm leading-snug text-center lg:text-left">
                Receive updates on latest scholarships, events,<br />
                career tips and study abroad experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="p-3 lg:pr-24 text-xs rounded text-black w-full sm:w-auto"
                />
                <button className="p-2 bg-orange-500 rounded text-white flex items-center justify-center hover:bg-orange-600 w-full sm:w-auto">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAuMDQgMi4zMjNjMS4wMTYtLjM1NSAxLjk5Mi42MjEgMS42MzcgMS42MzdsLTUuOTI1IDE2LjkzYy0uMzg1IDEuMDk4LTEuOTE1IDEuMTYtMi4zODcuMDk3bC0yLjg1OS02LjQzMmw0LjAyNC00LjAyNWEuNzUuNzUgMCAwIDAtMS4wNi0xLjA2bC00LjAyNSA0LjAyNGwtNi40MzItMi44NTljLTEuMDYzLS40NzMtMS0yLjAwMi4wOTctMi4zODd6Ii8+PC9zdmc+" alt="send" />
                </button>
              </div>
            </div>
           
          </div>
           <div className='flex items-center justify-center'>
          <p className='text-xl text-black'>copyright 2025</p>
            </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Footer;
