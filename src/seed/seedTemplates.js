import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { EmailTemplate } from '../models/template.model.js';
import { templatePlaceholders } from '../data/templatePlaceholders.js';

dotenv.config();

const defaultTemplates = Object.keys(templatePlaceholders).map(name => ({
  name,
  subject: name.replace(/_/g, ' '),
  body: templatePlaceholders[name].map(p => `<p>{{${p}}}</p>`).join('\n')
}));

const seedTemplates = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const collectionExists = await mongoose.connection.db
      .listCollections({ name: EmailTemplate.collection.name })
      .hasNext();

    if (collectionExists) {
      await EmailTemplate.collection.drop();
      console.log('Existing EmailTemplate collection dropped');
    } else {
      console.log('No existing EmailTemplate collection found');
    }

    await EmailTemplate.insertMany(defaultTemplates);
    console.log('Templates seeded successfully');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1);
  }
};

seedTemplates();
