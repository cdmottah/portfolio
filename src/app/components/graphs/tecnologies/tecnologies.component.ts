import { Component } from '@angular/core';

import { course, single, courses, categories } from '@assets/courses';

@Component({
  selector: 'graphs-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss']
})
export class TecnologiesComponent {
  single!: any[];
  courses: course[] = []

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Tecnología';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad de Cursos';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {

    this.single = single();

  }

  onSelect(event: { name: string, value: string, label: string }) {
    this.courses = courses.filter((res) => res.categories.includes(event.name as categories)).sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getMilliseconds() - dateA.getMilliseconds()
    });

    console.log(this.courses.map(res=>new Date(res.date)));

  }
}
