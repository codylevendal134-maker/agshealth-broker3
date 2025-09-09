import Head from 'next/head'
import { Phone, Mail, Calendar, Shield, Lock, CheckCircle2, MessageSquare, Sparkles, MapPin, ChevronRight, HeartPulse, Stethoscope, Tooth, Ambulance } from 'lucide-react'

const INFO = {
  name: "Cody Levendal",
  role: "Independent Broker • AGS Health Products",
  email: "cody@agshealth.co.za",
  phoneDisplay: "064 651 4646",
  phoneLink: "+27646514646",
  whatsappLink: "https://wa.me/27690227165",
  bookingLink: "#contact",
  office: "George • Bodorp",
}

const plans = [
  { key: 'combo-red', label: 'Combo • Red', price: 2080, tagline: 'Top everyday + hospital + accident', bullets: ['8 GP visits p.a.', '4 Specialist visits p.a.', 'Premium Dentistry & Optometry', 'Hospital up to R150,000 p.a.', 'Accident up to R150,000 p.a.'], featured: true },
  { key: 'combo-blue', label: 'Combo • Blue', price: 1605, tagline: 'Higher limits for growing families', bullets: ['6 GP visits p.a.', '3 Specialist visits p.a.', 'Enhanced Dentistry & Optometry', 'Hospital up to R150,000 p.a.', 'Accident up to R150,000 p.a.'] },
  { key: 'combo-green', label: 'Combo • Green', price: 1130, tagline: 'Solid everyday + hospital + accident', bullets: ['4 GP visits p.a.', '2 Specialist visits p.a.', 'Basic Dentistry & Optometry', 'Hospital up to R150,000 p.a.', 'Accident up to R150,000 p.a.'] },
  { key: 'compact', label: 'Compact', price: 760, tagline: 'Essentials on a tighter budget', bullets: ['GP & meds essentials', 'Hospital up to R150,000 p.a.', 'Accident up to R50,000 p.a.'] },
  { key: 'hospital', label: 'Hospital Plan', price: 480, tagline: 'Covers illness & surgery admissions', bullets: ['Hospital up to R150,000 p.a.', 'Maternity (waiting periods apply)', 'Pays toward hospital bills'] },
  { key: 'accident', label: 'Accidental Plan', price: 290, tagline: 'Injury, ER & ambulance cover', bullets: ['Accident hospital up to R150,000 p.a.', 'Trauma room + ambulance', 'No waiting period for accidents'] },
  { key: 'dental', label: 'Dental (Bronze/Silver/Gold)', price: 190, tagline: 'Routine & major dentistry options', bullets: ['Consults, X-rays, fillings', 'Root canals, dentures', 'Implants (Gold tier)'] },
]

export default function Home() {
  const title = `${INFO.name} — AGS Health Medical Insurance Broker`
  const desc = "Compare AGS Health South Africa plans. Get a same-day quote, honest guidance, and claims assistance."

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: `${INFO.name} — ${INFO.role}`,
              areaServed: "ZA",
              url: "",
              telephone: INFO.phoneDisplay,
              email: INFO.email,
              address: { "@type": "PostalAddress", addressCountry: "ZA", addressLocality: INFO.office },
              makesOffer: [
                { "@type": "Offer", name: "Day-to-Day Medical Insurance" },
                { "@type": "Offer", name: "Hospital Insurance" },
                { "@type": "Offer", name: "Accidental Cover" },
                { "@type": "Offer", name: "Compact Combo Plan" },
                { "@type": "Offer", name: "Dental Insurance" },
                { "@type": "Offer", name: "Funeral Cover" }
              ]
            })
          }}
        />
      </Head>

      {/* Top notice */}
      <div className="w-full text-center text-xs md:text-sm py-2 bg-white/10 backdrop-blur border-b border-white/10">
        Independent broker page for <span className="font-semibold">AGS Health</span> medical insurance products • Not the official company site.
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--bg)]/70 backdrop-blur border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[var(--accent)] grid place-items-center font-extrabold">AG</div>
            <div>
              <p className="font-semibold leading-tight">{INFO.name}</p>
              <p className="text-xs text-white/70">{INFO.role}</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#plans">Plans</a>
            <a href="#compare">Compare</a>
            <a href="#process">Claims</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="flex gap-2">
            <a className="btn btn-primary rounded-xl" href={INFO.whatsappLink} target="_blank" rel="noreferrer">
              <Phone className="h-4 w-4"/> WhatsApp
            </a>
            <a className="btn btn-ghost rounded-xl" href={`mailto:${INFO.email}`}>
              <Mail className="h-4 w-4"/> Email
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">South Africa • Medical Insurance</span>
            <h1 className="h1 mt-4">Smart, affordable healthcare cover with AGS Health — guided by a broker who fights for your claims.</h1>
            <p className="lead mt-4">Choose Day-to-Day, Hospital, Accident, Compact combos, or Dental cover. I’ll help you pick the right plan and handle the paperwork.</p>
            <div className="flex gap-3 mt-6">
              <a href="#plans" className="btn btn-primary rounded-xl">
                <Sparkles className="h-5 w-5"/> See Plans
              </a>
              <a href="#contact" className="btn btn-ghost rounded-xl">
                <Calendar className="h-5 w-5"/> Free consult
              </a>
            </div>
            <div className="flex items-center gap-6 mt-6 text-sm text-white/70">
              <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4"/> FSCA regulated (via underwriters)</span>
              <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4"/> POPIA & privacy safe</span>
            </div>
          </div>
          <div className="card-inv p-6">
            <h3 className="text-xl font-semibold">Quick Quote</h3>
            <p className="text-white/70 text-sm">Pick a plan and I’ll reply the same day with your exact premium.</p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {plans.slice(0,6).map(p => (
                <div key={p.key} className="card p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{p.label}</p>
                    {p.featured && <span className="badge bg-[var(--accent)] text-white">Best Value</span>}
                  </div>
                  <p className="text-sm text-slate-600">{p.tagline}</p>
                  <p className="mt-2 text-2xl font-extrabold">R{p.price}<span className="text-sm font-normal text-slate-500">/pm</span></p>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    {p.bullets.slice(0,3).map((b,i)=> <li key={i} className="inline-flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--accent)]"/> {b}</li>)}
                  </ul>
                  <a href="#contact" className="btn btn-primary rounded-xl mt-3">Get Quote</a>
                </div>
              ))}
            </div>
            <div className="text-xs text-white/60 mt-3">Prices are indicative for principal member. Waiting periods apply. Final terms per policy schedule.</div>
          </div>
        </div>
      </section>

      {/* Services icons */}
      <section className="section bg-white text-slate-900">
        <div className="container">
          <h2 className="h2">Cover options</h2>
          <p className="text-slate-600 mt-2">Day-to-Day • Hospital • Accident • Compact • Dental</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {[
              {icon: Stethoscope, label: 'Day-to-Day'},
              {icon: HeartPulse, label: 'Hospital'},
              {icon: Ambulance, label: 'Accident'},
              {icon: Tooth, label: 'Dental'},
              {icon: MessageSquare, label: 'Advice & Claims'}
            ].map((i, idx) => (
              <div key={idx} className="card p-4 text-center">
                <div className="h-12 w-12 mx-auto rounded-xl bg-slate-900 text-white grid place-items-center">
                  {i.icon({ className: 'h-6 w-6' })}
                </div>
                <p className="mt-3 font-semibold">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section id="compare" className="section">
        <div className="container">
          <h2 className="h2">Plan comparison</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border border-white/10 rounded-2xl overflow-hidden">
              <thead className="bg-white/10">
                <tr>
                  <th className="text-left p-3">Feature</th>
                  {['Combo Red','Combo Blue','Combo Green','Compact'].map((l,i)=>(
                    <th key={i} className="text-left p-3">{l}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["GP visits / year", "8", "6", "4", "Essentials"],
                  ["Specialist visits / year", "4", "3", "2", "—"],
                  ["Hospital cover p.a.", "R150k", "R150k", "R150k", "R150k"],
                  ["Accident cover p.a.", "R150k", "R150k", "R150k", "R50k"],
                  ["Dental & Optometry", "Premium", "Enhanced", "Basic", "Basic"],
                  ["Waiting periods (illness)", "3 mo", "3 mo", "3 mo", "3 mo"],
                ].map((row,idx)=> (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white/5" : ""}>
                    {row.map((cell,i)=>(<td key={i} className="p-3 border-t border-white/10">{cell}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section bg-white text-slate-900">
        <div className="container">
          <h2 className="h2">How claims work</h2>
          <p className="text-slate-600 mt-2">I stay with you from quote to claim. Here’s the simple process.</p>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {[
              {t:"Quick consult", d:"We confirm your needs, dependants and budget in 15 minutes."},
              {t:"Enrolment", d:"Complete forms & KYC. Policies issued by underwriters."},
              {t:"Activate", d:"Waiting periods explained. Digital cards & policy docs sent."},
              {t:"Claim support", d:"Submit docs; I chase updates and resolve issues fast."},
            ].map((p,i)=>(
              <div key={i} className="card p-5">
                <div className="badge mb-2">{i+1}</div>
                <p className="font-semibold">{p.t}</p>
                <p className="text-slate-600 mt-2 text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="h2">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {[
              {q:"Is AGS Health a medical aid?", a:"No. It’s medical insurance (demarcated) — regulated via the FSCA and underwritten by licensed insurers. It’s not a medical scheme under the CMS."},
              {q:"Do I need to use network doctors?", a:"Most day-to-day benefits allow any provider, but using partnered providers can stretch benefits further."},
              {q:"What are the waiting periods?", a:"Typical: 3 months for illness/operations, 6 months for dread disease, 9 months for maternity. Accidents usually have no waiting period."},
              {q:"Can I add my parents or kids?", a:"Yes — dependants ages 0–74 can be added. Premiums vary by plan and tier."}
            ].map((f,i)=>(
              <details key={i} className="card-inv p-4">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  <span>{f.q}</span>
                  <ChevronRight className="h-4 w-4"/>
                </summary>
                <p className="text-white/80 mt-2 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-white text-slate-900">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="h2">Get an exact quote</h2>
            <p className="text-slate-600 mt-2">Same-day responses during business hours. I’ll never spam you.</p>
            <form
              className="card p-6 mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const plan = data.get('plan') || '—';
                const dependants = data.get('dependants') || '0';
                const name = data.get('name') || 'Website Visitor';
                const email = data.get('email') || '';
                const message = data.get('message') || '';
                const subject = encodeURIComponent(`AGS Health Quote Request — ${name}`);
                const body = encodeURIComponent(`Plan: ${plan}\nDependants: ${dependants}\n\n${message}\n\n— ${name}\n${email}`);
                window.location.href = `mailto:${INFO.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid md:grid-cols-2 gap-3">
                <label className="block text-sm">Full Name
                  <input name="name" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Jane Doe" required />
                </label>
                <label className="block text-sm">Email
                  <input name="email" type="email" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="jane@example.co.za" required />
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <label className="block text-sm">Plan of Interest
                  <select name="plan" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
                    {plans.map(p => <option key={p.key} value={p.label}>{p.label}</option>)}
                  </select>
                </label>
                <label className="block text-sm">Dependants
                  <input name="dependants" type="number" min="0" max="6" defaultValue="0" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" />
                </label>
              </div>
              <label className="block text-sm">Message
                <textarea name="message" rows={5} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Tell me who needs cover and when you'd like to start…"></textarea>
              </label>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="btn btn-primary rounded-xl"><Mail className="h-4 w-4"/> Email Me</button>
                <a className="btn btn-ghost rounded-xl" href={INFO.whatsappLink} target="_blank" rel="noreferrer"><Phone className="h-4 w-4"/> WhatsApp</a>
              </div>
            </form>
          </div>
          <div>
            <div className="card p-6">
              <p className="font-semibold">Contact details</p>
              <p className="mt-3 flex items-center gap-2"><Mail className="h-4 w-4"/><a href={`mailto:${INFO.email}`} className="underline">{INFO.email}</a></p>
              <p className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4"/><a href={`tel:${INFO.phoneLink}`} className="underline">{INFO.phoneDisplay}</a></p>
              <p className="mt-2 flex items-center gap-2"><Calendar className="h-4 w-4"/><a href="#contact" className="underline">Book a meeting</a></p>
              <p className="mt-2 flex items-center gap-2"><MapPin className="h-4 w-4"/>{INFO.office}</p>
              <p className="text-xs text-slate-500 mt-4">Prefer WhatsApp? <a href={INFO.whatsappLink} target="_blank" rel="noreferrer" className="underline">Chat here</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="section">
        <div className="container">
          <div className="card-inv p-6 text-sm">
            <p><strong>Important:</strong> Products shown are <em>medical insurance</em> (demarcated) and not medical aid (Medical Schemes Act). Underwriters issue policies and pay valid claims. Typical waiting periods: illness 3 months, dread disease 6 months, maternity 9 months; accidents usually none. Read your policy schedule for limits and exclusions.</p>
            <p className="mt-2">Underwriters include licensed insurers. I provide independent advice and ongoing claims assistance.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[var(--bg)]">
        <div className="container py-8 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="font-semibold">{INFO.name}</p>
            <p className="text-white/70">{INFO.role}</p>
            <div className="mt-3 space-y-1 text-white/80">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a className="underline" href={`mailto:${INFO.email}`}>{INFO.email}</a></p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a className="underline" href={`tel:${INFO.phoneLink}`}>{INFO.phoneDisplay}</a></p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Plans</p>
            <ul className="mt-2 space-y-1 text-white/80">
              <li><a href="#plans">Combo Plans</a></li>
              <li><a href="#compare">Compact</a></li>
              <li><a href="#compare">Hospital & Accident</a></li>
              <li><a href="#contact">Dental & Quotes</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Support</p>
            <ul className="mt-2 space-y-1 text-white/80">
              <li><a href="#process">How Claims Work</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Get a Quote</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <p className="text-white/70 mt-2">© {new Date().getFullYear()} {INFO.name}. All rights reserved. “AGS Health” is a trademark of its respective owner. This independent site markets AGS Health products as a broker and is not the official company website.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
