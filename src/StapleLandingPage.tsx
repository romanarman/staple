
/**
 * Staple Bakery – modern, clean landing page
 * Brand colors:
 *  - Navy:  #252640
 *  - Cream: #FFF9E5
 * Font:
 *  - Hurme Geometric Sans 3 Regular (load via your own @font-face or webfont; see comment below)
 */

const NAVY = "#252640";
const CREAM = "#FFF9E5";

export default function StapleLandingPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: CREAM,
        color: NAVY,
        fontFamily:
          '"Hurme Geometric Sans 3", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      {/* 
        If you self-host Hurme, add something like this to your global CSS:
        @font-face { font-family: 'Hurme Geometric Sans 3'; src: url('/fonts/HurmeGeometricSans3-Regular.woff2') format('woff2'); font-weight: 400; font-style: normal; }
      */}

      {/* Top Nav */}
      {/* Top Nav */}
      <header
        className="sticky top-0 z-50"
        style={{ backgroundColor: NAVY, color: CREAM }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#top" className="flex items-center gap-3" aria-label="Staple home">
            <img
            src="/logo/staple-logo.svg"
            alt="Staple Bakery"
            className="h-12 w-auto"
            />        
         </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="opacity-80 hover:opacity-100" href="#about">About</a>
            <a className="opacity-80 hover:opacity-100" href="#ingredients">Ingredients</a>
            <a className="opacity-80 hover:opacity-100" href="#location">Location</a>
            <a className="opacity-80 hover:opacity-100" href="#contact">Contact</a>
          </nav>

          <a
            href="https://instagram.com/staplebakery"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition hover:opacity-80"
            style={{ borderColor: "rgba(255,249,229,0.35)" }}
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="relative">
          <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-stretch gap-8 px-5 py-10 md:grid-cols-12 md:py-16">
            {/* Left: Big words */}
            <div className="md:col-span-7 flex items-center">
              <div className="w-full">
                <p className="text-xs font-medium tracking-[0.22em] opacity-80">LOCAL BAKERY • FOUNDED 2026</p>
                <h1 className="mt-6 text-[clamp(3.5rem,8vw,10rem)] font-bold leading-[0.9] tracking-tight">
                  <span className="block">BREAD</span>
                  <span className="block">PASTRY</span>
                  <span className="block">COFFEE</span>
                </h1>
              </div>
            </div>

            {/* Right: Illustration placeholder */}
            <div className="md:col-span-5">
              <div className="h-full rounded-[2rem] border p-6" style={{ borderColor: "rgba(37,38,64,0.14)" }}>
                <div className="flex h-full min-h-[340px] flex-col items-center justify-center gap-4 rounded-[1.6rem] border border-dashed px-6 text-center" style={{ borderColor: "rgba(37,38,64,0.22)" }}>
                  <div className="text-sm font-medium">Illustration placeholder</div>
                  {/* <p className="max-w-xs text-sm opacity-80">
                    Drop your hero illustration here (SVG/PNG), or replace this block with an image component.
                  </p> */}
                  {/* <div className="mt-2 text-xs opacity-70">Recommended: ~1200×1200 or SVG</div> */}
                </div>
              </div>
            </div>
          </div>

          {/* subtle bottom divider */}
          <div className="mx-auto max-w-6xl px-5">
            <div className="h-px w-full" style={{ backgroundColor: "rgba(37,38,64,0.14)" }} />
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-xs font-medium tracking-[0.22em] opacity-80">ABOUT</p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight">A local bakery, made properly.</h2>
              </div>
              <div className="md:col-span-8">
                <div className="max-w-2xl space-y-8 text-[clamp(1.05rem,1.2vw,1.25rem)] leading-relaxed opacity-90">
                <p>
                Founded in 2026, Staple sits just off Stapleton Road - a small neighbourhood bakery built around staples:
                the everyday breads, pastries and drinks that make a home feel like home.
                </p>
                <p>
                Our bread is made in-house using British-milled organic flour. Our pastry is laminated the traditional way
                with high quality French butter. And our drinks are made with freshly-roasted beans from a local roaster.
                </p>
                </div>
                </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-5">
            <div className="h-px w-full" style={{ backgroundColor: "rgba(37,38,64,0.14)" }} />
          </div>
        </section>

        {/* Ingredients */}
        <section id="ingredients" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="text-xs font-medium tracking-[0.22em] opacity-80">INGREDIENTS</p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight">Quality you can taste.</h2>
                <p className="mt-4 text-sm leading-relaxed opacity-85">
                  We keep it simple: great flour, great butter, great coffee - and a lot of repetition.
                </p>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-4">
                  <FeatureRow
                    title="Bread"
                    body="Made in-house using British-milled organic flour - slow fermentation for flavour and structure."
                  />
                  <FeatureRow
                    title="Pastry"
                    body="Traditional lamination with high-quality French butter and French flour for that clean, crisp flake."
                  />
                  <FeatureRow
                    title="Coffee"
                    body="Drinks made with beans from a local roaster — dialled in for maximum flavour."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-5">
            <div className="h-px w-full" style={{ backgroundColor: "rgba(37,38,64,0.14)" }} />
          </div>
        </section>

        {/* Location */}
        <section id="location" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="text-xs font-medium tracking-[0.22em] opacity-80">LOCATION</p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight">Find Staple.</h2>
                <p className="mt-4 text-sm leading-relaxed opacity-85">
                  We’re in Easton, Bristol - come and find us!
                </p>
              </div>

              <div className="md:col-span-7">
                <div className="rounded-3xl border p-6" style={{ borderColor: "rgba(37,38,64,0.14)" }}>
                  <div className="text-sm font-medium">112 St Marks Road</div>
                  <div className="mt-1 text-sm opacity-80">Easton, Bristol, BS5 6JD</div>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    <a
                      className="rounded-2xl border px-4 py-3 text-sm font-medium transition"
                      style={{ borderColor: "rgba(37,38,64,0.22)" }}
                      href="https://www.google.com/maps/search/?api=1&query=112%20St%20Marks%20Road%2C%20Easton%2C%20Bristol%2C%20BS5%206JD"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </a>
                    <a
                      className="rounded-2xl px-4 py-3 text-sm font-medium shadow-sm transition hover:shadow"
                      style={{ backgroundColor: NAVY, color: CREAM }}
                      href="https://waze.com/ul?q=112%20St%20Marks%20Road%20Easton%20Bristol%20BS5%206JD&navigate=yes"
                    >
                      Open in Waze
                    </a>
                  </div>

                  {/* <div
                    className="mt-6 overflow-hidden rounded-2xl border"
                    style={{ borderColor: "rgba(37,38,64,0.14)" }}
                    >
                    <iframe
                        title="Staple Bakery location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.421860550684!2d-2.567093223322158!3d51.46877041352457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718e391e3286bf%3A0x29f7465bea1e90d6!2s112%20St%20Marks%20Rd%2C%20Easton%2C%20Bristol%20BS5%206JD!5e0!3m2!1sen!2suk!4v1768683197875!5m2!1sen!2suk"
                        width="100%"
                        height="360"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-5">
            <div className="h-px w-full" style={{ backgroundColor: "rgba(37,38,64,0.14)" }} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
            <div className="grid items-start gap-10 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className="text-xs font-medium tracking-[0.22em] opacity-80">CONTACT</p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight">Hello 👋</h2>
                <p className="mt-4 text-sm leading-relaxed opacity-85">
                  For enquiries or questions, email us and we’ll get back to you as soon as we can.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    className="rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition hover:shadow"
                    style={{ backgroundColor: NAVY, color: CREAM }}
                    href="mailto:hello@staplebakery.co.uk"
                  >
                    hello@staplebakery.co.uk
                  </a>
                  <span className="text-xs opacity-70">(tap to email)</span>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="rounded-3xl border p-6" style={{ borderColor: "rgba(37,38,64,0.14)" }}>
                  <div className="text-sm font-medium">Add your logo</div>
                  <p className="mt-2 text-sm opacity-80">
                    Share your logo when ready — I can drop it into the nav and polish spacing/lockups.
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    <MiniStat label="Brand" value="Navy / Cream" />
                    <MiniStat label="Founded" value="2026" />
                    <MiniStat label="Focus" value="Bread + Pastry" />
                    <MiniStat label="Coffee" value="Local roaster" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t" style={{ borderColor: "rgba(37,38,64,0.12)" }}>
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between">
            <div className="text-sm opacity-85">© {new Date().getFullYear()} Staple Bakery</div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a className="opacity-80 hover:opacity-100" href="#about">About</a>
              <a className="opacity-80 hover:opacity-100" href="#ingredients">Ingredients</a>
              <a className="opacity-80 hover:opacity-100" href="#location">Location</a>
              <a className="opacity-80 hover:opacity-100" href="mailto:hello@staplebakery.co.uk">Email</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Smooth scrolling helper */}
      <style>{`html { scroll-behavior: smooth; }`}</style>
    </div>
  );
}

// function InfoCard({ title, body }: { title: string; body: string }) {
//   return (
//     <div className="rounded-3xl border p-5" style={{ borderColor: "rgba(37,38,64,0.14)" }}>
//       <div className="text-sm font-medium">{title}</div>
//       <div className="mt-2 text-sm opacity-80 leading-relaxed">{body}</div>
//     </div>
//   );
// }

function FeatureRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border p-6" style={{ borderColor: "rgba(37,38,64,0.14)" }}>
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-base font-medium">{title}</div>
          <div className="mt-2 text-sm opacity-85 leading-relaxed">{body}</div>
        </div>
        {/* <div className="hidden md:block text-xs opacity-60">STAPLE</div> */}
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border px-4 py-3" style={{ borderColor: "rgba(37,38,64,0.14)" }}>
      <div className="text-xs opacity-70">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  );
}
