interface Project {
  image: string;
  title: string;
  description: string;
  link?: string;
  ar_title: string;
  ar_description: string;
}

export const projects: Project[] = [
  {
    title: 'Website to book appointments with counselors',
    image: '10.png',
    description: 'This website is made using laravel and vue.js in arabic for booking with professional consultants in all fields, with the possibility of paying in different ways.',
    link: 'https://estidam.sa/',
    ar_title: 'موقع لحجز مواعيد مع المستشارين',
    ar_description: 'تم إنشاء هذا الموقع باستخدام Laravel و Vue.js باللغة العربية لحجز مواعيد مع المستشارين المحترفين في جميع المجالات، مع إمكانية الدفع بطرق مختلفة.'
  },
  {
    title: 'Website for booking co-working spaces',
    image: '9.png',
    description: 'This website is made using laravel and vue.js in arabic for booking co-working spaces with payment methods like credit cards, apple pay and more.',
    link: 'https://roznamah.sa/',
    ar_title: 'موقع لحجز مساحات العمل المشتركة',
    ar_description: 'تم إنشاء هذا الموقع باستخدام Laravel و Vue.js باللغة العربية لحجز مساحات العمل المشتركة مع طرق الدفع مثل بطاقات الائتمان وApple Pay وغيرها.'
  },
  {
    title: 'Gift Cards',
    image: '1.jpg',
    description: 'Selling gift cards website where users can buy cards and track orders, edit profile, a big admin page to control everything and more, built with laravel + Vue.js + Inertia.js',
    ar_title: 'بطاقات الهدايا',
    ar_description: 'موقع لبيع بطاقات الهدايا حيث يمكن للمستخدمين شراء البطاقات وتتبع الطلبات وتعديل الملف الشخصي، مع صفحة إدارية كبيرة للتحكم في كل شيء والمزيد، تم بناؤه باستخدام Laravel + Vue.js + Inertia.js'
  },
  {
    title: 'Blogs App',
    image: '2.jpg',
    description: 'Blogs app where users can add, delete, edit and search blogs + add blogs with tags for searching, an admin page to control users and blogs and everything on the website.',
    ar_title: 'تطبيق المدونات',
    ar_description: 'موقع للمدونات حيث يمكن للمستخدمين إضافة، حذف، تعديل والبحث في المدونات + إضافة مدونات بعلامات للبحث، مع صفحة إدارية للتحكم في المستخدمين والمدونات وكل شيء على الموقع.'
  },
  {
    title: 'Modabook App',
    image: '13.png',
    description: 'This website is like facebook, made with NextJS allowing registered users to add, save, like posts and search users and alot more features.',
    link: 'https://modabook.vercel.app/',
    ar_title: 'موقع شبيه فيسبوك',
    ar_description: 'هذا الموقع مشابه لفيسبوك، تم بناؤه باستخدام NextJS مما يتيح للمستخدمين المسجلين إضافة، حفظ، إعجاب المنشورات والبحث عن المستخدمين والكثير من الميزات الأخرى.'
  },
  {
    title: 'Design Template',
    image: '3.jpg',
    description: 'This is a Big Design i Made With HTML And CSS And Some Javascript That has Cool Animations and Styles.',
    link: 'https://modapro1.github.io/project_1',
    ar_title: 'قالب التصميم',
    ar_description: 'هذا هو تصميم كبير قمت بإنشائه باستخدام HTML و CSS وبعض الجافا سكربت الذي يحتوي على تحريكات وأنماط رائعة.'
  },
  {
    title: 'Personal Portofolio',
    image: '11.png',
    description: 'My old personal portofolio made with VueJS, It has light and dark mode, animation on scroll and more.',
    link: 'https://modapro1.github.io/personal_portofolio_production/',
    ar_title: 'السيرة الذاتية الشخصية',
    ar_description: 'سيرتي الشخصية القديمة التي تم إنشاؤها باستخدام VueJS، تحتوي على وضعين فاتح وداكن، تحريك عند التمرير والمزيد.'
  },
  {
    title: 'Arabic Restaurant',
    image: '4.jpg',
    description: 'Restaurant template in arabic language has just dummy data inside it, made with html, css and javascript.',
    link: 'https://modapro1.github.io/project_3',
    ar_title: 'مطعم عربي',
    ar_description: 'قالب مطعم باللغة العربية يحتوي فقط على بيانات وهمية، تم إنشاؤه باستخدام HTML و CSS و JavaScript.'
  },
  {
    title: 'React Design',
    image: '12.png',
    description: 'Simple website made with react js, html and css with dummy data inside it.',
    link: 'https://modapro1.github.io/react-project/',
    ar_title: 'تصميم React',
    ar_description: 'موقع ويب بسيط تم إنشاؤه باستخدام React.js و HTML و CSS مع بيانات وهمية في الداخل.'
  },
  {
    title: 'Kasper Template',
    image: '6.jpg',
    description: 'Kasper Template made with HTML, CSS and javascript.',
    link: 'https://modapro1.github.io/project_2',
    ar_title: 'قالب كاسبر',
    ar_description: 'قالب كاسبر تم إنشاؤه باستخدام HTML و CSS و JavaScript.'
  },
  {
    title: 'Creative Agency',
    image: '7.jpg',
    description: 'Creative Agency template made with HTML, CSS and Javascript.',
    link: 'https://modapro1.github.io/project_4/',
    ar_title: 'وكالة إبداعية',
    ar_description: 'قالب وكالة إبداعية تم إنشاؤه باستخدام HTML و CSS و JavaScript.'
  },
  {
    title: 'Personal Portofolio',
    image: '8.jpg',
    description: 'My old personal portofolio website made with HTML, CSS and Javascript.',
    link: 'https://modapro1.github.io/personal_portofolio/',
    ar_title: 'السيرة الذاتية الشخصية',
    ar_description: 'موقعي القديم للسيرة الذاتية تم إنشاؤه باستخدام HTML و CSS و JavaScript.'
  }
];

export default projects;
