import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '*.googleusercontent.com',
    }, {
      protocol: 'https',
      hostname: 'www.facebook.com',
    }]
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
