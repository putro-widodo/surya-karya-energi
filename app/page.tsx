"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Zap,
  Sun,
  Settings,
  Wrench,
  Shield,
  Battery,
  Cpu,
  Radio,
  Cog,
  Truck,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "project", "service", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "1. Jasa Penyewaan Genset",
      description: "Genset diesel dan gas untuk berbagai kebutuhan industri dan komersial",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "2. Solusi Listrik Tenaga Surya (PLTS)",
      description: "PLTS off-grid dan sistem penyimpanan energi untuk solusi berkelanjutan",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "3. EPC",
      description: "Proyek pembangkit listrik, jaringan distribusi dengan standar internasional",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "4. Operasi & Pemeliharaan (O&M)",
      description: "Pemantauan dan dukungan teknis 24/7 untuk semua sistem energi",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "5. Konstruksi Infrastruktur Kelistrikan",
      description: "Pembangunan gardu dan kabel mekanikal dengan teknologi terdepan",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "6. Electrical & Instrumentation",
      description: "Instalasi panel, kontrol & proteksi sistem kelistrikan industri",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "7. Maintenance & Service",
      description: "Perbaikan sistem kelistrikan & mekanikal dengan tim ahli berpengalaman",
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "8. Telecommunication & Power Solutions",
      description: "Solusi jaringan untuk infrastruktur remote dan telekomunikasi",
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "9. Engine & Genset Overhaul",
      description: "Perbaikan komponen mesin utama dengan spare part original",
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "10. Rental & Supply",
      description: "Rental dan suplai alat industri & energi untuk berbagai proyek",
    },
  ]

  const projects = [
    {
      title: "PLTD Bima – Bima, NTB",
      description:
        "PT Surya Karya Energi (PT SKE) membangun dan mengoperasikan Pembangkit Listrik Tenaga Diesel (PLTD) di Bima, Nusa Tenggara Barat. Listrik yang dihasilkan dari PLTD ini dijual ke PLN berdasarkan skema kerja sama jual beli tenaga listrik (Power Purchase Agreement/PPA). Proyek ini bertujuan untuk memperkuat pasokan listrik di wilayah Bima, terutama di daerah yang belum terjangkau jaringan interkoneksi, serta mendukung keandalan sistem kelistrikan lokal.",
      image: "/bima.jpg?height=300&width=600",
      location: "Bima, Nusa Tenggara Barat",
    },
    {
      title: "Hybrid Solar Power Plant 300kWp – Maratua",
      description:
        "PT SKE sebagai subkontraktor sedang mengerjakan proyek Pembangkit Listrik Tenaga Surya (PLTS) Hybrid berkapasitas 300 kWp di Pulau Maratua. Pulau Maratua merupakan salah satu destinasi wisata yang memiliki berbagai fasilitas umum pariwisata, akomodasi, serta restoran yang membutuhkan pasokan listrik dalam jumlah besar. Saat ini, 100% pasokan listrik di Pulau Maratua masih bergantung pada Pembangkit Listrik Tenaga Diesel (PLTD) Maratua. Untuk mengurangi konsumsi bahan bakar fosil, meningkatkan porsi energi terbarukan, dan mendorong terciptanya udara bersih di Pulau Maratua, maka perlu dirancang sistem PLTS hybrid. Skema hybrid ini memungkinkan PLTS dan PLTD beroperasi secara bersamaan dan sinkron dalam kondisi beban tertentu, sehingga dapat mengurangi konsumsi bahan bakar fosil secara signifikan.",
      images: ["/maratua 1.png?height=300&width=300", "/maratua.png?height=300&width=300"],
      location: "Pulau Maratua, Kalimantan Timur",
    },
    {
      title: "Generator Installation",
      description:
        "Instalasi generator dilakukan secara turnkey, mencakup seluruh tahapan mulai dari perencanaan, pemasangan, hingga pengujian akhir, untuk memastikan sistem siap beroperasi secara penuh. Pendekatan ini bertujuan menyediakan pasokan listrik yang andal dan efisien tanpa perlu intervensi teknis tambahan dari pihak pengguna. Setiap unit generator dipasang dengan sistem kontrol dan proteksi yang telah dikalibrasi sesuai kebutuhan operasional. Proses instalasi mencakup integrasi panel kendali, koneksi kelistrikan, serta pengujian performa untuk menjamin kestabilan output daya. Dengan metode turnkey, pelanggan mendapatkan solusi menyeluruh yang siap digunakan, mendukung kontinuitas operasional serta mengurangi risiko gangguan listrik di lapangan.",
      image: "/genset instal.png?height=300&width=600",
      location: "Berbagai Lokasi Indonesia",
    },
  ]

  return (
    <div className="min-h-screen bg-black/70 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo ske 2.png" alt="Logo SKE" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold text-yellow-400">Surya Karya Energi</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "project", label: "Project" },
                { id: "service", label: "Service" },
                { id: "contact", label: "Contact Us" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                    activeSection === item.id ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-yellow-400">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: "project", label: "Project" },
                  { id: "service", label: "Service" },
                  { id: "contact", label: "Contact Us" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-yellow-400 hover:bg-gray-900 rounded ${
                      activeSection === item.id ? "text-yellow-400 bg-gray-900" : "text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Welcome to Surya Karya Energi</h2>
        <p className="text-xl text-green-400 mb-6">Clean and Green Energy</p>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
          PT Surya Karya Energi is dedicated to sustainable energy solutions, providing comprehensive services from
          renewable energy systems to traditional power generation. We are committed to delivering reliable, efficient,
          and environmentally friendly energy solutions for Indonesia's growing energy needs.
        </p>
        <div className="mt-8">
          <button
            onClick={() => scrollToSection("service")}
            className="bg-gradient-to-r from-yellow-400 to-green-500 text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12 text-center">Our Projects</h2>

        <div className="space-y-16">
          {/* Project 1 */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{projects[0].title}</h3>
            <div className="mb-6">
              <img
                src={projects[0].image || "/public/bima.jpg.svg"}
                alt="PLTD Bima"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="flex items-center mb-4 text-green-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{projects[0].location}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{projects[0].description}</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{projects[1].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {projects[1].images?.map((img, index) => (
                <img
                  key={index}
                  src={img || "/placeholder.svg"}
                  alt={`Hybrid Solar ${index + 1}`}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              ))}
            </div>
            <div className="flex items-center mb-4 text-green-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{projects[1].location}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{projects[1].description}</p>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{projects[2].title}</h3>
            <div className="mb-6">
              <img
                src={projects[2].image || "/placeholder.svg"}
                alt="Generator Installation"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="flex items-center mb-4 text-green-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{projects[2].location}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{projects[2].description}</p>
          </div>
        </div>
      </section>

      {/* Service Section - FOKUS UTAMA */}
      <section id="service" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-green-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">Our Services</h2>
          <p className="text-black/80 text-center mb-12 text-lg max-w-3xl mx-auto">
            Kami menyediakan layanan lengkap dalam bidang energi dan kelistrikan dengan standar internasional dan tim
            ahli berpengalaman
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-yellow-400 to-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-black">
                  {service.icon}
                </div>
                <h3 className="font-bold text-black mb-3 text-lg">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-black text-yellow-400 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
<footer id="contact" className="py-12 px-4 max-w-6xl mx-auto">
  <div className="text-center mb-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Contact Us</h2>
    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
      Hubungi kami untuk konsultasi dan solusi energi terbaik untuk kebutuhan Anda
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
    <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
      <div className="bg-yellow-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-1 text-yellow-400">Telepon</h3>
      <a
        href="tel:+62-811-2997500"
        className="text-white hover:text-yellow-400 transition-colors text-base sm:text-lg font-medium"
      >
        +62-811-2997500
      </a>
    </div>

    <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
      <div className="bg-green-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-1 text-yellow-400">Email</h3>
      <a
        href="mailto:Evriczeuzico@suryakaryaenergi.com"
        className="text-white hover:text-green-400 transition-colors text-base sm:text-lg font-medium"
      >
        Evriczeuzico@suryakaryaenergi.com
      </a>
    </div>

    <div className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
      <div className="bg-blue-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-1 text-yellow-400">Alamat</h3>
      <p className="text-white text-base sm:text-lg">
        Widjaja Building, 3rd Floor Ruko Peterongan Plaza Blok D16-17
        <br />
        JL. MT. Haryono No.719, Semarang, Central Java, Indonesia
      </p>
    </div>
  </div>

  <div className="text-center">
    <div className="bg-gradient-to-r from-yellow-400 to-green-500 p-6 sm:p-8 rounded-xl">
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">Ready to Power Your Future?</h3>
      <p className="text-black mb-5 text-base sm:text-lg">
        Tim ahli kami siap membantu Anda menemukan solusi energi yang tepat dan efisien
      </p>
    </div>
  </div>

  <div className="text-center mt-10 pt-6 border-t border-gray-800">
    <p className="text-gray-400 text-sm sm:text-base">
      © 2024 PT Surya Karya Energi. All rights reserved.
      <br />
      <span className="text-yellow-400">Clean Energy • Sustainable Future • Reliable Solutions</span>
    </p>
  </div>
</footer>
    </div>
  )
}
