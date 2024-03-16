document.addEventListener('alpine:init', () => {
    Alpine.data('utils', () => ({
        currentProjectDetail: null,
        projectDetails:[
            {
                id:'english-daily',
                title:'English Daily Academy',
                type_id:'web',
                type_name:'Web Application',
                demo_url:'',
                description:'blah',
                features:[
                    {
                        name:'Register',
                        image_url:''
                    },
                    {
                        name:'Login',
                        image_url:''
                    },
                    {
                        name:'Test',
                        image_url:''
                    }
                ]
            },
            {
                id:'english-test',
                title:'English Test ',
                type_id:'android',
                type_name:'Android Application',
                demo_url:'',
                description:'blah test',
                features:[
                    {
                        name:'Hello',
                        image_url:''
                    },
                    {
                        name:'There',
                        image_url:''
                    },
                    {
                        name:'Test',
                        image_url:''
                    }
                ]
            }
        ]
    }))
})