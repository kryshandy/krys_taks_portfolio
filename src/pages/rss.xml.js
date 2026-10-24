import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const activities = await getCollection('activities');
  const sorted = activities.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Tchuente Takodjou Krys Handy — Activité technique & R&D',
    description: 'Flux d\'activité technique, jalons de projets (VoxIA, Guardians AI, KitchenPulse), certifications et distinctions de Krys Handy.',
    site: context.site || 'https://kryshandy.com',
    items: sorted.slice(0, 20).map(activity => ({
      title: activity.data.title,
      link: activity.data.url || activity.data.repo || '/#activite',
      pubDate: new Date(activity.data.date),
      description: activity.data.description || '',
      categories: activity.data.tags || []
    })),
    customData: `<language>fr-FR</language>`,
  });
}