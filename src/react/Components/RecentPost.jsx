import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const RecentPosts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Dummy recent blog posts data (added 'url' property)
  const recentPosts = [
      { 
      title: "The Bank in Your Pocket: How Everyday Apps Became Global Banks", 
      date: "12 Nov, 2025", 
      image: "../assets/img/blogs/TheBankinYourPocketHowEverydayAppsBecameGlobalBanks.jpg",
      url: "/the-banking-in-your-pocket-how-everyday-apps-became-global-banks"  // <-- Added dynamic URL
    },
      { 
      title: "Inside the BFA Experience: Networking, Energy & Innovation", 
      date: "08 Oct, 2025", 
      image: "../assets/img/blogs/inside-the-bfa-experience-networking-energy-innovation.png",
      url: "/inside-the-bfa-experience-networking-energy-innovation"  // <-- Added dynamic URL
    },
    { 
      title: "From Cash Counters to Super-Apps: The Evolution of MSBs", 
      date: "25 Sep, 2025", 
      image: "../assets/img/blogs/from-cash-counters-to-super-apps-the-evolution-of-msbs.webp",
      url: "/from-cash-counters-to-super-apps-the-evolution-of-msbs"  // <-- Added dynamic URL
    },
    { 
      title: "Beyond Borders: How Brit FinTech Awards Puts UK's FinTech & MSB on the Global Map", 
      date: "17 Sep, 2025", 
      image: "../assets/img/blogs/beyond_borders_how_brit_fintech.webp",
      url: "/beyond-borders-brit-fintech-awards"  // <-- Added dynamic URL
    },
    { 
      title: "Awards as Catalysts: Transforming Recognition into Real Impact", 
      date: "11 Sep, 2025", 
      image: "../assets/img/blogs/awards-as-catalysts-transforming-recognition-into-real-impact.jpg",
      url: "/awards-as-catalysts-transforming-recognition-into-real-impact"  // <-- Added dynamic URL
    },
    { 
      title: "Will 2025 Be the Year of Stablecoins?", 
      date: "22 Aug, 2025", 
      image: "../assets/img/blogs/will-2025-be-the-year-of-stablecoins.png",
      url: "/will-2025-be-the-year-of-stablecoins"  // <-- Added dynamic URL
    },
    { 
      title: "AI in the MSB Sector - Friend or Foe?", 
      date: "15 Aug, 2025", 
      image: "../assets/img/blogs/ai-in-the-msb-sector.png",
      url: "/ai-in-the-msb-sector"  // <-- Added dynamic URL
    },
    { 
      title: "FinTech in the UK: 3 Trends to Watch Right Now", 
      date: "26 Feb, 2025", 
      image: "../assets/img/blogs/fintech-in-the-uk.jpg",
      url: "/fintech-in-the-uk"  // <-- Added dynamic URL
    },
    // Add more posts if needed
  ];

  useEffect(() => {
    setSearchResults(recentPosts);
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredPosts = recentPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredPosts);
  };

  const showNoResultsMessage = searchQuery && searchResults.length === 0;

  return (
    <div className="col-lg-4">
      <div className="cs-height_0 cs-height_lg_80" />
      <div className="cs-sidebar cs-right_sidebar cs-accent_5_bg_2">
        <div className="cs-sidebar_item widget_search">
          <h4 className="cs-sidebar_widget_title">Search</h4>
          <form role="search" method="get" id="searchform" className="searchform" action="#">
            <div>
              <label className="screen-reader-text" htmlFor="s">Search for:</label>
              <input value={searchQuery} onChange={handleSearchChange} name="s" id="s" placeholder="Search" />
              <input type="submit" id="searchsubmit" defaultValue="Search" />
            </div>
          </form>
        </div>
        <div className="cs-sidebar_item">
          <h4 className="cs-sidebar_widget_title">Recent Blogs</h4>
          {showNoResultsMessage ? (
            <p>No results found.</p>
          ) : (
            <ul className="cs-recent_posts">
              {searchResults.map((post, index) => (
                <li key={index}>
                  <div className="cs-recent_post">
                    <a href={post.url} className="cs-recent_post_thumb">
                      <img src={post.image} className="cs-recent_post_thumb_in cs-bg" alt={post.title} />
                    </a>
                    <div className="cs-recent_post_info">
                      <h3 className="cs-recent_post_title">
                        <NavLink to={post.url}>{post.title}</NavLink>
                      </h3>
                      <div className="cs-recent_post_date cs-primary_40_color">
                        {post.date}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
         <div className='text-center'>
         <NavLink to="/blogs" className="btn-black2">
                                View All Blogs
                              </NavLink>
         </div>
        
      </div>
    </div>
  );
}

export default RecentPosts;
