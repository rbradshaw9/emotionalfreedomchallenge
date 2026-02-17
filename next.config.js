/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/getvip',
        destination: 'https://bl843.infusionsoft.com/app/orderForms/cdb82d2b-34ac-443e-aba9-2c63993be424',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
