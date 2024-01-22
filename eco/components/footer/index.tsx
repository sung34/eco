import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='flex items-center'>
      <div>
        <p>Contact us: contact@example.com</p>
        <p>Follow us on Twitter: @example_twitter</p>
      </div>
      <div>
        <p>123 Main Street, Cityville, Country</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
    </footer>
  
  )
}