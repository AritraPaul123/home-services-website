import { Link } from "react-router";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const BLOG_POSTS = [
  { 
    id: 1, 
    title: "10 Tips for a Spotless and Clean Home", 
    category: "Cleaning",
    excerpt: "Maintaining a clean home doesn't have to be a daunting task. Follow these 10 expert tips to keep your living space sparkling with minimal effort.",
    date: "June 15, 2026", 
    readTime: "5 min read", 
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80" 
  },
  { 
    id: 2, 
    title: "When to Call a Professional Plumber", 
    category: "Plumbing",
    excerpt: "A dripping faucet might be a DIY job, but what about a burst pipe? Learn the definitive signs that it's time to call in the professionals.",
    date: "June 12, 2026", 
    readTime: "4 min read", 
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" 
  },
  { 
    id: 3, 
    title: "Seasonal AC Maintenance Guide", 
    category: "Appliances",
    excerpt: "Summer is here. Ensure your air conditioning unit is ready to beat the heat with our comprehensive seasonal maintenance checklist.",
    date: "June 08, 2026", 
    readTime: "6 min read", 
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80" 
  },
  { 
    id: 4, 
    title: "Choosing the Right Paint Colors for Your Bedroom", 
    category: "Painting",
    excerpt: "Colors heavily influence our mood. Here is how to pick the perfect palette for a relaxing and rejuvenating bedroom environment.",
    date: "May 28, 2026", 
    readTime: "7 min read", 
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80" 
  },
  { 
    id: 5, 
    title: "How to Keep Pests Away During the Monsoon", 
    category: "Pest Control",
    excerpt: "Monsoon brings relief from the heat, but it also brings unwanted guests. Learn how to pest-proof your home this rainy season.",
    date: "May 15, 2026", 
    readTime: "5 min read", 
    image: "https://images.unsplash.com/photo-1583095126868-2325c81f08fb?w=800&q=80" 
  },
  { 
    id: 6, 
    title: "Electrical Safety at Home: A Checklist", 
    category: "Electrical",
    excerpt: "Are your home's electrical systems safe? Use this comprehensive checklist to identify potential hazards and keep your family safe.",
    date: "May 02, 2026", 
    readTime: "8 min read", 
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80" 
  }
];

export function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Home Care Tips & Guides</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expert advice, tutorials, and inspiration for maintaining and improving your beautiful home.
          </p>
        </div>

        {/* Featured Post (First one) */}
        <div className="mb-16">
          <Link to={`/blog/${BLOG_POSTS[0].id}`} className="block group">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 grid md:grid-cols-2">
              <div className="h-64 md:h-full overflow-hidden">
                <img src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-4 w-fit">
                  {BLOG_POSTS[0].category}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-slate-600 mb-6 text-lg">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 mt-auto">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {BLOG_POSTS[0].date}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {BLOG_POSTS[0].readTime}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Posts Grid */}
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group flex flex-col hover:shadow-md transition">
              <div className="h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold uppercase text-blue-600 mb-3 tracking-wider">{post.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</div>
                  <div className="text-blue-600 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
