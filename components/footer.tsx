import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Rwanda Rainbow Clinics</h3>
            <p className="text-gray-400">
              Dedicated to providing comprehensive women's healthcare services in Rwanda.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/projects/prenatal-loss" className="text-gray-400 hover:text-white">Prenatal Loss Services</Link></li>
              <li><Link href="/projects/health-equity" className="text-gray-400 hover:text-white">Health Equity</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white">News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              123 Health Avenue<br />
              Kigali, Rwanda<br />
              <Link href="tel:+250123456789" className="hover:text-white">+250 123 456 789</Link><br />
              <Link href="mailto:info@rwandarainbow.org" className="hover:text-white">info@rwandarainbow.org</Link>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="mailto:info@rwandarainbow.org" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rwanda Rainbow Clinics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}