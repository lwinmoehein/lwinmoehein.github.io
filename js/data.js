document.addEventListener('alpine:init', () => {
    Alpine.data('utils', () => ({
        currentProjectDetail: null,
        currentProjectFeature:null,
        currentProjectFeatureIndex:0,
        projectDetails:[
            {
                id:'english-daily',
                title:'englishdailyacademy.com',
                memorable_title:'learning platform website',
                type_id:'web',
                type_name:'Web App',
                demo_url:'https://englishdailyacademy.com',
                short_description:'An English learning web application where students learn English from courses with a subscription. Features include subscription model, videos, articles, audios, quizzes, exams, certificates, books, account settings etc which were all configure via admin portal.',
                description:'englishdailyacademy.com is a website for English learners where students can learn English from the website. Courses and contents are uploaded by the website admin using Admin Portal. A student first subscribe to the website by monthly, yearly etc. Course contents contain articles, videos, audios, quizzes and exams to automatically give students course completion certificates directly from the website.',
                technologies:['devicon-php-plain colored','devicon-javascript-plain colored','devicon-html5-plain colored','devicon-css3-plain colored','devicon-laravel-plain colored','devicon-vuejs-plain colored','devicon-mysql-plain colored','devicon-tailwindcss-plain colored','devicon-nginx-plain colored','devicon-githubactions-plain colored','devicon-ubuntu-plain colored','devicon-git-plain colored','devicon-phpstorm-plain colored'],
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
                memorable_title:'expense recorder Android application',
                type_id:'android',
                type_name:'Android',
                users_count:10,
                demo_url:'https://play.google.com/store/apps/details?id=lab.justonebyte.simpleexpense',
                description:'Simple Expense is an Android application on Google Play which simply enables users to record their expense and income.This application contains features such as exporting data as Excel files, backing up data with Google account, managing categories. Laravel API is hosted on Amazon EC2 and uses Amazon RDS as database. Github Actions is used to automatically update code changes to EC2.',
                short_description: 'An Android application to record expense and income. Features include recording income and expense data, charts, manage categories, export data, sync data with Google account, settings etc.',
                technologies:['devicon-php-plain colored','devicon-kotlin-plain colored','devicon-laravel-plain colored','devicon-jetpackcompose-plain colored','devicon-mysql-plain colored','devicon-nginx-plain colored','devicon-githubactions-plain colored','devicon-ubuntu-plain colored','devicon-git-plain colored','devicon-phpstorm-plain colored','devicon-androidstudio-plain colored'],
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
                id:'book-center',
                title:'bookcenter.lwinmoehein.info',
                memorable_title:'book review demo website',
                type_id:'web',
                type_name:'Web App',
                demo_url:'https://bookcenter.lwinmoehein.info',
                description:'Book Center is a demo Vue.js Single Page Application (SPA) with Laravel API.Amazon CodePipeline is used to automatically build Vue.js source files to static files and deploy built files to Amazon S3. Github Actions is also used to deploy Laravel API code changes to Amazon EC2. Amazon RDS is used as a database of the application.',
                short_description: 'A book reviews website where users can browse books and write book reviews. Features include favorite category, book detail, writing reviews, bookmarking, book categories, account settings etc.',
                technologies:['devicon-php-plain colored','devicon-javascript-plain colored','devicon-html5-plain colored','devicon-css3-plain colored','devicon-laravel-plain colored','devicon-vuejs-plain colored','devicon-tailwindcss-plain colored','devicon-mysql-plain colored','devicon-nginx-plain colored','devicon-amazonwebservices-plain colored','devicon-ubuntu-plain colored','devicon-git-plain colored','devicon-phpstorm-plain colored','devicon-webstorm-plain colored'],
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
            },
            {
                id:'m-knowledge',
                title:'M Knowledge',
                memorable_title:'offline wikipedia Android Application',
                type_id:'android',
                type_name:'Android',
                users_count: 4000,
                demo_url:'https://play.google.com/store/apps/details?id=lab.justonebyte.mknowledge',
                description:'M Kowledge is an Android application which enables users to read Myanmar Wikipedia articles online.Users can search Wikipedia articles and read them.It also has a feature where users can navigate to another article using links inside the reading article.',
                short_description: 'An android application to read Myanmar Wikipedia articles offline. Features include articles search, detail, internal article linking, bookmarking, history, settings etc.',
                technologies:['devicon-kotlin-plain colored','devicon-python-plain colored','devicon-jetpackcompose-plain colored','devicon-git-plain colored','devicon-androidstudio-plain colored'],
                features:[
                    {
                        name:'Home',
                        image_url:'images/m-knowledge/home.png',
                        description:'Users can read random articles and today\'s article.'
                    },
                    {
                        name:'Search Articles',
                        image_url:'images/m-knowledge/search.png',
                        description:'Search Wikipedia articles without the need of the internet.'
                    },
                    {
                        name:'Article Detail',
                        image_url:'images/m-knowledge/detail.png',
                        description:'Read articles and click through links to read mentioned articles using links.'
                    },
                    {
                        name:'Read History',
                        image_url:'images/m-knowledge/history.png',
                        description:'Users can also check their history of the articles they have read.'
                    },
                    {
                        name:'Saved Articles',
                        image_url:'images/m-knowledge/favorites.png',
                        description:'Users can see their favorite articles.'
                    },
                    {
                        name:'Settings',
                        image_url:'images/m-knowledge/settings.png',
                        description:'Manage application settings such as dark mode, font sizes, home screen customizations.'
                    }
                ]
            },
            {
                id:'mm-mobile-tools',
                memorable_title:'npm library to validate phones',
                title:'MM Mobile Tools',
                type_id:'library',
                type_name:'Library',
                demo_url:'https://github.com/lwinmoehein/MM-Mobile-Tools-JS',
                description:'MM Mobile Tools is a JavaScript library to check and validate Myanmar mobile phone numbers. It\'s written in Typescript and uses Jest library to test library functions.Codecov is used to report code coverage on README page. Github Actions is used to automatically publish library releases to NPM.',
                short_description: 'A JavaScript library for validating Myanmar mobile phone numbers. It can validate a phone number, and get the mobile operator of the phone number.',
                technologies:['devicon-typescript-plain colored','devicon-jest-plain colored','devicon-codecov-plain colored','devicon-githubactions-plain colored','devicon-git-plain colored','devicon-webstorm-plain colored'],
                features:[
                    {
                        name:'Validate Phone No. and get operator name',
                        image_url:'images/mm-mobile-tools/usage.png',
                        description:'By installing the library from npm, library users can validate phone number, and get the operator of the phone number.'
                    }
                ]
            },
            {
                id:'lwinmoehein-info',
                memorable_title:'my portfolio website',
                title:'lwinmoehein.info',
                type_id:'website',
                type_name:'Website',
                demo_url:'https://lwinmoehein.info',
                description:'This is my current portfolio website written in Javascript, Alpine.js and SCSS and deployed on Github Pages.',
                short_description: 'My current portfolio website. I didn\'t want to used a template so I made my own portfolio project.',
                technologies:['devicon-javascript-plain colored','devicon-html5-plain colored','devicon-css3-plain colored','devicon-alpinejs-plain colored','devicon-git-plain colored','devicon-webstorm-plain colored'],
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