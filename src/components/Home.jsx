import { Link } from 'react-router-dom';
import home1 from "../assets/home1.png";
import popular1 from "../assets/popular1.png";
import popular2 from "../assets/popular2.png";
import popular3 from "../assets/popular3.png";
import newMenuImg from "../assets/22.png";
// Chef's specials images
const chef1 = popular1;
const chef2 = popular2;
const chef3 = popular3;
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden select-none cursor-default">
      {/* HERO SECTION – full bleed, no gap after navbar */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image – full bleed */}
        <div className="absolute inset-0 z-0">
          <img
            src={home1}
            alt="Nigerian food spread"
            className="w-full h-full object-cover brightness-95"
          />
          {/* Stronger gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>
        {/* Text + Button – fully left-aligned, smaller headline */}
        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 text-white text-left max-w-5xl mx-auto">
          {/* Smaller headline – fits better on one line, left-aligned */}
          <h1 className="text-3xl xs:text-4xl sm:text-4.5xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-2xl leading-tight">
            The Heart of Nigerian Home <br className="sm:hidden" /> Cooking
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-lg mb-8 md:mb-12 max-w-3xl">
            Handcrafted with passion, delivered with care.
          </p>
          <Link
            to="/explore"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 md:px-12 md:py-5 rounded-xl font-semibold text-lg md:text-xl transition shadow-xl hover:shadow-2xl"
          >
            Discover what's new
          </Link>
        </div>
      </section>
      {/* Search Bar – pushed down a little */}
      <div className="relative z-30 -mt-8 sm:-mt-10 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you craving for today?"
              className="w-full h-14 sm:h-16 px-6 pl-14 rounded-lg bg-white/90 backdrop-blur-lg border border-gray-200 shadow-2xl text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* POPULAR CATEGORIES */}
      <section className="pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 sm:mb-16 md:mb-20">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {[
              { img: popular1, title: "Jollof Delights" },
              { img: popular2, title: "Swallow & Soups" },
              { img: popular3, title: "Grills & BBQ" },
              { img: popular1, title: "Pounded Yam" },
              { img: popular2, title: "Pepper Soup" },
              { img: popular3, title: "Small Chops" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-8 sm:p-10 md:p-12 text-center bg-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {/* View All – only on mobile, now blue text link without underline */}
          <div className="mt-6 text-center md:hidden">
            <Link
              to="/explore"
              className="text-blue-600 hover:text-blue-800 font-medium text-base"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>
      {/* CHEF'S SPECIALS */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-14">
            Chef's Specials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { img: chef1, name: "Spicy Tilapia Pepper Soup", desc: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy." },
              { img: chef2, name: "Jollof Rice & Fried Chicken", desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken." },
              { img: chef3, name: "Jollof Rice & Smoked Chicken", desc: "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base flex-grow">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg sm:text-xl font-bold text-orange-600">₦3,500</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 py-2.5 rounded-lg font-medium transition text-sm sm:text-base">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All – only on mobile*/}
          <div className="mt-6 text-center md:hidden">
            <Link
              to="/explore"
              className="text-blue-600 hover:text-blue-800 font-medium text-base"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>
      {/* NEW MENU ADDITIONS */}
      <section className="relative py-20 sm:py-28 md:py-36 lg:py-40 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={newMenuImg}
            alt="New Menu Background"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight drop-shadow-2xl">
              New Menu Additions!
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 drop-shadow-lg">
              Exciting new dishes crafted with fresh ingredients and authentic Nigerian flavors.<br className="hidden sm:inline" /> Limited time only!
            </p>
            <Link
              to="/explore"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl transition shadow-lg hover:shadow-xl"
            >
              Discover what's new
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}