import React from "react";
import { FaGg } from "react-icons/fa";
import answer2 from "../../assets/blog/answer2.png"

const Blog = () => {
    return (
        <section className="w-screen lg:px-[12%] py-32 blog">
            <div className="blog-content px-4 lg:px-6 mb-12">
                <h4 className="flex bg-orange-50 px-2 py-3 rounded text-2xl font-bold">
                    <span className="mt-1 mr-2">
                        <FaGg></FaGg>
                    </span>{" "}
                    What are the different ways to manage a state in a React
                    application?
                </h4>
                <div className="answer mt-4 text-lg leading-9 text-gray-500">
                    <div className="mb-3 px-3">
                        In React apps, there are at least seven ways to handle
                        the state. Let us briefly explore a few of them in this
                        part.
                        <li className="text-black">URL</li>
                        <p className="px-5">
                            We can use URL to store some data: <br />
                            1. The id of the current item, being viewed
                            <br />
                            2. Filter parameters <br />
                            3. Pagination offset and limit <br /> 4. Sorting
                            data
                            <br />
                            Keeping such data in the URL allows users to share
                            deep links with others. It is recommended to avoid
                            storing such information in the app’s state to avoid
                            the URL in our app getting out of sync. The URL
                            should be used as the system of record, Read from it
                            as needed for information related to sorting,
                            pagination, etc. Update the URL as required when the
                            settings change. <br /> React Router is a great tool
                            to handle routes and manage the params.
                        </p>
                        <br />
                        <li className="text-black">Web Storage</li>
                        <p className="px-5">
                            The second option is to store the state in the
                            browser via web storage. This is useful when we want
                            to persist state between reloads and reboots.
                            Examples include cookies, local storage, and
                            IndexedDB. These are native browser technologies.
                            Data persisted in the browser is tied to a single
                            browser. So, if the user loads the site in a
                            different browser, the data will not be available.
                            We avoid storing sensitive data in the browser since
                            the user may access the app on a shared machine.
                            Some examples of where web storage might be most
                            useful include storing a user’s shopping cart,
                            saving partially completed form data or storing JWT
                            token in HttpOnly Cookie.
                        </p>
                        <br />
                        <li className="text-black">Local State</li>
                        <p className="px-5">
                            The third option is to use store state locally. It
                            is useful when one component needs the state.
                        </p>
                        <br />
                        <li className="text-black">Lifted State</li>
                        <p className="px-5">
                            The Fourth option is to define the state in the
                            parent component. Often, the same state is used
                            across multiple components. In those cases, it is
                            useful to lift the state to a common parent. The
                            lifting state is a two‑step process. First, we
                            declare the state in a common parent component, and
                            then we pass the state down to child components via
                            props. This pattern should be considered any time a
                            few related components need to use the same state.
                            The lifting state avoids duplicating states in
                            multiple components. It helps to assure that our
                            components all consistently reflect the same state.
                        </p>
                        <br />
                        <li className="text-black">Derived State</li>
                        <p className="px-5">
                            The fifth option is to compute the new state based
                            on the available state and we do not need to declare
                            a state at all. If there are existing values that
                            can be composed to give us the information we need,
                            then we can calculate that information on each
                            render instead of storing it.
                        </p>
                    </div>
                </div>
            </div>
            <div className="blog-content px-4 lg:px-6 mb-12">
                <h4 className="flex bg-orange-50 px-2 py-3 rounded text-2xl font-bold">
                    <span className="mt-1 mr-2">
                        <FaGg></FaGg>
                    </span>{" "}
                    How does prototypical inheritance work?
                </h4>
                <div className="answer mt-4 text-lg leading-9 text-gray-500">
                    <div className="mb-3 px-3">
                        <img src={answer2} alt="" />
                        <p>
                            Simply put, prototypical inheritance refers to the
                            ability to access object properties from another
                            object. We use a JavaScript prototype to add new
                            properties and methods to an existing object
                            constructor. We can then essentially tell our JS
                            code to inherit properties from a prototype.
                            Prototypical inheritance allows us to reuse the
                            properties or methods from one JavaScript object to
                            another through a reference pointer function. <br />
                            <br />
                            All JavaScript objects inherit properties and
                            methods from a prototype: <br />
                            <br />
                            <li className="ml-3">
                                Date objects inherit from Date.prototype.
                            </li>
                            <li className="ml-3">
                                Array objects inherit from Array.prototype.
                            </li>
                            <li className="ml-3">
                                Player objects inherit from Player.prototype.
                            </li>
                            <br />
                            The Object.prototype is on top of the prototype
                            inheritance chain. ​ Date objects, Array objects,
                            and Player objects all inherit from
                            Object.prototype.
                        </p>
                    </div>
                </div>
            </div>
            <div className="blog-content px-4 lg:px-6 mb-12">
                <h4 className="flex bg-orange-50 px-2 py-3 rounded text-2xl font-bold">
                    <span className="mt-1 mr-2">
                        <FaGg></FaGg>
                    </span>{" "}
                    What is a unit test? Why should we write unit tests?
                </h4>
                <div className="answer mt-4 text-lg leading-9 text-gray-500">
                    <div className="mb-3 px-3">
                        <p className="pt-4">
                            <strong className="text-xl text-gray-700">
                                Unit testing
                            </strong>
                            <br /> Unit testing is a software development
                            process in which the smallest testable parts of an
                            application, called units, are individually and
                            independently scrutinized for proper operation. This
                            testing methodology is done during the development
                            process by the software developers and sometimes QA
                            staff. The main objective of unit testing is to
                            isolate written code to test and determine if it
                            works as intended.
                            <br />
                            <br />
                            Unit testing is an important step in the development
                            process, because if done correctly, it can help
                            detect early flaws in code which may be more
                            difficult to find in later testing stages. It is a
                            component of test-driven development (TDD), a
                            pragmatic methodology that takes a meticulous
                            approach to building a product by means of continual
                            testing and revision.
                        </p>
                        <p className="pt-6">
                            <strong className="text-xl text-gray-700">
                                How unit tests work
                            </strong>
                            <br /> A unit test typically comprises of three
                            stages: plan, cases and scripting and the unit test
                            itself. In the first step, the unit test is prepared
                            and reviewed. The next step is for the test cases
                            and scripts to be made, then the code is tested.
                            <br />
                            <br />
                            Test-driven development requires that developers
                            first write failing unit tests. Then they write code
                            and refactor the application until the test passes.
                            TDD typically results in an explicit and predictable
                            code base. <br />
                            <br />
                            Each test case is tested independently in an
                            isolated environment, as to ensure a lack of
                            dependencies in the code. The software developer
                            should code criteria to verify each test case, and a
                            testing framework can be used to report any failed
                            tests. Developers should not make a test for every
                            line of code, as this may take up too much time.
                            Developers should then create tests focusing on code
                            which could affect the behavior of the software
                            being developed. <br />
                            <br />
                            Unit testing involves only those characteristics
                            that are vital to the performance of the unit under
                            test. This encourages developers to modify the
                            source code without immediate concerns about how
                            such changes might affect the functioning of other
                            units or the program as a whole. Once all of the
                            units in a program have been found to be working in
                            the most efficient and error-free manner possible,
                            larger components of the program can be evaluated by
                            means of integration testing. Unit tests should be
                            performed frequently, and can be done manually or
                            can be automated.
                        </p>
                    </div>
                </div>
            </div>
            <div className="blog-content px-4 lg:px-6 mb-12">
                <h4 className="flex bg-orange-50 px-2 py-3 rounded text-2xl font-bold">
                    <span className="mt-1 mr-2">
                        <FaGg></FaGg>
                    </span>{" "}
                    React vs. Angular vs. Vue?
                </h4>
                <div className="answer mt-4 text-lg leading-9 text-gray-500">
                    <div className="mb-3 px-3">
                        <p>
                            React is a UI library, Angular is a fully-fledged
                            front-end framework, while Vue.js is a progressive
                            framework. <br />
                            Here is the differences to understand the philosophy
                            behind them:
                            <br />
                            <br />
                            <strong className="text-3xl text-gray-700">
                                Architecture
                            </strong>
                            <br />
                            <br />
                            <h3 className="font-bold text-xl mb-3">React</h3>
                            <li>
                                React doesn’t enforce a specific project
                                structure.React can be used as a UI library to
                                render elements, without enforcing a specific
                                project structure, and that’s why it’s not
                                strictly a framework.
                            </li>
                            <li>
                                React Elements are the smallest building blocks
                                of React apps. They are more powerful than DOM
                                elements because the React DOM makes sure to
                                update them efficiently whenever something
                                changes.
                            </li>
                            <li>
                                Components are larger building blocks that
                                define independent and reusable pieces to be
                                used throughout the application. They accept
                                inputs called props and produce elements that
                                are then displayed to the user.
                            </li>
                            <li>
                                React is based on JavaScript, but it’s mostly
                                combined with JSX (JavaScript XML), a syntax
                                extension that allows you to create elements
                                that contain HTML and JavaScript at the same
                                time. <br /> Anything you create with JSX could
                                also be created with the React JavaScript API,
                                but most developers prefer JSX because it’s more
                                intuitive.
                            </li>
                            <br />
                            <h3 className="font-bold text-xl mb-3">Vue</h3>
                            <li>
                                The Vue.js core library focuses on the View
                                layer only. It’s called a progressive framework
                                because you can extend its functionality with
                                official and third-party packages, such as Vue
                                Router or Vuex, to turn it into an actual
                                framework.
                            </li>
                            <li>
                                Although Vue is not strictly associated with the
                                MVVM (Model-View-ViewModel) pattern, its design
                                was partly inspired by it. With Vue, you’ll be
                                working mostly on the ViewModel layer, to make
                                sure that the application data is processed in a
                                way that allows the framework to render an
                                up-to-date View.
                            </li>
                            <li>
                                Vue’s templating syntax lets you create View
                                components, and it combines familiar HTML with
                                special directives and features. This templating
                                syntax is preferred, even though raw JavaScript
                                and JSX are also supported.
                            </li>
                            <li>
                                Components in Vue are small, self-contained, and
                                can be reused throughout the application. Single
                                File Components (SFCs) with the .vue extension
                                contain HTML, CSS, and JavaScript so that all
                                relevant code resides in one file. <br />
                                SFCs are the recommended way to organize code in
                                Vue.js projects, especially larger ones. Tools
                                such as Webpack or Browserify are required to
                                transpile SFCs into working JavaScript code.
                            </li>
                            <br />
                            <h3 className="font-bold text-xl mb-3">Angular</h3>
                            <li>
                                AngularJS, the original framework, is an MVC
                                (Model-View-Controller)) framework. But in
                                Angular 2, there’s no strict association with
                                MV*-patterns as it is also component-based.
                            </li>
                            <li>
                                Projects in Angular are structured into Modules,
                                Components, and Services. Each Angular
                                application has at least one root component and
                                one root module.
                            </li>
                            <li>
                                Angular templates are written in HTML but can
                                also include Angular template syntax with
                                special directives to output reactive data and
                                render multiple elements, among other things.
                            </li>
                            <li>
                                Each component in Angular contains a Template, a
                                Class that defines the application logic, and
                                MetaData (Decorators). The metadata for a
                                component tells Angular where to find the
                                building blocks that it needs to create and
                                present its view. <br />
                                Services in Angular are used by Components to
                                delegate business-logic tasks such as fetching
                                data or validating input. They are a distinct
                                part of Angular applications. While Angular
                                doesn’t enforce their use, it’s highly suggested
                                to structure apps as a set of distinct services
                                that can be reused.
                            </li>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
