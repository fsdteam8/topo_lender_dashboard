import React from 'react'

const Footer = () => {
  return (
     <footer className="w-full py-4 bg-white border-t border-gray-100">
      <div className="container mx-auto text-center text-xs text-gray-500 font-light tracking-wide">
        <span>© 2023 MUSE GALA ALL RIGHTS RESERVED</span>
        <span className="mx-2">•</span>
        <a href="/privacy-policy" className="hover:text-gray-700">
          PRIVACY POLICY
        </a>
        <span className="mx-2">•</span>
        <a href="/terms-condition" className="hover:text-gray-700">
          TERMS & CONDITION
        </a>
      </div>
    </footer>
  )
}

export default Footer