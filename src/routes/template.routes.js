import express from 'express';
import { updateTemplateBody, getTemplateByName, previewTemplate,getAllTemplates } from '../controllers/template.controller.js';

const router = express.Router();

router.get('/templates', getAllTemplates);
router.put('/templates/:id', updateTemplateBody);
router.get('/template/:name', getTemplateByName);
router.post('/template/preview', previewTemplate);


export default router;
