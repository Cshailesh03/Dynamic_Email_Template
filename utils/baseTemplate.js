export const baseTemplate = (userName, dynamicBody, companyName, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f2f4f6;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    }
    .header {
      background-color: #004aad;
      color: white;
      padding: 20px 30px;
      text-align: center;
    }
    .header img {
      max-height: 50px;
      margin-bottom: 10px;
    }
    .header h2 {
      margin: 10px 0 0;
      font-size: 22px;
    }
    .content {
      padding: 30px;
      font-size: 16px;
      color: #333333;
      line-height: 1.6;
    }
    .button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 24px;
      background-color: #28a745;
      color: white !important;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    .button:hover {
      background-color: #218838;
    }
    .footer {
      background-color: #f8f9fa;
      padding: 20px 30px;
      text-align: center;
      font-size: 14px;
      color: #666666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoUrl ? `<img src="${logoUrl}" alt="${companyName} Logo" />` : ''}
      <h2>Hello ${userName},</h2>
    </div>
    <div class="content">
      ${dynamicBody}
    </div>
    <div class="footer">
      <p>Thank you for being with us.<br>— ${companyName} Team</p>
    </div>
  </div>
</body>
</html>
`;
