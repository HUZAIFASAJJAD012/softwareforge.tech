const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || '';

interface StrapiResponse<T> {
    data: T;
    meta?: object;
}

export async function strapiGet<T>(
    path: string,
    params?: Record<string, string>
): Promise<T> {
    const url = new URL(`/api${path}`, STRAPI_URL);
    if (params) {
        Object.entries(params).forEach(([key, value]) =>
            url.searchParams.set(key, value)
        );
    }

    const res = await fetch(url.toString(), {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            'Content-Type': 'application/json',
        },
        next: { revalidate: 60 }, // ISR – revalidate every 60 seconds
    });

    if (!res.ok) {
        throw new Error(
            `Strapi fetch error: ${res.status} ${res.statusText} (${url.toString()})`
        );
    }

    const json: StrapiResponse<T> = await res.json();
    return json.data;
}
