export const baseTemplate = (userName, dynamicBody) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; }
    .header { background-color: #f5f5f5; padding: 10px; border-radius: 5px 5px 0 0; }
    .content { padding: 20px; }
    .button { display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white !important; text-decoration: none; border-radius: 5px; }
    .footer { background-color: #f5f5f5; padding: 10px; border-top: 1px solid #e0e0e0; border-radius: 0 0 5px 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Hello ${userName},</h2>
    </div>
    <div class="content">
      ${dynamicBody}
    </div>
    <div class="footer">
      <h3>Thank you,</h3>
    </div>
  </div>
</body>
</html>
`;
