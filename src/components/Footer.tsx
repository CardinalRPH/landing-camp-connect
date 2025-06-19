import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-16 lg:gap-x-24">
          {/* Plan Your Trip Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Plan Your Trip</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:underline">Find a Campsite</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Booking Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Packing Checklists</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Campground Etiquette</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">First-Time Camper Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Camping Types Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Camping Types</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:underline">Tent Camping</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">RV & Van Life</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Glamping & Cabins</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Backpacking</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Dispersed Camping</a></li>
            </ul>
          </div>

          {/* Destinations & Guides Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Destinations & Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:underline">National Parks</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Lakeside & Beach Camping</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Mountain Retreats</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Desert Camping</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Regional Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Campsite Reviews</a></li>
            </ul>
          </div>

          {/* About & Community Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">About Us & Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:underline">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Blog: Camping Adventures</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Join Our Forum</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">List Your Campsite</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright, Locale, Social */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <span>© {new Date().getFullYear()} CampConnect, Inc.</span> {/* Changed company name */}
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Terms of Service</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Locale & Currency */}
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center hover:underline">
                {/* Globe Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M3 8h7M3 11h7m-3 4l-4 4m0 0l-4-4m4 4v7m6-7v-5m6 5v5m6-5v-5m6 5v5m0 0l-4 4m0 0l-4-4m4 4v7" />
                </svg>
                English (US)
              </a>
              <a href="#" className="flex items-center hover:underline">
                {/* Dollar Sign Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8c-.111 0-.22-.012-.33-.03M12 8l-5.5-5.5M12 8v5l3 3m-3-3l-3 3" />
                </svg>
                USD
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-800">
                {/* Facebook Icon */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-800">
                {/* Twitter Icon */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path d="M22.162 5.603a8.91 8.91 0 01-2.548.694 4.473 4.473 0 001.956-2.457 8.932 8.932 0 01-2.825 1.077 4.467 4.467 0 00-7.625 4.072A12.637 12.637 0 013.882 4.097a4.463 4.463 0 001.385 5.967 4.458 4.458 0 01-2.029-.558v.056a4.466 4.466 0 003.585 4.375 4.5 4.5 0 01-2.016.076 4.476 4.476 0 004.167 3.102 8.966 8.966 0 01-5.597 1.933c-.365 0-.726-.022-1.08-.063a12.64 12.64 0 006.848 2.013c8.204 0 12.675-6.78 12.675-12.675 0-.193-.004-.386-.012-.578a9.006 9.006 0 002.215-2.292z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-800">
                {/* Instagram Icon */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C8.683 2 8.358 2.013 7.03 2.069 5.666 2.139 4.707 2.378 3.829 2.766 2.923 3.181 2.158 3.754 1.581 4.331.996 4.908.423 5.673.035 6.579.003 6.72.003 6.848.003 7.03c-.056 1.328-.069 1.653-.069 5s.013 3.672.069 5c.032 1.365.271 2.324.659 3.203.415.906.988 1.671 1.565 2.248.587.587 1.352 1.16 2.258 1.548.879.388 1.838.627 3.203.697 1.328.056 1.653.069 5 .069s3.672-.013 5-.069c1.365-.032 2.324-.271 3.203-.659.906-.415 1.671-.988 2.248-1.565.587-.587 1.16-1.352 1.548-2.258.388-.879.627-1.838.697-3.203.056-1.328.069-1.653.069-5s-.013-3.672-.069-5c-.032-1.365-.271-2.324-.659-3.203-.415-.906-.988-1.671-1.565-2.248-.587-.587-1.352-1.16-2.258-1.548-.879-.388-1.838-.627-3.203-.697C15.328 2.013 15 2 12 2zm0 2.292c3.488 0 3.826.014 5.155.07c1.233.051 2.007.251 2.502.463.59.255.975.522 1.309.856.333.334.601.719.856 1.309.212.495.412 1.27.463 2.502.056 1.329.07 1.667.07 5s-.014 3.671-.07 5c-.051 1.233-.251 2.007-.463 2.502-.255.59-.522.975-.856 1.309-.333.334-.719.601-1.309.856-.495.212-1.27.412-2.502.463-1.329.056-1.667.07-5 .07s-3.671-.014-5-.07c-1.233-.051-2.007-.251-2.502-.463-.59-.255-.975-.522-1.309-.856-.334-.333-.719-.601-1.309-.856-.212-.495-.412-1.27-.463-2.502-.056-1.329-.07-1.667-.07-5s.014-3.671.07-5c.051-1.233.251-2.007.463-2.502.255-.59.522-.975.856-1.309.334-.333.719-.601 1.309-.856.495-.212 1.27-.412 2.502-.463C8.174 2.306 8.512 2.292 12 2.292zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2.292a2.708 2.708 0 110 5.416 2.708 2.708 0 010-5.416z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;