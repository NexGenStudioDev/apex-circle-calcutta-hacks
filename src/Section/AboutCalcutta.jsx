import React from 'react';
import SpotlightCard from '../components/ui/SpotlightCard';

const AboutCalcutta = () => (
  <section id="about-calcutta" className="py-20 mt-[15vh] ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-[#2E2B26] mb-4">
          THE CITY OF JOY: CALCUTTA
        </h2>
        <div className="w-32 h-1 bg-[#C9A45A] mx-auto mb-6"></div>
        <p className="font-serif text-xl text-[#5B4B3B] italic max-w-3xl mx-auto">
          "What Bengal thinks today, India thinks tomorrow" — A testament to the intellectual and cultural influence of this magnificent city
        </p>
      </div>

      {/* Birth of a City */}
      <SpotlightCard 
        className="mb-12 p-8 rounded-xl border-2 border-[#D6CFC7] bg-[#DED1AF] hover:scale-[1.02] transition-transform duration-300" 
        style={{ background: "#CBBF9E" }}
        spotlightColor="rgba(201, 164, 90, 0.3)"
      >
        <h3 className="font-display text-3xl font-bold text-[#2E2B26] mb-6 border-b-2 border-[#D6CFC7] pb-3">
          The Birth & Rise of Calcutta
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-display text-xl font-bold text-[#5B4B3B] mb-3">Ancient Roots (14th‑16th Century)</h4>
            <p className="font-serif text-[#5B4B3B] leading-relaxed mb-4">
              Before the British arrived, Calcutta existed as three modest villages—<strong>Sutanuti, Gobindapur, and Kalikata</strong>—under the Bengal Sultanate and later the Mughal Empire after 1576. The name "Kalikata" appears in the rent‑roll of Mughal Emperor Akbar (1556–1605), rooted in the goddess Kali and the rich cultural tapestry of Bengal.
            </p>
            <h4 className="font-display text-xl font-bold text-[#5B4B3B] mb-3">British Foundation (1690)</h4>
            <p className="font-serif text-[#5B4B3B] leading-relaxed">
              On <strong>August 24, 1690</strong>, Job Charnock of the British East India Company hoisted the Company standard on the banks of the Hooghly River, establishing a trading post. The site was strategically chosen—protected by the Hooghly to the west, a creek to the north, and salt lakes to the east. By 1701, <strong>Fort William</strong> was constructed, named after King William III, marking the beginning of British dominance in Bengal.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold text-[#5B4B3B] mb-3">Colonial Capital (18th‑19th Century)</h4>
            <p className="font-serif text-[#5B4B3B] leading-relaxed mb-4">
              Calcutta rapidly grew into the <strong>"Second City of the British Empire"</strong> after London. By 1750, its population reached 120,000. The city became the capital of British India until 1911, earning the title <strong>"City of Palaces"</strong> for its grand architecture. Despite a devastating cyclone in 1864 that killed 60,000, Calcutta continued its relentless expansion, becoming a hub of commerce, culture, and intellectual ferment.
            </p>
            <div className="bg-[#F7F5F2] p-4 border-2 border-[#D6CFC7] rounded-lg">
              <p className="font-serif text-sm text-[#5B4B3B] italic">
                "In Calcutta, the past and present walk hand in hand through narrow lanes and grand boulevards, where every corner whispers stories of revolution, renaissance, and resilience."
              </p>
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* Luminaries */}
      <div className="mb-12">
        <h3 className="font-display text-4xl font-bold text-[#2E2B26] mb-8 text-center">
          Luminaries of Calcutta: Architects of Modern India
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Swami Vivekananda */}
          <SpotlightCard 
            className="p-8 rounded-xl hover:scale-[1.02] transition-transform duration-300 border-2 border-[#D6CFC7] bg-[#DED1AF] hover:scale-[1.02] transition-transform duration-300" 
            style={{ background: "#CBBF9E" }}
            spotlightColor="rgba(201, 164, 90, 0.3)"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-[#C9A45A]/20 border-2 border-[#2E2B26] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🕉️</span>
              </div>
              <div>
                <h4 className="font-display text-2xl font-bold text-[#2E2B26]">Swami Vivekananda</h4>
                <p className="font-serif text-sm text-[#5B4B3B] italic">(1863–1902)</p>
              </div>
            </div>
            <p className="font-serif text-[#5B4B3B] leading-relaxed mb-3">
              Born as <strong>Narendranath Datta</strong> on January 12, 1863, at <strong>3 Gourmohan Mukherjee Street, Calcutta</strong>, Vivekananda was the spiritual heir of Sri Ramakrishna. His ancestral home remains a sacred site, now the Ramakrishna Mission Cultural Centre.
            </p>
            <p className="font-serif text-[#5B4B3B] leading-relaxed mb-3">
              On <strong>May 1, 1897</strong>, he founded the <strong>Ramakrishna Mission</strong> in Calcutta, dedicated to social‑service based on Karma Yoga. He established the headquarters at <strong>Belur Math</strong> on the banks of the Hooghly, a spiritual complex that harmonises Hindu, Islamic, Buddhist, and Christian architectural elements—symbolising the unity of all religions.
            </p>
            <p className="font-serif text-[#5B4B3B] leading-relaxed">
              <strong>Legacy:</strong> His electrifying speech at the 1893 World Parliament of Religions in Chicago introduced Vedanta philosophy to the West. He remains an icon of Hindu nationalism and spiritual awakening, inspiring millions with "Arise, awake, and stop not till the goal is reached."
            </p>
            <div className="mt-4 p-3 bg-[#2E2B26]/10 rounded">
              <p className="font-serif text-sm text-[#5B4B3B]">
                <strong>Current Legacy:</strong> Belur Math continues as the headquarters of Ramakrishna Math & Mission, spreading Vivekananda's vision globally.
              </p>
            </div>
          </SpotlightCard>

          {/* Rabindranath Tagore */}
          <SpotlightCard 
            className="p-8 rounded-xl border-2 border-[#D6CFC7] bg-[#DED1AF] hover:scale-[1.02] transition-transform duration-300" 
            style={{ background: "#CBBF9E" }}
            spotlightColor="rgba(201, 164, 90, 0.3)"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-[#C9A45A]/20 border-2 border-[#2E2B26] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✍️</span>
              </div>
              <div>
                <h4 className="font-display text-2xl font-bold text-[#2E2B26]">Rabindranath Tagore</h4>
                <p className="font-serif text-sm text-[#5B4B3B] italic">(1861–1941)</p>
              </div>
            </div>
            <p className="font-serif text-[#5B4B3B] leading-relaxed mb-3">
              Born on <strong>May 7, 1861</strong>, at <strong>Jorasanko Thakur Bari, Kolkata</strong>, Rabindranath was the youngest of thirteen children in the illustrious Tagore family. Jorasanko was the cultural crucible of the <strong>Bengal Renaissance</strong>, where literature, music, theatre, and art flourished under the patronage of his grandfather, Dwarakanath Tagore.
            </p>
            <p className="font-serif text-[#5B4B3B] leading-relaxed mb-3">
              A polymath—poet, novelist, playwright, composer, painter, and educationist—Tagore became the <strong>first non‑European to win the Nobel Prize in Literature (1913)</strong> for his collection <em>Gitanjali</em>. He composed the national anthems of <strong>India ("Jana Gana Mana")</strong> and <strong>Bangladesh ("Amar Sonar Bangla")</strong>.
            </p>
            <p className="font-serif text-[#5B4B3B] leading-relaxed mb-3">
              In 1901, he founded <strong>Santiniketan</strong> in rural Bengal, an experimental school promoting creative learning, blending Indian and Western educational philosophies. It later became <strong>Visva‑Bharati University</strong>, a UNESCO World Heritage Site.
            </p>
            <p className="font-serif text-[#5B4B3B] leading-relaxed">
              <strong>Family Legacy:</strong> The Tagore family, originally Pirali Brahmins from Burdwan, rose to prominence during the Bengal Renaissance. His father, <strong>Debendranath Tagore</strong>, was a philosopher and reformer. Rabindranath's son, <strong>Rathindranath</strong>, became Visva‑Bharati’s first Vice‑Chancellor.
            </p>
            <div className="mt-4 p‑3 bg-[#2E2B26]/10 rounded">
              <p className="font‑serif text‑sm text-[#5B4B3B]">
                <strong>Current Family:</strong> Descendants continue his cultural work. <strong>Jorasanko Thakur Bari</strong> is now the Rabindra Bharati Museum. Santiniketan thrives as a global centre of arts and learning.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* … (continue similarly for Partition, British Rule, Queen Victoria) … */}

    </div>
  </section>
);

export default AboutCalcutta;
