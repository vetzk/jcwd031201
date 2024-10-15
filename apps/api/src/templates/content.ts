export const content = (invoice: any) => `
<html>
<head>
 <style>
   body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     color: #333;
     background-color: #f4f4f4;
   }

   .container {
     width: 80%;
     margin: 20px auto;
     background-color: #fff;
     padding: 20px;
     border-radius: 10px;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }

   h1, h2 {
     color: #2c3e50;
     text-align: center;
   }

   p {
     font-size: 14px;
     margin: 5px 0;
   }

   .invoice-info {
     text-align: left;
     margin-bottom: 20px;
   }

   table {
     width: 100%;
     border-collapse: collapse;
     margin: 20px 0;
   }

   table, th, td {
     border: 1px solid #ddd;
   }

   th, td {
     padding: 10px;
     text-align: left;
   }

   th {
     background-color: #2c3e50;
     color: #fff;
   }

   td {
     background-color: #f9f9f9;
   }

   .total {
     font-weight: bold;
     text-align: right;
   }

   .footer {
     text-align: center;
     margin-top: 20px;
     font-size: 12px;
     color: #999;
   }
 </style>
</head>
<body>
 <div class="container">
   <h1>Hello, this is your invoice</h1>
   <h2>Invoice Code: ${invoice.invoiceCode}</h2>
   
   <div class="invoice-info">
     <p><strong>Client:</strong> ${invoice.client.name}</p>
     <p><strong>Date:</strong> ${new Date(invoice.invoiceDate).toLocaleDateString()}</p>
     <p><strong>Status:</strong> ${invoice.invoiceStatus}</p>
     <p><strong>Total Amount:</strong> 
       ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(invoice.totalAmount)}
     </p>
   </div>

   <h2>Invoice Details:</h2>
   <table>
     <thead>
       <tr>
         <th>Product</th>
         <th>Quantity</th>
         <th>Price Unit</th>
         <th>Price Total</th>
       </tr>
     </thead>
     <tbody>
       ${invoice.invoicedetail
         .map(
           (detail: any) => `
             <tr>
               <td>${detail.product.name}</td>
               <td>${detail.qty}</td>
               <td> ${new Intl.NumberFormat('id-ID', {
                 style: 'currency',
                 currency: 'IDR',
               }).format(detail.priceUnit)}</td>
               <td>${new Intl.NumberFormat('id-ID', {
                 style: 'currency',
                 currency: 'IDR',
               }).format(detail.priceTotal)}</td>
             </tr>`,
         )
         .join('')}
     </tbody>
      <tfoot>
       <tr>
         <td colspan="3">Total</td>
         <td>
           ${new Intl.NumberFormat('id-ID', {
             style: 'currency',
             currency: 'IDR',
           }).format(invoice.totalAmount)}
         </td>
       </tr>
     </tfoot>
   </table>

   <div class="footer">
     <p>Thank you for your business!</p>
   </div>
 </div>
</body>
</html>
   `;
