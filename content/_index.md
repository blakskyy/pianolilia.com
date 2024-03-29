---
title: # Leave the homepage title empty to use the site title
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: Piano Lessons by Lilia Pershina
      text: >-
        _<h2>Long Beach, CA</h2>_
        <p>Individual lessons designed to achieve progress at each student’s personal achievement level.</p>
      cta:
        icon: calendar-alt
        icon_pack: fas
        label: Schedule Lesson
        url: '#contact'
      cta_note:
        label: All Ages & Skill Levels
    design:
      background:
        gradient_end: '#2b94c3'
        gradient_start: '#4bb4e3'
        text_color_light: true
        image:
          filename: hero-bg.webp
          filters:
            brightness: 0.5
          parallax: true
          position: center
          size: cover
      spacing:
        padding:
        - 150px
        - '0'
        - 150px
        - '0'
  - block: features
    design:
      background:
        gradient_end: '#eeeeee'
        gradient_start: '#ffffff'
    content:
      items:
        - name: Experienced Instructor
          icon: chalkboard-teacher
          icon_pack: fas
          description: Lilia has years of experience teaching piano, ensuring you receive top-notch guidance. With years of teaching experience and a deep passion for music, she is dedicated to nurturing your piano skills. Her profound knowledge and commitment to your musical journey ensure that you receive the highest quality guidance. Whether you're a beginner eager to explore the world of piano or an advanced player seeking to refine your craft, she will inspire, mentor, and guide you towards achieving your musical aspirations with enthusiasm and skill.
        - name: Private Lessons
          icon: user-friends
          icon_pack: fas
          description: Private lessons are available for students, both beginning and transfers
            from other teachers, of any age or level. Students will receive a weekly one-on-one
            lesson covering of all aspects of a piano/musical education. The lessons will
            include Music Theory, Piano Technique, and Performance Coaching. Although every
            student is different, the standard piano curriculum I teach is based on the proficiency
            levels set by the California Music Teachers Association. Each lesson is adapted
            to each individual student’s needs and musical aptitude.
        - name: Excellent Instruction
          icon: graduation-cap
          icon_pack: fas
          description: Excellent instruction the primary goal for each student. Piano is the
            only musical instrument Lilia teaches. She tailors to piano lessons and ensures that you receive personalized guidance every step of the way. She believes that the key to outstanding instruction is a strong foundation, and shes committed to equipping you with the skills and knowledge necessary to become a proficient pianist. Whether you're starting your musical journey or looking to refine your technique, her commitment to excellence ensures that you'll receive the highest quality instruction, setting you on a path to musical mastery.
  - block: reviews
    content:
      limit: 3
      rich_schema: false
  - block: students
    content:
      title: Students
      user_groups:
      - Students
    design:
      show_interests: false
      show_social: false
  - block: hero
    design:
      background:
        image:
          filename: piano-keys.webp
          parallax: true
          position: center
          size: cover
        text_color_light: true
      spacing:
        padding:
        - 150px
        - '0'
        - 150px
        - '0'
  # - block: about.biography
  #   id: about
  #   content:
  #     title: Lilia Pershina
  #     # Choose a user profile to display (a folder name within `content/authors/`)
  #     username: admin
  # - block: experience
  #   content:
  #     title: Experience
  #     # Date format for experience
  #     #   Refer to https://wowchemy.com/docs/customization/#date-format
  #     date_format: Jan 2006
  #     # Experiences.
  #     #   Add/remove as many `experience` items below as you like.
  #     #   Required fields are `title`, `company`, and `date_start`.
  #     #   Leave `date_end` empty if it's your current employer.
  #     #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #     items:
  #       - title: CEO
  #         company: GenCoin
  #         company_url: ''
  #         company_logo: org-gc
  #         location: California
  #         date_start: '2021-01-01'
  #         date_end: ''
  #         description: |2-
  #             Responsibilities include:

  #             * Analysing
  #             * Modelling
  #             * Deploying
  #       - title: Professor of Semiconductor Physics
  #         company: University X
  #         company_url: ''
  #         company_logo: org-x
  #         location: California
  #         date_start: '2016-01-01'
  #         date_end: '2020-12-31'
  #         description: Taught electronic engineering and researched semiconductor physics.
  #   design:
  #     columns: '2'
  # - block: accomplishments
  #   content:
  #     # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
  #     title: 'Accomplish&shy;ments'
  #     subtitle:
  #     # Date format: https://wowchemy.com/docs/customization/#date-format
  #     date_format: Jan 2006
  #     # Accomplishments.
  #     #   Add/remove as many `item` blocks below as you like.
  #     #   `title`, `organization`, and `date_start` are the required parameters.
  #     #   Leave other parameters empty if not required.
  #     #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #     items:
  #       - certificate_url: https://www.coursera.org
  #         date_end: ''
  #         date_start: '2021-01-25'
  #         description: ''
  #         organization: Coursera
  #         organization_url: https://www.coursera.org
  #         title: Neural Networks and Deep Learning
  #         url: ''
  #       - certificate_url: https://www.edx.org
  #         date_end: ''
  #         date_start: '2021-01-01'
  #         description: Formulated informed blockchain models, hypotheses, and use cases.
  #         organization: edX
  #         organization_url: https://www.edx.org
  #         title: Blockchain Fundamentals
  #         url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
  #       - certificate_url: https://www.datacamp.com
  #         date_end: '2020-12-21'
  #         date_start: '2020-07-01'
  #         description: ''
  #         organization: DataCamp
  #         organization_url: https://www.datacamp.com
  #         title: 'Object-Oriented Programming in R'
  #         url: ''
  #   design:
  #     columns: '2'

  - block: contact
    id: contact
    content:
      # Automatically link email and phone or display as text?
      autolink: true
      title: Contact
      subtitle: |-
        <span style='color:#666;'>For **Last Minute/Same Day Cancellations ONLY:<br />Call</span>
        <span style='color:#990000;'>(562) 234-9142**</span>
        <span style='color:#666;'>and leave a message.</span>
      text: Ready to take the first step towards becoming a pianist? Contact us today for the finest piano lessons in Long Beach.<br />We look forward to helping you achieve your musical goals!
      # Email form provider
      form:
        provider: formspree
        formspree:
          id: 'lilia.pershina@gmail.com' # If using Formspree, enter your Formspree form ID

      # Contact details (edit or remove options as required)
      # email: lilia.pershina@gmail.com
      phone: (562) 433-4759
      address:
        street:
        city: Long Beach
        region: CA
        postcode: 90803
        country: United States
        country_code: US
      # appointment_url: 'https://calendly.com'
    design:
      columns: '2'
---
