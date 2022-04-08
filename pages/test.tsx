import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { CodingEnvironment } from '../common/CodingEnvironment'

const Introduction: NextPage = () => {
    return (
        <CodingEnvironment instructions={<Instructions />} codeLanguage='html' defaultCode='' nextPage='/test-2' />
    )
}


const Instructions: React.FC = () => {

    return (
        <>
            <article  ><div ><p  ><strong>Introduction to HTML</strong></p><p  >Welcome to the world of code! Last year, millions of learners from our community started with HTML. Why? HTML is the skeleton of all web pages. It’s often the first language learned by developers, marketers, and designers and is core to front-end development work. If this is your first time touching code, we’re excited for what you’re about to create.</p><p  >So what exactly is HTML? HTML provides structure to the content appearing on a website, such as images, text, or videos. Right-click on any page on the internet, choose “Inspect,” and you’ll see HTML in a panel of your screen.</p><p  >HTML stands for HyperText Markup Language:</p><ul  ><li >A <em>markup</em> language is a computer language that defines the structure and presentation of raw text.</li></ul><ul  ><li >In HTML, the computer can interpret <em>raw text</em> that is wrapped in HTML elements.</li></ul><ul  ><li ><em>HyperText</em> is text displayed on a computer or device that provides access to other text through links, also known as <em>hyperlinks</em>. You probably clicked on a couple of hyperlinks on your way to this Codecademy course.</li></ul><p  >Learning HTML is the first step in creating websites, but even a bit of knowledge can help you inject code snippets into newsletter, blog or website templates. As you continue learning, you can layer HTML with CSS and JavaScript to create visually compelling and dynamic websites. But for now, we’re going to focus on how to add and modify basic content on a page, like text, images, and videos. Don’t worry if the websites look ugly — we’re just getting started.</p><p  >
            </p><p  >
                </p><p  ><strong>HTML Anatomy</strong></p><p  >HTML is composed of <a href="https://www.codecademy.com/resources/docs/html/elements?page_ref=catalog">elements</a>. These elements structure the webpage and define its content. Let’s take a look at how they’re written.</p><p  >The diagram to the right displays an HTML paragraph element. As we can see, the paragraph element is made up of:</p><ul  ><li >An <em>opening tag</em> (<code>&lt;p&gt;</code>)</li></ul><ul  ><li >The content (“Hello World!” text)</li></ul><ul  ><li >A <em>closing tag</em> (<code>&lt;/p&gt;</code>)</li></ul><p  >A <em>tag</em> and the <em>content</em> between it is called an HTML element. There are many tags that we can use to organize and display text and other types of content, like images.</p><p  >Let’s quickly review each part of the element pictured:</p><ul  ><li >HTML element (or simply, element) — a unit of content in an HTML document formed by HTML tags and the text or media it contains.</li></ul><ul  ><li >HTML Tag — the element name, surrounded by an opening (<code>&lt;</code>) and closing (<code>&gt;</code>) angle bracket.</li></ul><ul  ><li >Opening Tag — the first HTML tag used to start an HTML element. The tag type is surrounded by opening and closing angle brackets.</li></ul><ul  ><li >Content — The information (text or other elements) contained between the opening and closing tags of an HTML element.</li></ul><ul  ><li >Closing tag — the second HTML tag used to end an HTML element. Closing tags have a forward slash (<code>/</code>) inside of them, directly after the left angle bracket.</li></ul><p  ><a href="https://content.codecademy.com/courses/learn-html/elements-and-structure/html%20lesson%20image.svg">https://content.codecademy.com/courses/learn-html/elements-and-structure/html lesson image.svg</a></p><p  >
                </p><p  ><strong>The Body</strong></p><p  >One of the key HTML elements we use to build a webpage is the <em>body</em> element. Only content inside the opening and closing body tags can be displayed to the screen. Here’s what opening and closing body tags look like:</p><pre  ><code>&lt;body&gt;

                    &lt;/body&gt;

                </code></pre><p  >Once the file has a body, many different types of content – including text, images, and buttons – can be added to the body.</p><pre  ><code>&lt;body&gt;
                    &lt;p&gt;What&#x27;s up, doc?&lt;/p&gt;
                    &lt;/body&gt;

                </code></pre><p  ><strong></strong><strong><strong>Instructions</strong></strong></p><ol ><li>Add a body to your web page using the <code>&lt;body&gt;</code> element.</li></ol><ol type="1" start="2"><li>Add the following code between your opening and closing body tags:</li></ol><pre  ><code>&lt;p&gt;&quot;Life is very short and what we have to do must be done in the now.&quot; - Audre Lorde&lt;/p&gt;

                </code></pre><p  ><strong>Note</strong>: While some browsers may render some content outside body tags as well to accommodate the occasional mistake in your HTML, not all browsers do this! The best way to ensure that all your HTML renders the same way in all browsers is to ensure that your elements remain within the opening and closing body tags.</p><p  >
                </p><p  >Here are some helpful links to the top questions asked by coders about this exercise:</p><p  >1. <a href="https://discuss.codecademy.com/t/what-is-a-web-browser/297280/1">What is a web browser?</a>
                    2. <a href="https://discuss.codecademy.com/t/i-added-body-to-my-page-as-instructed-but-i-am-not-passing-step-one-why/297281/1">I added &lt;body&gt; to my page as instructed but I am not passing step one. Why?</a>
                    3. <a href="https://discuss.codecademy.com/t/why-does-content-outside-the-body-still-display/322686/1">Why does content outside the body still display?</a></p><p  >
                </p></div></article>
        </ >
    )
}


export default Introduction
