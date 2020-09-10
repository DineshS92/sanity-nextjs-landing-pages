export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f5a127c6492ce0dd1166024',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6nsdrsc7',
                  apiId: 'af4fd9f6-4a50-4d77-b79c-0f7bac57af87'
                },
                {
                  buildHookId: '5f5a127caac0140b3b5b6ab4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uy7rtkqz',
                  apiId: 'f78bf7ce-496a-4d73-bc77-ac2d3f014d32'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DineshS92/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uy7rtkqz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
