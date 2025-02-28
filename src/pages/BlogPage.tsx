import { useState, useEffect } from "react";
import styled from "styled-components";
import { client } from "../lib/sanity/client";
import { Post } from "../types/blog";
import { Link } from "react-router-dom";

const BlogContainer = styled.div`
  padding: 12rem 4rem 4rem;
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-primary);

  h1 {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 12rem 2rem 2rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 6rem;
  margin-top: 4rem;
`;

const BlogCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(77, 61, 48, 0.1);

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .content {
    padding: 2rem;
  }

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    font-size: 1.6rem;
    color: rgba(77, 61, 48, 0.8);
    margin-bottom: 2rem;
  }

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.8);
  }
`;

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // Updated query to use _createdAt for consistent ordering
      const query = `*[_type == "post"] | order(_createdAt asc) {
        _id,
        title,
        slug,
        mainImage {
          asset-> {
            url
          }
        },
        publishedAt,
        excerpt,
        _createdAt
      }`;

      try {
        const fetchedPosts = await client.fetch(query);
        console.log("Blog listing order:", fetchedPosts);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <BlogContainer>Loading...</BlogContainer>;

  return (
    <BlogContainer>
      <h1>Blog</h1>
      <BlogGrid>
        {posts.map((post) => (
          <BlogCard key={post._id} to={`/blog/${post.slug.current}`}>
            <img src={post.mainImage.asset.url} alt={post.title} />
            <div className="content">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
}
