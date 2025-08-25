export default function MessengerFab() {
  return (
    <a
      aria-label="Chat on Messenger"
      href="https://m.me/772698535925350" // Replace with your Page username or ID
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-22 md:bottom-5 right-2 md:right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width={28}
        height={28}
        fill="white"
      >
        <path d="M24 4C12.95 4 4 12.61 4 23.5c0 6.14 2.91 11.61 7.47 15.25V44l6.84-3.75c1.77.49 3.66.75 5.69.75 11.05 0 20-8.61 20-19.5S35.05 4 24 4zm1.77 26.33l-4.7-5.02-9.29 5.02 10.15-10.8 4.82 5.02 9.15-5.02-10.13 10.8z" />
      </svg>
    </a>
  );
}
