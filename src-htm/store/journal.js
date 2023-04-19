import { signal } from '@preact/signals';

const { default: journalData } = await import('../../data/journal.json');

const entries = signal(journalData.entries);
const links = signal(journalData.links);
const tags = signal(journalData.tags);

export default {
  entries,
  links,
  tags
};
