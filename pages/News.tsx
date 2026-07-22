import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw, TrendingUp, ArrowLeftRight, Newspaper, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source?: string;
}

interface Rates {
  NGN: number;
  USD: number;
  CAD: number;
  EUR: number;
  GHS: number;
  GMD: number;
  SLE: number;
  XOF: number;
}

type CcyCode = 'GBP' | 'NGN' | 'USD' | 'CAD' | 'EUR' | 'GHS' | 'GMD' | 'SLE' | 'XOF';

// All feeds are official government sources
const RSS_FEEDS = [
  {
    label: 'UK Visas & Immigration',
    shortLabel: 'UKVI',
    rss: 'https://www.gov.uk/government/organisations/uk-visas-and-immigration.atom',
    flag: '🇬🇧',
    format: 'atom' as const,
    direct: true,
  },
  {
    label: 'Home Office',
    shortLabel: 'Home Office',
    rss: 'https://www.gov.uk/government/organisations/home-office.atom',
    flag: '🏠',
    format: 'atom' as const,
    direct: true,
  },
  {
    label: 'FCDO Travel Advice',
    shortLabel: 'FCDO',
    rss: 'https://www.gov.uk/government/organisations/foreign-commonwealth-development-office.atom',
    flag: '✈️',
    format: 'atom' as const,
    direct: true,
  },
  {
    label: 'Irish Immigration Service',
    shortLabel: 'Ireland ISD',
    rss: 'https://www.irishimmigration.ie/feed/',
    flag: '🇮🇪',
    format: 'rss' as const,
    direct: false,
  },
  {
    label: 'Immigration, Refugees & Citizenship Canada (IRCC)',
    shortLabel: 'IRCC Canada',
    rss: 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://www.canada.ca/en/immigration-refugees-citizenship/news.atom'),
    flag: '🇨🇦',
    format: 'atom' as const,
    direct: true, // already proxied in URL
  },
];

const proxyUrl = (url: string, direct: boolean) =>
  direct ? url : `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;

function timeAgo(dateStr: string) {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(diff / 86400000);
  if (h < 1) return 'Just now';
  if (h < 24) return `${h}h ago`;
  if (d < 7) return `${d}d ago`;
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

/** Parse GOV.UK / Canada Atom feed */
function parseAtom(xml: Document): NewsItem[] {
  const entries = Array.from(xml.querySelectorAll('entry')).slice(0, 8);
  return entries.map((el) => {
    const title = el.querySelector('title')?.textContent?.trim() || '';
    const linkEl = el.querySelector('link[rel="alternate"]') || el.querySelector('link');
    const link = linkEl?.getAttribute('href') || '';
    const pubDate = el.querySelector('updated')?.textContent || el.querySelector('published')?.textContent || '';
    const rawSummary = el.querySelector('summary')?.textContent || el.querySelector('content')?.textContent || '';
    const description = stripHtml(rawSummary).slice(0, 200);
    return { title, link, pubDate, description };
  });
}

/** Parse RSS 2.0 feed */
function parseRss(xml: Document): NewsItem[] {
  const items = Array.from(xml.querySelectorAll('item')).slice(0, 8);
  return items.map((el) => {
    const title = el.querySelector('title')?.textContent?.trim() || '';
    const link = el.querySelector('link')?.textContent?.trim() || '';
    const pubDate = el.querySelector('pubDate')?.textContent || '';
    const rawDesc = el.querySelector('description')?.textContent || '';
    const description = stripHtml(rawDesc).slice(0, 200);
    return { title, link, pubDate, description };
  });
}

export default function News() {
  React.useEffect(() => { document.title = "Latest News - Tahban Travel & Education Consultancy"; }, []);

  const [news, setNews] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [newsError, setNewsError] = useState(false);
  const [feedIndex, setFeedIndex] = useState(0);
  const [rates, setRates] = useState<Rates | null>(null);
  const [ratesUpdated, setRatesUpdated] = useState('');
  const [loadingRates, setLoadingRates] = useState(true);
  const [amount, setAmount] = useState('1');
  const [fromCcy, setFromCcy] = useState<CcyCode>('GBP');
  const [toCcy, setToCcy] = useState<CcyCode>('NGN');

  const fetchNews = async (idx = feedIndex) => {
    setLoadingNews(true);
    setNewsError(false);
    try {
      const feed = RSS_FEEDS[idx];
      const url = proxyUrl(feed.rss, feed.direct);
      const res = await fetch(url);
      if (!res.ok) throw new Error('fetch error');
      const text = await res.text();
      if (!text) throw new Error('empty response');
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, 'text/xml');
      const parseError = xml.querySelector('parsererror');
      if (parseError) throw new Error('xml parse error');
      const items = feed.format === 'rss' ? parseRss(xml) : parseAtom(xml);
      if (items.length === 0) throw new Error('no items');
      setNews(items);
    } catch {
      setNewsError(true);
      setNews([]);
    } finally {
      setLoadingNews(false);
    }
  };

  const fetchRates = async () => {
    setLoadingRates(true);
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/GBP');
      const data = await res.json();
      if (data.result === 'success') {
        const r = data.rates;
        setRates({
          NGN: r.NGN, USD: r.USD, CAD: r.CAD, EUR: r.EUR,
          GHS: r.GHS, GMD: r.GMD, SLE: r.SLE ?? r.SLL ?? 0, XOF: r.XOF,
        });
        setRatesUpdated(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
      }
    } catch {
      setRates({ NGN: 2050, USD: 1.28, CAD: 1.74, EUR: 1.18, GHS: 19.5, GMD: 85, SLE: 28, XOF: 775 });
    } finally {
      setLoadingRates(false);
    }
  };

  useEffect(() => { fetchNews(feedIndex); }, [feedIndex]);
  useEffect(() => { fetchRates(); }, []);

  const convert = () => {
    if (!rates) return '—';
    const val = parseFloat(amount) || 0;
    if (fromCcy === toCcy) return val.toLocaleString('en-GB', { maximumFractionDigits: 2 });
    const rateMap: Record<string, number> = { GBP: 1, ...rates };
    const result = val * (1 / rateMap[fromCcy]) * rateMap[toCcy];
    return result.toLocaleString('en-GB', { maximumFractionDigits: 2 });
  };

  const swapCurrencies = () => { const tmp = fromCcy; setFromCcy(toCcy); setToCcy(tmp); };

  const currencyOptions: CcyCode[] = ['GBP', 'NGN', 'USD', 'CAD', 'EUR', 'GHS', 'GMD', 'SLE', 'XOF'];

  const symbols: Record<string, string> = {
    GBP: '\u00a3', NGN: '\u20a6', USD: 'US\u0024', CAD: 'CA\u0024', EUR: '\u20ac',
    GHS: 'GH\u20b5', GMD: 'GMD', SLE: 'Le', XOF: 'XOF',
  };

  const labels: Record<string, string> = {
    GBP: 'British Pound', NGN: 'Nigerian Naira', USD: 'US Dollar',
    CAD: 'Canadian Dollar', EUR: 'Euro', GHS: 'Ghanaian Cedi',
    GMD: 'Gambian Dalasi', SLE: 'Sierra Leone Leone', XOF: 'CFA Franc (West Africa)',
  };

  const currentFeed = RSS_FEEDS[feedIndex];

  const quickRefRates: { from: string; to: string; sym: string; val: (r: Rates) => string }[] = [
    { from: '1 GBP', to: 'NGN', sym: '\u20a6', val: (r) => r.NGN.toLocaleString('en-GB', { maximumFractionDigits: 0 }) },
    { from: '1 GBP', to: 'USD', sym: 'US\u0024', val: (r) => r.USD.toFixed(4) },
    { from: '1 GBP', to: 'CAD', sym: 'CA\u0024', val: (r) => r.CAD.toFixed(4) },
    { from: '1 GBP', to: 'EUR', sym: '\u20ac', val: (r) => r.EUR.toFixed(4) },
    { from: '1 GBP', to: 'GHS', sym: 'GH\u20b5', val: (r) => r.GHS.toFixed(2) },
  ];

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary pt-24 pb-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <Newspaper className="w-12 h-12 mx-auto mb-4 text-secondary" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Latest News</h1>
          <p className="text-lg text-white/80 mb-4">
            Official immigration and education updates for the United Kingdom, Ireland, and Canada — sourced directly from government authorities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-8">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* News Feed */}
          <div className="lg:col-span-2">
            {/* Feed selector */}
            <div className="flex flex-wrap items-center gap-3 mb-8 bg-white rounded-2xl p-4 shadow-sm border border-border">
              <span className="text-sm font-medium text-muted-foreground">Source:</span>
              {RSS_FEEDS.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setFeedIndex(i)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${feedIndex === i ? 'bg-primary text-white' : 'bg-muted text-muted-foreground hover:bg-primary/10'}`}
                >
                  <span>{f.flag}</span> {f.shortLabel}
                </button>
              ))}
              <button
                onClick={() => fetchNews(feedIndex)}
                className="ml-auto p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"
                title="Refresh"
              >
                <RefreshCw className={`w-4 h-4 ${loadingNews ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {loadingNews ? (
              <div className="grid md:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden animate-pulse">
                    <div className="p-5 space-y-3">
                      <div className="h-3 bg-muted rounded w-1/4 mb-4"></div>
                      <div className="h-4 bg-muted rounded w-full"></div>
                      <div className="h-4 bg-muted rounded w-4/5"></div>
                      <div className="h-3 bg-muted rounded w-full mt-2"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : newsError || news.length === 0 ? (
              <div className="bg-white rounded-2xl border border-border p-12 text-center text-muted-foreground">
                <Newspaper className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="font-medium text-primary mb-1">Unable to load news right now</p>
                <p className="text-sm mb-4">Official feeds may be temporarily unavailable. Try another source or visit the authority's website directly.</p>
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <Button onClick={() => fetchNews(feedIndex)} variant="outline" size="sm">Retry</Button>
                  <a
                    href="https://www.gov.uk/government/organisations/uk-visas-and-immigration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-secondary hover:underline font-medium"
                  >
                    Visit GOV.UK directly <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              >
                {news.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:border-secondary hover:shadow-md transition-all group block"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Shield className="w-3 h-3" /> {currentFeed.shortLabel}
                        </span>
                        <span className="text-xs text-muted-foreground">{timeAgo(item.pubDate)}</span>
                      </div>
                      <h3 className="font-bold text-primary text-sm leading-snug mb-2 group-hover:text-secondary transition-colors line-clamp-3">{item.title}</h3>
                      {item.description && (
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{item.description}</p>
                      )}
                      <div className="mt-4 flex items-center gap-1 text-xs text-secondary font-medium">
                        Read official source <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Content sourced from <strong>{currentFeed.label}</strong>. Tahban Travel & Education Consultancy does not own this content.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <a href="https://www.gov.uk/government/organisations/uk-visas-and-immigration" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-primary/5 border border-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors font-medium">
                  <Shield className="w-3 h-3 text-secondary" /> 🇬🇧 GOV.UK (UKVI)
                </a>
                <a href="https://www.irishimmigration.ie/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-primary/5 border border-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors font-medium">
                  <Shield className="w-3 h-3 text-secondary" /> 🇮🇪 Irish Immigration Service
                </a>
                <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-primary/5 border border-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors font-medium">
                  <Shield className="w-3 h-3 text-secondary" /> 🇨🇦 IRCC Canada
                </a>
              </div>
            </div>
          </div>

          {/* Currency Converter */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-white rounded-2xl border border-border shadow-xl overflow-hidden">
                <div className="bg-primary p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                    <h3 className="font-serif font-bold text-xl">Currency Converter</h3>
                  </div>
                  <p className="text-sm text-white/70">Live exchange rates — GBP, NGN, USD, CAD, EUR & West African currencies</p>
                  {!loadingRates && ratesUpdated && (
                    <p className="text-xs text-white/50 mt-1">Updated at {ratesUpdated}</p>
                  )}
                </div>

                <div className="p-6 space-y-5">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Amount</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min="0"
                      className="w-full h-12 rounded-xl border border-input bg-background px-4 text-lg font-bold text-primary focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">From</label>
                    <select
                      value={fromCcy}
                      onChange={(e) => setFromCcy(e.target.value as CcyCode)}
                      className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      {currencyOptions.map(c => <option key={c} value={c}>{symbols[c]} {c} — {labels[c]}</option>)}
                    </select>
                  </div>

                  <button
                    onClick={swapCurrencies}
                    className="w-full flex items-center justify-center gap-2 text-sm text-secondary font-medium py-2 hover:bg-secondary/5 rounded-xl transition-colors"
                  >
                    <ArrowLeftRight className="w-4 h-4" /> Swap currencies
                  </button>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">To</label>
                    <select
                      value={toCcy}
                      onChange={(e) => setToCcy(e.target.value as CcyCode)}
                      className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      {currencyOptions.map(c => <option key={c} value={c}>{symbols[c]} {c} — {labels[c]}</option>)}
                    </select>
                  </div>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center">
                    {loadingRates ? (
                      <div className="h-8 bg-muted rounded animate-pulse w-3/4 mx-auto"></div>
                    ) : (
                      <>
                        <p className="text-xs text-muted-foreground mb-1">{amount || 0} {fromCcy} =</p>
                        <p className="text-3xl font-bold text-primary">{symbols[toCcy]}{convert()}</p>
                        <p className="text-sm text-muted-foreground mt-1">{toCcy} — {labels[toCcy]}</p>
                      </>
                    )}
                  </div>

                  {!loadingRates && rates && (
                    <div className="space-y-1 text-sm">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Quick Reference (1 GBP)</p>
                      {quickRefRates.map(({ from, to, sym, val }) => (
                        <div key={to} className="flex justify-between py-1.5 border-b border-border last:border-0">
                          <span className="text-muted-foreground">{from} → {to}</span>
                          <span className="font-bold text-primary">{sym}{val(rates)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    Rates are indicative. Actual bank or transfer rates may vary.{' '}
                    <a href="https://www.oanda.com/currency-converter/en/?from=GBP&to=NGN&amount=1" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">View on OANDA →</a>
                  </p>
                </div>
              </div>

              {/* Official Resources */}
              <div className="mt-6 bg-white rounded-2xl border border-border p-5">
                <h4 className="font-serif font-bold text-primary mb-3 text-sm">Official Resources</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: '🇬🇧 Check UK visa requirements', href: 'https://www.gov.uk/check-uk-visa' },
                    { label: '🇬🇧 Apply for a UK visa', href: 'https://www.gov.uk/apply-uk-visa' },
                    { label: '🇬🇧 UK visa fees', href: 'https://www.gov.uk/government/publications/visa-regulations-revised-table' },
                    { label: '🇬🇧 Immigration Rules', href: 'https://www.gov.uk/guidance/immigration-rules' },
                    { label: '🇮🇪 Irish Immigration Service', href: 'https://www.irishimmigration.ie/' },
                    { label: '🇮🇪 Study in Ireland (ISD)', href: 'https://www.irishimmigration.ie/coming-to-study-in-ireland/' },
                    { label: '🇨🇦 IRCC — Immigration Canada', href: 'https://www.canada.ca/en/immigration-refugees-citizenship.html' },
                    { label: '🇨🇦 Canada Study Permit', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html' },
                    { label: '🇺🇸 US visa info (Nigeria)', href: 'https://ng.usembassy.gov/visas/' },
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 text-primary/80 hover:text-secondary transition-colors py-1.5 border-b border-border last:border-0">
                        <span>{label}</span>
                        <ExternalLink className="w-3 h-3 shrink-0 text-muted-foreground" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
