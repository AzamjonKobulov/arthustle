import { useState, useRef, useEffect } from 'react';
import { useNavbar } from '../../contexts/NavbarContext';
import ItemsInCart from './ItemsInCart';

export default function Cart() {
  const { itemsInCart, setItemsInCart } = useNavbar();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const itemsRef = useRef(null);

  useEffect(function () {
    function handleClickOutside(event) {
      if (itemsRef.current && !itemsRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const inc = () => setItemsInCart((item) => item + 1);

  const dec = () => setItemsInCart((item) => Math.max(0, item - 1));

  return (
    <div className="relative" ref={itemsRef}>
      <button
        className="w-10 h-10 shrink-0 relative grid place-content-center bg-brand-main-elem rounded-full"
        onClick={() => setIsCartOpen((open) => !open)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.85709 11.3333H12.9122H12.9788C13.9106 11.3333 14.7758 10.6667 14.909 9.73333L15.9739 4.13333C16.0404 3.93333 15.9739 3.73333 15.8408 3.6C15.7077 3.4 15.508 3.33333 15.3083 3.33333H4.32626L4.12659 1.73333C3.99347 0.733333 3.19478 0 2.12985 0H0.665579C0.266232 0 0 0.266667 0 0.666667C0 1.06667 0.266232 1.33333 0.665579 1.33333H2.12985C2.46264 1.33333 2.72887 1.6 2.79543 1.93333L3.7938 9.6C3.99347 10.6 4.79217 11.3333 5.85709 11.3333ZM3.32789 14C3.32789 12.8667 4.19315 12 5.32463 12C6.45611 12 7.32137 12.8667 7.32137 14C7.32137 15.1333 6.45611 16 5.32463 16C4.19315 16 3.32789 15.1333 3.32789 14ZM4.65905 14C4.65905 14.4 4.92528 14.6667 5.32463 14.6667C5.72398 14.6667 5.99021 14.4 5.99021 14C5.99021 13.6 5.72398 13.3333 5.32463 13.3333C4.92528 13.3333 4.65905 13.6 4.65905 14ZM13.3116 12C12.1801 12 11.3148 12.8667 11.3148 14C11.3148 15.1333 12.1801 16 13.3116 16C14.4431 16 15.3083 15.1333 15.3083 14C15.3083 12.8667 14.4431 12 13.3116 12ZM12.646 14C12.646 14.4 12.9122 14.6667 13.3116 14.6667C13.7109 14.6667 13.9772 14.4 13.9772 14C13.9772 13.6 13.7109 13.3333 13.3116 13.3333C12.9122 13.3333 12.646 13.6 12.646 14ZM13.5778 9.46667L14.5096 4.66667H4.52594L5.12496 9.4C5.19151 9.73333 5.45775 10 5.79053 10H12.9122C13.245 10 13.5112 9.8 13.5778 9.46667Z"
            fill="#01ACB7"
          />
          <mask
            id="mask0_1903_28013"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.85709 11.3333H12.9122H12.9788C13.9106 11.3333 14.7758 10.6667 14.909 9.73333L15.9739 4.13333C16.0404 3.93333 15.9739 3.73333 15.8408 3.6C15.7077 3.4 15.508 3.33333 15.3083 3.33333H4.32626L4.12659 1.73333C3.99347 0.733333 3.19478 0 2.12985 0H0.665579C0.266232 0 0 0.266667 0 0.666667C0 1.06667 0.266232 1.33333 0.665579 1.33333H2.12985C2.46264 1.33333 2.72887 1.6 2.79543 1.93333L3.7938 9.6C3.99347 10.6 4.79217 11.3333 5.85709 11.3333ZM3.32789 14C3.32789 12.8667 4.19315 12 5.32463 12C6.45611 12 7.32137 12.8667 7.32137 14C7.32137 15.1333 6.45611 16 5.32463 16C4.19315 16 3.32789 15.1333 3.32789 14ZM4.65905 14C4.65905 14.4 4.92528 14.6667 5.32463 14.6667C5.72398 14.6667 5.99021 14.4 5.99021 14C5.99021 13.6 5.72398 13.3333 5.32463 13.3333C4.92528 13.3333 4.65905 13.6 4.65905 14ZM13.3116 12C12.1801 12 11.3148 12.8667 11.3148 14C11.3148 15.1333 12.1801 16 13.3116 16C14.4431 16 15.3083 15.1333 15.3083 14C15.3083 12.8667 14.4431 12 13.3116 12ZM12.646 14C12.646 14.4 12.9122 14.6667 13.3116 14.6667C13.7109 14.6667 13.9772 14.4 13.9772 14C13.9772 13.6 13.7109 13.3333 13.3116 13.3333C12.9122 13.3333 12.646 13.6 12.646 14ZM13.5778 9.46667L14.5096 4.66667H4.52594L5.12496 9.4C5.19151 9.73333 5.45775 10 5.79053 10H12.9122C13.245 10 13.5112 9.8 13.5778 9.46667Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1903_28013)">
            <rect width="16" height="16" fill="white" />
          </g>
        </svg>
        <div className="w-5 h-5 shrink-0 absolute -top-1.5 -right-2 grid place-content-center rounded-full bg-white">
          <span className="w-[1.125rem] h-[1.125rem] text-center text-white text-xs font-bold bg-brand-alert rounded-full">
            {itemsInCart}
          </span>
        </div>
      </button>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
        <button className="text-lg" onClick={dec}>
          -
        </button>
        <button className="text-lg" onClick={inc}>
          +
        </button>
      </div>
      {isCartOpen && <ItemsInCart setIsCartOpen={setIsCartOpen} />}
    </div>
  );
}
