const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Permacultural Web Development',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    displayAllHeaders: false,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Dokumentation',
        link: '/documentation/'
      },
      {
        text: 'Workflow',
        link: '/workflow/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/nadineprigann/permacultural-web-dev'
      },
      {
        text: 'Autorin',
        link: 'https://nadineprigann.de'
      },
      // {
      //   text: 'Language',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'EN', link: '/language/english/' },
      //     { text: 'DE', link: '/language/german/' }
      //   ]
      // }
    ],
    sidebar: {
      '/documentation/': [
        {
          collapsable: false,
          // use file name here without extension and content will be rendered with the first line as title. optional title can be declared. empty string is ref for README
          children: [
            '',
            {
              title: 'Beobachten',
              collapsable: false,
              // sidebarDepth: 2,    // optional, defaults to 1
              children: ['/documentation/observe/objectives-limits.md', '/documentation/observe/objectives.md', '/documentation/observe/9-ways.md', '/documentation/observe/user-interview.md', '/documentation/observe/inventory.md'],
            },
            {
              title: 'Analyse',
              collapsable: false,
              children: ['/documentation/analysis/io-analysis.md', '/documentation/analysis/patterns.md'],
            },
            {
              title: 'Design',
              collapsable: false,
              children: ['/documentation/design/intro.md', '/documentation/design/inventory.md', '/documentation/design/process-model.md', '/documentation/design/ethics.md', '/documentation/design/principle-sets.md', '/documentation/design/tools-partner.md' ],
            },
            {
              title: 'Umsetzen',
              collapsable: false,
              children: ['/documentation/realization/intro.md', '/documentation/realization/consulting.md', '/documentation/realization/design.md'],
            },
            {
              title: 'Zelebrieren',
              collapsable: false,
              children: ['/documentation/celebration/celebration.md'],
            },
            {
              title: 'Tweak',
              collapsable: false,
              children: ['/documentation/tweaking/intro.md', '/documentation/tweaking/funding.md','/documentation/tweaking/zone.md'],
            },
          ]
        }
      ],
      '/workflow/': [
        {
          collapsable: false,
          children: [
            '',
            {
              title: 'In-depth workflows',
              collapsable: false,
              sidebarDepth: 2,    // optional, defaults to 1
              children: ['/workflow/detailed/consulting.md', '/workflow/detailed/design.md', '/workflow/detailed/backend.md', '/workflow/detailed/frontend.md', '/workflow/detailed/feedback.md'],
            },
          ]
        }
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/register-components',
  ]
}
