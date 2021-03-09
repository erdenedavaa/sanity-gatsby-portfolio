export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6047a4a6e9e94c113141ebb4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9i9gkakw',
                  apiId: '1c76853a-9dec-4270-baa9-b454d40af926'
                },
                {
                  buildHookId: '6047a4a629c81f0e6d4d7e94',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sndys72p',
                  apiId: 'd124014a-9001-40e5-ae07-d2f3381d156c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erdenedavaa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sndys72p.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
