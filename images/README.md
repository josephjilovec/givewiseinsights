# Image Assets for StewardShip Analytics

This folder should contain the following images. Until you have real images, the site will work with placeholders.

## Required Images

### 1. `hero-analytics.jpg` (Recommended: 1200x800px)
**Purpose:** Main hero section image  
**Content suggestions:**
- Nonprofit/church community gathering
- Diverse group of people collaborating
- Data dashboard or analytics visualization
- Hands together symbolizing community/giving
- Professional meeting with data charts

**Where to find free images:**
- Unsplash.com (search: "nonprofit community", "data analytics", "teamwork")
- Pexels.com (search: "charity", "volunteer", "analytics dashboard")
- Pixabay.com

**Alternative:** Create a simple graphic using Canva with your brand colors showing:
- Data visualization elements (charts, graphs)
- Community/nonprofit imagery
- Text overlay: "Data-Driven Impact"

---

### 2. `joseph-profile.jpg` (Recommended: 400x400px, square)
**Purpose:** About section profile photo  
**Content:** Professional headshot of Joseph Jilovec

**Tips:**
- Use a clean background (white, light gray, or outdoor natural setting)
- Dress professionally but approachable (not overly corporate)
- Good lighting (natural light or professional)
- Warm, trustworthy expression
- Square crop for consistency

---

### 3. `og-image.jpg` (Recommended: 1200x630px)
**Purpose:** Social media preview when link is shared (Open Graph)  
**Content:** Should include:
- Your logo/brand name "StewardShip Analytics"
- Tagline: "Predictive Donor Analytics for Nonprofits"
- Simple graphic element (data visualization, community icon)
- Clean, professional design

**Tool:** Use Canva's "Facebook Post" template (1200x630px) and customize with your branding

---

## Temporary Placeholder Option

If you don't have images ready yet, you can use placeholder services temporarily:

```html
<!-- Replace image src with: -->
<img src="https://via.placeholder.com/1200x800/0ea5e9/ffffff?text=Analytics+Dashboard" alt="...">
```

Or use a colored div as a placeholder:
```html
<div style="background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); 
            height: 400px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            color: white; 
            font-size: 2rem; 
            font-weight: bold;">
    Data-Driven Impact
</div>
```

---

## Image Optimization Tips

Before uploading to GitHub:
1. **Compress images** using TinyPNG.com or Squoosh.app (aim for <200KB per image)
2. **Use appropriate formats:**
   - JPG for photos
   - PNG for logos/graphics with transparency
   - WebP for best compression (if browser support isn't a concern)
3. **Responsive sizing:** Include @2x versions for retina displays if needed

---

## File Naming Convention

Keep file names lowercase with hyphens:
- ✅ `hero-analytics.jpg`
- ✅ `joseph-profile.jpg`
- ❌ `Hero Analytics.JPG`
- ❌ `JosephProfile.jpeg`

