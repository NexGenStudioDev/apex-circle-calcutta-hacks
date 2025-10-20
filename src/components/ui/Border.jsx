const Border = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>
    {' '}
    {/* <-- add shadow here */}
    {/* Top Left Corner */}
    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#3E2C1D]">
      <div className="absolute top-0 left-0 w-4 h-4 bg-[#D4AF37] rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
    </div>
    {/* Top Right Corner */}
    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#3E2C1D]">
      <div className="absolute top-0 right-0 w-4 h-4 bg-[#D4AF37] rounded-full translate-x-1/2 -translate-y-1/2"></div>
    </div>
    {/* Bottom Left Corner */}
    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#3E2C1D]">
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#D4AF37] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </div>
    {/* Bottom Right Corner */}
    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#3E2C1D]">
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#D4AF37] rounded-full translate-x-1/2 translate-y-1/2"></div>
    </div>
    {children}
  </div>
);
export default Border;
