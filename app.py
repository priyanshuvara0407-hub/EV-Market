"""
Electric Vehicle Market Performance & Insights
Flask Application Entry Point
Author: Priyanshu Vara

This Flask web application hosts and embeds the interactive Tableau Dashboard 
and Tableau Story for the Electric Vehicle Market Performance & Insights project.
"""

import os
from flask import Flask, render_template

app = Flask(__name__, template_folder="templates", static_folder="static")

# ==============================================================================
# ⚙️ TABLEAU CONFIGURATION - PASTE YOUR TABLEAU LINKS HERE
# ==============================================================================
TABLEAU_CONFIG = {
    # 1. Tableau Dashboard URLs
    # Live embed iframe URL:
    "dashboard_embed_url": "https://prod-in-a.online.tableau.com/t/en25cs3090168-16fdac36f1/views/EVMarket/EVMarketDashboard?:embed=yes&:showVizHome=no&:toolbar=yes",
    # Direct Tableau Public URL (used by the 'Open on Tableau Public' button):
    "dashboard_public_url": "https://public.tableau.com/views/EVMarket/EVMarketDashboard",
    # Direct Tableau Cloud URL:
    "dashboard_cloud_url": "https://prod-in-a.online.tableau.com/#/site/en25cs3090168-16fdac36f1/views/EVMarket/EVMarketDashboard?:iid=1",

    # 2. Tableau Story URLs
    # Live embed iframe URL:
    "story_embed_url": "https://prod-in-a.online.tableau.com/t/en25cs3090168-16fdac36f1/views/EVMarketprojecttableau/Story1?:embed=yes&:showVizHome=no&:toolbar=yes",
    # Direct Tableau Public URL (used by the 'Open Story on Tableau Public' button):
    "story_public_url": "https://public.tableau.com/views/EVMarketprojecttableau/Story1",
    # Direct Tableau Cloud URL:
    "story_cloud_url": "https://prod-in-a.online.tableau.com/#/site/en25cs3090168-16fdac36f1/views/EVMarketprojecttableau/Story1?:iid=1",

    # 3. Project Metadata
    "author": "Priyanshu Vara",
    "title": "Electric Vehicle Market Performance & Insights"
}

@app.route('/')
def home():
    """Render main landing page with embedded Tableau visualizations."""
    return render_template("index.html", config=TABLEAU_CONFIG)

@app.route('/dashboard')
def dashboard():
    """Direct route linking to the Dashboard section."""
    return render_template("index.html", config=TABLEAU_CONFIG)

@app.route('/story')
def story():
    """Direct route linking to the Story section."""
    return render_template("index.html", config=TABLEAU_CONFIG)

if __name__ == '__main__':
    # Run development server on port 5000 (matching visual reference: http://127.0.0.1:5000)
    port = int(os.environ.get("PORT", 5000))
    print("=" * 70)
    print(" ⚡ Electric Vehicle Market Performance & Insights")
    print(f" Author: {TABLEAU_CONFIG['author']}")
    print(f" Development Server running at: http://127.0.0.1:{port}")
    print("=" * 70)
    app.run(debug=True, host='127.0.0.1', port=port)
