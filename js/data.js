document.addEventListener('alpine:init', () => {
    Alpine.data('utils', () => ({
        currentProjectDetail: null,
        currentProjectFeature:null,
        currentProjectFeatureIndex:0,
        projectDetails:[
            {
                id: 'clouds-english',
                memorable_title: 'a serverless go-powered education platform',
                title: 'Clouds English Center',
                type_id: 'web-mobile',
                type_name: 'Education platform',
                demo_url: 'https://cloudsenglishcenter.com',
                description: 'A high-scale e-learning platform architected with a 100% Serverless Go backend. The system leverages Cloudflare for edge security, routing traffic through Amazon API Gateway to high-performance Go-based AWS Lambda functions deployed via AWS SAM. The architecture utilizes a decoupled event-driven model where the core API pushes tasks to Amazon SQS, triggering specialized worker Lambdas for real-time notifications and background processing.',
                short_description: 'An event-driven e-learning solution built entirely with Go and AWS Lambda, featuring a decoupled notification engine and RDS PostgreSQL.',
                technologies: [
                    'devicon-cloudflare-plain colored',
                    'devicon-amazonwebservices-plain colored',
                    'devicon-vercel-plain colored',
                    'devicon-react-plain colored',
                    'devicon-go-plain colored',
                    'devicon-firebase-plain colored',
                    'devicon-postgresql-plain colored',
                    'devicon-git-plain colored',
                ],
                features: [
                    {
                        name: 'Unified Admin Management System',
                        image_url: 'images/clouds/clouds_1.png',
                        description: 'A comprehensive management portal for handling course content, interactive quizzes, student profiles, recurring subscriptions, and automated notification campaigns.'
                    },
                    {
                        name: 'Cross-Platform Student App',
                        image_url: 'images/clouds/clouds_2.png',
                        description: 'A multi-platform mobile application published on the Apple App Store and Google Play Store. It provides students with a seamless learning experience, including interactive quizzes, course enrollment, progress tracking, and instant push notifications.'
                    },
                    {
                        name: 'Interactive Quiz & Assessment Interface',
                        image_url: 'images/clouds/clouds_3.png',
                        description: 'A dynamic assessment module designed for student engagement. It features real-time interactive quizzes, instant grading, and detailed answer feedback to help learners track their mastery of course topics.'
                    },
                    {
                        name: 'Automated Engagement & Campaign System',
                        image_url: 'images/clouds/clouds_4.png',
                        description: 'An end-to-end communication tool for driving student retention. It allows admins to configure targeted notification campaigns from the portal that trigger real-time mobile alerts and interactive in-app modals for immediate user action.'
                    },
                ]
            },
            {
                id:'meerkat',
                memorable_title:'a web page tracking web application',
                title:'meerkatsentry.co',
                type_id:'web',
                type_name:'Web App',
                demo_url:'https://meerkatsentry.co',
                description:'MeerkatSentry is a web application to track web page changes and get email notifications for new changes on the tracked pages. It uses Next.js SSR as a frontend and Laravel API on the backend where Laravel API is hosted on Amazon EC2 and SQS queue is used to store jobs for scraping web pages.',
                short_description: 'Meerkat is a simple web application to track web pages for changes using tags and get notified when there are changes related to the specified tags.',
                technologies:[
                    'devicon-cloudflare-plain colored',
                    'devicon-vercel-plain colored',
                    'devicon-linux-plain colored',
                    'devicon-nginx-plain colored',
                    'devicon-nextjs-plain colored',
                    'devicon-typescript-plain colored',
                    'devicon-laravel-plain colored',
                    'devicon-postgresql-plain colored',
                    'devicon-git-plain colored',
                ],
                features:[
                    {
                        name:'Create webpage for tracking',
                        image_url:'images/meerkat/home.png',
                        description:'Users can create a web page to track, specify url of the page, and tags to track content within the page.'
                    },
                    {
                        name:'Edit created web pages',
                        image_url:'images/meerkat/edit.png',
                        description:'Users can also edit their created web pages.'
                    },
                    {
                        name:'Notifications',
                        image_url:'images/meerkat/notifications.png',
                        description:'Users can get email notifications when there are changes on the tracked web pages.'
                    },
                    {
                        name:'Settings',
                        image_url:'images/meerkat/settings.png',
                        description:'Users can modify applications settings such as disabling notifications.'
                    }
                ]
            },
            {
                id: 'dev-courses',
                memorable_title: 'education website for developers',
                title: 'dev-courses',
                type_id: 'web',
                type_name: 'Education platform',
                demo_url: 'https://dev-courses.lwin.dev',
                description: 'DevCourses is a demo full-stack education platform that handles the entire online learning lifecycle. Using a robust Laravel backend and a sleek Tailwind interface, it provides creators with tools to structure curriculum, manage tiered subscriptions, and assess students through interactive exams. For learners, it offers a premium, distraction-free environment to consume multimedia content, track their module progress, and earn dynamically generated, verifiable certificates upon mastery.',
                short_description: 'DevCourses is a demo Learning Management System (LMS) built with Laravel that allows educators to monetize and deliver interactive video, audio, and quiz-based courses, complete with automated PDF certification',
                technologies: [
                    'devicon-cloudflare-plain colored',
                    'devicon-laravel-plain colored',
                    'devicon-tailwindcss-plain colored',
                    'devicon-linux-plain colored',
                    'devicon-nginx-plain colored',
                    'devicon-mysql-plain colored',
                    'devicon-git-plain colored',
                ],
                features: [

                ]
            },
            {
                id:'m-knowledge',
                title:'M Knowledge',
                memorable_title:'offline wikipedia Android Application',
                type_id:'android',
                type_name:'Android',
                users_count: 10000,
                demo_url:'https://play.google.com/store/apps/details?id=lab.justonebyte.mknowledge',
                description:'M Kowledge is an Android application which enables users for reading Myanmar Wikipedia articles online.Users can search Wikipedia articles and read them.It also has a feature where users can navigate to another article using links inside the reading article.',
                short_description: 'An android application for reading Myanmar Wikipedia articles offline. Features include articles search, detail, internal article linking, bookmarking, history, settings etc.',
                technologies:[
                    'devicon-kotlin-plain colored',
                    'devicon-python-plain colored',
                    'devicon-sqlite-plain colored',
                    'devicon-git-plain colored'
                ],
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
                memorable_title:'npm library to validate phone numbers',
                title:'MM Mobile Tools',
                type_id:'library',
                type_name:'Library',
                demo_url:'https://github.com/lwinmoehein/MM-Mobile-Tools-JS',
                description:'MM Mobile Tools is a JavaScript library to check and validate Myanmar mobile phone numbers. It\'s written in Typescript and uses Jest library to test library functions. Codecov is used to report code coverage on README page. Github Actions is used to automatically publish library releases to NPM.',
                short_description: 'A JavaScript library for validating Myanmar mobile phone numbers. It can validate a phone number, and get the mobile operator of the phone number.',
                technologies:[
                    'devicon-typescript-plain colored',
                    'devicon-jest-plain colored',
                    'devicon-codecov-plain colored',
                    'devicon-githubactions-plain colored',
                    'devicon-git-plain colored',],
                features:[
                    {
                        name:'Validate Phone No. and get operator name',
                        image_url:'images/mm-mobile-tools/usage.png',
                        description:'By installing the library from npm, library users can validate phone number, and get the operator of the phone number.'
                    }
                ]
            },
            {
                id: 'lwin-dev',
                memorable_title: 'this portfolio page!',
                title: 'lwin.dev',
                type_id: 'website',
                type_name: 'Website',
                demo_url: 'https://lwin.dev',
                description: 'This is my current portfolio website written in Javascript, Alpine.js and SCSS and deployed on Github Pages.',
                short_description: "My current portfolio website. I didn't want to use a template or vibe coding so I made my own portfolio project.",
                technologies: [
                    'devicon-javascript-plain colored',
                    'devicon-html5-plain colored',
                    'devicon-css3-plain colored',
                    'devicon-alpinejs-plain colored',
                    'devicon-git-plain colored'
                ],
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
