import React from 'react';

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <img
        src="Blogger.svg.png"
        alt="Blogger Logo"
        className="w-8 h-8 object-contain"
      />
      <h3 className="text-3xl font-semibold text-orange-400">Blogger</h3>
    </div>
  );
};

export default Logo;
