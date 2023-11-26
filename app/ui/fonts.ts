// By using the module next/font you can avoid cumulative layout shifts, because next downloads all font files at build time and hosts them with your other static assets

import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
// choose the subset
export const inter = Inter({ subsets: ['latin'] });

// specifying the subset and font-weight
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400'] });
