/**
 * ==============================================================================
 * ⚡ TABLEAU CONFIGURATION & LIVE VISUALIZATION URLS
 * Project: Electric Vehicle Market Performance & Insights
 * Author: Priyanshu Vara
 * 
 * INSTRUCTIONS:
 * Paste your live Tableau Dashboard and Tableau Story links below.
 * The webpage will automatically update all live embeds, toolbar actions,
 * and direct links.
 * ==============================================================================
 */

const TABLEAU_CONFIG = {
  // ============================================================================
  // 1. TABLEAU DASHBOARD CONFIGURATION
  // ============================================================================
  // Paste your live Tableau Dashboard embed URL here:
  dashboardEmbedUrl: "https://prod-in-a.online.tableau.com/t/en25cs3090168-16fdac36f1/views/EVMarket/EVMarketDashboard?:embed=yes&:showVizHome=no&:toolbar=yes",

  // Paste your live Tableau Public Dashboard URL here (for direct link):
  dashboardPublicUrl: "https://public.tableau.com/views/EVMarket/EVMarketDashboard",

  // Direct Tableau Cloud URL (if using Tableau Cloud):
  dashboardCloudUrl: "https://prod-in-a.online.tableau.com/#/site/en25cs3090168-16fdac36f1/views/EVMarket/EVMarketDashboard?:iid=1",


  // ============================================================================
  // 2. TABLEAU STORY CONFIGURATION
  // ============================================================================
  // Paste your live Tableau Story embed URL here:
  storyEmbedUrl: "https://prod-in-a.online.tableau.com/t/en25cs3090168-16fdac36f1/views/EVMarketprojecttableau/Story1?:embed=yes&:showVizHome=no&:toolbar=yes",

  // Paste your live Tableau Public Story URL here (for direct link):
  storyPublicUrl: "https://public.tableau.com/views/EVMarketprojecttableau/Story1",

  // Direct Tableau Cloud Story URL (if using Tableau Cloud):
  storyCloudUrl: "https://prod-in-a.online.tableau.com/#/site/en25cs3090168-16fdac36f1/views/EVMarketprojecttableau/Story1?:iid=1",


  // ============================================================================
  // 3. PROJECT METADATA
  // ============================================================================
  projectTitle: "Electric Vehicle Market Performance & Insights",
  author: "Priyanshu Vara",
  version: "1.0.0"
};

// Expose globally for both module and non-module environments
if (typeof window !== "undefined") {
  window.TABLEAU_CONFIG = TABLEAU_CONFIG;
}
