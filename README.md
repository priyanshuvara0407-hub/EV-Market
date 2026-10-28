# Electric Vehicle Market Performance & Insights

A modern, responsive analytics web application designed for the electric vehicle project titled **“Electric Vehicle Market Performance & Insights”**. Integrates live, interactive **Tableau Public & Tableau Cloud** visualizations (Dashboard and Story) within a dark, modern web interface.

- **Author**: Priyanshu Vara
- **Project Title**: Electric Vehicle Market Performance & Insights
- **Assigned JIRA Story**: *Embed Dashboard & Story with Flask* (Story Duration: 2h 30m)

---

## ⚡ Design & Visual Architecture

- **Dark & Modern Aesthetic**: Rich black background (`#080808` / `#0a0d13`), crisp high-contrast white typography, and refined gold/amber accents (`#e5a93c`, `#fbbf24`).
- **Consistent Sticky Top Navigation**:
  - Brand Logo: `⚡ EV Insights`
  - Navigation Links: `Home`, `About`, `Features`, `Services`, `Dashboard`, and `Story` with active scroll-spy highlighting.
  - Quick CTA Action Buttons: `Explore Dashboard` and `Explore Story` in gold pill styling.
  - Fully accessible mobile hamburger menu drawer for smartphones and tablets.
- **Section 1: Home (Hero)**:
  - Hero headline: `Transform Your Workflow With [Seamless|]` with animated typewriter effect.
  - Introduction to the dashboard intelligence and narrative story.
  - Prominent buttons linking directly to `#dashboard` and `#story`.
  - **EV-Themed Telemetry Cockpit Visual**: High-tech SVG electric vehicle architecture blueprint (dual-motor AWD, 800V battery floorpack, LED amber lightbar, and real-time telemetry HUD gauges). *Contains no static screenshots of the Tableau dashboard or story.*
  - Floating benchmark badges: `📈 89% Success Benchmark • Past 7 Days ▾` and `⚡ 1.55B+ Annual EV Sales Tracked`.
- **Section 2: About**:
  - Explores EV adoption, manufacturers, vehicle models, sales, customer ratings, driving range, and battery chemistries.
  - Left column: Sleek modern luxury EV showcase visual (`ev-car.png`).
  - Author Credit: Prominent **`Created by Priyanshu Vara`** badge.
  - 4 Concise Feature Cards: **Market Growth**, **Technology Shift**, **Consumer Confidence**, and **Actionable Insights**.
- **Section 3: Features**:
  - Multi-dimensional breakdown of 9 vehicle categories, top 5 OEM manufacturers (AmpereWorks, CircuitWorks, MomentumMobility, SurgeDynamics, TerraMotors), 4 battery chemistries (NMC, LFP, NCA, Sodium-Ion), and consumer range satisfaction.
- **Section 4: Services**:
  - Strategic analytical solutions: Market Intelligence & OEM Benchmarking, Battery Tech Analytics, Geographical Manufacturing Footprints, and Executive Tableau Storytelling.
- **Section 5: Dashboard**:
  - Direct live, interactive Tableau embed iframe (`#tableauDashboardIframe`).
  - Preserves full Tableau interactivity including filters, tooltips, and cross-sheet selections.
  - Sized with responsive height (960px on desktop) to prevent clipping.
  - Dedicated embed toolbar with **Reload**, **Fullscreen**, and direct **Open on Tableau Public** / **Tableau Cloud** action buttons.
  - Fallback banner with direct links if third-party cookies or browser privacy settings block cross-origin embedding.
- **Section 6: Story**:
  - Direct live, interactive Tableau story embed iframe (`#tableauStoryIframe`).
  - Preserves Tableau's story navigation tabs across all narrative chapters.
  - Dedicated embed toolbar with **Reload**, **Fullscreen**, and direct **Open Story on Tableau Public** / **Tableau Cloud** buttons.
  - Fallback banner with direct links to Tableau Public.
- **Section 7: Project Architecture & Jira Showcase**:
  - Showcases the task details ("Embed Dashboard & Story with Flask", Duration: 2h 30m, Assigned to Priyanshu Vara) and full technology stack (HTML, CSS, Tableau Public, VS Code, Flask, JavaScript).
- **Footer & Floating Navigation**:
  - Complete footer navigation, copyright, and author credit tag.
  - Golden circular floating **Back-to-Top** button with smooth scroll behavior.

---

## 🛠️ How to Replace Tableau URLs in One Place

The dashboard and story links are centralized in a clearly labeled configuration file:

### 1. In `static/js/config.js`:
Open [static/js/config.js](file:///c:/Users/legion/Documents/SaaS%20tool%20that%20shows%20which%20pricing%20and%20docs%20pages%20AI%20cites%20vs%20competitors/static/js/config.js) and paste your links:
```javascript
const TABLEAU_CONFIG = {
  // 1. Paste your Tableau Dashboard embed URL:
  dashboardEmbedUrl: "[PASTE TABLEAU DASHBOARD LINK HERE]",

  // Direct link for the 'Open on Tableau Public' button:
  dashboardPublicUrl: "https://public.tableau.com/views/YourDashboardPath",

  // 2. Paste your Tableau Story embed URL:
  storyEmbedUrl: "[PASTE TABLEAU STORY LINK HERE]",

  // Direct link for the 'Open Story on Tableau Public' button:
  storyPublicUrl: "https://public.tableau.com/views/YourStoryPath",
};
```

### 2. In `app.py` (Flask Backend):
Open [app.py](file:///c:/Users/legion/Documents/SaaS%20tool%20that%20shows%20which%20pricing%20and%20docs%20pages%20AI%20cites%20vs%20competitors/app.py) and update `TABLEAU_CONFIG` at the top:
```python
TABLEAU_CONFIG = {
    "dashboard_embed_url": "[PASTE TABLEAU DASHBOARD LINK HERE]",
    "dashboard_public_url": "https://public.tableau.com/views/YourDashboardPath",
    "story_embed_url": "[PASTE TABLEAU STORY LINK HERE]",
    "story_public_url": "https://public.tableau.com/views/YourStoryPath",
    "author": "Priyanshu Vara",
    "title": "Electric Vehicle Market Performance & Insights"
}
```

---

## 🚀 How to Run the Web Application

### Option 1: Run with Python & Flask (Recommended for Flask Showcase)
1. Ensure Python 3.8+ is installed:
   ```bash
   python --version
   ```
2. Install Flask:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the Flask server:
   ```bash
   python app.py
   ```
4. Open your browser and navigate to:
   ```
   http://127.0.0.1:5000/
   ```

### Option 2: Run with Node.js Local Server
If Node.js is installed on your computer, run the zero-dependency static server:
```bash
node server.js
```
Then navigate to `http://127.0.0.1:5000/`.

### Option 3: Direct Browser Launch (No Web Server Needed)
Double-click `index.html` in your file explorer to launch the webpage directly in Google Chrome, Microsoft Edge, Safari, or Mozilla Firefox.

---

## 📂 Project Structure

```text
├── app.py                     # Flask application entry point & URL configuration
├── server.js                  # Zero-dependency local Node.js development server
├── index.html                 # Standalone responsive HTML webpage
├── requirements.txt           # Python Flask dependencies
├── README.md                  # Comprehensive setup & architecture documentation
├── templates/
│   └── index.html             # Flask Jinja2 template
└── static/
    ├── css/
    │   └── style.css          # Dark modern EV stylesheet with gold accents
    ├── js/
    │   ├── config.js          # Central Tableau URL configuration
    │   └── main.js            # Interactivity, typewriter, scroll spy, fullscreen
    └── images/
        └── ev-car.png         # Modern luxury EV photo (About section)
```

---

*Author: Priyanshu Vara | Electric Vehicle Market Performance & Insights*
