import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative">
        <div className="relative">
          <div className="absolute inset-0 bg-gold-200/20 blur-sm rounded-lg"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-center text-gold-600 mb-6">
              "A Picture is Worth a Thousand Lines of Code"
            </h1>
            <h3 className="text-2xl text-center text-gold-700 mb-8">
              Missed the moment? Relive it here. Your history, your story. 🕰️✨
            </h3>
            <p className="text-xl text-gray-400 hover:text-white text-center text-gold-700 bg-gold-100/80 backdrop-blur-sm border border-gold-300 px-6 py-4 rounded-lg shadow-lg max-w-2xl mx-auto">
              Login to join the DevMeetup Photo Store revolution. Upload your masterpieces, save your favorites, and relive your photo history like a true digital archaeologist. 🚀
            </p>
            <AuthForm />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
