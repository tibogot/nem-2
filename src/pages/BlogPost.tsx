import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { client } from "../lib/sanity/client";
import { Post } from "../types/blog";
import { PortableText } from "@portabletext/react";

const BlogPostContainer = styled.article`
  padding: 12rem 4rem 4rem;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--color-background);
  color: var(--color-primary);

  @media (max-width: 768px) {
    padding: 12rem 2rem 2rem;
  }
`;

const PostHeader = styled.div`
  margin-bottom: 6rem;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    font-weight: 500;
  }

  time {
    color: rgba(77, 61, 48, 0.6);
    font-size: 1.6rem;
    display: block;
    margin-bottom: 4rem;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    margin: 2rem 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.8rem;
  line-height: 1.6;

  p {
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  h2,
  h3 {
    margin: 4rem 0 2rem;
    font-weight: 500;
  }

  img {
    width: 100%;
    margin: 4rem 0;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8rem 0;
  padding-top: 4rem;
  border-top: 1px solid rgba(77, 61, 48, 0.1);
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 45%;
  transition: opacity 0.2s ease;

  span {
    font-size: 1.4rem;
    opacity: 0.6;
  }

  h4 {
    font-size: 1.8rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const RelatedPosts = styled.div`
  margin: 8rem 0;

  h3 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem;
`;

const RelatedCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;

interface NavigationPost {
  title: string;
  slug: { current: string };
}

interface FullPost extends Post {
  categories: string[];
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<FullPost | null>(null);
  const [prevPost, setPrevPost] = useState<NavigationPost | null>(null);
  const [nextPost, setNextPost] = useState<NavigationPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      // Updated GROQ query to handle first and last posts correctly
      const query = `{
        "post": *[_type == "post" && slug.current == $slug][0]{
          title,
          mainImage { asset-> { url } },
          publishedAt,
          body
        },
        "prev": *[_type == "post" && _createdAt < *[_type == "post" && slug.current == $slug][0]._createdAt] | order(_createdAt desc)[0]{ 
          title,
          slug
        },
        "next": *[_type == "post" && _createdAt > *[_type == "post" && slug.current == $slug][0]._createdAt] | order(_createdAt asc)[0]{ 
          title,
          slug
        },
        "related": *[_type == "post" && slug.current != $slug] | order(_createdAt desc)[0...3]{
          _id,
          title,
          slug,
          mainImage { asset-> { url } }
        }
      }`;

      try {
        const data = await client.fetch(query, { slug });
        console.log("Fetched data:", data);
        setPost(data.post);
        setPrevPost(data.prev);
        setNextPost(data.next);
        setRelatedPosts(data.related);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPostData();
  }, [slug]);

  if (!post) return <BlogPostContainer>Loading...</BlogPostContainer>;

  return (
    <BlogPostContainer>
      <PostHeader>
        <h1>{post.title}</h1>
        <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
        <img src={post.mainImage.asset.url} alt={post.title} />
      </PostHeader>
      <PostContent>
        <PortableText value={post.body} />
      </PostContent>

      <Navigation>
        {prevPost && (
          <NavLink to={`/blog/${prevPost.slug.current}`}>
            <span>Previous</span>
            <h4>{prevPost.title}</h4>
          </NavLink>
        )}
        {nextPost && (
          <NavLink
            to={`/blog/${nextPost.slug.current}`}
            style={{ textAlign: "right" }}
          >
            <span>Next</span>
            <h4>{nextPost.title}</h4>
          </NavLink>
        )}
      </Navigation>

      {relatedPosts.length > 0 && (
        <RelatedPosts>
          <h3>Related Articles</h3>
          <RelatedGrid>
            {relatedPosts.map((related) => (
              <RelatedCard
                key={related._id}
                to={`/blog/${related.slug.current}`}
              >
                <img src={related.mainImage.asset.url} alt={related.title} />
                <h4>{related.title}</h4>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </RelatedPosts>
      )}
    </BlogPostContainer>
  );
}
