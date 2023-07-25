/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       domains: ["assistance-krakow.s3.eu-north-1.amazonaws.com",
      "elektromechanik-chelm.s3.eu-north-1.amazonaws.com",
      "mechanik-chelm.s3.eu-central-1.amazonaws.com",],
      },
}

module.exports = nextConfig
