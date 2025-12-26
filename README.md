# GiveWise Insights - Landing Page

Professional landing page for predictive donor analytics consulting services targeting nonprofits, churches, and community organizations.

**Live Site:** `https://josephjilovec.github.io/givewiseinsights.github.io`

---

## 🚀 Quick Start

### Option 1: Direct GitHub Upload (Easiest)

1. **Create a new repository on GitHub:**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - Description: "GiveWise Insights - Predictive donor analytics for nonprofits"
   - Make it **Public**
   - ✅ Check "Add a README file"
   - Click **Create repository**

2. **Upload files:**
   - Click "Add file" > "Upload files"
   - Drag and drop all files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `robots.txt`
     - `sitemap.xml`
   - Commit message: "Initial commit - GiveWise Insights site"
   - Click **Commit changes**

3. **Add images folder:**
   - Click "Add file" > "Create new file"
   - File name: `images/README.md`
   - Paste content from `images/README.md` file
   - Click **Commit changes**
   - Upload your images to the `images/` folder

4. **Enable GitHub Pages:**
   - Go to repository **Settings** > **Pages**
   - Under "Source", select **Deploy from a branch**
   - Branch: `main` (or `master`), folder: `/ (root)`
   - Click **Save**
   - Wait 2-5 minutes, then visit `https://yourusername.github.io`

---

### Option 2: Using Git (Command Line)

```bash
# Clone your repository
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Add all files
cp /path/to/downloaded/files/* .

# Create images directory
mkdir images
cp /path/to/images/* images/

# Commit and push
git add .
git commit -m "Initial commit - GiveWise Insights site"
git push origin main
```

Then enable GitHub Pages in Settings as described above.

---

## 🎨 Customization Guide

### 1. Replace Placeholder Content

#### **A. Update Your Email Address**
- Open `index.html`
- Find line with: `action="https://formsubmit.co/ajax/realjjemail@gmail.com"`
- Replace `realjjemail@gmail.com` with your actual email address

#### **B. Update URLs**
- Replace `yourusername.github.io` with your actual URL in:
  - `index.html` (Open Graph tags, Schema.org markup)
  - `sitemap.xml` (all `<loc>` tags)
  - `robots.txt` (Sitemap line)

#### **C. Add Your Images**
1. Upload your images to the `images/` folder
2. Make sure file names match:
   - `hero-analytics.jpg`
   - `joseph-profile.jpg`
   - `og-image.jpg`

See `images/README.md` for detailed image specifications.

---

### 2. Update Text Content

#### **Change Brand Name** (if using different name)
If you prefer a different name instead of "GiveWise Insights":

1. **Search & Replace** in `index.html`:
   - Find: `GiveWise Insights`
   - Replace with: `Your Chosen Name`

2. Update these specific places:
   - `<title>` tag (line ~25)
   - Header logo (line ~50)
   - Footer heading (line ~490)
   - Schema.org name (line ~35)

#### **Customize Your Bio** (`index.html`, About section)
- Line ~395-410: Rewrite the biography to reflect your actual background
- Add/remove paragraphs as needed
- Update LinkedIn and GitHub URLs

#### **Add Real Testimonials**
- Replace placeholder testimonials (lines ~350-380)
- Use real client quotes (with permission) or remove section temporarily

---

### 3. Style Customization

#### **Change Colors** (`styles.css`)
Edit the CSS custom properties at the top of `styles.css`:

```css
:root {
    --primary-500: #0ea5e9;  /* Main brand blue - change this */
    --accent-500: #22c55e;   /* Success green - change this */
    /* Adjust other shades as needed */
}
```

**Color palette suggestions:**
- **Trust/Professional:** Blues (#0ea5e9, #2563eb, #1e40af)
- **Growth/Impact:** Greens (#22c55e, #16a34a, #15803d)
- **Warmth/Community:** Warm oranges/teals (#f59e0b, #14b8a6)

#### **Change Fonts**
In `styles.css`, line 7:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font+Here:wght@300;400;600;700&display=swap');
```

Then update:
```css
--font-sans: 'Your Font Here', sans-serif;
```

Popular professional fonts: Poppins, Montserrat, Open Sans, Roboto

---

## 🔧 Advanced Customization

### Add Google Analytics

Add before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your tracking ID.

---

### Custom Domain Setup (Optional)

1. **Purchase a domain** (e.g., from Namecheap, Google Domains)
   - Recommended: `givewiseinsights.com` or similar

2. **Create CNAME file** in your repository:
   - Content: Just your domain name (e.g., `givewiseinsights.com`)

3. **Configure DNS** with your domain registrar:
   - Add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add CNAME record: `yourusername.github.io`

4. **Enable custom domain** in GitHub Settings > Pages
   - Enter your domain
   - ✅ Check "Enforce HTTPS"

Wait 24-48 hours for DNS propagation.

---

## 📧 Form Setup (FormSubmit)

The contact form uses FormSubmit.co (free, no signup required).

**How it works:**
1. Form submits to `https://formsubmit.co/ajax/YOUR-EMAIL`
2. FormSubmit emails you the form data
3. No backend/server needed

**First submission activation:**
- FormSubmit will send a confirmation email on first form submission
- Click the link to activate (one-time only)

**To customize:**
- Edit `index.html` form action URL (line ~425)
- Change `realjjemail@gmail.com` to your email

**Alternative form services:**
- Formspree (formspree.io) - 50 submissions/month free
- Netlify Forms (requires Netlify hosting)
- GetForm (getform.io)

---

## 🔍 SEO Checklist

- [x] Descriptive title tag with keywords
- [x] Meta description (155 characters)
- [x] Open Graph tags for social sharing
- [x] Schema.org structured data
- [x] Semantic HTML (H1, H2, H3 hierarchy)
- [x] Alt text on all images
- [x] robots.txt file
- [x] sitemap.xml file
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Add Google Analytics (optional)

### Submit to Search Engines

1. **Google Search Console:**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `https://josephjilovec.github.io/givewiseinsights.github.io`
   - Submit sitemap: `https://josephjilovec.github.io/givewiseinsights.github.io/sitemap.xml`

2. **Bing Webmaster Tools:**
   - Go to [bing.com/webmasters](https://www.bing.com/webmasters)
   - Add site and submit sitemap

---

## 📱 Mobile Testing

Test your site on multiple devices:
- Chrome DevTools (F12 > Toggle device toolbar)
- Real mobile devices (iPhone, Android)
- Responsive design checkers: 
  - [responsivedesignchecker.com](https://responsivedesignchecker.com)
  - [whatismyscreenresolution.net/multi-screen-test](https://whatismyscreenresolution.net/multi-screen-test)

---

## 🐛 Troubleshooting

### Site not loading after enabling Pages
- Wait 5-10 minutes for initial deployment
- Check Settings > Pages for any error messages
- Verify `index.html` is in root directory (not in subfolder)

### Form submissions not working
- Check that email address in form action is correct
- Look for FormSubmit confirmation email (check spam)
- Test form and click activation link

### Images not displaying
- Verify image file names match exactly (case-sensitive)
- Check that images are in `images/` folder
- Try clearing browser cache (Ctrl+F5)

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS status
- Verify CNAME file contains only domain name (no http://)

---

## 📄 License

This template is free to use for your consulting business. Attribution appreciated but not required.

---

## 🤝 Support

Questions? Found a bug? 
- Open an issue on GitHub
- Email: realjjemail@gmail.com

---

## 🎯 Next Steps After Launch

1. **Collect Real Testimonials:** Reach out to beta clients or colleagues
2. **Add Case Studies:** Document real results (anonymized if needed)
3. **Blog/Resources:** Add a resources page with nonprofit fundraising tips
4. **Lead Magnet:** Create a free downloadable guide (e.g., "10 Questions Every Nonprofit Should Ask About Their Donor Data")
5. **LinkedIn Publishing:** Share articles linking back to your site
6. **Local SEO:** List your service on nonprofit resource directories

Good luck with your launch! 🚀
