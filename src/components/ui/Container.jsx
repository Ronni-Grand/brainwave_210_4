{
  /* Purpose: This component keeps content centered wit consistent horizontal padding. */
}

export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 1g:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
