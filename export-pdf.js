const puppeteer = require('puppeteer')
const fs = require('fs')

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true, defaultViewport: null })
  const page = await browser.newPage()
  await page.setViewport({
    width: 1024,
    height: 1280
  })
  // Vite's default dev server port is 5173
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' })
  const pdfConfig = {
    path: `${__dirname}/artur_latypov_cv.pdf`,
    format: 'A4',
    printBackground: true,
    margin: { // Word's default A4 margins
      top: '2.54cm',
      bottom: '2.54cm',
      left: '2.54cm',
      right: '2.54cm'
    }
  }
  const pdf = await page.pdf(pdfConfig)

  await browser.close()
  return pdf
}

printPDF()
