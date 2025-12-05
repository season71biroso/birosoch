import React from 'react';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Letter' | 'Story' | 'Notice';
  summary: string;
  content: string[];
  imageUrl?: string;
}

export interface MinistryItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;         // External URL
  internalLink?: string; // Internal Route path
}