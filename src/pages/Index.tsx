import React from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Shield,
  Award,
  Gift,
  Check,
  MessageCircle,
  Calendar,
  Clock,
  Info,
  ThumbsUp,
  Users,
  User,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useIsMobile from '@/hooks/use-mobile';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { casinoBrandColors } from '@/lib/casino-colors';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const getCasinoUrl = (casinoName: string) => {
  const urls: { [key: string]: string } = {
    'TOTO Casino': 'https://www.toto.nl',
    'BetCity': 'https://www.betcity.nl',
    'Holland Casino': 'https://www.hollandcasino.nl',
    'Kansino': 'https://www.kansino.nl',
    'Circus Casino': 'https://www.circus.nl',
    "Jack's Casino": 'https://www.jacks.nl',
    'Unibet': 'https://www.unibet.nl',
    'LeoVegas': 'https://www.leovegas.nl',
    '777': 'https://www.casino777.nl',
    'Fair Play': 'https://www.fairplaycasino.nl',
    '365': 'https://www.bet365.nl',
    '711': 'https://www.711.nl',
    'Bet MGM': 'https://www.betmgm.nl',
    'BetNation': 'https://www.betnation.nl',
    'Bingoal': 'https://www.bingoal.nl',
    'ComeOn': 'https://www.comeon.nl',
    'GGPoker': 'https://www.ggpoker.nl',
    'Goldrun Casino': 'https://www.goldruncasino.nl',
    'Hard Rock Casino': 'https://www.hardrockcasino.nl',
    'Hommerson': 'https://www.hommerson.nl',
    'Lucky 7 Casino': 'https://www.lucky7.nl',
    'One Casino': 'https://www.onecasino.nl',
    'Scori Pro': 'https://www.scoripro.nl',
    'TonyBet': 'https://www.tonybet.nl',
    'VBet': 'https://www.vbet.nl',
    'Winnit': 'https://www.winnit.nl',
    'ZeBet': 'https://www.zebet.nl'
  };
  return urls[casinoName] || '#';
};

const Index = () => {
  const featuredCasinos = [
    {
      id: 1,
      name: 'Fair Play',
      rating: 4.5,
      bonus: '100% tot €200 + 100 Free Spins',
      logo: '/casinologos/casilogos/fairplay casino.svg',
      minDeposit: '€10',
      features: ['Betrouwbaar', 'Live Casino', 'Nederlandse klantenservice'],
    },
    {
      id: 2,
      name: 'GGPoker',
      rating: 4.7,
      bonus: '100% tot €600 + 50 Free Spins',
      logo: '/casinologos/casilogos/ggpoker.svg',
      minDeposit: '€10',
      features: ['Poker specialist', 'Casino games', 'Snelle uitbetalingen'],
    },
    {
      id: 3,
      name: '777',
      rating: 4.5,
      bonus: '100% tot €200 + 77 Free Spins',
      logo: '/casinologos/casilogos/777.svg',
      minDeposit: '€10',
      features: ['Lucky promoties', 'Klassieke games', 'Wekelijkse bonussen'],
    },
    {
      id: 4,
      name: 'Goldrun Casino',
      rating: 4.6,
      bonus: '100% tot €250 + 100 Free Spins',
      logo: '/casinologos/casilogos/goldrun casino.svg',
      minDeposit: '€10',
      features: ['Golden welkomstbonus', 'Uitgebreid spelaanbod', 'VIP programma'],
    },
  ];

  const featuredBonuses = [
    {
      type: 'Welkomstbonus',
      casino: 'TOTO Casino',
      amount: '€1000 + 100 Free Spins',
      description: '100% match bonus',
      requirements: '25x inzetvereiste',
      logo: '/casinologos/casilogos/toto.svg',
    },
    {
      type: 'Free Spins',
      casino: 'BetCity',
      amount: '250 Free Spins',
      description: 'Bij eerste storting',
      requirements: '35x inzetvereiste',
      logo: '/casinologos/casilogos/betcity.svg',
    },
    {
      type: 'Cashback Bonus',
      casino: 'Holland Casino',
      amount: '10% Cashback',
      description: 'Wekelijkse cashback',
      requirements: 'Geen inzetvereiste',
      logo: '/casinologos/casilogos/holland casino.svg',
    },
    {
      type: 'No Deposit',
      casino: 'Kansino',
      amount: '€25 Gratis',
      description: 'Geen storting nodig',
      requirements: '40x inzetvereiste',
      logo: '/casinologos/casilogos/kansino.svg',
    },
  ];

  const latestPosts = [
    {
      id: 1,
      title: 'De beste casino bonussen van deze maand',
      excerpt:
        "Ontdek welke casino's deze maand de meest lucratieve bonussen aanbieden en hoe je hier optimaal van kunt profiteren.",
      image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Casino+Bonussen',
      date: '3 dagen geleden',
      author: 'Casino Expert',
    },
    {
      id: 2,
      title: 'Gokverslaving herkennen en voorkomen',
      excerpt:
        "Tips en adviezen om problematisch gokgedrag te herkennen en verantwoord te blijven spelen bij online casino's.",
      image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Verantwoord+Spelen',
      date: '5 dagen geleden',
      author: 'Gokkerz Team',
    },
    {
      id: 3,
      title: "Nieuwe spellen bij Nederlandse casino's",
      excerpt:
        'Een overzicht van de nieuwste en meest populaire casino spellen die deze maand zijn toegevoegd.',
      image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Nieuwe+Spellen',
      date: '1 week geleden',
      author: 'Game Expert',
    },
    {
      id: 4,
      title: 'Live Casino Tips & Tricks',
      excerpt:
        'Expert tips om je live casino ervaring te verbeteren en je winkansen te verhogen bij live dealer games.',
      image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Live+Casino',
      date: '1 week geleden',
      author: 'Live Casino Expert',
    },
  ];

  const isMobile = useIsMobile('(max-width: 1023px)');

  const renderCasinoCard = (casino: (typeof featuredCasinos)[0]) => (
    <Card
      key={casino.id}
      className="casino-card-hover flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        ['--brand-shadow-color' as any]: `${casinoBrandColors[casino.name] || '#00CC66'}40`,
      }}
    >
      <CardHeader className="relative p-4 text-center">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={casino.logo}
              alt={casino.name}
              className="h-24 w-auto rounded-[10%] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-white/90 px-2 py-0.5 shadow-sm">
              <Star className="mr-0.5 h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{casino.rating}</span>
            </div>
          </div>
          <CardTitle className="mb-3 text-lg">{casino.name}</CardTitle>
        </div>
        <div className="space-y-2">
          <CardDescription className="flex flex-col items-center">
            {casino.bonus.includes('+') ? (
              <>
                <span className="mb-2 text-4xl font-bold text-black">
                  {casino.bonus.split('+')[0].trim()}
                </span>
                <span className="text-lg text-gray-500">+ {casino.bonus.split('+')[1].trim()}</span>
              </>
            ) : (
              <span className="mb-2 text-4xl font-bold text-black">{casino.bonus}</span>
            )}
            <span className="mt-2 text-sm font-medium text-gray-500">
              Min. Storting: {casino.minDeposit}
            </span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-4 py-2 text-center">
        <ul className="space-y-2">
          {casino.features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center text-sm">
              <Check className="mr-2 h-4 w-4 flex-shrink-0 text-gokkerz-green" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-2">
        <div className="flex w-full flex-col gap-2">
          <Button className="button-pulse w-full bg-green-gradient py-6 text-base font-semibold shadow-md hover:opacity-90" asChild>
            <a
              href={getCasinoUrl(casino.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center"
            >
              Bezoek Casino
            </a>
          </Button>
          <Button variant="outline" className="w-full text-sm shadow-sm" asChild>
            <Link
              to={`/casinos/${casino.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
              className="flex w-full items-center justify-center"
            >
              Lees Review
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <Layout>
      <Helmet>
        <title>Gokkerz.nl | Beste Online Casino's Nederland 2025</title>
        <meta
          name="description"
          content="Vind de beste legale online casino's in Nederland. Vergelijk bonussen, spellen en reviews van KSA-vergunde casino's. ✓ Betrouwbaar ✓ Veilig ✓ 100% Legaal"
        />
        <meta
          name="keywords"
          content="online casino nederland, legaal casino, casino bonus, casino reviews, ksa vergunning, beste online casino"
        />
        <link rel="canonical" href="https://gokkerz.nl/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gokkerz.nl | Beste Online Casino's Nederland 2025" />
        <meta
          property="og:description"
          content="Vind de beste legale online casino's in Nederland. Vergelijk bonussen, spellen en reviews van KSA-vergunde casino's."
        />
        <meta property="og:url" content="https://gokkerz.nl/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gokkerz.nl | Beste Online Casino's Nederland 2025" />
        <meta
          name="twitter:description"
          content="Vind de beste legale online casino's in Nederland. Vergelijk actuele bonussen en eerlijke reviews."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Gokkerz.nl',
            url: 'https://gokkerz.nl',
            logo: 'https://gokkerz.nl/assets/Gokkerz.nl.svg',
            description: "Dé gids voor legale online casino's in Nederland",
            sameAs: ['https://twitter.com/Gokkerz_nl'],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-b from-white to-gray-50/60 pb-24 pt-16">
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Headline & Actions */}
            <div className="flex flex-col gap-8 text-center lg:text-left mb-12 lg:mb-0">
              <div className="flex flex-col items-center gap-6 lg:items-start">
                {/* Hero section top badges */}
                <div className="mb-4 flex items-center">
                  <span className="inline-flex items-center rounded-lg bg-white/80 px-4 py-2 shadow-sm">
                    <Award className="mr-2 h-5 w-5 text-gokkerz-green" />
                    <span className="font-medium">Beste Keuze 2025</span>
                  </span>
                </div>

                <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
                  <span className="bg-gradient-to-r from-gokkerz-green to-green-600 bg-clip-text text-transparent">
                    Vind het Beste
                  </span>
                  <br />
                  Online Casino
                </h1>

                <p className="max-w-xl text-lg text-gray-600 md:text-xl">
                  Ontdek betrouwbare online casino's met de beste bonussen en een uitgebreid
                  spelaanbod. 100% legaal en KSA-vergund.
                </p>

                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="button-pulse bg-green-gradient px-8 py-6 shadow-lg hover:opacity-90"
                  >
                    <Link
                      to="/casinos"
                      className="inline-flex items-center gap-2 text-lg font-semibold"
                    >
                      Bekijk Casino's
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 px-8 py-6">
                    <Link
                      to="/bonussen"
                      className="inline-flex items-center gap-2 text-lg font-semibold"
                    >
                      Casino Bonussen
                      <Gift className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Animated Casino Logos */}
            <div className="relative overflow-hidden px-8 py-6">
              <div className="flex flex-col gap-6">
                {/* Top Row - Moving Right */}
                <div className="animate-scroll-right flex gap-8">
                  {[
                    'toto', 'holland casino', 'betcity', 
                    'kansino', 'circus', 'jacks casino',
                    'bingoal', 'unibet', 'bet mgm'
                  ].map((logo) => (
                    <div 
                      key={logo}
                      className="group flex-none w-28 aspect-square transform transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <img
                        src={`/casinologos/casilogos/${logo}.svg`}
                        alt={logo}
                        className="h-full w-full rounded-2xl bg-white/[0.02] object-contain p-2.5 shadow-[0_4px_12px_rgb(0,0,0,0.03)] transition-all duration-300 group-hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Middle Row - Moving Left */}
                <div className="animate-scroll-left flex gap-8">
                  {[
                    'ggpoker', 'leovegas', 'lucky 7 casino',
                    'one casino', '777', '711',
                    '365', 'fairplay casino', 'comeon'
                  ].map((logo) => (
                    <div 
                      key={logo}
                      className="group flex-none w-28 aspect-square transform transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <img
                        src={`/casinologos/casilogos/${logo}.svg`}
                        alt={logo}
                        className="h-full w-full rounded-2xl bg-white/[0.02] object-contain p-2.5 shadow-[0_4px_12px_rgb(0,0,0,0.03)] transition-all duration-300 group-hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Bottom Row - Moving Right */}
                <div className="animate-scroll-right flex gap-8">
                  {[
                    'vbet', 'winnit', 'ze bet',
                    'tonybet', 'scori pro', 'goldrun casino',
                    'hardrock casino', 'hommerson', 'betnation'
                  ].map((logo) => (
                    <div 
                      key={logo}
                      className="group flex-none w-28 aspect-square transform transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <img
                        src={`/casinologos/casilogos/${logo}.svg`}
                        alt={logo}
                        className="h-full w-full rounded-2xl bg-white/[0.02] object-contain p-2.5 shadow-[0_4px_12px_rgb(0,0,0,0.03)] transition-all duration-300 group-hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-gokkerz-green/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-gradient-to-tr from-gokkerz-green/10 to-transparent blur-2xl"></div>
        </div>
      </section>

      {/* Featured Casinos Section */}
      <section className="bg-gradient-to-b from-gray-50/50 to-white py-20">
        <div className="container max-w-[1440px]">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="mb-4 inline-block rounded-full bg-gokkerz-green/10 px-4 py-1.5 text-sm font-medium text-gokkerz-green">
                Top Online Casino's
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold">Legale Online Casino's Nederland 2025</h2>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-600">
                Ontdek de beste legale online casino's met een Nederlandse vergunning van de
                Kansspelautoriteit (KSA). Vergelijk betrouwbare casino's op bonus, spelaanbod,
                uitbetalingssnelheid en klantenservice.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center rounded-lg bg-white/80 px-4 py-2 shadow-sm">
                  <Shield className="mr-2 h-5 w-5 text-gokkerz-green" />
                  <span className="font-medium">KSA Vergunning</span>
                </div>
                <div className="flex items-center rounded-lg bg-white/80 px-4 py-2 shadow-sm">
                  <ThumbsUp className="mr-2 h-5 w-5 text-gokkerz-green" />
                  <span className="font-medium">iDEAL Betalingen</span>
                </div>
                <div className="flex items-center rounded-lg bg-white/80 px-4 py-2 shadow-sm">
                  <Clock className="mr-2 h-5 w-5 text-gokkerz-green" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 overflow-hidden rounded-xl border bg-white shadow-lg">
            {isMobile ? (
              <div className="space-y-4">{featuredCasinos.map(renderCasinoCard)}</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <TableHead className="py-6 text-base">Casino</TableHead>
                      <TableHead className="py-6 text-base">Rating</TableHead>
                      <TableHead className="py-6 text-base">Welkomstbonus</TableHead>
                      <TableHead className="py-6 text-base">Min. Storting</TableHead>
                      <TableHead className="py-6 text-base">Kenmerken</TableHead>
                      <TableHead className="py-6 text-base">Actie</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {featuredCasinos.map((casino) => (
                      <TableRow
                        key={casino.id}
                        className="group transition-colors duration-200 hover:bg-gray-50/80"
                      >
                        <TableCell className="py-6 font-medium">
                          <div className="flex items-center gap-6">
                            <div className="flex min-w-[160px] items-center justify-center transition-transform duration-200 group-hover:scale-105">
                              <img
                                src={casino.logo}
                                alt={casino.name}
                                className="h-20 w-[180px] rounded-[10%] object-contain"
                              />
                            </div>
                            <span className="text-lg font-semibold transition-colors group-hover:text-gokkerz-green">
                              {casino.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, index) => (
                                <Star
                                  key={index}
                                  className={`h-5 w-5 transition-all duration-200 ${
                                    index < Math.floor(casino.rating)
                                      ? 'fill-yellow-400 text-yellow-400 group-hover:scale-110'
                                      : 'text-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 font-medium">{casino.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                            {casino.bonus.includes('+') ? (
                              <>
                                <span className="text-left font-medium text-green-600 transition-colors group-hover:text-green-700">
                                  {casino.bonus.split('+')[0].trim()}
                                </span>
                                <span className="text-left text-sm text-gray-500">
                                  + {casino.bonus.split('+')[1].trim()}
                                </span>
                              </>
                            ) : (
                              <span className="text-left font-medium text-green-600 transition-colors group-hover:text-green-700">
                                {casino.bonus}
                              </span>
                            )}
                            <span className="text-left text-sm text-gray-500">
                              Bij eerste storting
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium transition-colors group-hover:bg-gray-200">
                            {casino.minDeposit}
                          </span>
                        </TableCell>
                        <TableCell>
                          <ul className="space-y-1.5">
                            {casino.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-left text-sm transition-transform group-hover:translate-x-1"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-gokkerz-green/60"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-3">
                            <Button className="bg-green-gradient py-6 text-base font-semibold shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-90 hover:shadow-md" asChild>
                              <a
                                href={getCasinoUrl(casino.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Bezoek casino
                              </a>
                            </Button>
                            <Button
                              variant="outline"
                              className="py-6 transition-all duration-200 hover:bg-gray-50/80"
                              asChild
                            >
                              <Link
                                to={`/casinos/${casino.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                              >
                                Lees Review
                              </Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="button-pulse bg-green-gradient shadow-lg hover:opacity-90"
            >
              <Link to="/casinos" className="inline-flex items-center gap-2 px-8 py-6 text-lg">
                Bekijk Alle Casino's
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Casino Bonussen */}
      <section className="bg-gradient-to-b from-white to-gray-50/50 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="mb-4 inline-block rounded-full bg-gokkerz-green/10 px-4 py-1.5 text-sm font-medium text-gokkerz-green">
                Exclusieve Bonussen
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold">Casino Bonussen in Nederland</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Ontdek de beste online casino bonussen van dit moment. Van welkomstbonussen tot free
              spins en cashback acties.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredBonuses.map((bonus) => (
              <Card
                key={bonus.casino}
                className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  ['--brand-shadow-color' as any]: `${casinoBrandColors[bonus.casino] || '#00CC66'}20`,
                }}
              >
                <CardHeader className="relative bg-gradient-to-b from-white to-gray-50/30 p-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <img
                        src={bonus.logo}
                        alt={bonus.casino}
                        className="h-24 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 transform">
                        <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-md">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-semibold">4.5/5</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{bonus.casino}</CardTitle>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1">
                    <span className="text-3xl font-bold text-gray-900">{bonus.amount}</span>
                    <p className="text-sm font-medium text-gray-500">{bonus.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow px-6 py-4">
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gokkerz-green/10 transition-colors group-hover:bg-gokkerz-green/15">
                        <Check className="h-4 w-4 text-gokkerz-green" />
                      </div>
                      <span className="text-gray-600">{bonus.requirements}</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gokkerz-green/10 transition-colors group-hover:bg-gokkerz-green/15">
                        <Check className="h-4 w-4 text-gokkerz-green" />
                      </div>
                      <span className="text-gray-600">Nederlandse licentie</span>
                    </li>
                  </ul>
                </CardContent>

                <CardFooter className="bg-gradient-to-t from-gray-50/50 to-white p-6 pt-4">
                  <div className="flex w-full flex-col gap-2">
                    <Button className="button-pulse w-full bg-green-gradient py-6 text-base font-semibold shadow-md hover:opacity-90" asChild>
                      <a
                        href={getCasinoUrl(bonus.casino)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Claim Bonus
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link
                        to={`/casino/${bonus.casino.toLowerCase()}`}
                        className="flex items-center justify-center text-sm"
                      >
                        Lees Review
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mb-20 text-center">
            <Button
              asChild
              size="lg"
              className="button-pulse bg-green-gradient shadow-lg hover:opacity-90"
            >
              <Link to="/bonussen" className="inline-flex items-center gap-2 px-8 py-6 text-lg">
                Bekijk Alle Bonussen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Bonus Types Explanation */}
          <div className="mb-16 mt-24">
            <div className="mb-12 text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-gokkerz-green/10 px-6 py-2 text-sm font-medium text-gokkerz-green ring-1 ring-inset ring-gokkerz-green/20">
                Casino Bonus Guide
              </span>
              <h2 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                Soorten Casino Bonussen
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Ontdek alle verschillende soorten casino bonussen en leer hoe je er maximaal van
                kunt profiteren
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    🎁
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">Welkomstbonus</h4>
                    <p className="mb-3 text-gray-600">
                      Ontvang als nieuwe speler een verdubbeling van je eerste storting tot €250. Extra speelgeld en spins bij registratie.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">100% tot €200 + 100 free spins</span>
                    </div>
                  </div>
                </div>
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    ⭐️
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">No Deposit Bonus</h4>
                    <p className="mb-3 text-gray-600">
                      Speel gratis zonder storting. Ontvang automatisch speelgeld of free spins
                      zodra je een account aanmaakt bij het online casino.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">€10 gratis speelgeld</span>
                    </div>
                  </div>
                </div>
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    🔃
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">Reload Bonus</h4>
                    <p className="mb-3 text-gray-600">
                      Extra bonus bij een nieuwe storting voor bestaande spelers. Vaak beschikbaar
                      tijdens promoties, events of wekelijkse casinoacties.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">50% bonus tot €100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    🏆
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">Cashback Bonus</h4>
                    <p className="mb-3 text-gray-600">
                      Krijg een percentage van je verliezen terug als cashback. Deze bonus heeft
                      meestal lagere inzetvereisten dan andere promoties.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">10% cashback tot €100</span>
                    </div>
                  </div>
                </div>
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    🫶
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">Loyaliteitspunten</h4>
                    <p className="mb-3 text-gray-600">Verdien punten bij elke inzet verdien geld terug. Loyaliteitsprogramma’s bieden vaak extra bonussen.</p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">1 punt per €10 inzet</span>
                    </div>
                  </div>
                </div>
                <div className="bonus-type-card relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">
                    {/* 3D Emoji zonder frame */}
                    👑
                  </div>
                  <div className="flex-1 text-center">
                    <h4 className="mb-3 text-xl font-semibold">High Roller Bonus</h4>
                    <p className="mb-3 text-gray-600">
                      Speciaal voor spelers die groots storten. Ontvang hogere bonussen bij grote
                      bedragen en profiteer van exclusieve extra’s.
                    </p>
                    <div className="rounded-lg bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm ring-1 ring-gray-900/10">
                      <span className="font-medium text-gokkerz-green">Voorbeeld:</span>{' '}
                      <span className="text-gray-600">50% tot €2000 (min. €1000)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-white p-8 shadow-xl">
              <h3 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-center text-xl font-bold text-transparent">
                Tips voor Casino Bonussen
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center gap-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gokkerz-green/10 to-transparent">
                    <Check className="h-5 w-5 text-gokkerz-green" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Lees de Voorwaarden</h4>
                    <p className="text-sm text-gray-600">
                      Check altijd de inzetvereisten, maximale inzet en geldigheidsduur van elke
                      bonus
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gokkerz-green/10 to-transparent">
                    <Check className="h-5 w-5 text-gokkerz-green" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Let op Restricted Games</h4>
                    <p className="text-sm text-gray-600">
                      Niet alle spellen tellen mee voor het vrijspelen van de bonus
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gokkerz-green/10 to-transparent">
                    <Check className="h-5 w-5 text-gokkerz-green" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Maximale Uitbetaling</h4>
                    <p className="text-sm text-gray-600">
                      Controleer hoeveel je maximaal kunt winnen met bonusgeld
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games & Experience Section */}
      <section className="bg-gradient-to-b from-gray-50/50 to-white py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="mb-4 inline-block rounded-full bg-gokkerz-green/10 px-4 py-1.5 text-sm font-medium text-gokkerz-green">
                Casino Games
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold">Ontdek het Beste Spelaanbod</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Van klassieke tafelspellen tot de nieuwste slots - vind de beste casino games bij onze
              betrouwbare partners.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Online Slots */}
            <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">🎰</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Online Slots</h3>
                <ul className="w-full space-y-2 text-center sm:text-left">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>1000+ video slots</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Klassieke fruitautomaten</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Jackpot slots</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Roulette */}
            <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">🎲</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Roulette</h3>
                <ul className="w-full space-y-2 text-center sm:text-left">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Europees Roulette</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Live Roulette</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Auto Roulette</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Blackjack */}
            <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">♠️</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Blackjack</h3>
                <ul className="w-full space-y-2 text-center sm:text-left">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Classic Blackjack</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Live Blackjack</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Speed Blackjack</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Live Casino */}
            <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <div className="mb-4 flex items-center justify-center text-[2.5rem] sm:text-[3.5rem]">🎥</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Live Casino</h3>
                <ul className="w-full space-y-2 text-center sm:text-left">
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Live Dealers</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>Game Shows</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Check className="mr-2 h-4 w-4 text-gokkerz-green" />
                    <span>VIP Tables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="button-pulse bg-green-gradient shadow-lg hover:opacity-90"
            >
              <Link to="/casinos" className="inline-flex items-center gap-2 px-8 py-6 text-lg">
                Hier te spelen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Waarom Kiezen voor Gokkerz?</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Bij Gokkerz streven we ernaar om jou de meest actuele en betrouwbare informatie te
              geven over online casino's in Nederland.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="glassmorphism p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gokkerz-green/10">
                <Shield className="h-8 w-8 text-gokkerz-green" />
              </div>
              <h3 className="mb-2 text-xl font-bold">100% Betrouwbaar</h3>
              <p className="text-gray-600">
                We reviewen alleen legale casino's met een Nederlandse vergunning van de
                Kansspelautoriteit.
              </p>
            </div>

            <div className="glassmorphism p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gokkerz-green/10">
                <Users className="h-8 w-8 text-gokkerz-green" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Expert Team</h3>
              <p className="text-gray-600">
                Ons team van casino experts test en beoordeelt elk casino grondig op verschillende
                criteria.
              </p>
            </div>

            <div className="glassmorphism p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gokkerz-green/10">
                <Calendar className="h-8 w-8 text-gokkerz-green" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Altijd Up-to-Date</h3>
              <p className="text-gray-600">
                Onze informatie wordt dagelijks bijgewerkt om je de meest actuele bonussen en
                promoties te bieden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gradient-to-b from-white to-gray-50/50 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-gokkerz-green/10 px-4 py-1.5 text-sm font-medium text-gokkerz-green">
              Casino Blog
            </span>
            <h2 className="mb-6 text-4xl font-bold">Laatste Casino Updates</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Ontdek de nieuwste ontwikkelingen, expert reviews en strategische tips in de wereld
              van online casino's
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {latestPosts.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex h-full flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardContent className="flex-grow p-6">
                    <div className="mb-3 flex items-center justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-gokkerz-green">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="line-clamp-2 text-gray-600">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button asChild variant="outline" className="group/btn w-full">
                      <Link to={`/blog/${post.id}`} className="flex items-center justify-center">
                        Lees meer
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-gokkerz-green text-gokkerz-green transition-colors hover:bg-gokkerz-green hover:text-white"
            >
              <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-6">
                Bekijk Alle Artikelen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vercel Analytics */}
      <Analytics />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </Layout>
  );
};

export default Index;
