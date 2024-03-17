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
                id:'simple-expense',
                title:'Simple Expense',
                type_id:'android',
                type_name:'Android',
                demo_url:'https://play.google.com/store/apps/details?id=lab.justonebyte.simpleexpense',
                description:'Simple Expense is an Android application on Google Play which simply enables users to record their expense and income.This application contains features such as exporting data as Excel files, backing up data with Google account, managing categories. Laravel API is hosted on Amazon EC2 and uses Amazon RDS as database. Github Actions is used to automatically update code changes to EC2.',
                short_description: 'An Android application to record expense and income , powered by Laravel API.',
                technologies:['Laravel','Kotlin','Amazon EC2','Amazon RDS','Github Actions','Jetpack Compose','MVVM'],
                features:[
                    {
                        name:'Login',
                        image_url:'images/simple-expense/login.png',
                        description:'Login with Google account to backup recorded data on the application.'
                    },
                    {
                        name:'Record Income & Expense',
                        image_url:'images/simple-expense/home.png',
                        description:'Simply record expense and income and view the total balances.'
                    },
                    {
                        name:'Data as Pie Chart',
                        image_url:'images/simple-expense/charts.png',
                        description:'View recorded data as pie charts.'
                    },
                    {
                        name:'Manage Categories',
                        image_url:'images/simple-expense/categories.png',
                        description:'Customize expense and income categories.'
                    },
                    {
                        name:'Data as Excel File',
                        image_url:'images/simple-expense/export.png',
                        description:'Export recorded data as Excel files.'
                    },
                    {
                        name:'My Account',
                        image_url:'images/simple-expense/settings.png',
                        description:'Manage account and settings.'
                    }
                ]
            },
            {
                id:'simple-expense',
                title:'Book Center - Book Review',
                type_id:'web',
                type_name:'Web',
                demo_url:'https://bookcenter.lwinmoehein.info',
                description:'Book Center is a demo Vue.js Single Page Application (SPA) with Laravel API.Amazon CodePipeline is used to automatically build Vue.js source files to static files and deploy built files to Amazon S3. Github Actions is also used to deploy Laravel API code changes to Amazon EC2. Amazon RDS is used as a database of the application.',
                short_description: 'A book reviews website where users can browse books and write book reviews. Users can also bookmark their favorite books.',
                technologies:['Laravel','Vue.js','Amazon EC2','Amazon RDS','Amazon CodePipeline','Cloudflare'],
                features:[
                    {
                        name:'Login',
                        image_url:'images/book-center/login.png',
                        description:'Login with an email to access the website.'
                    },
                    {
                        name:'Book Recommendation',
                        image_url:'images/book-center/select_category.png',
                        description:'Select favorite book categories to get recommended based on reviews.'
                    },
                    {
                        name:'Home',
                        image_url:'images/book-center/home.png',
                        description:'Users can find latest books and recommended books.'
                    },
                    {
                        name:'Book Detail',
                        image_url:'images/book-center/detail.png',
                        description:'Users can see details of a book, bookmark it or write a book review.'
                    },
                    {
                        name:'Saved Books',
                        image_url:'images/book-center/saved.png',
                        description:'Books saved by the user can be seen at saved books.'
                    },
                    {
                        name:'Settings',
                        image_url:'images/book-center/settings.png',
                        description:'Users can change account settings such as user name, email etc.'
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