import { EmailTemplate } from '../models/template.model.js';
import { templatePlaceholders } from '../data/templatePlaceholders.js';
import { baseTemplate } from '../utils/baseTemplate.js';
import { wrapLinesInParagraphs } from '../utils/formatBody.js';


export const updateTemplateBody = async (req, res) => {
  const { id } = req.params;
  const { subject, body } = req.body;

  try {
    const template = await EmailTemplate.findById(id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    // Validate subject (optional)
    if (subject) {
      template.subject = subject;
    }

    // Validate and update body
    if (body) {
      const allowedPlaceholders = templatePlaceholders[template.name];
      if (!allowedPlaceholders) {
        return res.status(400).json({ message: 'Invalid template name' });
      }

      const usedPlaceholders = [...body.matchAll(/{{(.*?)}}/g)].map(m => m[1]);
      const invalidPlaceholders = usedPlaceholders.filter(ph => !allowedPlaceholders.includes(ph));

      if (invalidPlaceholders.length) {
        return res.status(400).json({ message: `Invalid placeholders: ${invalidPlaceholders.join(', ')}` });
      }

      template.body = wrapLinesInParagraphs(body);
    }

    template.updatedAt = new Date();
    await template.save();

    res.json({ message: 'Template updated successfully', template });
  } catch (error) {
    console.error('Error updating template:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getTemplateByName = async (req, res) => {
  try {
    const { name } = req.params;
    const template = await EmailTemplate.findOne({ name });
    if (!template) return res.status(404).json({ message: 'Template not found' });
    res.status(200).json(template);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllTemplates = async (req, res) => {
  try {
    console.log('Fetching all templates',req);
    const templates = await EmailTemplate.find().sort({ updatedAt: -1 });
    res.status(200).json({
      success: true,
      count: templates.length,
      templates,
    });
  } catch (error) {
    console.error('Error fetching templates:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching templates',
    });
  }
};

export const previewTemplate = async (req, res) => {
  try {
    const { name, values } = req.body;
    const template = await EmailTemplate.findOne({ name });
    if (!template) return res.status(404).json({ message: 'Template not found' });

    let compiledBody = template.body;
    const allowed = templatePlaceholders[name];
    for (const key of allowed) {
      const val = values[key] || '';
      compiledBody = compiledBody.replaceAll(`{{${key}}}`, val);
    }

    // Extract additional dynamic fields
    const userName = values.USER_NAME || 'User';
    const companyName = values.COMPANY_NAME || 'Our Company';
    const logoUrl = values.COMPANY_LOGO_URL || 'https://img.freepik.com/free-vector/professional-rr-logotype-template_23-2149228028.jpg?semt=ais_items_boosted&w=740';

    const finalHtml = baseTemplate(userName, compiledBody, companyName, logoUrl);
    res.status(200).send(finalHtml);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

