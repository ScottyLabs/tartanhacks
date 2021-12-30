const isProduction = true
module.exports = {
  target: "serverless",
  poweredByHeader: false,
  reactStrictMode: false,
  env: {
    BACKEND_URL: isProduction
      ? "https://backend.tartanhacks.com"
      : "http://localhost:4000"
  }
}
