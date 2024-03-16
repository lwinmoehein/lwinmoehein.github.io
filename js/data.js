document.addEventListener('alpine:init', () => {
    Alpine.data('utils', () => ({
        currentProjectDetail: null,
        currentProjectFeature:null,
        currentProjectFeatureIndex:0,
        projectDetails:[
            {
                id:'english-daily',
                title:'englishdailyacademy.com',
                type_id:'web',
                type_name:'Web',
                demo_url:'https://englishdailyacademy.com',
                short_description:'An English learning web application where students can learn from courses uploaded by website admins.',
                description:'englishdailyacademy.com is a website for English learners where students can learn English from the website. Courses and contents are uploaded by the website admin using Admin Portal. A student first subscribe to the website by monthly, yearly etc. Course contents contain articles, videos, audios, quizzes and exams to automatically give students course completion certificates directly from the website.',
                technologies:['Laravel','Vue.js','MySQL','Ubuntu','Hostinger','Cloudflare','GithubActions'],
                features:[
                    {
                        name:'Browse English Courses',
                        image_url:'images/english-daily/home.png',
                        description:'Browse the English courses created by website admin.'
                    },
                    {
                        name:'Course Detail',
                        image_url:'images/english-daily/course_detail.png',
                        description:'View the course detail by clicking the course.'
                    },
                    {
                        name:'Course Outline',
                        image_url:'images/english-daily/course_outline.png',
                        description:'View the course outline with sections.'
                    },
                    {
                        name:'Course Detail for Article Content',
                        image_url:'images/english-daily/course_detail_text.png',
                        description:'View the course\'s article content.'
                    },
                    {
                        name:'Course Detail for Video Content',
                        image_url:'images/english-daily/course_detail_video.png',
                        description:'View the course\'s video content.'
                    },
                    {
                        name:'Course Detail for Quizzes',
                        image_url:'images/english-daily/quizz_question.png',
                        description:'Students can also learn from quizzes.'
                    },
                    {
                        name:'Account Settings',
                        image_url:'images/english-daily/settings.png',
                        description:'Users can change settings and manage their account.'
                    },
                    {
                        name:'Manage Courses - Admin',
                        image_url:'images/english-daily/admin_dashboard.png',
                        description:'Manage courses in admin portal ( create,update,delete etc ).'
                    },
                    {
                        name:'Manage Subscription Plans- Admin',
                        image_url:'images/english-daily/plan_manage.png',
                        description:'Manage subscription plans in admin portal to configure access to course.'
                    },
                    {
                        name:'Manage Course\'s Quizzes - Admin',
                        image_url:'images/english-daily/manage_quizzes.png',
                        description:'Manage course\'s quizzes in admin portal.'
                    }
                ]
            },
            {
                id:'english-test',
                title:'English Test ',
                type_id:'android',
                type_name:'Android',
                demo_url:'',
                description:'blah test',
                short_description: 'short',
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