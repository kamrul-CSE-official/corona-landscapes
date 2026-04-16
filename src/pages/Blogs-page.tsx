import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogService from "../services/blogService";
import localAssets from "../consts/assets";
import BlogPageBanner from "../components/share/blogPageBanner";
import BlogPageCustomRequirement from "../components/share/blogPageCustomRequirement ";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
  tags: string[];
  content: string;
}

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(6); // 6 posts per page (2 rows of 3 columns)

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await blogService.getAllBlogs();
      console.log("Fetched blogs:", data);
      
      if (Array.isArray(data)) {
        setBlogs(data);
      } else {
        console.error("Data is not an array:", data);
        setBlogs([]);
        setError("Invalid data format received");
      }
      
      setError(null);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to load blogs. Please try again later.");
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  // Pagination calculations
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  console.log("Render state - loading:", loading, "blogs length:", blogs?.length, "error:", error);

  if (loading) {
    return (
      <main>
        <BlogPageBanner />
        <section className="py-16 md:py-40 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[4/5] mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <BlogPageBanner />
        <section className="py-16 md:py-40 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchBlogs}
              className="bg-[#1a2e30] text-white px-6 py-3 rounded hover:bg-[#b3ced1] hover:text-[#1a2e30] transition-all"
            >
              Try Again
            </button>
          </div>
        </section>
      </main>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <main>
        <BlogPageBanner />
        <section className="py-16 md:py-40 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600">No blog posts found.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <BlogPageBanner />
      <section className="py-16 md:py-40 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            {currentPosts.map((post, index) => (
              <div key={post.id} className="reveal reveal-visible">
                <div className="group flex flex-col h-full">
                  <Link to={`/blogs/${post.id}`} className="block">
                    <div className="relative overflow-hidden mb-6 md:mb-10 aspect-[4/5] shadow-sm cursor-pointer">
                      <img
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                        src={post.image || localAssets.sulationSummary1}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = localAssets.sulationSummary1;
                        }}
                      />
                      <div className="absolute inset-0 bg-[#b3ced1]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="absolute top-4 left-4 bg-[#1a2e30]/80 text-white text-[8px] md:text-[9px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-[9px] md:text-[10px] font-sans opacity-30 font-bold">
                      {(indexOfFirstPost + index + 1).toString().padStart(2, '0')}
                    </span>
                    <Link to={`/blogs/${post.id}`} className="flex-1">
                      <h3 className="text-xl md:text-2xl font-serif text-[#1a2e30] italic group-hover:text-[#b3ced1] transition-all cursor-pointer line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-[10px] md:text-[11px] text-gray-500 font-sans flex-wrap">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span>By {post.author}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mt-4 line-clamp-3 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                  <div className="h-px bg-gray-200 mt-6 md:mt-8 w-full group-hover:bg-[#b3ced1] transition-colors"></div>
                  <Link
                    to={`/blogs/${post.id}`}
                    className="inline-flex items-center gap-2 mt-4 text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-[#1a2e30]/60 hover:text-[#b3ced1] transition-colors group/link"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover/link:translate-x-1 transition-transform"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Component */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 md:gap-3 mt-12 md:mt-16">
              {/* Previous Button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`group h-8 w-8 md:h-10 md:w-10 flex items-center justify-center border rounded-full transition-all shrink-0 ${
                  currentPage === 1
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-gray-100 hover:border-[#b3ced1] hover:bg-[#b3ced1] hover:text-[#1a2e30]"
                }`}
                aria-label="Previous page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-180"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === 'number' && paginate(page)}
                  className={`h-8 w-8 md:h-10 md:w-10 flex items-center justify-center border rounded-full transition-all shrink-0 text-sm md:text-base ${
                    currentPage === page
                      ? "bg-[#b3ced1] text-white border-[#1a2e30]"
                      : page === '...'
                      ? "border-transparent cursor-default"
                      : "border-gray-100 hover:border-[#b3ced1] hover:bg-[#b3ced1] hover:text-[#1a2e30]"
                  }`}
                  disabled={page === '...'}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`group h-8 w-8 md:h-10 md:w-10 flex items-center justify-center border rounded-full transition-all shrink-0 ${
                  currentPage === totalPages
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-gray-100 hover:border-[#b3ced1] hover:bg-[#b3ced1] hover:text-[#1a2e30]"
                }`}
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          )}

          {/* Optional: Showing current page info */}
          <div className="text-center mt-6 text-sm text-gray-500">
            Showing {indexOfFirstPost + 1} - {Math.min(indexOfLastPost, blogs.length)} of {blogs.length} articles
          </div>
        </div>
      </section>
      <BlogPageCustomRequirement />
    </main>
  );
};

export default BlogsPage;