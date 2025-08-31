import heroImg from '../../assets/rabbit-hero.webp';

const Hero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[600px] lg:h-[750px]">
      {/* Background Image */}
      <img 
        src={heroImg}  
        alt="Rabbit" 
        className="w-full h-full object-cover"
      />

      {/* Overlay (black filter) */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-8xl tracking-tighter uppercase font-bold mb-4">Vacation  <br /> Ready </h1>
        <p className="max-w-2xl text-base md:text-lg mb-6">
          Discover amazing places, book your trips, and create unforgettable memories.
        </p>
        <button className="bg-white text-black font-semibold px-8 py-2 rounded-lg shadow-md transition">
          Shop Now !
        </button>
      </div>
    </section>
  );
};

export default Hero;
