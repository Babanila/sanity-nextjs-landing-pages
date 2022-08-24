export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '63067d62106f1f0077be965b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4zbbx8r9',
                  apiId: 'b38dfef1-c7d8-4312-ad0d-0c93e75a95c1'
                },
                {
                  buildHookId: '63067d62b6b6fe225e084ecc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-scfqsn4r',
                  apiId: 'f2e6a537-3328-4087-8e8d-0b42dc1c9e80'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Babanila/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-scfqsn4r.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
