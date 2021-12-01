import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";

// Next
import Head from "next/head";
import Link from "next/link";

// Components
import Header1 from "@/components/text/Header1";
import Header2 from "@/components/text/Header2";
import Section from "@/components/Section";
import SectionFade from "@/components/SectionFade";
import HeaderP from "@/components/text/HeaderP";

export default function Careers() {
    return (
        <>
            <Head>
                <title>We&apos;re hiring!</title>
                <meta
                    name="description"
                    content="We are looking for curious, energetic rock stars to join our engineering team."
                />
            </Head>
            <Section bgColor="bg-gradient-to-br from-white via-red-50 to-red-100">
                <SectionFade />

                <div className="container relative py-32 lg:py-40">
                    <div className="text-center mb-24">
                        <Header1>Join us</Header1>
                    </div>
                    <div className="flex flex-wrap justify-between -mx-6">
                        <div className="w-full lg:w-3/12 px-6 mb-6 lg:mb-0 py-12">
                            <div className="bg-white shadow-inner px-6 py-4">
                                <div className="border-b last:border-transparent py-2">
                                    <a
                                        className="font-hntMedium hover:text-blue-500 transition-colors duration-200"
                                        href="#principal-engineer"
                                    >
                                        Principal Engineer
                                    </a>
                                </div>
                                <div className="border-b last:border-transparent py-2">
                                    <a
                                        className="font-hntMedium hover:text-blue-500 transition-colors duration-200"
                                        href="#senior-engineer"
                                    >
                                        Senior Engineer
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-9/12 px-6">
                            <div
                                className="py-12 border-b"
                                id="principal-engineer"
                            >
                                <div className="mb-6">
                                    <Header2>Principal Engineer</Header2>
                                </div>

                                <HeaderP>
                                    We are looking for curious, energetic rock
                                    stars to join our engineering team.
                                </HeaderP>
                                <div className="mb-6">
                                    <div className="mb-2">
                                        <p className="font-hntMedium text-xl">
                                            Job Requirements:
                                        </p>
                                    </div>
                                    <div>
                                        <ul className="mb-6 list-disc pl-6">
                                            <li>
                                                You will be a full-stack
                                                Principal SaaS Engineer /
                                                hands-on Architect in Nue’s core
                                                engineering team to deliver and
                                                a metadata-driven, API-first,
                                                componentized, highly-extensible
                                                SaaS application suites that aim
                                                to deliver top-notch user
                                                experience and business values.
                                            </li>
                                            <li>
                                                You will architect and implement
                                                SaaS applications that are
                                                highly scalable, secure, highly
                                                available, fault tolerant using
                                                cutting edge cloud technologies
                                                deployed over AWS.
                                            </li>
                                            <li>
                                                You will make and own
                                                architectural decisions that
                                                drive the scaling of Nue’s
                                                applications.
                                            </li>
                                            <li>
                                                You will establish and
                                                continuously enhance the CICD
                                                pipeline.
                                            </li>
                                            <li>
                                                You will develop and maintain
                                                automated tests on top of
                                                industry-standard test
                                                frameworks using Java, Python,
                                                and integrate the tests into the
                                                CICD pipeline.
                                            </li>
                                            <li>
                                                You will implement solutions
                                                using iterative processes, Agile
                                                development methodologies and
                                                scenario-driven development.
                                            </li>
                                            <li>
                                                You will collaborate seamlessly
                                                with core products and
                                                engineering team members located
                                                globally and reliably meet
                                                deadlines.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2">
                                        <p className="font-hntMedium text-xl">
                                            Qualifications
                                        </p>
                                    </div>
                                    <div>
                                        <ul className="mb-6 list-disc pl-6">
                                            <li>
                                                Highly motivated self-starter
                                                with a builder&apos;s mindset;
                                                expect plenty of freedom and
                                                plenty of responsibilities
                                            </li>
                                            <li>
                                                Bachelor’s degree in Computer
                                                Science or related engineering
                                                fields.
                                            </li>
                                            <li>
                                                7+ years of hands-on experience
                                                as a lead software engineer or
                                                an architect in the enterprise
                                                SaaS domain for applications,
                                                including expertise in building
                                                large and distributed systems
                                                that support business-critical
                                                cloud services deployed over AWS
                                            </li>
                                            <li>
                                                In-depth knowledge and hands-on
                                                experience of Java technologies,
                                                Restful APIs, SpringBoot,
                                                horizontal scalability,
                                                microservices architecture, and
                                                high availability principles.
                                            </li>
                                            <li>
                                                In-depth knowledge and hands-on
                                                experience of metadata-driven
                                                design principles.
                                            </li>
                                            <li>
                                                In-depth understanding of
                                                service and data integration
                                                among Cloud services.
                                            </li>
                                            <li>
                                                In-depth understanding of RDBMS,
                                                NoSQL and object modeling.
                                            </li>
                                            <li>
                                                In-depth understanding of
                                                componentized user interfaces.
                                            </li>
                                            <li>
                                                Highly skilled in public cloud
                                                technologies on AWS.
                                            </li>
                                            <li>
                                                Familiar with one or more
                                                Continuous Integration software
                                                (Jenkins, Bitbucket Pipelines,
                                                TravisCI, CircleCI, AWS
                                                CodePipeline)
                                            </li>
                                            <li>
                                                Familiar with one or more
                                                Continuous Delivery/Deployment
                                                software (Container technologies
                                                such as Docker, Kubernetes,
                                                Spinnaker, Terraform/AWS
                                                CloudFormation, AWS EC2/VMs)
                                            </li>
                                            <li>
                                                Excellent communication skills
                                                Experience with financial SaaS
                                                applications is preferred.
                                            </li>
                                            <li>
                                                Experience with Salesforce
                                                platform is preferred.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="py-12" id="senior-engineer">
                                <div className="mb-6">
                                    <Header2>Senior Engineer</Header2>
                                </div>

                                <div className="mb-6">
                                    <div className="mb-2">
                                        <p className="font-hntMedium text-xl">
                                            Job Requirements:
                                        </p>
                                    </div>
                                    <div>
                                        <ul className="mb-6 list-disc pl-6">
                                            <li>
                                                Develops and architects
                                                multi-tenancy SAAS application
                                                with shared-nothing architecture
                                                based on spring boot framework,
                                                develop and architect scalable
                                                and reliable application which
                                                will leverage micro service
                                                architecture includes API
                                                gateway, service registry,
                                                service monitoring etc.
                                            </li>
                                            <li>
                                                Build and architect streaming
                                                based pipeline to integrate with
                                                externals GL/Accounting systems
                                                with Kafka and Flink and
                                                architect GL data model
                                                normalization and job
                                                management, build and architect
                                                financial data analytics
                                                platform with analytics storage
                                                engine like postgres, snowflake,
                                                redshift, etc.;
                                            </li>
                                            <li>
                                                Works with other team members
                                                and management to complement and
                                                complete the development
                                                process;
                                            </li>
                                            <li>
                                                Mentors and guides other
                                                software engineers;
                                            </li>
                                            <li>
                                                Oversee the design, scoping,
                                                implementation, and testing of
                                                new features end-to-end;
                                            </li>
                                            <li>
                                                Drive technical excellence and
                                                implementation of best
                                                engineering practices such as
                                                design review, continuous
                                                integration and code review;
                                            </li>
                                            <li>
                                                Create and maintain an open and
                                                transparent environment that
                                                values speed, innovation and
                                                quality;
                                            </li>
                                            <li>
                                                Provide architecture and
                                                technical guidance for the
                                                software development team;
                                            </li>
                                            <li>
                                                Stays current with relevant
                                                technologies, applying them to
                                                Nue’s SaaS applications as
                                                appropriate;
                                            </li>
                                            <li>
                                                Helps define the standards and
                                                guidelines for the definition
                                                and development of Nue’s
                                                applications, components and
                                                services;
                                            </li>
                                            <li>
                                                Delivers world class, high
                                                quality design and code using
                                                the latest development tools and
                                                frameworks. Uses agile
                                                methodologies including TDD, CI,
                                                Refactoring and Code Reviews.
                                            </li>
                                        </ul>
                                        <HeaderP>
                                            10% international travel may be
                                            required.
                                        </HeaderP>
                                        <HeaderP>
                                            <span className="font-hntMedium">
                                                Education Requirement
                                            </span>
                                            : Bachelor’s degree or foreign
                                            equivalent in Software Engineering,
                                            Computer Science or a closely
                                            related field.
                                        </HeaderP>
                                        <HeaderP>
                                            <span className="font-hntMedium">
                                                Experience Requirement
                                            </span>
                                            : 7 years of post-baccalaureate,
                                            progressive experience in the same
                                            or similar occupation.
                                        </HeaderP>
                                        <HeaderP>
                                            <span className="font-hntMedium">
                                                Special Requirements
                                            </span>
                                            : 7 years of software development,
                                            design, and implementation
                                            experience in the finance, billing,
                                            and/or subscription software
                                            industry, specifically using
                                            multiple shard database
                                            architecture. 7 years of experience
                                            with Force.com application lifecycle
                                            implementations. 7 years of
                                            experience with application
                                            performance profiling and tuning. 7
                                            years of experience building highly
                                            flexible Application Programming
                                            Interfaces (APIs).
                                        </HeaderP>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
