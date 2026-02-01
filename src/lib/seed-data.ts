'use client';
import type { Resource } from '@/lib/types';

import { p1English } from './seed-data/p1-english';
import { p1Math } from './seed-data/p1-math';
import { p2Math } from './seed-data/p2-math';
import { p3Science } from './seed-data/p3-science';
import { p4SocialStudies } from './seed-data/p4-social-studies';
import { p5Math } from './seed-data/p5-math';
import { p6Science } from './seed-data/p6-science';
import { s1History } from './seed-data/s1-history';
import { s1Science } from './seed-data/s1-science';
import { s2Biology } from './seed-data/s2-biology';
import { s3Physics } from './seed-data/s3-physics';
import { s4Chemistry } from './seed-data/s4-chemistry';
import { advScience } from './seed-data/adv-science';
import { advFinance } from './seed-data/adv-finance';
import { advMath } from './seed-data/adv-math';
import { advArt } from './seed-data/adv-art';

export const seedResources: Resource[] = [
  p1English,
  p1Math,
  p2Math,
  p3Science,
  p4SocialStudies,
  p5Math,
  p6Science,
  s1History,
  s1Science,
  s2Biology,
  s3Physics,
  s4Chemistry,
  advScience,
  advFinance,
  advMath,
  advArt,
];
