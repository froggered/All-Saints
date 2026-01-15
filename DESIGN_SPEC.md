# All Saints of Lincolnshire - Website Design Specification

**Version:** 1.2
**Date:** 2026-01-15
**Status:** Design Phase

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Church Information](#church-information)
3. [Project Goals](#project-goals)
4. [Target Audience](#target-audience)
5. [Technical Requirements](#technical-requirements)
6. [Site Structure & Content](#site-structure--content)
7. [Design & Aesthetics](#design--aesthetics)
8. [Features & Functionality](#features--functionality)
9. [Admin System](#admin-system)
10. [Deployment](#deployment)
11. [Future Enhancements](#future-enhancements)

---

## Project Overview

A modern website for All Saints of Lincolnshire, an Orthodox Christian church under the Antiochian Archdiocese. The site will serve both existing parishioners and enquirers exploring Orthodox Christianity, with a particular focus on welcoming newcomers with little church background.

---

## Church Information

### Basic Details
- **Name:** All Saints of Lincolnshire
- **Venue:** Saint Matthias Church Centre
- **Address:** Burton Road, Lincoln LN1 3TX
- **Tradition:** Orthodox Christian (Antiochian Archdiocese)
- **Bishop:** Metropolitan Silouan
- **Parish Priest:** Archimandrite Philip
- **Monastery Deacon:** Rev'd Dn. Panagiotis

### Contact Information
- **Fr. Philip:**
  - Phone: 07969 332740
  - Email: Fr.Philip@gmx.com
  - SKYPE: Fr.Philip@gmx.com
  - Facebook: https://www.facebook.com/Fr.Philip
  - Twitter: twitter.com/FrPhilip
  - YouTube: https://www.youtube.com/@ArchimandritePhilip

- **Dn. Panagiotis:**
  - Phone: 07826 322064

### Church History
All Saints of Lincolnshire grew as a mission from Louth parish. By 2005 it had grown to a point where it needed to meet weekly and Fr. Philip moved from Louth to Lincoln. English is by far the dominant language though Greek, Slavonic, and Romanian are also used as this reflects the multicultural nature of the community.

The Temple was built in 1881 for the local barracks and passed out of use for them many decades ago. More recently it was a centre for Deaf Chaplaincy in Lincolnshire and was modified to provide offices, kitchens, toilets, meeting rooms, halls, a car park, and a "worship centre". The "worship centre" has now had to grow from a small part of the building to most of the building as the congregation has grown. Since the start we have always had catechumens most of whom have never attended a church before.

### Mission & Activities
A congregation devoted to mission and evangelism. Activities include:

- Regular and frequent weekday services
- Catechumenate classes
- E-Quip sessions
- Food bank
- Homeless outreach
- Prison ministry
- Daily services at Lincoln University (during term time)
- Ministry preparation programs
- Growing library for Christian education
- Livestreamed services
- Weekday livestreamed Bible study

The parish has produced a priest and a deacon with others preparing for Axios meetings.

---

## Project Goals

### Primary Goals
1. Provide comprehensive information about All Saints of Lincolnshire
2. Welcome and educate enquirers exploring Orthodox Christianity
3. Keep parishioners informed of events, services, and news
4. Facilitate online giving
5. Showcase Fr. Philip's YouTube content and livestreams
6. Create an easy-to-use admin system for non-technical users

### Success Metrics
- Increased engagement from enquirers
- Regular content updates (monthly newsletter, occasional blog posts)
- Active use of calendar system
- Online donations functionality
- High mobile usability scores

---

## Target Audience

### Primary Audiences
1. **Existing Parishioners** - Need service times, calendar, news updates
2. **Enquirers ("Orthobros")** - Young people exploring Orthodoxy through online research, often with little church background
3. **General Public** - People in Lincoln searching for Orthodox churches

### User Needs
- **Enquirers:** Clear, accessible information about Orthodoxy; what to expect at services; welcoming tone
- **Parishioners:** Service schedules, event calendar, newsletter access, livestream links
- **Casual Visitors:** Contact information, location, basic service times

---

## Technical Requirements

### Technology Stack

#### Frontend
- **Framework:** Astro or Next.js (static site generation)
  - Fast, modern, excellent SEO
  - Easy to maintain and extend
  - Great developer experience

#### Content Management System (CMS)
- **Recommended:** Sanity.io or DecapCMS
  - **Sanity.io** (Preferred):
    - Extremely user-friendly interface
    - Real-time collaboration
    - Free tier sufficient for this project
    - Excellent documentation
    - Works well with any frontend framework
  - **DecapCMS** (Alternative):
    - GitHub-based (content stored in repo)
    - Free and open-source
    - Good for simpler needs

#### Additional Services
- **YouTube Data API** - Automatic livestream detection
- **Analytics** - Google Analytics or Plausible (privacy-friendly alternative)
- **Forms** - Contact forms (can use Netlify Forms or similar)

### Hosting & Deployment

#### Phase 1: Testing
- **Platform:** GitHub Pages
- **URL:** `<username>.github.io/all-saints-lincolnshire`
- **Purpose:** Development and stakeholder review

#### Phase 2: Production
- **Platform:** Krystal Emerald Shared Hosting
- **Domain:** TBD (to be registered)
- **SSL:** Required

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

### Performance Requirements
- Page load time: < 3 seconds on 3G
- Mobile-friendly (Google Mobile-Friendly Test pass)
- Accessibility: WCAG 2.1 AA compliance where possible

---

## Site Structure & Content

### Navigation Structure

```
Home
├── About
│   ├── Our Church
│   ├── Our History
│   ├── Our Mission
│   ├── Ministries
│   └── Contact
├── Discover Orthodoxy
│   ├── What is Orthodoxy?
│   ├── What to Expect at Services
│   ├── How to Prepare for Your Visit
│   └── The Journey to Orthodoxy (Catechumenate)
├── Services
│   └── Service Times & Calendar
├── News & Resources
│   ├── Newsletter Archive
│   ├── News & Updates (Blog)
│   └── Library Resources
└── Support Us
    └── Donate
```

### Page Details

#### Home Page
- **Purpose:** Welcome visitors, provide key information at a glance without additional clicks
- **Content:**
  - Hero section with church name, image, and tagline
  - "Live Now" indicator if Fr. Philip is streaming (links to YouTube)
  - Welcome message
  - **Weekly Service Times (prominently displayed):**
    - Wednesday 6:00 PM - Vespers
    - Thursday 11:00 AM - Moleiben
    - Saturday 8:00 AM - Divine Liturgy
    - Saturday 5:00 PM - Vespers
    - Sunday 10:00 AM - Divine Liturgy
  - **Location & Contact Info:**
    - Address: Burton Road, Lincoln
    - Fr. Philip's phone and email
    - Embedded map or map link
  - Quick links to key pages:
    - New to Orthodoxy?
    - Full Calendar
    - Latest Newsletter
  - Upcoming events (next 3-5 from calendar, beyond regular services)
  - Latest news/blog post preview

#### About Section

**Our Church**
- Full church details (name, tradition, archdiocese, bishop)
- Location and building details
- Multicultural nature of community
- Contact information
- Embedded map

**Our History**
- Parish history (mission from Louth, growth since 2005)
- Building history (1881 barracks, Deaf Chaplaincy, current use)
- Growth and development

**Our Mission**
- Mission statement
- Evangelism and outreach focus
- Focus on catechumens

**Ministries**
- Overview list of all ministries:
  - Catechumenate classes
  - E-Quip sessions
  - Food bank
  - Homeless outreach
  - Prison ministry
  - Lincoln University services (daily during term time)
  - Ministry preparation programs
  - Library (Christian education resources)
  - Bible study (weekday livestreamed sessions)

**Contact**
- Full contact details for Fr. Philip and Dn. Panagiotis
- Contact form
- Social media links
- Address and map
- Directions/parking information

#### Discover Orthodoxy Section

**What is Orthodoxy?**
- Introduction to Orthodox Christianity
- The Antiochian tradition
- Key beliefs and practices
- Links to further resources

**What to Expect at Services**
- Description of Divine Liturgy
- Explanation of other services (Vespers, Moleiben)
- What happens during a service
- Customs and etiquette
- Languages used at All Saints

**How to Prepare for Your Visit**
- What to wear
- When to arrive
- Where to sit/stand
- What to bring (nothing required)
- Common concerns addressed

**The Journey to Orthodoxy (Catechumenate)**
- What is a catechumen?
- The process of joining the Church
- What to expect in catechumenate classes
- How to get started

#### Services

**Service Times & Calendar**
- **Regular Weekly Schedule:**
  - Wednesday 6:00 PM - Vespers
  - Thursday 11:00 AM - Moleiben
  - Saturday 8:00 AM - Divine Liturgy
  - Saturday 5:00 PM - Vespers
  - Sunday 10:00 AM - Divine Liturgy
- **Interactive Calendar:**
  - All services and events
  - Categories:
    - Divine Liturgy
    - Vespers
    - Other Services
    - Classes/Education
    - Social Events
    - Outreach/Ministry
    - Special Feasts
  - Month/week/day views
  - Filtering by category
- **Special Services:** Noted on calendar (feast days, etc.)

#### News & Resources

**Newsletter Archive**
- Monthly newsletter by Fr. Philip
- Searchable/browsable archive
- Most recent newsletter featured
- Email signup for newsletter delivery

**News & Updates (Blog)**
- Posts by Fr. Philip and Dn. Panagiotis
- General parish news and announcements
- Date-ordered, with latest first
- Simple blog format, no need for categories/tags initially

**Library Resources**
- Description of the church library
- Focus on Christian education
- Potentially list key resources (if desired later)

#### Support Us

**Donate**
- Online donation functionality
- Multiple payment methods
- One-time and recurring options
- Clear explanation of how donations support the church
- Security/privacy information
- Alternative giving methods (bank transfer details, etc.)

---

## Design & Aesthetics

### Design Direction

**"Orthodox Bro" Aesthetic:**
- Orthodox iconography and imagery
- Bold, modern typography
- High contrast design
- Clean, minimalist layouts
- Strong visual hierarchy

**Balance:**
- Reverent and traditional (icons, crosses, Orthodox imagery)
- Modern and accessible (clean design, easy navigation)
- Welcoming but not "trendy"

### Visual Elements

#### Typography (Confirmed)
- **Headings:** Oswald (500-700 weight, uppercase with letter-spacing)
  - Bold, modern, condensed sans-serif
  - Strong visual impact with uppercase styling
  - Named after St. Oswald of Northumbria - fitting for a British Orthodox parish
- **Body:** Inter (400-500 weight)
  - Clean, highly readable sans-serif
  - Excellent screen readability
- **Accent:** Playfair Display (for quotes and special text)
  - Elegant serif for liturgical quotes and citations

#### Color Palette (Confirmed)
- **Primary Colors:**
  - Deep Navy: #1a1f3c (hero backgrounds, headers)
  - Charcoal: #2d2d2d (text, secondary backgrounds)
  - Off-White: #f8f6f3 (page background)
  - Gold: #c9a227 (accents, links, highlights)
- **Extended Palette:**
  - Burgundy: #722f37 (feast days, special accents)
  - Slate: #64748b (muted text, captions)
  - Ivory: #fffef9 (card backgrounds)
  - Live Red: #dc2626 (livestream indicator)
- **Accessibility:** All color combinations meet WCAG AA contrast ratios

#### Imagery (Assets)
- **Available Images:**
  - `Images/allsaints_icon.jpg` - Orthodox religious icon of All Saints (used in welcome section)
  - `Images/church_exterior.jpg` - Saint Matthias Church Centre exterior (used in welcome section)
  - `Images/iconostasis.jpg` - Church interior iconostasis
  - `Images/pantocrator-dome.jpg` - Christ Pantocrator dome (placeholder hero background - to be replaced with church's own image later)
- Orthodox iconography
- Orthodox crosses (used as logo/branding element)
- Photos of church building and interior
- Photos from services and events

#### Icons & Graphics
- Orthodox cross as primary symbol
- Simple, modern icons for navigation and features
- Decorative elements inspired by Byzantine art (borders, dividers)

### Layout Principles
- Clean, spacious layouts
- Clear visual hierarchy
- Mobile-first responsive design
- Consistent spacing and rhythm
- Generous use of whitespace

### Component Examples

**Hero Section:**
- Large, impactful image or icon
- Bold headline
- Clear call-to-action
- "Live Now" indicator prominently placed when active

**Event Cards:**
- Bold category labels
- Clear date/time
- Brief description
- High contrast

**Blog/Newsletter Posts:**
- Large, readable text
- Featured images
- Clear date and author
- Easy sharing

---

## Features & Functionality

### Core Features

#### 1. Calendar System
- **Display:** Month/week/day views
- **Categories:** Services, classes, events, outreach, special feasts
- **Filtering:** Filter by category
- **Details:** Each event shows:
  - Title
  - Date and time
  - Category
  - Description
  - Location (if different from church)
- **Admin:** Easy to add/edit/delete events via CMS
- **Integration:** Upcoming events displayed on homepage

#### 2. News/Blog System
- **Posts:** Title, date, author, content, optional image
- **Display:** Reverse chronological order
- **Admin:** Full WYSIWYG editor for non-technical users
- **Authors:** Fr. Philip and Dn. Panagiotis
- **Homepage:** Latest post preview

#### 3. Newsletter System
- **Archive:** All monthly newsletters accessible
- **Display:** Reverse chronological order
- **Format:** Full text on website (not just PDF download)
- **Author:** Fr. Philip
- **Admin:** Upload/post via CMS
- **Email Signup:** Visitors can subscribe to receive newsletters
- **Homepage:** Latest newsletter featured

#### 4. YouTube Integration
- **Live Detection (Homepage):**
  - Use YouTube Data API to check if Fr. Philip is currently live
  - Display prominent "LIVE NOW" banner/indicator on homepage when streaming
  - Link directly to YouTube channel to watch live
  - When not live, indicator is hidden or shows next scheduled stream time
- **Social Links:**
  - YouTube channel prominently linked in header/footer
  - Social media bar includes YouTube alongside Facebook and Twitter
  - Contact page includes YouTube link

#### 5. Contact System
- **Contact Information:** Displayed clearly on Contact page and footer
- **Contact Form:**
  - Name, email, phone, message
  - Submit to email (Fr. Philip's email)
  - Form validation
  - Spam protection (reCAPTCHA or honeypot)
- **Social Media Links:** Facebook, Twitter, YouTube

#### 6. Online Donations
- **Payment Processing:**
  - Stripe or PayPal integration
  - Secure, PCI compliant
  - One-time donations
  - Recurring donations (monthly, yearly)
- **Donation Page:**
  - Clear explanation of how funds are used
  - Suggested amounts with custom option
  - Privacy/security information
  - Thank you message after donation
- **Alternative Methods:**
  - Bank transfer details
  - Check mailing address (if applicable)

#### 7. Map & Directions
- Embedded Google Map on Contact page
- Address clearly displayed
- Link to directions

### User Experience Features

#### Navigation
- Clear, consistent navigation across all pages
- Mobile menu (hamburger) for small screens
- Breadcrumbs on deep pages
- Search functionality (optional, phase 2)

#### Accessibility
- Semantic HTML
- ARIA labels where appropriate
- Keyboard navigation
- Alt text on all images
- Sufficient color contrast
- Readable font sizes

#### Mobile Responsiveness
- Mobile-first design
- Touch-friendly buttons and links
- Readable text on small screens
- Optimized images for mobile
- Fast loading on mobile networks

#### Performance
- Lazy loading for images
- Optimized assets (compressed images, minified CSS/JS)
- CDN for static assets (if applicable)
- Caching strategies

---

## Admin System

### Requirements

**User-Friendly:**
- Non-technical users (Fr. Philip, Dn. Panagiotis, others)
- Intuitive interface
- WYSIWYG editor for content
- No coding required

**Permission Levels:**
- **Priest Level (Full Admin):**
  - All permissions
  - User management
  - Site settings
  - All content management
- **Admin Level:**
  - Add/edit/delete calendar events
  - Add/edit/delete blog posts
  - Add/edit/delete newsletters
  - View stats
  - Cannot change site settings or manage users

### Content Management

#### Calendar Events
- Form fields:
  - Title
  - Date and time (start and end)
  - Category (dropdown)
  - Description (rich text)
  - Location (optional)
  - Recurring (optional, for future)
- List view of all events
- Filter/search events
- Bulk delete (optional)

#### Blog Posts
- Form fields:
  - Title
  - Author (dropdown: Fr. Philip, Dn. Panagiotis)
  - Date (auto-populated, editable)
  - Featured image (optional)
  - Content (WYSIWYG editor)
  - Excerpt (optional, for previews)
- List view of all posts
- Draft/publish status
- Preview before publishing

#### Newsletter
- Form fields:
  - Title (e.g., "January 2026 Newsletter")
  - Date (auto-populated)
  - Content (WYSIWYG editor)
- List view of all newsletters
- Publish/unpublish

#### Pages
- Edit existing pages:
  - About pages
  - Discover Orthodoxy pages
  - Any static content
- WYSIWYG editor
- Preview before saving

#### Homepage Settings
- **Hero Section:**
  - Hero background image (upload/select from media library)
  - Hero title text (default: "All Saints of Lincolnshire")
  - Hero subtitle text
  - Hero description text
  - Call-to-action button text and links
- **Welcome Section:**
  - Welcome section images (upload/select, supports multiple)
  - Welcome heading and body text
  - Quote text and citation
- **Featured Content:**
  - Toggle which sections appear on homepage
  - Reorder homepage sections (drag and drop)
- All image changes should take effect immediately on save
- Preview option before publishing changes

#### Media Library
- Upload images
- Organize images
- Image optimization (automatic resizing/compression)
- Easy selection interface for homepage images

### Statistics Dashboard

**Metrics:**
- Page views (overall and per page)
- Most popular pages/posts
- Newsletter signups
- Donation statistics (if applicable, may need to be separate)
- Visitor demographics (location, device type)
- Traffic sources

**Display:**
- Simple, visual dashboard
- Date range filters
- Export data (CSV)

**Tool:**
- Google Analytics integration (custom dashboard in CMS)
- Or simpler solution: Plausible/Umami with embedded dashboard

### User Management

**Users:**
- Add/remove users
- Assign permission levels
- Reset passwords

**Access:**
- Only available to Priest Level admins

---

## Deployment

### Phase 1: Testing (GitHub Pages)

**Setup:**
- Repository: `all-saints-lincolnshire` (or similar)
- Branch: `main` for source, `gh-pages` for deployment (or GitHub Actions)
- URL: `<username>.github.io/all-saints-lincolnshire`

**Process:**
1. Build static site
2. Deploy to GitHub Pages
3. Share with stakeholders for review

**Limitations:**
- CMS may need to be hosted separately (e.g., Sanity.io cloud)
- No custom domain (for testing phase)

### Phase 2: Production (Krystal Hosting)

**Setup:**
- Host: Krystal Emerald Shared Hosting
- Domain: TBD (to be registered and configured)
- SSL: Required (Let's Encrypt or hosting provider)

**Process:**
1. Build static site
2. Upload to hosting via FTP/SFTP or Git deployment
3. Configure domain and DNS
4. Set up SSL certificate
5. Configure CMS to point to production URL

**Ongoing:**
- Automatic deployments when content changes
- Regular backups (hosting provider or separate solution)
- Monitoring and uptime checks

---

## Future Enhancements

### Phase 2 Features (Post-Launch)
- **Search Functionality:** Site-wide search for content
- **Member Directory:** Optional, for registered parishioners
- **Online Prayer Requests:** Form for prayer requests
- **Recurring Events:** Calendar support for weekly services (currently manual entry)
- **Multiple Languages:** Greek, Slavonic, Romanian content (if needed)
- **Podcast:** If Fr. Philip starts a podcast, integrate RSS feed
- **Resource Downloads:** PDFs, service books, educational materials

### Long-Term Ideas
- **Discussion Forum:** For parishioners to connect (possibly external platform)
- **Online Classes:** Video series for catechumens (Vimeo/YouTube integration)
- **Event Registration:** For classes or special events requiring RSVP
- **Email Campaigns:** Integrated email newsletter (MailChimp, etc.)
- **Mobile App:** Native app for parishioners (very long-term)

---

## Appendix

### Recommended Technology Stack Summary

**Frontend:**
- Framework: Astro (recommended) or Next.js
- Styling: Tailwind CSS or vanilla CSS
- Deployment: GitHub Pages (testing), Krystal Hosting (production)

**Backend/CMS:**
- CMS: Sanity.io (recommended) or DecapCMS
- Forms: Netlify Forms or Formspree
- Analytics: Plausible (privacy-friendly) or Google Analytics

**Integrations:**
- YouTube Data API (livestream detection)
- Stripe or PayPal (donations)
- Google Maps API (map embedding)

**Development:**
- Version Control: Git (GitHub)
- Package Manager: npm or pnpm
- CI/CD: GitHub Actions (for automated deployments)

### Resources & References

**Orthodox Resources:**
- Antiochian Archdiocese: https://antiochian-orthodox.co.uk/
- Orthodox Church in America: https://www.oca.org/
- Ancient Faith Ministries: https://www.ancientfaith.com/

**Design Inspiration:**
- Byzantine art and iconography
- Modern Orthodox church websites
- High-contrast, bold typography examples

**Technical Documentation:**
- Astro: https://astro.build/
- Sanity.io: https://www.sanity.io/
- YouTube Data API: https://developers.google.com/youtube/v3

---

## Document History

| Version | Date       | Author  | Changes                                                    |
|---------|------------|---------|-------------------------------------------------------------|
| 1.0     | 2026-01-15 | Initial | Initial specification                                       |
| 1.1     | 2026-01-15 | Initial | Removed "Live & Media" section, simplified YouTube integration |
| 1.2     | 2026-01-15 | Initial | Added full venue address (Saint Matthias Church Centre, LN1 3TX). Confirmed typography (Oswald/Inter/Playfair Display) and color palette with hex codes. Added image assets. Updated homepage spec with service times prominently displayed. |

---

## Sign-Off

This document represents the agreed-upon specification for the All Saints of Lincolnshire website. Changes to this specification should be documented in the version history.

**Approved by:**
- [ ] Parish Priest (Fr. Philip)
- [ ] Project Lead
- [ ] Technical Lead

**Next Steps:**
1. Review and approve this specification
2. Begin technical setup (repository, hosting, CMS)
3. Design mockups/wireframes
4. Content gathering and preparation
5. Development
6. Testing and review
7. Launch

---

*Glory to Jesus Christ!*
