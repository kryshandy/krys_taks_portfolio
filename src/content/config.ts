import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(80),
    shortTitle: z.string().max(40).optional(),
    type: z.enum(['web', 'mobile', 'cloud', 'architecture', 'consulting', 'ai']),
    status: z.enum(['production', 'beta', 'development', 'archived', 'concept']),
    role: z.enum(['lead', 'senior', 'founder', 'consultant', 'cto', 'contributor']),
    year: z.number().int().min(2015).max(2030),
    startDate: z.string().regex(/^\d{4}-\d{2}$/).optional(),
    endDate: z.string().regex(/^\d{4}-\d{2}$/).optional(),
    stack: z.array(z.string()).min(1).max(15),
    description: z.string().max(300),
    problem: z.string().max(500),
    solution: z.string().max(500),
    impact: z.string().max(500),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      change: z.string().optional()
    })).max(5).optional(),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    caseStudyUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    highlight: z.boolean().default(false),
    confidential: z.boolean().default(false),
    client: z.string().optional(),
    teamSize: z.number().int().positive().optional(),
    duration: z.string().optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).max(8).optional(),
    tags: z.array(z.string()).max(10).optional(),
    order: z.number().int().default(0)
  })
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string().max(80),
    role: z.string().max(80),
    type: z.enum(['full-time', 'freelance', 'founder', 'consulting', 'internship']),
    location: z.string().max(100),
    startDate: z.string().regex(/^\d{4}-\d{2}$/),
    endDate: z.string().regex(/^\d{4}-\d{2}$/).optional(),
    current: z.boolean().default(false),
    description: z.string().max(500),
    achievements: z.array(z.string().max(200)).min(1).max(8),
    stack: z.array(z.string()).max(15).optional(),
    teamSize: z.number().int().positive().optional(),
    highlights: z.array(z.string()).max(5).optional(),
    order: z.number().int().default(0)
  })
});

const skills = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.enum(['architecture', 'fullstack', 'reliability', 'cloud', 'ai', 'leadership']),
    name: z.string().max(50),
    level: z.number().int().min(1).max(5),
    years: z.number().int().min(0).max(30).optional(),
    description: z.string().max(200).optional(),
    icon: z.string().optional(),
    tags: z.array(z.string()).max(8).optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(0)
  })
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string().max(80),
    role: z.string().max(80),
    company: z.string().max(80).optional(),
    avatar: z.string().url().optional(),
    source: z.enum(['client', 'colleague', 'manager', 'partner']),
    content: z.string().max(500),
    project: z.string().optional(),
    date: z.string().regex(/^\d{4}-\d{2}$/),
    featured: z.boolean().default(false),
    order: z.number().int().default(0)
  })
});

const activities = defineCollection({
  type: 'data',
  schema: z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    type: z.enum(['commit', 'release', 'article', 'talk', 'milestone', 'learning', 'certification']),
    title: z.string().max(120),
    description: z.string().max(300).optional(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    tags: z.array(z.string()).max(5).optional(),
    project: z.string().optional()
  })
});

export const collections = {
  projects,
  experience,
  skills,
  testimonials,
  activities
};