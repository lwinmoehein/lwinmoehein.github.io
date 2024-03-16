document.addEventListener('alpine:init', () => {
    Alpine.data('utils', () => ({
        currentProjectDetail: null,
        currentProjectFeature:null,
        currentProjectFeatureIndex:0,
        projectDetails:[
            {
                id:'english-daily',
                title:'English Daily Academy',
                type_id:'web',
                type_name:'Web Application',
                demo_url:'',
                description:'To make the images responsive and scale appropriately, we can set the maximum width of the images to 100% of their parent container, which in this case is .slide. Here\'s the updated SCSS code:\n',
                technologies:['Laravel','Vue.js','MySQL','Ubuntu','Hostinger','Cloudflare','GithubActions'],
                features:[
                    {
                        name:'Register',
                        image_url:'',
                        description:'This is for registering shit'
                    },
                    {
                        name:'Login',
                        image_url:'',
                        description:'This is for loggin in shit'
                    },
                    {
                        name:'Test',
                        image_url:'',
                        description:'Sar U Yay Ngar'
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
                technologies:['Laravel','Vue.js','MySQL','Ubuntu','Hostinger','Cloudflare','GithubActions'],
                features:[
                    {
                        name:'Hello',
                        image_url:'',
                        description:'Test Desc'
                    },
                    {
                        name:'There',
                        image_url:'',
                        description:'Test Desc'
                    },
                    {
                        name:'Test',
                        image_url:'',
                        description:'Test Desc'
                    }
                ]
            }
        ],
        next() {
            if(this.currentProjectFeatureIndex===this.currentProjectDetail.features.length-1){
                this.currentProjectFeatureIndex = 0
                this.currentProjectFeature = this.currentProjectDetail.features[0]
                return
            }
            this.currentProjectFeatureIndex = this.currentProjectFeatureIndex+1
            this.currentProjectFeature = this.currentProjectDetail.features[this.currentProjectFeatureIndex]
        },
        prev() {
            if(this.currentProjectFeatureIndex===0){
                this.currentProjectFeatureIndex = this.currentProjectDetail.features.length-1
                this.currentProjectFeature = this.currentProjectDetail.features[this.currentProjectFeatureIndex]
                return
            }
            this.currentProjectFeatureIndex = this.currentProjectFeatureIndex-1
            this.currentProjectFeature = this.currentProjectDetail.features[this.currentProjectFeatureIndex]
        },
        onProjectClick(projectDetail){
            this.currentProjectDetail = projectDetail
            this.currentProjectFeatureIndex = 0
            this.currentProjectFeature = projectDetail.features[0]
        }
    }))
})