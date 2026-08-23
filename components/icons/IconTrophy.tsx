export function IconTrophy() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Padel racket face */}
      <rect
        x="7"
        y="3.5"
        width="14"
        height="18"
        rx="7"
        transform="rotate(25 14 12.5)"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Hole pattern */}
      <circle cx="12.2" cy="9.5" r="1.1" fill="currentColor" />
      <circle cx="15.6" cy="8.2" r="1.1" fill="currentColor" />
      <circle cx="14.3" cy="12.2" r="1.1" fill="currentColor" />
      <circle cx="17.5" cy="11" r="1.1" fill="currentColor" />
      <circle cx="13.2" cy="15" r="1.1" fill="currentColor" />
      {/* Handle */}
      <path
        d="M16.8 19.2L21.5 28"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M19.6 24.8c1.1.6 2.4.4 3.2-.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Ball */}
      <circle cx="24.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M22.6 6.4c.8.7 1.7 1.7 2.1 2.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
