import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import blogService from "../services/blogService";
import localAssets from "../consts/assets";

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

const BlogDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch the blog post by ID
      const blogPost = await blogService.getBlogById(id!);

      if (!blogPost) {
        setError("Blog post not found");
        setLoading(false);
        return;
      }

      setPost(blogPost);

      // Fetch related blogs (excluding current)
      const related = await blogService.getRelatedBlogs(id!, 3);
      setRelatedPosts(related);

      // Scroll to top when post loads
      window.scrollTo(0, 0);
    } catch (err) {
      console.error("Error fetching blog post:", err);
      setError("Failed to load the blog post. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/blogs");
    }
  };

  if (loading) {
    return (
      <main>
        {/* Skeleton Loader for Hero */}
        <div className="h-[50vh] bg-gray-200 animate-pulse"></div>

        {/* Skeleton Loader for Content */}
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-100">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 w-16 bg-gray-200 rounded animate-pulse"
                ></div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f5f5f0]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a2e30] mb-4">
            {error || "Post Not Found"}
          </h1>
          <p className="text-gray-600 mb-8">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 bg-[#1a2e30] text-white px-8 py-3 text-sm font-bold tracking-wide uppercase hover:bg-[#b3ced1] hover:text-[#1a2e30] transition-all cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            Back to Blogs
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={post.image || localAssets.sulationSummary1}
            alt={post.title}
            onError={(e) => {
              (e.target as HTMLImageElement).src = localAssets.sulationSummary1;
            }}
          />
          <div className="absolute inset-0 bg-[#1a2e30]/70"></div>
        </div>
        <div
          data-aos="fade-up"
          className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl pt-20 md:pt-24 fade-in"
        >
          <span className="inline-block text-[9px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6 opacity-70 text-[#b3ced1]">
            {post.category}
          </span>
          <h1 className="text-4xl font-serif mb-6 md:mb-8 italic">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm text-white/80 flex-wrap">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
            <span>By {post.author}</span>
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section
        data-aos="fade-up"
        className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-3xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-100">
            {post.tags &&
              post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] md:text-[10px] font-sans tracking-wide text-[#1a2e30]/60 bg-gray-100 px-3 py-1.5 rounded-sm"
                >
                  #{tag}
                </span>
              ))}
          </div>

          {/* Blog Content */}
          <article
            className="blog-content prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[#1a2e30] prose-headings:italic
              prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:font-light
              prose-a:text-[#b3ced1] prose-a:no-underline hover:prose-a:text-[#1a2e30]
              prose-strong:text-[#1a2e30] prose-strong:font-bold
              prose-li:text-gray-700
              prose-blockquote:border-l-[#b3ced1] prose-blockquote:bg-gray-50 prose-blockquote:p-6 prose-blockquote:italic
              prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gray-50 border-l-4 border-[#b3ced1]">
            <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
              {/* <div className="w-16 h-16 rounded-full bg-[#1a2e30] flex items-center justify-center text-white font-serif text-2xl italic">
                {post.author.charAt(0)}
              </div> */}
              <div>
                <h4 className="font-serif text-xl text-[#1a2e30] italic mb-1">
                  About {post.author}
                </h4>
                <p className="text-sm text-gray-600">
                  {post.author} is a landscape designer with over a decade of
                  experience creating sustainable, beautiful outdoor spaces.
                  Passionate about native plants and eco-friendly design, they
                  bring expert insights to every project.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation between posts */}
          {/* <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100 flex-wrap gap-4">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm text-[#1a2e30]/60 hover:text-[#b3ced1] transition-colors group cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:-translate-x-1 transition-transform"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              Back to Blogs
            </button>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-[#1a2e30]/60 hover:text-[#b3ced1] transition-colors"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[#b3ced1] font-bold tracking-[0.2em] uppercase text-[9px] md:text-[10px] mb-3 block">
                Keep Reading
              </span>
              <h2 className="text-2xl md:text-4xl font-serif text-[#1a2e30] italic">
                Related Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  to={`/blogs/${relatedPost.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden mb-4 aspect-[4/5] shadow-sm">
                    <img
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                      src={relatedPost.image || localAssets.sulationSummary1}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          localAssets.sulationSummary1;
                      }}
                    />
                    <div className="absolute inset-0 bg-[#b3ced1]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[9px] font-sans opacity-30 font-bold">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-[9px] md:text-[10px] text-[#b3ced1] font-bold tracking-wide uppercase">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-[#1a2e30] italic group-hover:text-[#b3ced1] transition-all line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <div className="h-px bg-gray-200 mt-4 w-full group-hover:bg-[#b3ced1] transition-colors"></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Newsletter Background"
            className="w-full h-full object-cover"
            src={localAssets.servicePageRequrement}
          />
          <div className="absolute inset-0 bg-[#1a2e30]/90"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-[#b3ced1] font-bold tracking-[0.2em] uppercase text-[9px] md:text-[10px] mb-4 block">
            Never Miss an Article
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/70 text-sm md:text-base mb-8 max-w-md mx-auto">
            Get the latest landscaping insights delivered straight to your
            inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Handle newsletter subscription
              const email = (e.target as HTMLFormElement).email.value;
              console.log("Newsletter subscription:", email);
              alert("Thank you for subscribing!");
              (e.target as HTMLFormElement).reset();
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              name="email"
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-[#b3ced1] transition-colors"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#b3ced1] text-[#1a2e30] px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all group whitespace-nowrap cursor-pointer"
            >
              Subscribe
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
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailsPage;
