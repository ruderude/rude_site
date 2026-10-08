import { SHOP, SITE_URL, absoluteUrl } from '@/lib/site'
import { drinkSections } from '@/data/menu'
import { faqs } from '@/data/faq'
import { NewsItem } from '@/data/news'

type JsonLdObject = Record<string, unknown>

export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  return (
    <script
      type="application/ld+json"
      // `<` をエスケープして </script> による脱出を防ぐ
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

const BUSINESS_ID = `${SITE_URL}/#bar`
const WEBSITE_ID = `${SITE_URL}/#website`

export const barJsonLd = (): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  '@id': BUSINESS_ID,
  name: SHOP.name,
  alternateName: SHOP.alternateNames,
  description: SHOP.description,
  url: SITE_URL,
  logo: absoluteUrl(SHOP.images.logo),
  image: [absoluteUrl(SHOP.images.exterior), absoluteUrl(SHOP.images.interior), absoluteUrl(SHOP.images.stage)],
  ...(SHOP.telephone ? { telephone: SHOP.telephone } : {}),
  address: {
    '@type': 'PostalAddress',
    postalCode: SHOP.address.postalCode,
    addressRegion: SHOP.address.region,
    addressLocality: SHOP.address.locality,
    streetAddress: SHOP.address.street,
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SHOP.geo.latitude,
    longitude: SHOP.geo.longitude,
  },
  hasMap: SHOP.links.googleMap,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: SHOP.hours.openDays.map((day) => `https://schema.org/${day}`),
      opens: SHOP.hours.opens,
      closes: SHOP.hours.closes,
    },
  ],
  priceRange: SHOP.price.range,
  currenciesAccepted: 'JPY',
  paymentAccepted: SHOP.payment.join(', '),
  smokingAllowed: SHOP.smoking,
  hasMenu: absoluteUrl('/menu'),
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'カラオケ歌い放題', value: true },
    { '@type': 'LocationFeatureSpecification', name: '飲み放題', value: true },
    { '@type': 'LocationFeatureSpecification', name: '喫煙可', value: SHOP.smoking },
    { '@type': 'LocationFeatureSpecification', name: '食べ物持ち込み無料', value: true },
  ],
  sameAs: [SHOP.links.x, SHOP.links.line, ...SHOP.sameAs],
})

export const websiteJsonLd = (): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SHOP.name,
  alternateName: SHOP.alternateNames,
  url: SITE_URL,
  inLanguage: 'ja',
  publisher: { '@id': BUSINESS_ID },
})

export const breadcrumbJsonLd = (items: { name: string; path: string }[]): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'トップ', path: '/' }, ...items].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
})

export const menuJsonLd = (): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: `${SHOP.name} ドリンクメニュー`,
  url: absoluteUrl('/menu'),
  inLanguage: 'ja',
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: '料金システム（飲み放題・歌い放題）',
      description: `テーブルチャージ${SHOP.price.tableCharge}円＋1時間ごとに${SHOP.price.perHour}円で飲み放題・歌い放題`,
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'テーブルチャージ',
          offers: { '@type': 'Offer', price: SHOP.price.tableCharge, priceCurrency: 'JPY' },
        },
        {
          '@type': 'MenuItem',
          name: '飲み放題・歌い放題（1時間）',
          offers: { '@type': 'Offer', price: SHOP.price.perHour, priceCurrency: 'JPY' },
        },
      ],
    },
    ...drinkSections.map((section) => ({
      '@type': 'MenuSection',
      name: section.name,
      description: section.description,
      hasMenuItem: section.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        ...(item.price
          ? { offers: { '@type': 'Offer', price: item.price, priceCurrency: 'JPY' } }
          : { description: '飲み放題に含まれます' }),
      })),
    })),
  ],
})

export const faqJsonLd = (): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
})

export const eventsJsonLd = (items: NewsItem[]): JsonLdObject[] =>
  items
    .filter((item) => item.startDate)
    .map((item) => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: item.title,
      description: item.body,
      startDate: item.startDate,
      ...(item.endDate ? { endDate: item.endDate } : {}),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@id': BUSINESS_ID, '@type': 'BarOrPub', name: SHOP.name, address: SHOP.address.full },
      organizer: { '@id': BUSINESS_ID, '@type': 'BarOrPub', name: SHOP.name, url: SITE_URL },
      image: absoluteUrl(SHOP.images.interior),
    }))
