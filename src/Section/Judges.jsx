import '../App.css';

const Card = ({ children, className = 'bg-[#e1d7c3] ' }) => (
  <div className={` border-4 border-[#3E2C1D] p-8 relative ${className}`}>
    <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-[#6B4423] opacity-30 pointer-events-none"></div>
    {children}
  </div>
);

const Judges = () => {
  const judges = [
    {
      name: 'Arjun Roy',
      role: 'VC & Operator',
      badge: 'Impact & Scale',
      img_url: 'https://tse2.mm.bing.net/th/id/OIP.H9UYen-_zre2XDocB14GZQHaEK?pid=Api&P=0&h=180',
    },
    {
      name: 'Dev Patel',
      role: 'CTO',
      badge: 'Architecture',
      img_url:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      name: 'Priya Nair',
      role: 'Professor',
      badge: 'Research',
      img_url: 'https://i.pinimg.com/736x/58/c9/c5/58c9c538f8ae7b1e132b584d5b007819.jpg',
    },
    {
      name: 'Ahaana Kapoor',
      role: 'Founder',
      badge: 'Product',
      img_url: 'https://i.pinimg.com/originals/56/fe/c1/56fec125a824d4a1c4430abe9a1ef3b1.png',
    },
  ];

  return (
    <section id="judges" className="py-20 bg-[#3E2C1D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
            JUDGES
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="font-serif text-xl text-[#6B4423] mt-6">
            Evaluating creativity, execution, and impact
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((j, i) => (
            <div key={i} className="group [perspective:1000px]">
              <div className="relative transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl [transform-style:preserve-3d]">
                <Card className="bg-[#ebdbb9]">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-36 h-36 rounded-full bg-[#F4E5C266] border-2 border-[#3E2C1D] flex items-center justify-center mb-4 overflow-hidden">
                      <img
                        src={j.img_url}
                        alt={`Image of judge ${j.name}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div className="font-display text-2xl font-bold text-[#3E2C1D]">{j.name}</div>
                    <div className="font-serif text-[#6B4423]">{j.role}</div>
                    <span className="mt-3 inline-block px-3 py-1 text-sm bg-[#3E2C1D1A] text-[#3E2C1D] rounded-full">
                      {j.badge}
                    </span>
                  </div>
                </Card>
                <div
                  className="absolute inset-0 rounded-lg ring-1 ring-[#6B44234D] translate-y-2 blur-sm opacity-0 group-hover:opacity-100 transition"
                  aria-hidden
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;
