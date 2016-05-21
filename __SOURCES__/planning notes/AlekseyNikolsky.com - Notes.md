AlekseyNikolsky - Branding Concepts (In order of priority)
  - Cutting edge science
  - Harmony between art and science (appeals to Renaissance)
    - implies heritage, connection to past
    - implies beauty over ugliness
    - civilized (as opposed to savage or barbaric or neo-primitivists)
  - Authority

  ^^ Downside: Not very approachable. Feels very ivory-tower.





Website Priorities
  determine what scope can be cut in order to get MVP of each:

  - v1: Establish Authority (April 10)
    - Remove as much as possible from current specification, while still achieving this purpose, in order to launch as quickly as possible

  - v2: Make more Approachable
    - define requirements to be delayed until v2



Order of Sections Determined By Branding Priorities:
  - Home
  - Research
  - Credo
  - Compositions
  - About
  - Contact


Who are your supporters?
  - scientists
  - people of older generation, who are in their 50s, 60s, 70s
    - HAS SERIOUS IMPLICATIONS ON WEBSITE DESIGN
      - DO NOT EXCESSIVELY RELY ON WEB TRENDS (i.e. clicking on header takes you to homepage, hamburger icon)
  - eastern europeans, indians


Who are your detractors / skeptics (whom you care about)?
  - anyone who has studied music in academia (esp. America)
    - best way to address their skepticism - establish scientific grounding of ideas you are proposing. expose their positions and criticisms as dogmatic and idiological
  - ultra-modernists


Whom do you not care about, at all (i.e. will not cater to, nor try to convince):
  - fanatics of post-modernism
  - American cultural supremacists
  - people completely into pop culture with little to no interest in "high" art





AlekseyNikolsky.com

## /

<Header />
  <Title />
  <Nav />

<HeroImage />
<3-Column>
  <ContentBlock/>
  <ContentBlock/>
  <ContentBlock/>
<ContactForm />
  - Requires backend work so that form submission sends an email
  - Worry about web bots submitting the form
  - Email Address validation (client-side and server-side)

<Footer />


## /about
  <Header />
  <Section />
    <FloatImageContainer orientation={'vertical' | 'horizontal'}>
      <CaptionedImage src="" caption="" />

  <Footer />

## /compositions
  <Header />
  <Heroimage />
  <3-Column Title>
  <3-Column>


  <Footer />


## Things to Ask Tori:
  - Mockup of responsive (mobile/tablet) UI/UX
    - v1 desktop only
  - Typographic styleguide
    - Look around for Neutraface webfont or similar alternative - should have cyrillic character set
    - Active / Hover states for UI elements (especially header)
  - Site footer?
  - Mockup of "Contact" page?
    - BUTTON
  - Mockup of HTML5 Player interfaces for audio and video widgets
    http://videojs.com/ with youtube
  - Annotations on each page of what typographic style to use for what section
  - Improve typography of quotations (for Fabulusions section)
  - About and Credo pages don't use consistent floated image styles (about has gray container boxes, credo doesn't)? Which way should be go


## Engineering Considerations (Andrew)
  - Video hosting service to use?
  - Configuring/customizing chirbit HTML5 player
  - Configuring/customizing HTML5 video player widget
  - decide on which grid system to use
  - Backend routing / serving
    - need server-side rendering of pages, since all content and we want good SEO
    - Build with React w/ React-Router
    - Use Node/Express server (to handle contact form, as well as page routing. excuse to use React-Router on the server-side)
    - responsive? How should look on mobile and tablet? Breakpoints?
    - https://github.com/erikras/react-redux-universal-hot-example

  - analytics
    - Google analytics
  - monitoring, auto-server-restarting, alerting
    - uptime monitoring and alerting
    - node process manager to auto-restart on crash
    - alerting when node crashes
  - Where to host?
    - Heroku
  - Internationalization
    - do some research
  - Image srcsets (for different resolution devices). Make sure everything looks good on retina and non-retina displays
  - direct links for all media assets
  - use nginx for top-level HTTP response handling, and serve static assets with nginx instead of Express








