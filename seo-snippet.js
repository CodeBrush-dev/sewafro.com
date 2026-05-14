// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.sewafro.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.sewafro.com/","title_tag":"Bohemian Knotless Braids Houston | SewAfro Hair Salon","meta_description":"SewAfro offers expert Bohemian knotless braids, micro braids, box braids, twists, sew-ins and more African-style hair in Houston. Book your braiding appointment today."},{"page_url":"http://www.sewafro.com/","title_tag":"African-style Hair Houston Braids | SewAfro Salon","meta_description":"Visit SewAfro in Houston for African-style hair, knotless braids, micro braids, box braids, twists, sew-ins and crochet hair. Professional styles that last. Book now."},{"page_url":"https://www.sewafro.com/services","title_tag":"Box Braids, Twists, Sew-ins Houston | SewAfro Salon","meta_description":"Explore SewAfro services: box braids, twists, sew-ins, cornrows, crochet hair, kids hair braiding and more African-style hair in Houston. View prices and book online."},{"page_url":"https://www.sewafro.com/booking-calendar/bohemian-knotless-braids","title_tag":"Bohemian Knotless Braids Houston | SewAfro Booking","meta_description":"Book Bohemian knotless braids in Houston at SewAfro. Long-lasting, lightweight braids with expert African-style techniques. Check availability and schedule online."},{"page_url":"https://www.sewafro.com/booking-calendar/micro-braids","title_tag":"Micro Braids Houston | Book at SewAfro Salon","meta_description":"Schedule micro braids in Houston with SewAfro. Neat, long-lasting micro braids by a certified braiding specialist. View openings and book your appointment online."},{"page_url":"https://www.sewafro.com/booking-calendar/box-braids","title_tag":"Box Braids Houston | SewAfro Online Booking","meta_description":"Reserve your box braids appointment in Houston at SewAfro. Professional, long-lasting box braids and African-style hair services. Check times and book now online."},{"page_url":"https://www.sewafro.com/booking-calendar/twists","title_tag":"Twists Houston | African-style Hair at SewAfro","meta_description":"Book twists in Houston at SewAfro. Stylish two-strand and boho twists using African-style hair techniques. Browse availability and schedule your twist style today."},{"page_url":"https://www.sewafro.com/booking-calendar/cornrow-straight-to-the-back","title_tag":"Cornrow Hairstyles Houston | SewAfro Straight Back","meta_description":"Book cornrow hairstyles in Houston at SewAfro. Clean, straight-back cornrows and styled cornrow looks for all ages. Check schedule and reserve your spot online."},{"page_url":"https://www.sewafro.com/booking-calendar/sew-ins","title_tag":"Sew-ins Houston | Hair Extensions at SewAfro","meta_description":"Schedule sew-ins in Houston at SewAfro. Flawless installs with quality hair extensions and African-style techniques. View available times and book your sew-in now."}],"keywords":["Bohemian Knotless Braids Houston","Micro Braids Houston","Box Braids Houston","Cornrow Hairstyles Houston","Sew-ins Houston","Twists Houston","Crochet Hair Houston","Hair Extensions Houston","African-style Hair Houston","Kids Hair Braiding Houston"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://www.sewafro.com/#hair-salon",
  "name": "Sew*A*fro Hair Salon",
  "url": "https://www.sewafro.com/",
  "image": [
    "https://static.wixstatic.com/media/89a7ee_e7e6c141f10647cc9632b48ec1cc891c%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/89a7ee_e7e6c141f10647cc9632b48ec1cc891c%7Emv2.jpg",
    "https://static.wixstatic.com/media/89a7ee_be0f347ba2b74d35bcde6f87f79021d6~mv2.jpeg/v1/fill/w_490,h_547,q_90,enc_avif,quality_auto/89a7ee_be0f347ba2b74d35bcde6f87f79021d6~mv2.jpeg",
    "https://static.wixstatic.com/media/da1240_17d9fc35248946af87ed11078f24ec88~mv2.png/v1/fill/w_245,h_273,q_90,enc_avif,quality_auto/da1240_17d9fc35248946af87ed11078f24ec88~mv2.png",
    "https://static.wixstatic.com/media/da1240_db6fc6c925f84d0aa83549aecc71dad4~mv2.png/v1/fill/w_245,h_274,q_90,enc_avif,quality_auto/da1240_db6fc6c925f84d0aa83549aecc71dad4~mv2.png",
    "https://static.wixstatic.com/media/da1240_9d1ba41039024d6ca4fdf7cbf0e9a96d~mv2.png/v1/fill/w_245,h_273,q_90,enc_avif,quality_auto/da1240_9d1ba41039024d6ca4fdf7cbf0e9a96d~mv2.png",
    "https://static.wixstatic.com/media/da1240_ce994c6c34e24670b5fb6278e3a93b1a~mv2.png/v1/fill/w_490,h_547,q_90,enc_avif,quality_auto/da1240_ce994c6c34e24670b5fb6278e3a93b1a~mv2.png"
  ],
  "logo": "https://static.wixstatic.com/media/89a7ee_e7e6c141f10647cc9632b48ec1cc891c%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/89a7ee_e7e6c141f10647cc9632b48ec1cc891c%7Emv2.jpg",
  "description": "Sew*A*fro Hair Salon specializes in African-style hair, braiding, sew-ins, extensions, crochet hair, haircuts, coloring, and styling. Serving clients from its Houston, TX location with professional braiding and styling services.",
  "slogan": "Embrace Your Roots, Elevate Your Style! Where Beauty Happens",
  "telephone": "+1-504-270-3342",
  "email": "info@sewafro.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7704 Irvington Blvd Suite 3",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77022",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "00:00",
      "closes": "00:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.tiktok.com/",
    "https://twitter.com/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hair Braiding and Styling Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Bohemian Knotless braids",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "180",
          "priceCurrency": "USD"
        },
        "url": "https://www.sewafro.com/booking-calendar/bohemian-knotless-braids"
      },
      {
        "@type": "Offer",
        "name": "Micro Braids",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "300",
          "priceCurrency": "USD"
        },
        "url": "https://www.sewafro.com/booking-calendar/micro-braids"
      },
      {
        "@type": "Offer",
        "name": "Box Braids",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "180",
          "priceCurrency": "USD"
        },
        "url": "https://www.sewafro.com/booking-calendar/box-braids"
      },
      {
        "@type": "Offer",
        "name": "Twists",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "180",
          "priceCurrency": "USD"
        },
        "url": "https://www.sewafro.com/booking-calendar/twists"
      },
      {
        "@type": "Offer",
        "name": "Cornrow straight to the back",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "80",
          "priceCurrency": "USD"
        },
        "url": "https://www.sewafro.com/booking-calendar/cornrow-straight-to-the-back"
      },
      {
        "@type": "Offer",
        "name": "Sew-ins",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "150",
          "priceCurrency": "USD"
        },
        "url": "https://www.sewafro.com/booking-calendar/sew-ins"
      }
    ]
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Memorial Day braids promotion",
      "description": "Memorial Day offer: Get $50 off on braids when your service totals $200 or more.",
      "availabilityEnds": "",
      "priceCurrency": "USD",
      "url": "https://www.sewafro.com/"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Sarah",
    "jobTitle": "Certified Braiding Specialist"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
