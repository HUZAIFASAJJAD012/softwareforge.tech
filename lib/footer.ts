import { strapiGet } from '@/lib/strapi';

// ─── Component types ────────────────────────────────────────────────────────

export interface FooterNavLink {
    id: number;
    name: string;
    href: string;
}

export interface FooterLegalLink {
    id: number;
    name: string;
    href: string;
}

export type SocialPlatform =
    | 'instagram'
    | 'linkedin'
    | 'twitter'
    | 'facebook'
    | 'youtube'
    | 'github';

export interface FooterSocialLink {
    id: number;
    platform: SocialPlatform;
    url: string;
}

// ─── Single Type response ───────────────────────────────────────────────────

export interface FooterData {
    id: number;
    companyName: string;
    copyrightYear: string;
    co2Offset: string;
    navLinks: FooterNavLink[];
    legalLinks: FooterLegalLink[];
    socialLinks: FooterSocialLink[];
}

// ─── Fetch function ─────────────────────────────────────────────────────────

export async function getFooter(): Promise<FooterData> {
    return strapiGet<FooterData>('/footer', {
        'populate[navLinks]': '*',
        'populate[legalLinks]': '*',
        'populate[socialLinks]': '*',
    });
}
