"use client";

export default function Button({ children, fontSize, type }) {
  const textSize = fontSize ? `${fontSize}` : 'sm-600';
  
  let style = 'text-white bg-primary hover:bg-primary-hard';

  if (type === 'border') {
    style = 'text-primary hover:text-primary-hard bg-white border-2 border-primary hover:border-primary-hard';
  } else if (type === 'ghost') {
    style = 'text-primary hover:text-primary-hard bg-primary/10 hover:bg-primary-hard/20';
  }

  return (
    <button
      className={`${textSize} ${style} box-border rounded-full px-[1.5em] py-[0.6em] font-semibold duration-150 flex justify-center items-center gap-4`}
    >
      {children}
    </button>
  );
}
