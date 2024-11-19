export interface Project {
  id: number;
  title: string;
  image: string;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface ProjectCardProps {
  title: string;
  image: string;
}

export interface ProjectGridProps {
  limit?: number;
}