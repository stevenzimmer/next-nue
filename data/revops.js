import { dummyContent } from "./dummy-content";
const featuredContent = {
    label: "Beginners Guide",
    title: "Integrating RevOps into your workplace",
    description:
        "First two sentences of the post go here and are also awesome for people to get a sense of the article",
    btn: {
        text: "Read the article",
        link: "/resources/integrating-revops-into-your-workplace/",
    },
    image: {
        url: "",
        width: "",
        height: "",
    },
};
const featuredContent2 = {
    label: "Beginners Guide",
    title: "Managing RevOps from start to finish",
    description:
        "First two sentences of the post go here and are also awesome for people to get a sense of the article",
    btn: {
        text: "Read the article",
        link: "/resources/managing-revops-from-start-to-finish/",
    },
    image: {
        url: "",
        width: "",
        height: "",
    },
};

const titles = ["Read Next", "with similar topics", "Trending", "New"];

export const revops = [
    {
        header: "Articles",
        type: "articles",

        featured: {
            label: "Beginners Guide",
            title: "Integrating RevOps into your workplace",
            description:
                "First two sentences of the post go here and are also awesome for people to get a sense of the article",
            btn: {
                text: "Read the article",
                link: "/articles/integrating-revops-into-your-workplace/",
            },
            image: {
                url: "/images/revops/featured-1.jpg",
                width: 680,
                height: 450,
            },
        },
        footer: {
            label: "News",
            title: "Managing RevOps from start to finish",
            description:
                "First two sentences of the post go here and are also awesome for people to get a sense of the article",
            btn: {
                text: "Read the article",
                link: "/articles/managing-revops-from-start-to-finish/",
            },
            image: {
                url: "/images/revops/featured-2.jpg",
                width: 680,
                height: 450,
            },
        },
        items: [
            {
                image: {
                    url: "/images/revops/thumb-1.jpg",
                    width: 380,
                    height: 260,
                },
                label: "beginners guide",
                title: "Managing RevOps from start to finish",
                slug: "managing-revops-from-start-to-finish",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                link: "/articles/managing-revops-from-start-to-finishe/",
                sidebar: true,
            },
            {
                image: {
                    url: "/images/revops/thumb-2.jpg",
                    width: 380,
                    height: 260,
                },
                label: "beginners guide",
                title: "Integrating RevOps into your workplace",
                slug: "integrating-revops-into-your-workplace",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                link: "/articles/integrating-revops-into-your-workplace/",
                sidebar: true,
            },
            {
                image: {
                    url: "/images/revops/thumb-3.jpg",
                    width: 380,
                    height: 260,
                },
                label: "beginners guide",
                title: "What is RevOps?",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                link: "/articles/what-is-revops/",
                sidebar: true,
            },
            {
                image: {
                    url: "/images/revops/thumb-3.jpg",
                    width: 380,
                    height: 260,
                },
                label: "marketing",
                title: "Introducing Sales to RevOps",
                link: "/articles/introducing-sales-to-revops/",
                sidebar: true,
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            },
            {
                image: {
                    url: "/images/revops/thumb-1.jpg",
                    width: 380,
                    height: 260,
                },
                label: "news",
                title: "Let's talk Nue",
                link: "/articles/lets-talk-nue/",
                sidebar: true,
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            },
        ],
        postFooters: [
            {
                header: titles[0],
                items: dummyContent,
            },
            {
                header: "Articles " + titles[1],
                items: dummyContent,
            },
        ],
        rows: [
            {
                header: titles[2],
                items: [
                    {
                        image: {
                            url: "/images/revops/thumb-1.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "beginners guide",
                        title: "What is RevOps?",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                        link: "/articles/what-is-revops/",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-2.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "marketing",
                        title: "Introducing Sales to RevOps",
                        link: "/articles/introducing-sales-to-revops/",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-3.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "news",
                        title: "Let's talk Nue",
                        link: "/articles/lets-talk-nue/",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                ],
            },
            {
                header: titles[3] + " Articles",
                items: dummyContent,
            },
        ],
    },
    {
        header: "Podcast & Video",
        type: "podcast-video",
        featured: {
            label: "Beginners Guide",
            title: "Featured RevOps Podcast",
            description:
                "First two sentences of the post go here and are also awesome for people to get a sense of the article",
            btn: {
                text: "Listen now",
                link: "/podcast-video/integrating-revops-into-your-workplace/",
            },
            image: {
                url: "/images/revops/featured-1.jpg",
                width: 680,
                height: 450,
            },
            duration: "33:20",
        },
        postFooters: [
            {
                header: "Similar podcasts and videos",
                items: [
                    {
                        image: {
                            url: "/images/revops/thumb-1.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "beginners guide",
                        title: "Managing RevOps from start to finish",
                        slug: "managing-revops-from-start-to-finish",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                        link: "/podcast-video/managing-revops-from-start-to-finishe/",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-3.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "beginners guide",
                        title: "Integrating RevOps into your workplace",
                        slug: "integrating-revops-into-your-workplace",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                        link: "/podcast-video/integrating-revops-into-your-workplace/",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-2.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "beginners guide",
                        title: "What is RevOps?",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                        link: "/podcast-video/what-is-revops/",
                        slug: "what-is-revops",
                        duration: "14:05",
                    },
                ],
            },
        ],
        footer: {
            label: "Beginners Guide",
            title: "Featured RevOps Video",
            description:
                "First two sentences of the post go here and are also awesome for people to get a sense of the article",
            btn: {
                text: "Watch now",
                link: "/podcast-video/managing-revops-from-start-to-finish/",
            },
            image: {
                url: "/images/revops/featured-2.jpg",
                width: 680,
                height: 450,
            },
            duration: "46:15",
        },
        items: [
            {
                image: {
                    url: "/images/revops/thumb-3.jpg",
                    width: 380,
                    height: 260,
                },
                label: "beginners guide",
                title: "Managing RevOps from start to finish",
                slug: "managing-revops-from-start-to-finish",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                link: "/podcast-video/managing-revops-from-start-to-finishe/",
            },
            {
                image: {
                    url: "/images/revops/thumb-2.jpg",
                    width: 380,
                    height: 260,
                },
                label: "beginners guide",
                title: "Integrating RevOps into your workplace",
                slug: "integrating-revops-into-your-workplace",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                link: "/podcast-video/integrating-revops-into-your-workplace/",
            },
            {
                image: {
                    url: "/images/revops/thumb-3.jpg",
                    width: 380,
                    height: 260,
                },
                label: "beginners guide",
                title: "What is RevOps?",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                link: "/podcast-video/what-is-revops/",
                slug: "what-is-revops",
                duration: "14:05",
            },
            {
                image: {
                    url: "/images/revops/thumb-1.jpg",
                    width: 380,
                    height: 260,
                },
                label: "marketing",
                title: "Introducing Sales to RevOps",
                link: "/podcast-video/introducing-sales-to-revops/",
                slug: "introducing-sales-to-revops",
                duration: "22:16",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            },
            {
                image: {
                    url: "/images/revops/thumb-2.jpg",
                    width: 380,
                    height: 260,
                },
                label: "news",
                title: "Let's talk Nue",
                slug: "lets-talk-nue",
                link: "/podcast-video/lets-talk-nue/",
                duration: "10:47",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            },
        ],

        rows: [
            {
                // header: "Trending",
                items: [
                    {
                        image: {
                            url: "/images/revops/thumb-3.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "beginners guide",
                        title: "What is RevOps?",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                        link: "/podcast-video/what-is-revops/",
                        slug: "what-is-revops",
                        duration: "14:05",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-2.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "marketing",
                        title: "Introducing Sales to RevOps",
                        link: "/podcast-video/introducing-sales-to-revops/",
                        slug: "introducing-sales-to-revops",
                        duration: "22:16",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-1.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "news",
                        title: "Let's talk Nue",
                        slug: "lets-talk-nue",
                        link: "/podcast-video/lets-talk-nue/",
                        duration: "10:47",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                ],
            },
            {
                // header: "New articles",
                items: [
                    {
                        image: {
                            url: "/images/revops/thumb-3.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "beginners guide",
                        title: "What is RevOps?",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                        link: "/podcast-video/what-is-revops/",
                        slug: "what-is-revops",
                        duration: "14:05",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-1.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "marketing",
                        title: "Introducing Sales to RevOps",
                        link: "/podcast-video/introducing-sales-to-revops/",
                        slug: "introducing-sales-to-revops",
                        duration: "22:16",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-2.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "news",
                        title: "Let's talk Nue",
                        slug: "lets-talk-nue",
                        link: "/podcast-video/lets-talk-nue/",
                        duration: "10:47",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                ],
            },
        ],
    },
    {
        header: "Research",
        type: "research",
        featured: {
            label: "Beginners Guide",
            title: "Featured Research item 1",
            description:
                "First two sentences of the post go here and are also awesome for people to get a sense of the article",
            btn: {
                text: "Learn more",
                link: "/research/integrating-revops-into-your-workplace/",
            },
            image: {
                url: "/images/revops/featured-1.jpg",
                width: 680,
                height: 450,
            },
        },
        footer: {
            label: "Beginners Guide",
            title: "Featured research item 2",
            description:
                "First two sentences of the post go here and are also awesome for people to get a sense of the article",
            btn: {
                text: "Learn more",
                link: "/research/managing-revops-from-start-to-finish/",
            },
            image: {
                url: "/images/revops/featured-2.jpg",
                width: 680,
                height: 450,
            },
        },
        items: [
            {
                image: {
                    url: "/images/revops/thumb-2.jpg",
                    width: 380,
                    height: 260,
                },
                label: "beginners guide",
                title: "Managing RevOps from start to finish",
                slug: "managing-revops-from-start-to-finish",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                link: "/research/managing-revops-from-start-to-finishe/",
            },
            {
                image: {
                    url: "/images/revops/thumb-1.jpg",
                    width: 380,
                    height: 260,
                },
                label: "beginners guide",
                title: "Integrating RevOps into your workplace",
                slug: "integrating-revops-into-your-workplace",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                link: "/research/integrating-revops-into-your-workplace/",
            },
            {
                image: {
                    url: "/images/revops/thumb-3.jpg",
                    width: 380,
                    height: 260,
                },
                label: "beginners guide",
                title: "What is RevOps?",
                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                link: "/research/what-is-revops/",
                slug: "what-is-revops",
            },
            {
                image: {
                    url: "/images/revops/thumb-2.jpg",
                    width: 380,
                    height: 260,
                },
                label: "marketing",
                title: "Introducing Sales to RevOps",
                link: "/research/introducing-sales-to-revops/",
                slug: "introducing-sales-to-revops",

                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            },
            {
                image: {
                    url: "/images/revops/thumb-1.jpg",
                    width: 380,
                    height: 260,
                },
                label: "news",
                title: "Let's talk Nue",
                slug: "lets-talk-nue",
                link: "/research/lets-talk-nue/",

                description:
                    "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            },
        ],
        // postFooters: [
        //     {
        //         header: "Read next",
        //         items: dummyContent,
        //     },
        //     {
        //         header: "Articles with similar topics",
        //         items: dummyContent,
        //     },
        // ],
        rows: [
            {
                // header: "Trending",
                items: [
                    {
                        image: {
                            url: "/images/revops/thumb-2.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "beginners guide",
                        title: "What is RevOps?",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                        link: "/research/what-is-revops/",
                        slug: "what-is-revops",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-3.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "marketing",
                        title: "Introducing Sales to RevOps",
                        link: "/research/introducing-sales-to-revops/",
                        slug: "introducing-sales-to-revops",

                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-1.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "news",
                        title: "Let's talk Nue",
                        slug: "lets-talk-nue",
                        link: "/research/lets-talk-nue/",

                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                ],
            },
            {
                // header: "New articles",
                items: [
                    {
                        image: {
                            url: "/images/revops/thumb-1.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "beginners guide",
                        title: "What is RevOps?",
                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                        link: "/research/what-is-revops/",
                        slug: "what-is-revops",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-2.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "marketing",
                        title: "Introducing Sales to RevOps",
                        link: "/research/introducing-sales-to-revops/",
                        slug: "introducing-sales-to-revops",

                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                    {
                        image: {
                            url: "/images/revops/thumb-3.jpg",
                            width: 380,
                            height: 260,
                        },
                        label: "news",
                        title: "Let's talk Nue",
                        slug: "lets-talk-nue",
                        link: "/research/lets-talk-nue/",

                        description:
                            "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
                    },
                ],
            },
        ],
    },
];
