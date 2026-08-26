'use client'

import { useEffect } from 'react'

export default function PublicPage() {
  useEffect(() => {
    const toggleHouses = document.getElementById('toggle-houses')
    const toggleCars = document.getElementById('toggle-cars')

    if (toggleHouses && toggleCars) {
      toggleHouses.addEventListener('click', () => {
        toggleHouses.classList.add('bg-white', 'text-emerald-deep', 'shadow-sm')
        toggleHouses.classList.remove('text-on-surface-variant')
        toggleCars.classList.remove('bg-white', 'text-emerald-deep', 'shadow-sm')
        toggleCars.classList.add('text-on-surface-variant')
      })

      toggleCars.addEventListener('click', () => {
        toggleCars.classList.add('bg-white', 'text-emerald-deep', 'shadow-sm')
        toggleCars.classList.remove('text-on-surface-variant')
        toggleHouses.classList.remove('bg-white', 'text-emerald-deep', 'shadow-sm')
        toggleHouses.classList.add('text-on-surface-variant')
      })
    }

    const handleScroll = () => {
      const nav = document.querySelector('nav')
      if (window.scrollY > 50) {
        nav?.classList.add('shadow-md')
      } else {
        nav?.classList.remove('shadow-md')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section with Search */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB35W4Oqg13F09sTET4l3Caj9EH9TNk551QvtHxdY-TrSNtVEL-vpmacGe93A42uYzgguYUv5TmAHYff_XJKsuQKYV4BJv7VQLnMZ6T-8ikBkZL5f_VuFtLGPyND0DVrCqpX-AnE_iQ0ORGyYNEHu_vDq2ssRdBF8-wyCUg4SixOsRW_i0Tqw8eaI7lBIfBQ_XkRzTPGEP39D-Ehm6ldGT0tnrRTO00fwYtmBxBddIPI3GwCDDR_lHA')" }}></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 w-full max-w-container-max px-margin-desktop text-center">
          <h1 className="font-display-lg text-display-lg text-white mb-stack-lg drop-shadow-md">Find Your Dream Space in Ethiopia</h1>
          {/* Search Component */}
          <div className="bg-white p-2 rounded shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2">
            {/* Category Toggle */}
            <div className="flex bg-surface-container p-1 rounded w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-2 rounded font-label-md text-label-md bg-white text-emerald-deep shadow-sm transition-all" id="toggle-houses">Houses</button>
              <button className="flex-1 md:flex-none px-6 py-2 rounded font-label-md text-label-md text-on-surface-variant hover:text-emerald-deep transition-all" id="toggle-cars">Cars</button>
            </div>
            {/* Search Inputs */}
            <div className="flex-1 w-full relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-outline">search</span>
              <input className="w-full pl-12 pr-4 py-3 border-none focus:ring-0 text-on-surface font-body-md text-body-md bg-transparent" placeholder="Search by Location, Category, or keyword" type="text" />
            </div>
            <button className="w-full md:w-auto px-10 py-3 bg-emerald-deep text-white font-label-md text-label-md hover:bg-opacity-95 transition-all">Search</button>
          </div>
          <p className="text-white mt-stack-md font-body-md text-body-md opacity-90">Premium listings in Bole, Adama, Hawassa, and more.</p>
        </div>
      </section>

      {/* Quick Category Links */}
      <section className="py-stack-lg max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <a className="group flex flex-col items-center p-stack-lg border border-outline-variant hover:border-emerald-deep transition-all rounded-lg bg-white" href="#">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-stack-sm group-hover:bg-emerald-deep/10 transition-colors">
              <span className="material-symbols-outlined text-emerald-deep text-3xl">apartment</span>
            </div>
            <span className="font-label-md text-label-md text-on-surface">Apartments</span>
          </a>
          <a className="group flex flex-col items-center p-stack-lg border border-outline-variant hover:border-emerald-deep transition-all rounded-lg bg-white" href="#">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-stack-sm group-hover:bg-emerald-deep/10 transition-colors">
              <span className="material-symbols-outlined text-emerald-deep text-3xl">villa</span>
            </div>
            <span className="font-label-md text-label-md text-on-surface">Villas</span>
          </a>
          <a className="group flex flex-col items-center p-stack-lg border border-outline-variant hover:border-emerald-deep transition-all rounded-lg bg-white" href="#">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-stack-sm group-hover:bg-emerald-deep/10 transition-colors">
              <span className="material-symbols-outlined text-emerald-deep text-3xl">csv</span>
            </div>
            <span className="font-label-md text-label-md text-on-surface">SUVs</span>
          </a>
          <a className="group flex flex-col items-center p-stack-lg border border-outline-variant hover:border-emerald-deep transition-all rounded-lg bg-white" href="#">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-stack-sm group-hover:bg-emerald-deep/10 transition-colors">
              <span className="material-symbols-outlined text-emerald-deep text-3xl">local_shipping</span>
            </div>
            <span className="font-label-md text-label-md text-on-surface">Trucks</span>
          </a>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-surface-gray">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Featured Properties</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Handpicked high-value real estate across Ethiopia.</p>
            </div>
            <a className="text-zillow-blue font-label-md text-label-md flex items-center gap-1 hover:underline" href="#">
              View All Properties <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Property Card 1 */}
            <div className="bg-white border border-outline-variant group cursor-pointer overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCd5_SxpSbw2w8rLXd0yAxVG2ZNLkd6RweTfVKe_tUW6vg0A0OBYWtKh0sXQE5wRfR12Hh6oH1c42MsTZC9vMfFW5kQVaxTBw2PF7A1X8Fl_ebfsmWje29_jVpbPeXpemqLKb1UDqJSFOZiENnJePCRt4Gv3SLVzQ7jK71AjahZxa7jpCUoaexRdmk_KC2WkCV7bPuvZaRfDUK2K96NCL_g4GNcW9PiXxXpd-JQR9i09w0HgHVS4HHx')" }}></div>
                <div className="absolute top-4 left-4 bg-gold-accent text-white px-3 py-1 font-label-sm text-label-sm rounded-sm">Featured</div>
                <button className="absolute top-4 right-4 text-white material-symbols-outlined hover:text-error transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</button>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white font-headline-md text-headline-md">15,500,000 ETB</span>
                </div>
              </div>
              <div className="p-stack-lg flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-verified-green/10 text-verified-green px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Verified
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Luxury Villa in Bole</h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-4">Bole, Addis Ababa</p>
                <div className="flex items-center gap-4 text-on-surface-variant border-t border-outline-variant pt-4">
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bed</span> <span className="text-sm font-label-md">4 Beds</span></div>
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bathtub</span> <span className="text-sm font-label-md">3 Baths</span></div>
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">square_foot</span> <span className="text-sm font-label-md">350 m²</span></div>
                </div>
              </div>
            </div>
            {/* Property Card 2 */}
            <div className="bg-white border border-outline-variant group cursor-pointer overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcY8Ev8uoJDJqsSjKsvJze4FEDEvxJ3sP-R7c8JvGqH3PNcuyIe6qTwV2GzxnNZBRsXByw1MG2xO4RAr7dNdYWrl1_MvgjD60uDgvpyz8mybSzre2rTHxyXe3CyWnSjJOYcKN_NFttlthP2rMcEKZRER29gCGcFZz1nw65plGuKWrB76-6e5-Rbwt7ooBjwzaJb4OrEB6hdf09e_Wn8DRnwmwE-SCgVpPOe6NxUPKNoygnIHCN_NA6')" }}></div>
                <button className="absolute top-4 right-4 text-white material-symbols-outlined hover:text-error transition-colors">favorite</button>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white font-headline-md text-headline-md">8,200,000 ETB</span>
                </div>
              </div>
              <div className="p-stack-lg flex-1">
                <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Modern Penthouse</h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-4">Kazanchis, Addis Ababa</p>
                <div className="flex items-center gap-4 text-on-surface-variant border-t border-outline-variant pt-4">
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bed</span> <span className="text-sm font-label-md">2 Beds</span></div>
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bathtub</span> <span className="text-sm font-label-md">2 Baths</span></div>
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">square_foot</span> <span className="text-sm font-label-md">180 m²</span></div>
                </div>
              </div>
            </div>
            {/* Property Card 3 */}
            <div className="bg-white border border-outline-variant group cursor-pointer overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHaeQYRgnfrjOK07qtTtX7uX3wFEUQIxAf1ZJiSPvgVrakl7JzKGAF1rsiakWPX1fysWm4sKfdV6nRqGPn0UzggJ6MOW5-LmWZRtK2NIX0I8w-HUAz2Srt3VuA-8Ej0RE_06HLC_lM5SdGkpX-fsM_7a1r9CuWAGNUs3NyttQ5cx7g_XoSHMnmyf-MUYLAwI4erGcjS-_C8Zo_o3IVrFgNbKuaH4xlOX9SKyxODRqpA_4xjhPkdMfX')" }}></div>
                <div className="absolute top-4 left-4 bg-gold-accent text-white px-3 py-1 font-label-sm text-label-sm rounded-sm">Featured</div>
                <button className="absolute top-4 right-4 text-white material-symbols-outlined hover:text-error transition-colors">favorite</button>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white font-headline-md text-headline-md">22,000,000 ETB</span>
                </div>
              </div>
              <div className="p-stack-lg flex-1">
                <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Entoto Heights Estate</h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-4">Entoto, Addis Ababa</p>
                <div className="flex items-center gap-4 text-on-surface-variant border-t border-outline-variant pt-4">
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bed</span> <span className="text-sm font-label-md">5 Beds</span></div>
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bathtub</span> <span className="text-sm font-label-md">5 Baths</span></div>
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">square_foot</span> <span className="text-sm font-label-md">1,200 m²</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Vehicles */}
      <section className="py-16">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Premium Vehicles</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Top-tier automotive excellence for Ethiopian roads.</p>
            </div>
            <a className="text-zillow-blue font-label-md text-label-md flex items-center gap-1 hover:underline" href="#">
              View All Vehicles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {/* Vehicle Card 1 */}
            <div className="bg-white border border-outline-variant group cursor-pointer flex flex-col shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAA-B7fKGmtSCFRyp9PPW0gPySeJ4U9JLRugKMa6-f_LEBSgcWM7UWDpjQTnRCeUT6lIaQ0fSULq_V3JaObG_hKLeZ1Dq-Qt2schRNUtWYRGyIUP5pT7YTVBSaEeZXWi2zWvne1L-JMBe4iflWrl2bTaiJ3sAATBPOI_s_-G11JDsq8-iyPLxZlKVH4q6xXgvHFv1RTh7Ksk-aJs1MW3n1uTxvWdfzeDz7KIMkIpLFSzXf2EmPV0RSO')" }}></div>
                <div className="absolute top-3 left-3 bg-emerald-deep text-white px-2 py-0.5 rounded-sm font-label-sm text-[10px] uppercase">New Arrival</div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white font-bold text-lg bg-black/40 px-2 py-1 rounded">12.5M ETB</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-label-md text-label-md text-on-surface mb-1">Toyota Land Cruiser 300</h4>
                <p className="text-sm text-on-surface-variant mb-3">2023 &bull; 5,000 km &bull; Diesel</p>
                <button className="w-full py-2 border border-emerald-deep text-emerald-deep font-label-md text-label-md rounded hover:bg-emerald-deep hover:text-white transition-all">View Details</button>
              </div>
            </div>
            {/* Vehicle Card 2 */}
            <div className="bg-white border border-outline-variant group cursor-pointer flex flex-col shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwBtg6S7VwLDjHtAnlFq1sh5tD7B4gLYisPMJj7V0bREb6pFZdwnYoyC7P5Stwh6wvwVVHZNh-5imT-Jpoxm77s5kgbo6f65Whu7ZNcAVPOBM31VdWoSI5_EHKIwvS9EA_gYl8E4GzcFqmA5ybXdHZ0H63Ox7cvGNq6j2heiF9JUdR4wCpbuUgd5xj12Y4eO7wxrFjoTk1eWX1TGw6JuP4W3q4z1Wtdjz_Xcg5M49RvPayYraw0AV7')" }}></div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white font-bold text-lg bg-black/40 px-2 py-1 rounded">18.2M ETB</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-label-md text-label-md text-on-surface mb-1">Mercedes-Benz G63 AMG</h4>
                <p className="text-sm text-on-surface-variant mb-3">2022 &bull; 12,000 km &bull; Petrol</p>
                <button className="w-full py-2 border border-emerald-deep text-emerald-deep font-label-md text-label-md rounded hover:bg-emerald-deep hover:text-white transition-all">View Details</button>
              </div>
            </div>
            {/* Vehicle Card 3 */}
            <div className="bg-white border border-outline-variant group cursor-pointer flex flex-col shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0KyHLeTCCbxRa5RpZNLt8UDcubYED9EUacrJlUiyzlZtknoBfQpDvH2BrKZGXewnhtBsMPvUY5fXzb8zmyMd7mBjgREOgV51y_8wu7cxdRSgoislMIudt5oyQLbbNUBsTjIohRwBVdGu8UAct3Eu5EFbgluAcizmocUtlhvZD4sCThM9vNjpgwtx6Y9qaDhzMYTH2GfxnBsFTUTrSYIIKlL2gDLMUTG5c_-0VHvJuntFcnau52AIw')" }}></div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white font-bold text-lg bg-black/40 px-2 py-1 rounded">4.8M ETB</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-label-md text-label-md text-on-surface mb-1">Hyundai Tucson Hybrid</h4>
                <p className="text-sm text-on-surface-variant mb-3">2021 &bull; 25,000 km &bull; Hybrid</p>
                <button className="w-full py-2 border border-emerald-deep text-emerald-deep font-label-md text-label-md rounded hover:bg-emerald-deep hover:text-white transition-all">View Details</button>
              </div>
            </div>
            {/* Vehicle Card 4 */}
            <div className="bg-white border border-outline-variant group cursor-pointer flex flex-col shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDM1VKqpIZTBbC6oQtwU1uay3DXVXXDbNIvisvMv8DcQd3sgoXANuC9Pv_Xmwnh3KMV_sSy0x-UmMxGklSVIkEO-2Skj__J1zGRQ4QMShbrA99CSyQt0E-xKCAW5GHVOSpyca4stbiTdJivzqC4pKTK-AegbT0xjEhwhs6y7bzjrpDs5j7LbjWx4EF_Kqas1a910bL-Asd8LXOoEGr6Stmq12FXeN39h34TDu8iqksq_hjhfO9uhPb')" }}></div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white font-bold text-lg bg-black/40 px-2 py-1 rounded">9.5M ETB</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-label-md text-label-md text-on-surface mb-1">Range Rover Velar</h4>
                <p className="text-sm text-on-surface-variant mb-3">2020 &bull; 35,000 km &bull; Petrol</p>
                <button className="w-full py-2 border border-emerald-deep text-emerald-deep font-label-md text-label-md rounded hover:bg-emerald-deep hover:text-white transition-all">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seller CTA */}
      <section className="py-20 bg-emerald-deep overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 flex items-center justify-center transform translate-x-20">
          <span className="material-symbols-outlined text-[300px] text-white">sell</span>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-display-lg text-display-lg text-white mb-stack-md">Ready to sell your asset?</h2>
            <p className="font-body-lg text-body-lg text-primary-fixed mb-10">Join Ethiopia&apos;s most trusted marketplace. List your property or vehicle today and reach thousands of verified buyers instantly.</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-emerald-deep font-bold font-label-md text-label-md rounded hover:bg-surface-container-high transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">add_circle</span> List Your Asset
              </button>
              <button className="px-8 py-4 border border-white text-white font-bold font-label-md text-label-md rounded hover:bg-white/10 transition-all">
                How it Works
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
