# Shivani Tayade - Data Analytics Portfolio

A modern, responsive portfolio website showcasing Shivani Tayade's expertise in data analytics, machine learning, and financial analytics. This portfolio is optimized for GitHub Pages deployment and features her actual projects from her MS Business Analytics program at UC Davis and professional experience at Wells Fargo and HSBC.

## 🚀 Quick Start

1. **Fork or download** this repository
2. **Rename** the repository to `ShivaniTayade1.github.io`
3. **Enable** GitHub Pages in repository settings
4. **Visit** `https://ShivaniTayade1.github.io` to see your live portfolio

## 👩‍💻 About This Portfolio

This portfolio showcases:
- **Real Projects**: All 6 featured projects link to actual GitHub repositories
- **Professional Experience**: Current role as Analytical Consultant 2 at Wells Fargo
- **Education**: MS Business Analytics from UC Davis
- **Technical Skills**: Python, R, PyTorch, Tableau, GNNs, NLP, and more
- **Actual Profile**: Uses real GitHub profile picture and contact information

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # (Optional) Images and other assets
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

- **Name and Title**: Update in the `<nav>`, `<hero>`, and `<title>` sections
- **Contact Information**: Update email, phone, and location in the contact section
- **Social Media Links**: Add your LinkedIn, GitHub, Twitter, and email links

### 2. About Section

- Replace the profile placeholder with your actual photo
- Update the bio text to reflect your background and experience
- Modify the statistics (projects completed, years of experience, etc.)

### 3. Skills Section

Update the skills based on your expertise:

- **Programming Languages**: Python, R, SQL, JavaScript, etc.
- **Data Analysis Tools**: Pandas, NumPy, Scikit-learn, etc.
- **Visualization Tools**: Tableau, Power BI, Matplotlib, etc.
- **Databases & Cloud**: MySQL, PostgreSQL, AWS, Azure, etc.

### 4. Projects Section

For each project, update:
- Project title and description
- Technologies used
- Project links (GitHub, live demo, etc.)
- Project images (replace placeholder icons)

### 5. Experience Section

Update the timeline with:
- Your work experience
- Education background
- Relevant dates and descriptions

### 6. Contact Form

The contact form is currently set up with JavaScript validation. To make it functional:

1. **Option 1**: Use a service like Formspree or Netlify Forms
2. **Option 2**: Implement server-side handling
3. **Option 3**: Use mailto links for direct email

## 🎯 Featured Projects

### 1. [Venmo Network Text GNN Analytics](https://github.com/ShivaniTayade1/venmo-network-text-GNN-analytics)
- **Description**: Analyzing Venmo transactions through text mining, network metrics, predictive modeling, and Graph Neural Networks
- **Technologies**: Python, GNN, NLP, Network Analysis
- **Focus**: Advanced network analysis and graph neural networks

### 2. [Abstract-Based Sentiment Analysis](https://github.com/ShivaniTayade1/Abstract-Based-Sentiment-Analysis)
- **Description**: Sentiment analysis on Yelp review data with interactive chatbot using iPywidgets
- **Technologies**: Python, NLP, iPywidgets, Sentiment Analysis
- **Focus**: Natural language processing and interactive UI

### 3. [Big Data Analytics](https://github.com/ShivaniTayade1/Big-Data-Analytics)
- **Description**: Analysis focused on A/B testing and causal inference methodologies
- **Technologies**: Python, A/B Testing, Causal Inference, Statistical Analysis
- **Focus**: Experimental design and causal analysis

### 4. [Deep Learning](https://github.com/ShivaniTayade1/Deep-Learning)
- **Description**: Comprehensive deep learning project covering CNNs, GANs, and neural network architectures
- **Technologies**: Python, TensorFlow, CNNs, GANs
- **Focus**: Advanced deep learning implementations

### 5. [Web Scraping](https://github.com/ShivaniTayade1/Web-Scraping)
- **Description**: Web scraping for music data extraction from Wikipedia and iTunes API
- **Technologies**: Python, Web Scraping, APIs, Data Extraction
- **Focus**: Data collection and API integration

### 6. [Machine Learning PyTorch](https://github.com/ShivaniTayade1/machine-learning-pytorch-regression-image-pca)
- **Description**: PyTorch implementations for regression, PCA, and supply chain analytics
- **Technologies**: PyTorch, PCA, Linear Regression, Neural Networks
- **Focus**: Machine learning fundamentals and PyTorch

## 🖼️ Adding Images

### Profile Picture
Replace the profile placeholder in the hero section:
```html
<div class="profile-placeholder">
    <img src="assets/profile.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

### Project Images
Replace project icons with actual screenshots:
```html
<div class="project-image">
    <img src="assets/project1.jpg" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## 🎨 Color Customization

To change the color scheme, update these CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #64748b;    /* Gray color */
    --accent-color: #667eea;       /* Gradient start */
    --gradient-end: #764ba2;       /* Gradient end */
    --text-color: #1e293b;         /* Dark text */
    --light-text: #64748b;         /* Light text */
    --bg-color: #f8fafc;           /* Background */
    --card-bg: #ffffff;            /* Card background */
}
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly buttons and links
- Optimized typography for all screen sizes

## 🔧 Technical Features

- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Active Navigation**: Current section is highlighted in navigation
- **Mobile Menu**: Collapsible hamburger menu for mobile devices
- **Form Validation**: Client-side form validation with user feedback
- **Animations**: Subtle animations and hover effects
- **Performance**: Optimized CSS and JavaScript for fast loading

## 🚀 GitHub Pages Deployment

1. **Repository Setup**:
   - Create a new repository named `username.github.io`
   - Upload all files to the repository

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Custom Domain** (Optional):
   - Add a `CNAME` file with your custom domain
   - Update DNS settings to point to GitHub Pages

## 🔍 SEO Optimization

The template includes basic SEO features:
- Semantic HTML structure
- Meta tags for description and keywords
- Proper heading hierarchy
- Alt text for images
- Structured data markup (can be added)

## 📊 Analytics Integration

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add the tracking code to the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 🛠️ Troubleshooting

**Common Issues:**

1. **Page not loading**: Check if repository is named correctly (`username.github.io`)
2. **Images not showing**: Ensure image paths are correct and files are uploaded
3. **Form not working**: Implement proper form handling or use a form service
4. **Styling issues**: Check CSS file path and ensure all CSS is properly linked

## 📝 License

This template is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this template.

## 📧 Contact Information

- **Email**: svtayade@ucdavis.edu | shivanitayade279@gmail.com
- **LinkedIn**: [linkedin.com/in/shivanitayade](https://www.linkedin.com/in/shivanitayade/)
- **GitHub**: [github.com/ShivaniTayade1](https://github.com/ShivaniTayade1)
- **Location**: California, USA

## 💼 Professional Background

- **Current Role**: Analytical Consultant 2 at Wells Fargo
- **Previous Experience**: Analyst at HSBC (5+ years in finance and data analytics)
- **Education**: MS Business Analytics from UC Davis, BE Mechanical Engineering
- **Specialties**: Tableau dashboards, time series forecasting (ARIMA/SARIMAX), machine learning, GNNs, NLP

---

**Pro Tips:**
- Keep your portfolio updated with new projects and skills
- Use high-quality images for projects
- Write clear, concise descriptions
- Test on multiple devices and browsers
- Optimize images for web to improve loading speed
- Consider adding a blog section for thought leadership

Good luck with your portfolio! 🚀
