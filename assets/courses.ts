export enum categories {
  "Angular" = "Angular",
  "Javascript" = "Javascript",
  "Typescript" = "Typescript",
  "nodeJs" = "nodeJs",
  "FrontEnd" = "FrontEnd",
  "BackEnd" = "BackEnd",
  "HabilidadesBlandas" = "HabilidadesBlandas",
  "Ingles" = "Ingles",
  "BlockChain" = "BlockChain"
}
export interface course {
  date: string,
  name: string,
  place: string,
  url: string,
  categories: categories[]
}

export const courses: course[] = [
  {
    date: "2020 6",
    name: "Front - End Web UI Frameworks and Tools: Bootstrap 4",
    place: "The Hong Kong University of Science and Technology",
    url: `https://www.coursera.org/account/accomplishments/certificate/N8BGTGBZJEG5`,
    categories: [categories.FrontEnd]
  },
  {
    date: "2020 7",
    name: "Front-End JavaScript Frameworks: Angular",
    place: "The Hong Kong University of Science and Technology",
    url: `https://coursera.org/share/983d88ada27cfba82207a3316733d2ec`,
    categories: [categories.FrontEnd, categories.Angular]
  },

  {
    date: "2020 6",
    name: "Programming Foundations with JavaScript, HTML and CSS(con Honores)",
    place: "Duke University",
    url: `https://www.coursera.org/account/accomplishments/certificate/CZF6GYUWTCPU`,
    categories: [categories.FrontEnd]
  },

  {
    date: "2020 6",
    name: "Modern JavaScript ES6 Basics",
    place: "Coursera Project Network",
    url: `https://www.coursera.org/account/accomplishments/certificate/62LS8WWPB25U`,
    categories: [categories.Javascript, categories.FrontEnd, categories.Angular]
  },

  {
    date: "2020 7",
    name: "Blockchain Basics",
    place: "University at Buffalo, The State University of New York",
    url: `https://www.coursera.org/account/accomplishments/certificate/85B9KXDVYVET`,
    categories: [categories.BlockChain]
  },

  {
    date: "2020 6",
    name: "Write Professional Emails in English",
    place: "https://www.coursera.org/account/accomplishments/certificate/647TACURJER5",
    url: `Georgia Institute of Technology`,
    categories: [categories.Ingles, categories.HabilidadesBlandas]
  },
  {
    date: `2022 2`,
    name: `Curso de Asincronismo con JavaScript 2019`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/1789-asincronismo-js/diploma/detalle/`,
    categories: [categories.Angular, categories.Javascript]

  },
  {
    date: `2022 2`,
    name: `Curso de Closures y Scope en JavaScript 2020`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/1789-asincronismo-js/diploma/detalle`,
    categories: [categories.Angular, categories.Javascript]

  },
  {
    date: `2022 12`,
    name: `Curso de ECMAScript 6 +`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/1815-ecmascript-6/diploma/detalle/`,
    categories: [categories.Javascript, categories.FrontEnd, categories.BackEnd]

  },
  {
    date: `2022 2`,
    name: `Curso de Gestión de Dependencias y Paquetes con NPM`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/1763-npm-js/diploma/detalle/`,
    categories: [categories.BackEnd, categories.FrontEnd]

  },
  {
    date: `2021 12`,
    name: `Curso Básico de JavaScript`,
    place: `platzi `,
    url: `https://platzi.com/p/cdmottah/curso/1814-basico-javascript/diploma/detalle/`,
    categories: [categories.Javascript, categories.BackEnd, categories.FrontEnd]

  },
  {
    date: `2022 4`,
    name: `Curso de Angular: Componentes y Servicios`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/2486-angular-componentes/diploma/detalle/`,
    categories: [categories.Angular, categories.FrontEnd]

  },
  {
    date: `2022 8`,
    name: `Curso de Angular Forms: Creación y Optimización de Formularios Web`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/2027-angular-forms/diploma/detalle/`,
    categories: [categories.Angular, categories.FrontEnd]

  },
  {
    date: `2022 8`,
    name: `Curso de Angular Router: Lazy Loading y Programación Modular`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/2487-angular-modular/diploma/detalle/`,
    categories: [categories.Angular, categories.FrontEnd]

  },
  {
    date: `2023 2`,
    name: `Curso de Autenticación con Angular`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/4460-angular-autenticacion/diploma/detalle/`,
    categories: [categories.Angular, categories.FrontEnd]

  },
  {
    date: `2023 3`,
    name: `Backend con Node.js: API REST con Express.js`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/2485-backend-nodejs/diploma/detalle/`,
    categories: [categories.BackEnd, categories.nodeJs]

  },
  {
    date: `2022 4`,
    name: `Curso de Consumo de APIs REST con Angular`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/2495-angular-apis/diploma/detalle/`,
    categories: [categories.Angular, categories.FrontEnd]

  },
  {
    date: `2023 3`,
    name: `ECMAScript: Historia y Versiones de JavaScript(update)`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/3504-ecmascript-6/diploma/detalle/`,
    categories: [categories.Javascript, categories.Angular, categories.FrontEnd, categories.BackEnd]

  },
  {
    date: `2021 12`,
    name: `Curso de Frontend Developer`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/2467-frontend-developer/diploma/detalle/`,
    categories: [categories.FrontEnd]

  },
  {
    date: `2022 4`,
    name: `Fundamentos de angular`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/2478-angular/diploma/detalle/`,
    categories: [categories.Angular, categories.FrontEnd]

  },
  {
    date: `2023 3`,
    name: `fundamentos de node.js`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/1759-fundamentos-node/diploma/detalle/`,
    categories: [categories.nodeJs, categories.BackEnd]

  },
  {
    date: `2023 2`,
    name: `Curso de Maquetación con Angular CDK y Tailwind CSS`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/4459-angular-tailwind/diploma/detalle/`,
    categories: [categories.Angular]

  },
  {
    date: `2023 1`,
    name: `Curso de Programación Reactiva con RxJS`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/3233-programacion-reactiva-rxjs/diploma/detalle/`,
    categories: [categories.Javascript, categories.BackEnd, categories.FrontEnd, categories.Angular, categories.nodeJs]

  },
  {
    date: `2023 1`,
    name: `Curso de Rendimiento en Angular`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/1730-angular-performance/diploma/detalle/`,
    categories: [categories.Angular, categories.FrontEnd]

  },
  {
    date: `2022 3`,
    name: `Fundamentos de typescript`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/1869-typescript-2020/diploma/detalle/`,
    categories: [categories.Typescript, categories.Angular, categories.FrontEnd, categories.BackEnd, categories.nodeJs]

  },
  {
    date: `2021 12`,
    name: `Curso Práctico de Frontend Developer`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/2477-frontend-developer-practico/diploma/detalle/`,
    categories: [categories.FrontEnd]

  },
  {
    date: `2021 12`,
    name: `Curso Práctico de JavaScript`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/2327-javascript-practico-2021/diploma/detalle/`,
    categories: [categories.Javascript, categories.FrontEnd, categories.BackEnd]

  },
  {
    date: `2022 3`,
    name: `Curso Profesional de JavaScript`,
    place: `platzi`,
    url: `https://platzi.com/p/cdmottah/curso/1815-ecmascript-6/diploma/detalle/`,
    categories: [categories.Javascript, categories.FrontEnd, categories.BackEnd]

  },
]

export const single: () => { name: categories, value: string }[] = () => {
  const selectedCategories = []
  for (const category in categories) {
    const categoryValue = categories[category as keyof typeof categories];
    const selectedCategory = {
      name: categoryValue,
      value: courses.reduce((current, course) => {
        if (course.categories.includes(categoryValue)) {
          return current + 1
        }
        return current
      }, 0) + ""
    }
    selectedCategories.push(selectedCategory)
  }
  return selectedCategories.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
}



