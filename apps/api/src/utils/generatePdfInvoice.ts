import puppeteer from 'puppeteer';

export async function generatePdfInvoice(invoice: any) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the content of the page with the invoice details
    await page.setContent(
      `<html>
        <body>
        <h1> Hello, this is your invoice</h1>
          <h1>Invoice Code: ${invoice.invoiceCode}</h1>
          <p>Client: ${invoice.client.name}</p>
          <p>Date: ${new Date(invoice.invoiceDate).toLocaleDateString()}</p>
          <p>Status: ${invoice.invoiceStatus}</p>
          <p>Total Amount: ${new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
          }).format(invoice.totalAmount)}</p>
        <h2>Invoice Details:</h2>
        <table border="1" cellpadding="10" cellspacing="0">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            ${invoice.invoicedetail
              .map(
                (detail: any) => `
                <tr>
                  <td>${detail.product.name}</td>
                  <td>${detail.qty}</td>
                  <td>${new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(detail.priceTotal)}</td>
                </tr>`,
              )
              .join('')}
          </tbody>
        </table>

        </body>
      </html>`,
    );

    const pdfBuffer = await page.pdf({ format: 'A4' });

    await browser.close();

    return pdfBuffer;
  } catch (error) {
    console.log(error);
    throw new Error('Could not generate PDF invoice');
  }
}
