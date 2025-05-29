export const baseTemplate = (userName, dynamicBody, companyName, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f0f2f5;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      border: 1px solid #e2e8f0;
    }
    .header {
      background: linear-gradient(135deg, #1e40af 0%, #06b6d4 100%);
      color: white;
      padding: 24px 32px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #ffffff33, #ffffff00);
    }
    .header img {
      max-height: 60px;
      margin-bottom: 12px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
    .header h2 {
      margin: 12px 0 0;
      font-size: 24px;
      font-family: 'Poppins', 'Segoe UI', sans-serif;
      font-weight: 600;
    }
    .content {
      padding: 32px;
      font-size: 16px;
      color: #1f2a44;
      line-height: 1.7;
      background-color: #f9fafb;
    }
    .button {
      display: inline-block;
      margin-top: 24px;
      padding: 14px 28px;
      background: linear-gradient(45deg, #34d399 0%, #10b981 100%);
      color: white !important;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 15px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .button:hover {
      background: linear-gradient(45deg, #2dd4bf 0%, #059669 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .footer {
      background-color: #f1f5f9;
      padding: 24px 32px;
      text-align: center;
      font-size: 14px;
      color: #4b5563;
      border-top: 1px solid #e2e8f0;
    }
    .footer p {
      margin: 0;
    }
    @media (max-width: 600px) {
      .container {
        margin: 20px;
        border-radius: 8px;
      }
      .header {
        padding: 20px;
      }
      .content {
        padding: 24px;
      }
      .button {
        padding: 12px 20px;
        font-size: 14px;
      }
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
