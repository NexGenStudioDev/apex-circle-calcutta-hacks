import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import Theme from '../Them/Theme';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GridDistortion from '../components/GridDistortion';
import { ArrowBigDown, ArrowDown } from 'lucide-react';
import LiquidEther from '../components/LiquidEther';

gsap.registerPlugin(ScrollTrigger, SplitText);

const CulcuttaInfo = {
  name: 'Culcutta',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/6/6d/Victoria_Memorial%2C_Culcutta%2C_West_Bengal%2C_India.jpg',
  description:
    "Culcutta, formerly known as Calcutta, is the capital of West Bengal, India. Often called the 'City of Joy,' it is renowned for its cultural heritage, colonial architecture, literature, and vibrant arts scene. Located on the eastern bank of the Hooghly River, Culcutta is also a major commercial, educational, and political center in Eastern India.",
  highlights: [
    {
      title: 'Sir Rajendra Nath Mookherjee',
      image:
        'https://indroyc.com/wp-content/uploads/2023/10/f7plid0boaamllz.jpg?w=900',
      description:
        'Hand-pulled rickshaws are an iconic part of Kolkata, relating to the city\'s historic mode of transport and making them an important part of its heritage.',
    },
    {
      title: 'Partiton of Bengal',
      image:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/partition.jpeg',
      description:
        'Kolkata was the first city in India to experience the Partition of Bengal, which created new boundaries and had a lasting impact on the city\'s social and cultural landscape.',
    },
    {
      title: 'Howrah Bridge',
      image:
        'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      description:
        'An iconic cantilever bridge over the Hooghly River, connecting Culcutta and Howrah.',
    },
    {
      title: 'Hand Rikhshaw',
      image:
        'https://assets.telegraphindia.com/telegraph/2023/Aug/1692971151_2.jpg',
      description:
        'Hand-pulled rickshaws are an iconic part of Kolkata, relating to the city\'s historic mode of transport and reflecting its unique cultural heritage.',
    },
    {
      title: 'First Tram In Kolkata',
      image:
        'https://assets.telegraphindia.com/telegraph/2022/Feb/1644921554_old-tram-depot-chowringhee.jpg',
      description:
        'Kolkata was the first city in India to introduce trams, which relates to its unique history as the only Indian city where trams still run today.',
    },
    {
      title: 'First Mtero In Kolkata',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnIFQC4nUlFMEk59oOURwKvijmW26wtvEfg&s',
      description:
        'Kolkata was the first city in India to have a metro railway, which started operations in 1984 and remains a pride of the city.',
    },
    {
      title: 'Indian Museum',
      image:
        'https://images.unsplash.com/photo-1651651166379-06540f274707?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374',
      description:
        'The oldest and largest museum in India, housing rare collections of antiques, armor, ornaments, fossils, and paintings.',
    },
    {
      title: 'Victoria Memorial',
      image:
        'https://images.unsplash.com/photo-1697127997429-4155a247fece?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471',
      description:
        'A grand marble building dedicated to the memory of Queen Victoria, now a museum and popular tourist destination.',
    },
    {
      title: 'Dakshineswar Kali Temple',
      image:
        'https://images.unsplash.com/photo-1649521973050-4f4eea8fa1d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374',
      description:
        'A famous Hindu temple on the eastern bank of the Hooghly River, dedicated to goddess Kali.',
    },
    {
      title: 'Durga puja Festival',
      image:
        'https://images.unsplash.com/photo-1640281694730-df0af5ca7bd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1486',
      description:
        'The Calcutta Book Fair is an annual event that brings book lovers from all over the city together. It’s a great place to discover new books, meet authors, and enjoy street food with friends and family.',
    },
    {
      title: 'Calcutta Book Fair 2025',
      image:
        'https://images.timesnownews.com/thumb/msid-117683459,thumbsize-80464,width-1280,height-720,resizemode-75/117683459.jpg',
      description:
        'The Calcutta Book Fair is an annual event that brings book lovers from all over the city together. It’s a great place to discover new books, meet authors, and enjoy street food with friends and family.',
    }
  ],
  facts: [
    'Famous for its sweets like rasgulla and sandesh.',
    'Home to Nobel laureate Rabindranath Tagore.',
    'Hosts the world-famous Durga Puja festival.',
    'Known for its trams, the only city in India where trams still run.',
  ],
};

const AboutCulcutta = () => {
  // let head = useRef(null);
  useEffect(() => {
    const head = document.querySelector('.head');
    const head1 = SplitText.create(head, { type: 'chars', mask: 'chars' });

    gsap.fromTo(
      head1.chars,
      {
        y: '100%',
      },
      {
        y: 0,
        stagger: '0.05',
        willChange: 'transform',
      }
    );

    const subhead = document.querySelector('.subhead');
    const subhead1 = SplitText.create(subhead, { type: 'chars', mask: 'chars' });

    gsap.fromTo(
      subhead1.chars,
      {
        y: '100%',
      },
      {
        y: 0,
        stagger: '0.003',
        willChange: 'transform',
      }
    );

    gsap.fromTo(
      '.subhead1',
      {
        y: '100%',
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        willChange: 'transform',
      }
    );

    gsap.to('.overlay', {
      yPercent: -50,
      willChange: 'transform',
      scrollTrigger: {
        trigger: '.about-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.utils.toArray('.work-item').forEach(item => {
      const name = item.querySelector('.work-item-name h1');
      const img = item.querySelector('.work-item-img');
      if (!name) return;

      // @ts-ignore
      const split = SplitText.create(name, { type: 'chars', mask: 'chars' });

      gsap.set(split.chars, {
        y: '125%',
      });

      split.chars.forEach((chars, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: `top+=${index * 25 - 350} top`,
          end: `top+=${index * 25 - 350} top`,
          scrub: 1,
          animation: gsap.fromTo(
            chars,
            {
              y: '125%',
            },
            {
              y: 0,
              ease: 'none',
            }
          ),
        });
      });

      ScrollTrigger.create({
        trigger: item,
        start: 'top bottom',
        end: 'top top',
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          {
            clipPath: 'polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)',
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'none',
          }
        ),
      });

      ScrollTrigger.create({
        trigger: item,
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)',
            ease: 'none',
          }
        ),
      });
    });
  }, []);

  return (
    <>
      <Theme>
        <Navbar />
        <section className="about-hero w-full h-screen relative">
          <LiquidEther
            colors={['#D4AF37', '#3E2C1D', '#f3e5c1']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
          <div className=" absolute top-0 left-0 w-full h-screen pointer-events-none flex items-center justify-center text-[#3E2C1D]">
            <div className=" w-full h-full ">
              <div className="overlay max-[599px]:px-14 max-[599px]:leading-none w-full h-full rounded-md flex flex-col items-center justify-center gap-6">
                <h1 className="text-[5vw] max-[599px]:text-[10vw] text-center head font-bold uppercase">
                  Know About Culcutta
                </h1>
                <p className="text-[1.5vw] max-[599px]:text-[3.5vw] max-[599px]:w-full subhead leading-tight tracking-tight text-center w-[70%] font-medium">
                  Culcutta, often called the “City of Joy,” is a vibrant cultural and historical hub
                  that pulses with artistic energy, intellectual legacy, and resilient spirit. Every
                  street, from the grand colonial avenues to the bustling local markets, carries a
                  story that reveals the city’s profound ability to inspire and uplift all who call
                  it home.
                </p>
                <span className="text-[2vw] max-[599px]:text-[6vw] subhead1 font-semibold flex items-center gap-4">
                  Scroll To Know More <ArrowDown />
                </span>
              </div>
            </div>
          </div>
        </section>
        {CulcuttaInfo.highlights.map((highlight, idx) => (
          <div
            key={idx}
            className="work-item min-h-screen w-full relative overflow-hidden cursor-pointer group"
          >
            <div
              className="work-item-img absolute w-full h-full will-change-[clip-path] group-hover:scale-105 transition-transform duration-700"
              style={{
                clipPath: 'polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)',
              }}
            >
              <img
                className="w-full h-full object-cover scale-110"
                src={highlight.image}
                alt={highlight.title}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            </div>

            <div className="work-item-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-[1]">
              <div className="text-center">
                <h1 className="uppercase font-semibold leading-[1] will-change-transform text-[1.5rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-500 px-3 sm:px-4">
                  {highlight.title}
                </h1>
                <div className="mt-3 sm:mt-4 opacity-0 max-[1025px]:opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white/80 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    {highlight.description}
                  </p>
                  {/* The original code had year/link - omitted as not relevant for highlights */}
                </div>
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </Theme>
    </>
  );
};

export default AboutCulcutta;
