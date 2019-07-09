export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d2461ba626e1a4a71048f06',
                  title: 'Sanity Studio',
                  name: 'robdonn-com-studio',
                  apiId: 'ffcdfda0-f879-4618-b2f1-b04bde824625'
                },
                {
                  buildHookId: '5d2461ba65653940114870ea',
                  title: 'Blog Website',
                  name: 'robdonn-com',
                  apiId: '9865a7f9-51d8-434b-a3e2-b46482747286'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robdonn/robdonn-com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://robdonn-com.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
