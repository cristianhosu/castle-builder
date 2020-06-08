import {
  Component,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const apps = [
  {
    appName: 'story-book',
    tagName: 'story-book-home',
    files: ['http://localhost:4201/story-book.js'],
    loaded: false,
  },
  {
    appName: 'castle-baracks',
    tagName: 'castle-baracks',
    files: [],
    loaded: false,
  },
  {
    appName: 'castle',
    tagName: 'castle',
    files: [],
    loaded: false,
  },
  {
    appName: 'castle-stables',
    tagName: 'castle-stables',
    files: [
      'http://localhost:4202/runtime-es2015.js',
      'http://localhost:4202/polyfills-es2015.js',
      'http://localhost:4202/main-es2015.js',
      'http://localhost:4202/styles.css',
    ],
    loaded: false,
  },
  {
    appName: 'baracks',
    tagName: 'castle-baracks',
    files: [],
    loaded: false,
  },
];

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements AfterViewInit {
  @ViewChildren('appContainer') appContainer: QueryList<ElementRef>;
  appName: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngAfterViewInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.appName = data.get('appName');
      if (this.appContainer.length === 1) {
        this.loadApp(this.appName)
          .then((app) => this.createTag(app.tagName, this.appContainer.first))
          .catch((err) => console.log(err));
      }
    });
    this.appContainer.changes.subscribe((items: QueryList<ElementRef>) => {
      if (items.length === 1 && this.appName) {
        this.loadApp(this.appName);
      }
    });
  }

  loadApp(appName: string) {
    const promises = [];
    const app = apps.find((f) => f.appName === appName);
    if (!app.loaded) {
      app.files.forEach((script) => {
        promises.push(this.loadScript(script));
      });

      return Promise.all(promises).then(
        (_) => {
          app.loaded = true;
          return app;
        },
        (err) => {
          app.loaded = false;
          throw err;
        }
      );
    } else {
      return Promise.resolve(app);
    }
  }

  createTag(tag: string, element: ElementRef) {
    const childElement = document.createElement(tag);
    // childElement.innerText = appName;
    if (element.nativeElement.firstChild) {
      element.nativeElement.removeChild(element.nativeElement.firstChild);
    }
    element.nativeElement.appendChild(childElement);
  }

  loadScript(src: string) {
    return new Promise((resolve, reject) => {
      if (src.endsWith('.js')) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = src;
        script.crossOrigin = 'anonymous';
        script.onload = () => {
          resolve({ script: src, loaded: true, status: 'Loaded' });
        };
        script.onerror = (error: any) =>
          resolve({ script: src, loaded: false, status: error });
        document.getElementsByTagName('head')[0].appendChild(script);
      } else if (src.endsWith('.css')) {
        const style = document.createElement('link');
        style.href = src;
        document.getElementsByTagName('head')[0].appendChild(style);
        resolve({ script: src, loaded: true, status: 'Loaded' });
      }
    });
  }
}
