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
        link: '/process/'
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
      '/process/': [
        {
          collapsable: false,
          // use file name here without extension and content will be rendered with the first line as title. optional title can be declared. empty string is ref for README
          children: [
            '',
            {
              title: 'Beobachten',
              collapsable: false,
              // sidebarDepth: 2,    // optional, defaults to 1
              children: ['/process/observe/objectives-limits.md', '/process/observe/objectives.md', '/process/observe/9-ways.md', '/process/observe/user-interview.md', '/process/observe/inventory.md'],
            },
            {
              title: 'Analyse',
              collapsable: false,
              // sidebarDepth: 2,    // optional, defaults to 1
              children: ['/process/analysis/io-analysis.md', '/process/analysis/patterns.md'],
            },
            {
              title: 'Design',
              collapsable: false,
              // sidebarDepth: 2,    // optional, defaults to 1
              children: ['/process/design/intro.md', '/process/design/inventory.md', '/process/design/process-model.md', '/process/design/ethics.md', '/process/design/principle-sets.md', '/process/design/tools-partner.md' ],
            },
            {
              title: 'Realisieren',
              collapsable: false,
              // sidebarDepth: 2,    // optional, defaults to 1
              children: ['/process/realization/intro.md', '/process/realization/consulting.md', '/process/realization/design.md'],
            },
            // {
            //   title: 'Celebrate',
            //   collapsable: false,
            //   // sidebarDepth: 2,    // optional, defaults to 1
            //   children: ['/process/celebrate/io-analysis.md'],
            // },
            {
              title: 'Tweak',
              collapsable: false,
              // sidebarDepth: 2,    // optional, defaults to 1
              children: ['/process/tweaking/intro.md', '/process/tweaking/funding.md'],
            },
            // 'consulting',
            // 'design',
            // 'backend',
            // 'frontend',
          ]
        }
      ],
      '/workflow/': [
        {
          collapsable: false,
          // use file name here without extension and content will be rendered with the first line as title. optional title can be declared. empty string is ref for README
          children: [
            '',
            {
              title: 'In-depth workflows',
              collapsable: false,
              sidebarDepth: 2,    // optional, defaults to 1
              children: ['/workflow/detailed/consulting.md', '/workflow/detailed/design.md', '/workflow/detailed/backend.md', '/workflow/detailed/frontend.md', '/workflow/detailed/feedback.md'],
            },
            // 'consulting',
            // 'design',
            // 'backend',
            // 'frontend',
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
