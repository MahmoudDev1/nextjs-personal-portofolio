interface Project {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Website to book appointments with counselors',
    image: '10.png',
    description: 'This website is made using laravel and vue.js in arabic for booking with professional consultants in all fields, with the possibility of paying in different ways.',
    link: 'https://estidam.sa/',
  },
  {
    title: 'Website for booking co-working spaces',
    image: '9.png',
    description: 'This website is made using laravel and vue.js in arabic for booking co-working spaces with payment methods like credit cards, apple pay and more.',
    link: 'https://roznamah.sa/',
  },
  {
    title: 'Gift Cards',
    image: '1.jpg',
    description: 'Selling gift cards website where users can buy cards and track orders, edit profile, a big admin page to control everything and more, built with laravel + Vue.js + Inertia.js',
  },
  {
    title: 'Blogs App',
    image: '2.jpg',
    description: 'Blogs app where users can add, delete, edit and search blogs + add blogs with tags for searching, an admin page to control users and blogs and everything on the website.',
  },
  {
    title: 'Modabook App',
    image: '13.png',
    description: 'This website is like facebook, made with NextJS allowing registered users to add, save, like posts and search users and alot more features.',
    link: 'https://moda-book.vercel.app/',
  },
  {
    title: 'Design Template',
    image: '3.jpg',
    description: 'This is a Big Design i Made With HTML And CSS And Some Javascript That has Cool Animations and Styles.',
    link: 'https://modapro1.github.io/project_1',
  },
  {
    title: 'Personal Portofolio',
    image: '11.png',
    description: 'My old personal portofolio made with VueJS, It has light and dark mode, animation on scroll and more.',
    link: 'https://modapro1.github.io/personal_portofolio_production/',
  },
  {
    title: 'Arabic Restaurant',
    image: '4.jpg',
    description: 'Restaurant template in arabic language has just dummy data inside it, made with html, css and javascript.',
    link: 'https://modapro1.github.io/project_3',
  },
  {
    title: 'React Design',
    image: '12.png',
    description: 'Simple website made with react js, html and css with dummy data inside it.',
    link: 'https://modapro1.github.io/react-project/',
  },
  {
    title: 'Kasper Template',
    image: '6.jpg',
    description: 'Kasper Template made with HTML, CSS and javascript.',
    link: 'https://modapro1.github.io/project_2',
  },
  {
    title: 'Creative Agency',
    image: '7.jpg',
    description: 'Creative Agency template made with HTML, CSS and Javascript.',
    link: 'https://modapro1.github.io/project_4/',
  },
  {
    title: 'Personal Portofolio',
    image: '8.jpg',
    description: 'My old personal portofolio website made with HTML, CSS and Javascript.',
    link: 'https://modapro1.github.io/personal_portofolio/',
  }
]

export default projects