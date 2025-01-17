import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

interface FormData {
  primaryLanguage: string;
  otherLanguages: string[];
  yearsExperience: string;
  framework: string;
  interested: string[];
  region: string;
}

const DeveloperSurvey: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    primaryLanguage: '',
    otherLanguages: [],
    yearsExperience: '',
    framework: '',
    interested: [],
    region: ''
  });

  const languages = [
    '.NET',
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'Go',
    'Rust',
    'Ruby',
    'PHP',
    'Swift',
    'Kotlin',
    'C++',
    'C#',
    'Scala',
    'R',
    'MATLAB',
    'Dart',
    'Lua',
    'Perl',
    'Haskell',
    'Clojure',
    'F#',
    'COBOL',
    'Assembly',
    'Shell scripting',
    'ServiceNow (Glide)',              
    'Salesforce (Apex)',
    'Elixir',
    'Julia',
    'Groovy'
  ];

  const frameworks = [
    '.NET Core',
    'Spring',
    'Django',
    'React',
    'Angular',
    'Vue.js',
    'Express.js',
    'Laravel',
    'Ruby on Rails',
    'Flutter',
    'ServiceNow',   
    'Salesforce',
    'Next.js',
    'NestJS',
    'FastAPI',
    'Flask',
    'ASP.NET MVC',
    'Phoenix',
    'Svelte',
    'Gatsby',
    'Nuxt.js',
    'Quasar',
    'Blazor',
    'Spring Boot',
    'Ruby on Rails',
    'Symphony',
    'Gin',
    'Echo',
    'Fiber'
  ];

  const regions = [
    'North America - US',
    'North America - Canada',
    'Latin America - Mexico',
    'Latin America - Brazil',
    'Latin America - Other South America',
    'Latin America - Central America',
    'Latin America - Caribbean',
    'Europe - Western',
    'Europe - Eastern',
    'Europe - Nordic',
    'Europe - Mediterranean',
    'Asia - East (China, Japan, Korea)',
    'Asia - Southeast',
    'Asia - South (India, Pakistan, etc)',
    'Asia - Central',
    'Middle East',
    'Africa - North',
    'Africa - Sub-Saharan',
    'Oceania - Australia',
    'Oceania - New Zealand',
    'Oceania - Pacific Islands'
  ];

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>, field: keyof FormData) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Survey submitted:', formData);
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzK1ZDt0HcDwPqboctfxrq08HXNJ3xqhRhAQ7Xxm4jN9JXrXLAK8i040Sx7eTc4AzxsSg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors'
      });
  
      alert('Survey submitted. Thank you for participating!');
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('There was an error submitting your survey. Please try again.');
    }
  };

  const handleLanguageChange = (lang: string) => {
    const updatedLanguages = formData.otherLanguages.includes(lang)
      ? formData.otherLanguages.filter(l => l !== lang)
      : [...formData.otherLanguages, lang];
    setFormData({ ...formData, otherLanguages: updatedLanguages });
  };

  const handleInterestedChange = (lang: string) => {
    const updatedInterested = formData.interested.includes(lang)
      ? formData.interested.filter(l => l !== lang)
      : [...formData.interested, lang];
    setFormData({ ...formData, interested: updatedInterested });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Developer Language Survey</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Region Selection */}
          <div className="space-y-2">
            <label className="block font-medium">
              Which region are you based in?
            </label>
            <select 
              className="w-full p-2 border rounded-md"
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              required
            >
              <option value="">Select your region</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          {/* Primary Programming Language */}
          <div className="space-y-2">
            <label className="block font-medium">
              What is your primary programming language?
            </label>
            <select 
              className="w-full p-2 border rounded-md"
              value={formData.primaryLanguage}
              onChange={(e) => setFormData({ ...formData, primaryLanguage: e.target.value })}
              required
            >
              <option value="">Select a language</option>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          {/* Other Languages */}
          <div className="space-y-2">
            <label className="block font-medium">
              What other languages do you use regularly? (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {languages.map(lang => (
                <label key={lang} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.otherLanguages.includes(lang)}
                    onChange={() => handleLanguageChange(lang)}
                    className="rounded"
                  />
                  <span>{lang}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Years of Experience */}
          <div className="space-y-2">
            <label className="block font-medium">
              Years of programming experience
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={formData.yearsExperience}
              onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
              required
            >
              <option value="">Select experience</option>
              <option value="0-1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>

          {/* Primary Framework */}
          <div className="space-y-2">
            <label className="block font-medium">
              What is your primary framework?
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={formData.framework}
              onChange={(e) => handleSelectChange(e, 'framework')}
              required
            >
              <option value="">Select a framework</option>
              {frameworks.map(framework => (
                <option key={framework} value={framework}>{framework}</option>
              ))}
            </select>
          </div>

          {/* Interested in Learning */}
          <div className="space-y-2">
            <label className="block font-medium">
              Which languages are you interested in learning? (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {languages.map(lang => (
                <label key={lang} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.interested.includes(lang)}
                    onChange={() => handleInterestedChange(lang)}
                    className="rounded"
                  />
                  <span>{lang}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit Survey
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DeveloperSurvey;