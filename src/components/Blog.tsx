import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { client } from "../lib/sanity/client";
import { Post } from "../types/blog";
import Button from "./shared/Button";

const BlogContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 800px; // This was the key fix
  padding: 12rem var(--padding-desktop);
  background-color: var(--color-background);
  color: var(--color-primary);

  // Loading state styles
  &.loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    min-height: 600px; // Responsive min-height
    padding: 8rem var(--padding-mobile);
  }
`;

const BlogHeader = styled.div`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column; // Change to column layout
  gap: 2rem;
  padding: 0;
`;

const HeaderContent = styled.div`
  max-width: 400px;

  h3 {
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-bottom: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    color: rgba(77, 61, 48, 0.8);
  }

  &:hover {
    transform: translateY(-8px);
  }
`;

const BlogFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`;

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(_createdAt desc)[0...3] {
          _id,
          title,
          slug,
          mainImage {
            asset-> {
              url
            }
          },
          excerpt
        }`;

        const fetchedPosts = await client.fetch(query);
        setPosts(fetchedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <BlogContainer className={isLoading ? "loading" : ""}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BlogHeader>
            <p>( Blog )</p>
            <HeaderContent>
              <h3>Latest Stories</h3>
              <p>
                Discover our latest articles and stay updated with our news and
                innovations.
              </p>
            </HeaderContent>
          </BlogHeader>

          <PreviewGrid>
            {posts.map((post) => (
              <ArticleCard key={post._id} to={`/blog/${post.slug.current}`}>
                <img src={post.mainImage.asset.url} alt={post.title} />
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
              </ArticleCard>
            ))}
          </PreviewGrid>

          <BlogFooter>
            <Link to="/blog">
              <Button variant="text-with-arrow">Discover more articles</Button>
            </Link>
          </BlogFooter>
        </>
      )}
    </BlogContainer>
  );
}
