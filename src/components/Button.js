"use client";

export default function Button({ children, fontSize, type }) {
  let textSize = 'text-sm';
  let style = 'text-white bg-primary hover:bg-primary-hard';

  if (fontSize) {
    textSize = `text-${fontSize}`;
  }

  if (type === 'border') {
    style = 'text-primary hover:text-primary-hard bg-white border-2 border-primary hover:border-primary-hard';
  }

  if (type === 'ghost') {
    style = 'text-primary hover:text-primary-hard bg-primary/10 hover:bg-primary-hard/20';
  }

  return (
    <button className={`${textSize} ${style} box-border rounded-full px-[1.5em] py-[0.6em] font-semibold duration-150`}>
      {children}
    </button>
  );
}
