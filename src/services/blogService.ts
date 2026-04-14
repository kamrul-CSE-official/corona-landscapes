import axios from 'axios';

export interface BlogPost {
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

class BlogService {
  async getAllBlogs(): Promise<BlogPost[]> {
    try {
      const response = await axios.get('/data/blogs.json');
      console.log('API Response:', response.data); // Debug log
      
      if (response.data && Array.isArray(response.data.blogs)) {
        return response.data.blogs;
      } else if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error('Unexpected data structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  }

  async getBlogById(id: number | string): Promise<BlogPost | null> {
    try {
      const blogs = await this.getAllBlogs();
      const blog = blogs.find(blog => blog.id === Number(id));
      return blog || null;
    } catch (error) {
      console.error('Error fetching blog by ID:', error);
      return null;
    }
  }

  async getRelatedBlogs(currentId: number | string, limit: number = 3): Promise<BlogPost[]> {
    try {
      const blogs = await this.getAllBlogs();
      return blogs
        .filter(blog => blog.id !== Number(currentId))
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching related blogs:', error);
      return [];
    }
  }
}

export default new BlogService();