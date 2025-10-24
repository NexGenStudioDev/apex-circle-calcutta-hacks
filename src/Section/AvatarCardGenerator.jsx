import { useState, useRef } from 'react';
import { Camera, Upload, RefreshCw, Download, Share2, Star } from 'react-feather';

const VintageCard = ({ children }) => (
  <div className="rounded-lg shadow-lg p-6 bg-[#F4E5C2]/20 border-4 border-[#3E2C1D]">
    {children}
  </div>
);

const AvatarCardGenerator = () => {
  const [selectedStyle, setSelectedStyle] = useState('vivekananda');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [participantName, setParticipantName] = useState('');
  const [participantRole, setParticipantRole] = useState('Participant');
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const avatarStyles = [
    {
      id: 'vivekananda',
      name: 'Swami Vivekananda',
      shortName: 'Vivekananda',
      color: '#F4E4C1',
      accent: '#8B4513',
      secondaryAccent: '#CD853F',
      quote: 'Arise, Awake, Stop Not',
      icon: '🕉️',
      symbolIcon: '☸',
      bgPattern: 'spiritual',
      category: 'Philosopher',
      years: '1863-1902',
      specialty: 'Spiritual Leader',
    },
    {
      id: 'tagore',
      name: 'Rabindranath Tagore',
      shortName: 'Tagore',
      color: '#F5DEB3',
      accent: '#6B4423',
      secondaryAccent: '#A0522D',
      quote: 'Where Mind is Without Fear',
      icon: '✍️',
      symbolIcon: '📜',
      bgPattern: 'artistic',
      category: 'Poet',
      years: '1861-1941',
      specialty: 'Nobel Laureate',
    },
    {
      id: 'ramakrishna',
      name: 'Sri Ramakrishna',
      shortName: 'Ramakrishna',
      color: '#FFE4B5',
      accent: '#8B6914',
      secondaryAccent: '#DAA520',
      quote: 'God is in All',
      icon: '🙏',
      symbolIcon: '✨',
      bgPattern: 'divine',
      category: 'Saint',
      years: '1836-1886',
      specialty: 'Mystic',
    },
    {
      id: 'netaji',
      name: 'Netaji Subhas Bose',
      shortName: 'Netaji',
      color: '#E6D7B8',
      accent: '#654321',
      secondaryAccent: '#8B4513',
      quote: 'Give Me Blood, I Give Freedom',
      icon: '⚔️',
      symbolIcon: '🦁',
      bgPattern: 'patriotic',
      category: 'Freedom Fighter',
      years: '1897-1945',
      specialty: 'Revolutionary Leader',
    },
    {
      id: 'vidyasagar',
      name: 'Ishwar Chandra Vidyasagar',
      shortName: 'Vidyasagar',
      color: '#F0E8D8',
      accent: '#5C4033',
      secondaryAccent: '#8B6F47',
      quote: 'Education for All',
      icon: '📚',
      symbolIcon: '🎓',
      bgPattern: 'scholarly',
      category: 'Educator',
      years: '1820-1891',
      specialty: 'Social Reformer',
    },
    {
      id: 'sarojini',
      name: 'Sarojini Naidu',
      shortName: 'Sarojini',
      color: '#FAF0E6',
      accent: '#8B7355',
      secondaryAccent: '#A0826D',
      quote: 'Nightingale of India',
      icon: '🌺',
      symbolIcon: '🦜',
      bgPattern: 'poetic',
      category: 'Poet & Activist',
      years: '1879-1949',
      specialty: 'Freedom Fighter',
    },
  ];

  const handleImageUpload = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const style = avatarStyles.find(s => s.id === selectedStyle);

    // Set canvas size
    canvas.width = 800;
    canvas.height = 1000;

    // Background with gradient effect
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 1000);
    bgGradient.addColorStop(0, style.color);
    bgGradient.addColorStop(1, style.color + 'DD');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 800, 1000);

    // Main border
    ctx.strokeStyle = style.accent;
    ctx.lineWidth = 16;
    ctx.strokeRect(8, 8, 784, 984);

    // Decorative corner patterns
    ctx.strokeStyle = style.accent;
    ctx.lineWidth = 6;
    ctx.globalAlpha = 0.3;
    // Top-left
    ctx.beginPath();
    ctx.moveTo(40, 40);
    ctx.lineTo(40, 80);
    ctx.moveTo(40, 40);
    ctx.lineTo(80, 40);
    ctx.stroke();
    // Top-right
    ctx.beginPath();
    ctx.moveTo(760, 40);
    ctx.lineTo(760, 80);
    ctx.moveTo(760, 40);
    ctx.lineTo(720, 40);
    ctx.stroke();
    // Bottom-left
    ctx.beginPath();
    ctx.moveTo(40, 960);
    ctx.lineTo(40, 920);
    ctx.moveTo(40, 960);
    ctx.lineTo(80, 960);
    ctx.stroke();
    // Bottom-right
    ctx.beginPath();
    ctx.moveTo(760, 960);
    ctx.lineTo(760, 920);
    ctx.moveTo(760, 960);
    ctx.lineTo(720, 960);
    ctx.stroke();
    ctx.globalAlpha = 1.0;

    // Header with gradient
    const headerGradient = ctx.createLinearGradient(0, 40, 0, 180);
    headerGradient.addColorStop(0, style.accent);
    headerGradient.addColorStop(1, style.secondaryAccent);
    ctx.fillStyle = headerGradient;
    ctx.fillRect(40, 40, 720, 140);

    // Secondary accent line at bottom of header
    ctx.fillStyle = style.secondaryAccent;
    ctx.fillRect(40, 176, 720, 4);

    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 52px serif';
    ctx.textAlign = 'center';
    ctx.fillText('CALCUTTA <HACKS/>', 400, 110);
    ctx.font = '26px serif';
    ctx.fillText('13-14 December 2025', 400, 155);

    // Outer decorative ring for avatar
    ctx.beginPath();
    ctx.arc(400, 380, 156, 0, Math.PI * 2);
    ctx.fillStyle = style.secondaryAccent + '40';
    ctx.fill();

    // Avatar circle
    ctx.beginPath();
    ctx.arc(400, 380, 140, 0, Math.PI * 2);
    ctx.fillStyle = '#FFF';
    ctx.fill();
    ctx.strokeStyle = style.accent;
    ctx.lineWidth = 12;
    ctx.stroke();

    // Draw uploaded image if available
    if (uploadedImage) {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(400, 380, 128, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, 272, 252, 256, 256);
        ctx.restore();
        continueDrawing();
      };
      img.src = uploadedImage;
    } else {
      continueDrawing();
    }

    function continueDrawing() {
      // Symbol badge below avatar
      ctx.beginPath();
      ctx.arc(400, 510, 35, 0, Math.PI * 2);
      ctx.fillStyle = style.secondaryAccent;
      ctx.fill();
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.font = '40px serif';
      ctx.fillText(style.symbolIcon, 400, 525);

      // Name
      ctx.fillStyle = style.accent;
      ctx.font = 'bold 48px serif';
      ctx.textAlign = 'center';
      ctx.fillText(participantName || 'Your Name', 400, 600);

      // Role badge
      ctx.fillStyle = style.secondaryAccent + '50';
      const roleWidth = ctx.measureText(participantRole).width + 60;
      ctx.fillRect(400 - roleWidth / 2, 620, roleWidth, 45);
      ctx.strokeStyle = style.accent + '60';
      ctx.lineWidth = 3;
      ctx.strokeRect(400 - roleWidth / 2, 620, roleWidth, 45);
      ctx.fillStyle = style.accent;
      ctx.font = 'bold 24px serif';
      ctx.fillText(participantRole, 400, 650);

      // Inspiration box with gradient
      const boxGradient = ctx.createLinearGradient(0, 720, 0, 900);
      boxGradient.addColorStop(0, style.accent);
      boxGradient.addColorStop(1, style.secondaryAccent);
      ctx.fillStyle = boxGradient;
      ctx.fillRect(60, 720, 680, 180);

      // Border for inspiration box
      ctx.strokeStyle = style.secondaryAccent;
      ctx.lineWidth = 4;
      ctx.strokeRect(60, 720, 680, 180);

      // Icons and name
      ctx.font = '40px serif';
      ctx.fillStyle = '#FFF';
      ctx.fillText(style.icon, 280, 770);
      ctx.font = 'italic bold 28px serif';
      ctx.fillText(style.shortName, 400, 770);
      ctx.font = '40px serif';
      ctx.fillText(style.symbolIcon, 520, 770);

      // Quote
      ctx.font = 'bold 26px serif';
      const words = style.quote.split(' ');
      const lines = [];
      let currentLine = '';
      words.forEach(word => {
        const testLine = currentLine + word + ' ';
        if (ctx.measureText(testLine).width < 600) {
          currentLine = testLine;
        } else {
          lines.push(currentLine);
          currentLine = word + ' ';
        }
      });
      lines.push(currentLine);

      lines.forEach((line, i) => {
        ctx.fillText(`"${line.trim()}"`, 400, 820 + i * 34);
      });

      // Specialty and years
      ctx.font = '20px serif';
      ctx.fillStyle = '#FFF';
      ctx.globalAlpha = 0.9;
      ctx.fillText(`${style.specialty} • ${style.years}`, 400, 880);
      ctx.globalAlpha = 1.0;

      // Download
      const link = document.createElement('a');
      link.download = `calcutta-hack-${style.shortName}-${participantName || 'card'}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const shareCard = async () => {
    if (navigator.share && uploadedImage) {
      try {
        const canvas = canvasRef.current;
        canvas.toBlob(async blob => {
          const file = new File([blob], 'calcutta-hack-card.png', { type: 'image/png' });
          await navigator.share({
            title: 'Calcutta <Hack/> ID Card',
            text: `Check out my Calcutta <Hack/> participant ID card inspired by ${avatarStyles.find(s => s.id === selectedStyle).name}!`,
            files: [file],
          });
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    }
  };

  const currentStyle = avatarStyles.find(s => s.id === selectedStyle);

  return (
    <section id="avatar-generator" className="py-20 bg-[#3E2C1D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
            CREATE YOUR AVATAR ID CARD
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="font-serif text-xl text-[#6B4423] max-w-3xl mx-auto">
            Design your personalized hackathon ID card inspired by Bengal's legendary icons. Upload
            your photo, choose your inspiration, and share your unique identity!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Controls */}
          <div className="space-y-8">
            {/* Style Selection */}
            <VintageCard>
              <div className="flex justify-between flex-col bg-[#E8D9B8] p-6 rounded-lg">
                <h3 className="font-display text-2xl font-bold text-[#3E2C1D] mb-6 flex items-center gap-3">
                  <Star size={28} className="text-[#D4AF37]" />
                  Choose Your Inspiration
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {avatarStyles.map(style => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-4 border-4 transition-all duration-300 rounded-lg relative overflow-hidden ${
                        selectedStyle === style.id
                          ? 'border-[#3E2C1D] text-white bg-[#3E2C1D]/40 shadow-lg transform scale-105'
                          : 'border-[#3E2C1D]/40 hover:border-[#6b4423] hover:bg-white hover:shadow-md'
                      }`}
                      style={{
                        backgroundColor: selectedStyle === style.id ? '#e4d6ba' : '#E8D9B8',
                      }}
                    >
                      {selectedStyle === style.id && (
                        <div className="absolute top-2 right-2">
                          <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-md border-2 border-[#3E2C1D]">
                            <span className="text-[#3E2C1D] font-bold">✓</span>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-2 mb-2 ">
                        <span className="text-4xl transition-transform duration-300 hover:scale-110">
                          {style.icon}
                        </span>
                        <span className="text-3xl opacity-70">{style.symbolIcon}</span>
                      </div>
                      <div className="font-display text-sm font-bold text-[#3E2C1D] mb-1">
                        {style.name}
                      </div>
                      <div className="text-xs text-[#6B4423]/80 mb-1">{style.category}</div>
                      <div className="font-serif text-xs text-[#6B4423] italic">
                        "{style.quote}"
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </VintageCard>

            {/* Image Upload */}
            <VintageCard>
              <h3 className="font-display text-2xl font-bold text-[#3E2C1D] mb-6 flex items-center gap-3">
                <Camera size={28} className="text-[#D4AF37]" />
                Upload Your Photo
              </h3>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-[#3E2C1D] text-[#E8D9B8] px-8 py-4 font-display font-bold border-4 border-[#3E2C1D] hover:bg-[#6B4423] hover:border-[#6B4423] transition-all duration-300 flex items-center justify-center gap-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <Upload size={24} />
                {uploadedImage ? 'Change Photo' : 'Upload Photo'}
              </button>
              {uploadedImage && (
                <div className="mt-6 text-center">
                  <div className="relative inline-block">
                    <img
                      src={uploadedImage}
                      alt="Preview"
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#3E2C1D] shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-[#D4AF37] rounded-full p-2 shadow-md">
                      <span className="text-[#3E2C1D] text-xs">✓</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setUploadedImage(null)}
                    className="mt-4 text-[#6B4423] hover:text-[#3E2C1D] font-serif flex items-center gap-2 mx-auto transition-colors duration-300 hover:underline"
                  >
                    <RefreshCw size={16} /> Remove Photo
                  </button>
                </div>
              )}
            </VintageCard>

            {/* Details */}
            <VintageCard>
              <h3 className="font-display text-2xl font-bold text-[#3E2C1D] mb-6">Your Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-serif text-[#6B4423] block mb-2">Name</label>
                  <input
                    type="text"
                    value={participantName}
                    onChange={e => setParticipantName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-[#3E2C1D] font-serif text-[#3E2C1D] focus:outline-none focus:border-[#6B4423] rounded-md transition-all duration-300 focus:shadow-md"
                  />
                </div>
                <div>
                  <label className="font-serif text-[#6B4423] block mb-2">Role</label>
                  <select
                    value={participantRole}
                    onChange={e => setParticipantRole(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#3E2C1D] font-serif text-[#3E2C1D] focus:outline-none focus:border-[#6B4423] 
                    rounded-md transition-all duration-300 focus:shadow-md bg-[#ecdebb] "
                  >
                    <option>Participant</option>
                    <option>Team Lead</option>
                    <option>Mentor</option>
                    <option>Volunteer</option>
                    <option>Judge</option>
                    <option>Organizer</option>
                  </select>
                </div>
              </div>
            </VintageCard>
          </div>
          {/* Right: Preview */}
          <div>
            <VintageCard>
              <h3 className="font-display text-2xl font-bold text-[#3E2C1D] mb-6 text-center">
                Preview Your Card
              </h3>

              <div
                className={`relative mx-auto border-4 overflow-hidden rounded-xl transition-all duration-500 `}
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  aspectRatio: '4/5',
                  backgroundColor: currentStyle.color,
                  borderColor: currentStyle.accent,
                  boxShadow: `0 20px 50px ${currentStyle.accent}40, inset 0 0 100px ${currentStyle.secondaryAccent}20`,
                }}
              >
                {/* Decorative corner patterns */}
                <div
                  className={`absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 opacity-30 border-[${currentStyle.accent}]`}
                ></div>
                <div
                  className={` top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-[${currentStyle.accent}opacity-30`}
                ></div>
                <div
                  className={`absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-[${currentStyle.accent} opacity-30`}
                ></div>
                <div
                  className={`absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-[${currentStyle.accent} opacity-30`}
                ></div>

                {/* Header */}
                <div
                  className="absolute top-0 left-0 right-0 p-5 text-center shadow-lg"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${currentStyle.accent} 0%, ${currentStyle.secondaryAccent} 100%)`,
                  }}
                >
                  <div className="font-display text-lg md:text-xl font-bold text-white tracking-widest mb-1">
                    CALCUTTA &lt;HACKS/&gt;
                  </div>
                  <div className="font-serif text-xs text-white/90">13-14 December 2025</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6B4423]"></div>
                </div>

                {/* Avatar Circle */}
                <div className="absolute top-28 left-1/2 -translate-x-1/2">
                  {/* Outer decorative ring */}
                  <div
                    className={`w-36 h-36 rounded-full absolute top-2 left-2 opacity-20 bg-[${currentStyle.secondaryAccent}]`}
                  ></div>

                  <div
                    className={`w-32 h-32 rounded-full border-4 bg-white flex items-center justify-center overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 relative z-10`}
                    style={{
                      borderColor: currentStyle.accent,
                      boxShadow: `0 8px 32px ${currentStyle.accent}60, inset 0 0 20px ${currentStyle.secondaryAccent}20`,
                    }}
                  >
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl filter drop-shadow-lg">{currentStyle.icon}</span>
                    )}
                  </div>

                  {/* Small icon badge */}
                  <div
                    className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-lg z-20`}
                    style={{ backgroundColor: currentStyle.secondaryAccent }}
                  >
                    <span className="text-xl">{currentStyle.symbolIcon}</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="absolute top-72 left-0 right-0 text-center px-4">
                  <div className="font-display text-xl font-bold mb-2 tracking-wide text-[#D4AF37]">
                    {participantName || 'Your Name'}
                  </div>
                  <div
                    className={`inline-block px-4 py-1 rounded-full text-xs font-serif font-semibold
`}
                    style={{
                      backgroundColor: `${currentStyle.secondaryAccent}30`,
                      color: currentStyle.accent,
                      border: `2px solid ${currentStyle.accent}40`,
                    }}
                  >
                    {participantRole}
                  </div>
                </div>

                {/* Inspiration Box */}
                <div
                  className="absolute bottom-3 left-4 right-4 p-4 text-center rounded-lg shadow-lg border-2"
                  style={{
                    borderColor: currentStyle.secondaryAccent,
                    backgroundImage: `linear-gradient(135deg, ${currentStyle.accent} 0%, ${currentStyle.secondaryAccent} 100%)`,
                  }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">{currentStyle.icon}</span>
                    <span className="font-serif italic text-sm text-white font-bold">
                      {currentStyle.shortName}
                    </span>
                    <span className="text-2xl">{currentStyle.symbolIcon}</span>
                  </div>
                  <div className="font-display text-xs font-bold text-white/95 leading-relaxed">
                    "{currentStyle.quote}"
                  </div>
                  <div className="mt-2 text-xs text-white/80 font-serif">
                    {currentStyle.specialty} • {currentStyle.years}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={downloadCard}
                  disabled={!participantName || !uploadedImage}
                  className="w-full bg-[#3E2C1D] text-[#E8D9B8] px-6 py-4 font-display font-bold border-4 border-[#3E2C1D] hover:bg-[#6B4423] hover:border-[#6B4423] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-90 disabled:cursor-not-allowed rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Download size={24} />
                  Download ID Card
                </button>
                <button
                  onClick={shareCard}
                  disabled={!participantName || !uploadedImage}
                  className="w-full bg-[#E8D9B8] text-[#3E2C1D] px-6 py-4 font-display font-bold border-4 border-[#3E2C1D] hover:bg-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-90 disabled:cursor-not-allowed rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Share2 size={24} />
                  Share on Social Media
                </button>
              </div>

              {(!participantName || !uploadedImage) && (
                <p className="text-center font-serif text-sm text-[#6B4423] italic mt-4">
                  Upload a photo and enter your name to enable download & share
                </p>
              )}
            </VintageCard>
          </div>
        </div>

        {/* Hidden Canvas for Download */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </section>
  );
};

export default AvatarCardGenerator;
