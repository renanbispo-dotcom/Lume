export default function LogoIcon({ className = 'logoIcon' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 10h18l-2 13H9L7 10Z"
        stroke="#3B2314"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M22 13h3a3 3 0 0 1 0 6h-3"
        stroke="#3B2314"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 7c0-2 2-2 2-4M15 7c0-2 2-2 2-4"
        stroke="#3B2314"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="7"
        y1="23"
        x2="25"
        y2="23"
        stroke="#3B2314"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
