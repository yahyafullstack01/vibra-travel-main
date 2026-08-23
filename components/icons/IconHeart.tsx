export function IconHeart() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Sagrada Família-inspired silhouette */}
      {/* Center spire */}
      <path
        d="M16 4l1.4 3.2V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4l-1.4 3.2V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Side spires */}
      <path
        d="M9 9l1.1 2.4V16M9 9l-1.1 2.4V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 9l1.1 2.4V16M23 9l-1.1 2.4V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Outer spires */}
      <path
        d="M5 13v6M27 13v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 13l.8-1.8M27 13l-.8-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Main body / facade */}
      <path
        d="M7.5 16h17v10H7.5V16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Arched doorway */}
      <path
        d="M13 26v-5a3 3 0 0 1 6 0v5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Facade windows */}
      <path
        d="M10 19.5v3M22 19.5v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
