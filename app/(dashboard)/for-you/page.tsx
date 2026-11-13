"use client";
import { useEffect, useState } from "react";
import {
  FiSearch,
  FiPlay,
  FiClock,
  FiStar,
} from "react-icons/fi";

type Book = {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: string;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
};

const API_URL = "https://us-central1-summaristt.cloudfunctions.net";

// Small stand-in logo. Swap for your own logo image if you have one.
function LogoMark() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" aria-hidden="true">
      <g transform="rotate(-20 19 19)">
        <rect x="6" y="5" width="24" height="28" rx="3" fill="#0b3a55" />
        <rect x="10" y="9" width="17" height="3" rx="1.5" fill="#3f7fa3" />
        <rect x="6" y="29" width="24" height="4" rx="2" fill="#062a40" />
      </g>
    </svg>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <div className="w-full min-w-0">
      {/* Book cover */}
      <div className="flex h-[172px] items-end justify-center">
        <img
          src={book.imageLink}
          alt={book.title}
          className="h-full w-auto max-w-full object-contain"
        />
      </div>

      {/* Book information */}
      <div className="mt-3 px-1">
        <h3 className="line-clamp-1 text-[16px] font-medium text-[#032b41]">
          {book.title}
        </h3>

        <p className="mt-1 line-clamp-1 text-[14px] text-[#6b757b]">
          {book.author}
        </p>

        <p className="mt-2 line-clamp-2 text-[14px] leading-5 text-[#394547]">
          {book.subTitle}
        </p>

        <div className="mt-2 flex items-center gap-3 text-[13px] text-[#7a858a]">
          <span className="flex items-center gap-1">
            <FiClock size={14} />
            03:24
          </span>

          <span className="flex items-center gap-1">
            <FiStar size={14} />
            {book.averageRating || "4.3"}
          </span>
        </div>
      </div>
    </div>
  );
}

const rowVisibility = [
  "",
  "",
  "hidden sm:block",
  "hidden md:block",
  "hidden lg:block",
];

export default function ForYou() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [suggestedBooks, setSuggestedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const [selectedResponse, recommendedResponse, suggestedResponse] =
          await Promise.all([
            fetch(`${API_URL}/getBooks?status=selected`),
            fetch(`${API_URL}/getBooks?status=recommended`),
            fetch(`${API_URL}/getBooks?status=suggested`),
          ]);

        const selected = await selectedResponse.json();
        const recommended = await recommendedResponse.json();
        const suggested = await suggestedResponse.json();

        // The "selected" endpoint returns an array, so take the first book
        setSelectedBook(Array.isArray(selected) ? selected[0] : selected);
        setRecommendedBooks(recommended);
        setSuggestedBooks(suggested);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#032b41]">
      {/* SIDEBAR */}
     

      {/* MAIN CONTENT */}
      <main className="md:ml-[200px]">
        {/* SEARCH HEADER */}
        <header className="flex h-[80px] items-center justify-end border-b border-[#e6ebed] px-6 md:px-8">
          <div className="flex h-[40px] w-full max-w-[340px] overflow-hidden rounded-lg border border-[#d8e1e4] bg-[#f1f6f4]">
            <input
              type="text"
              placeholder="Search for books"
              className="w-full bg-transparent px-4 text-[14px] text-[#032b41] outline-none placeholder:text-[#6b757b]"
            />

            <button className="flex w-[45px] items-center justify-center border-l border-[#d8e1e4] text-[#032b41]">
              <FiSearch size={22} />
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="mx-auto max-w-[1100px] px-6 py-10">
          {/* SELECTED BOOK */}
          <section>
            <h1 className="mb-4 text-[23px] font-bold text-[#032b41]">
              Selected just for you
            </h1>

            {selectedBook && (
              <div className="flex min-h-[187px] flex-col rounded-md bg-[#fbefd6] py-6 md:w-2/3 md:flex-row md:items-center">
                {/* Left: subtitle */}
                <div className="px-6 pb-5 md:basis-[42%] md:self-stretch md:border-r md:border-[#e3d7bd] md:pb-0">
                  <p className="flex h-full items-center text-[16px] leading-6 text-[#032b41]">
                    {selectedBook.subTitle || selectedBook.title}
                  </p>
                </div>

                {/* Right: cover + info */}
                <div className="flex flex-1 items-center gap-4 px-6">
                  <div className="relative h-[140px] w-[141px] shrink-0">
                    <div className="absolute bottom-0 left-0 h-[70px] w-[141px] rounded-t-full bg-[#86b6cd]" />
                    <img
                      src={selectedBook.imageLink}
                      alt={selectedBook.title}
                      className="absolute bottom-0 left-1/2 h-[140px] w-[115px] -translate-x-1/2 object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-col justify-center gap-2">
                    <h2 className="text-[18px] font-bold text-[#032b41]">
                      {selectedBook.title}
                    </h2>

                    <p className="text-[14px] text-[#394547]">
                      {selectedBook.author}
                    </p>

                    <div className="mt-1 flex items-center gap-3">
                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                        <FiPlay size={18} fill="white" />
                      </button>

                      <span className="text-[14px] font-medium text-[#032b41]">
                        3 mins 23 secs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* RECOMMENDED */}
          <section className="mt-7">
            <h2 className="text-[23px] font-bold text-[#032b41]">
              Recommended For You
            </h2>

            <p className="mt-3 text-[16px] text-[#7a858a]">
              We think you’ll like these
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {recommendedBooks.slice(0, 5).map((book, i) => (
                <div key={book.id} className={rowVisibility[i]}>
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </section>

          {/* SUGGESTED */}
          <section className="mt-12">
            <h2 className="text-[23px] font-bold text-[#032b41]">
              Suggested Books
            </h2>

            <p className="mt-3 text-[16px] text-[#7a858a]">
              Browse those books
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {suggestedBooks.slice(0, 5).map((book, i) => (
                <div key={book.id} className={rowVisibility[i]}>
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
