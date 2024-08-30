import React, { useState } from 'react';

function Blog() {
  const [sortOrder, setSortOrder] = useState('latest');

  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'latest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="blog-container">
      <div className="blog-order-control">
        <select 
          className="cta-button" 
          value={sortOrder} 
          onChange={handleSortChange}
        >
          <option value="latest">Latest to Oldest</option>
          <option value="oldest">Oldest to Latest</option>
        </select>
      </div>
      <ul className="blog-list">
        {sortedBlogPosts.map((post, index) => (
          <li key={index} className="blog-list-item">
            <a href={post.link} className="blog-link">
              <div className="blog-title">{post.title}</div>
              <div className="blog-date">{post.date}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const blogPosts = [
  { 
    title: "Coinbase Stablecoin Product Challenge",
    date: "2023-05-15",
    link: "https://www.notion.so/Coinbase-Stablecoin-Product-Challenge-fd44d2aa518d4bbb8ed4d22835bfc1b5?pvs=21"
  },
  { 
    title: "What are Zero-Knowledge Proofs? Intuition for Beginners",
    date: "2020-04-28",
    link: "https://medium.com/@ze_chen/what-are-zero-knowledge-proofs-intuition-for-beginners-ef4dadccb61e"
  },
  { 
    title: "Exploring Statistical Arbitrage in Cryptocurrency",
    date: "2020-06-06",
    link: "https://medium.com/analytics-vidhya/exploring-statistical-arbitrage-in-cryptocurrency-924ad6bf2a57"
  },
  { 
    title: "The Interesting Use Cases of JPM Coin",
    date: "2020-07-13",
    link: "https://medium.com/coinmonks/the-interesting-use-cases-of-jpm-coin-3cbe1b747e1f"
  },
  { 
    title: "一文了解区块链互操作性与智能资产框架",
    date: "2020-05-29",
    link: "https://zespace.notion.site/8b987265462746daaf119d796cff0fc4"
  },
  { 
    title: "从诺亚暴雷事件再谈供应链金融的先进治理",
    date: "2020-04-10",
    link: "https://zespace.notion.site/fff5df8e68ee8000896bd38732918eb0"
  },
  { 
    title: "DeFi系统性崩溃后如何才能走出困境",
    date: "2020-04-05",
    link: "https://zespace.notion.site/DeFi-795128e49de342f8a5c79c54419122c8"
  },
  { 
    title: "密码学解读：隐私危机下我们如何为数据穿上防弹衣",
    date: "2020-03-27",
    link: "https://zespace.notion.site/26d0ac2f312e4c8eb0b534b612632601"
  },
  { 
    title: "密码学解读：生活中可见的加密技术",
    date: "2020-03-21",
    link: "https://zespace.notion.site/504b24f7b1624143ba37ecfc6b9f82f3"
  },
  { 
    title: "密码学解读：为人类的隐私而战的历史",
    date: "2020-03-12",
    link: "https://zespace.notion.site/73fa98980b074f6babb81654c8fa58dd"
  },
  { 
    title: "了解零知识证明，阿里巴巴与强盗的故事",
    date: "2020-03-05",
    link: "https://zespace.notion.site/358bcb4856814d2eb304d868ff06ff5b"
  }
];

export default Blog;