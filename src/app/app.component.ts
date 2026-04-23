import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})





export class AppComponent implements AfterViewInit {

  activeSection = 'hero';

  profile = {
    name: 'Saif Ali',
    role: 'Senior Frontend Developer',
    location: 'Pune, India',
    email: 'warsivorlox@gmail.com',
    phone: '09370084757',
    linkedin: 'linkedin.com/in/saif-ali-8019a811b',
    summary: `Frontend Developer with 5 years of experience in Angular. Specialized in building scalable, high-performance web applications using Angular, TypeScript, RxJS, HTML, and CSS/SCSS. Strong experience in developing reusable UI components and integrating REST APIs. Proven ability to optimize performance, enhance user experience, and deliver enterprise-grade SaaS products.`
  };

  skillGroups = [
    {
      title: 'Frontend Technologies',
      items: 'Angular Framework, TypeScript, JavaScript (ES6+), HTML5, CSS/SCSS'
    },
    {
      title: 'UI Development',
      items: 'Responsive Design, Cross-browser Compatibility, Component-based Architecture, UI Optimization'
    },
    {
      title: 'Frameworks & Libraries',
      items: 'Angular, RxJS, Angular Material, Bootstrap'
    },
    {
      title: 'Tools',
      items: 'Jira, Trello, Git, Figma, VS Code, Cursor, Codex'
    },
    {
      title: 'Concepts',
      items: 'REST API Integration, State Management, Performance Optimization, Reusable Components'
    }
  ];

  experience = [
    {
      company: 'Tradexa Technologies',
      role: 'Senior Frontend Developer (Angular)',
      duration: 'Apr 2020 – Present',
      points: [
        'Developed and maintained scalable Angular applications for SaaS platforms including warehouse management systems, healthcare dashboards, and analytics/reporting tools.',
        'Led frontend development for data-driven applications, implementing complex UI components such as tables, dashboards, and dynamic forms.',
        'Improved application performance by reducing unnecessary API calls, optimizing change detection, and enhancing UI rendering efficiency.',
        'Built and optimized Reactive Forms for complex workflows including inventory management and healthcare data systems.',
        'Collaborated closely with backend, UI/UX, and QA teams to deliver high-quality, production-ready features.',
        'Contributed to code reviews and followed best practices for scalable frontend development.'
      ]
    },
    {
      company: 'Katalyst Technologies',
      role: 'Frontend Developer',
      duration: '2019 – 2020',
      points: [
        'Developed responsive web applications using HTML, CSS, JavaScript, and basic exposure to Angular.',
        'Worked on UI implementation based on client requirements and design specifications.',
        'Collaborated with backend and QA teams to ensure seamless integration and bug-free delivery.',
        'Gained hands-on experience in Agile development and team collaboration.'
      ]
    },
    {
      company: 'Varahi Technologies',
      role: 'Web Designer / UI Developer',
      duration: '2018 – 2019',
      points: [
        'Designed and developed responsive web interfaces using HTML, CSS, JavaScript.',
        'Created visually appealing UI layouts aligned with user experience principles.',
        'Improved cross-browser compatibility and UI consistency across multiple projects.',
        'Worked closely with UI designers to translate design concepts into functional UI.'
      ]
    }
  ];

  projects = [
    {
      name: 'Hyper Inventory',
      desc: 'Warehouse & Inventory Management',
      role: 'Frontend Developer',
      points: [
        'Developed a warehouse and inventory management system as a SaaS platform for managing products and stock levels across multiple warehouses.',
        'Implemented CRUD operations for inventory entities such as products, categories, stock entries, and warehouse records.',
        'Built data-driven table components with features like pagination, sorting, and dynamic filtering for large datasets.',
        'Integrated REST APIs for seamless data communication between frontend and backend services.',
        'Developed Reactive Forms for inventory creation and updates with validations and error handling.',
        'Implemented filter-based table views to enable quick search and data segmentation.',
        'Applied basic state management techniques (service-based state handling) to maintain data consistency across components.',
        'Created reusable and modular UI components to improve scalability and reduce development effort.',
        'Optimized UI performance for handling large datasets efficiently.'
      ]
    },
    {
      name: 'Medvise',
      desc: 'Healthcare Monitoring Platform',
      role: 'Frontend Developer',
      points: [
        'Developed responsive dashboards for health monitoring and data visualization.',
        'Integrated APIs for displaying patient vitals, alerts, and activity tracking.',
        'Built reusable UI components for healthcare workflows and data visualization.',
        'Ensured usability and accessibility for medical users.',
        'Collaborated with cross-functional teams to ensure accurate and reliable data representation.'
      ]
    },
    {
      name: 'HyperAds',
      desc: 'Ad Campaign Reporting',
      role: 'Frontend Developer',
      points: [
        'Developed a campaign reporting dashboard to visualize ad performance metrics across multiple campaigns.',
        'Optimized dashboard performance by minimizing re-renders and improving data handling efficiency.',
        'Implemented data-driven dashboards with dynamic updates based on API responses.',
        'Integrated REST APIs to fetch and display campaign analytics in real time.',
        'Designed and developed tabular reports with features like pagination, sorting, and filtering for campaign data.',
        'Created reusable UI components for dashboards and reporting modules to ensure consistency and scalability.',
        'Implemented basic state handling to manage dashboard data across components.'
      ]
    }
  ];

  education = [
    'MCA (Master’s Degree) – Bharati Vidyapeeth University',
    'BCA (Bachelor’s Degree) – Invertis University',
    'Web Development Certification – NIIT'
  ];

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}